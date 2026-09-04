import "server-only";

type StrapiPage<T> = {
  data?: T[];
  meta?: {
    pagination?: {
      page?: number;
      pageCount?: number;
    };
  };
};

// Die Serverless-Funktion hat selbst ein Zeitlimit. Deshalb zählt nicht, wie lange eine
// einzelne Seite dauern darf, sondern wie lange das Laden insgesamt dauern darf: lieber
// nach dem Budget mit einem Teilbestand aufhören, als die Funktion abbrechen zu lassen
// und mit leeren Händen dazustehen.
const GESAMT_BUDGET_MS = 7_000;
const SEITEN_TIMEOUT_MS = 4_000;

export async function fetchAllStrapiPages<T>(
  baseUrl: string,
  pageSize = 100,
): Promise<T[]> {
  const items: T[] = [];
  const beginn = Date.now();
  let page = 1;
  let pageCount = 1;

  do {
    const restBudget = GESAMT_BUDGET_MS - (Date.now() - beginn);
    if (restBudget <= 0) {
      console.error(
        `Strapi: Zeitbudget nach Seite ${page - 1} aufgebraucht, ${items.length} Einträge geladen`,
      );
      break;
    }

    const separator = baseUrl.includes("?") ? "&" : "?";
    const url = `${baseUrl}${separator}pagination[pageSize]=${pageSize}&pagination[page]=${page}`;

    try {
      const response = await fetch(url, {
        cache: "no-store",
        signal: AbortSignal.timeout(Math.min(SEITEN_TIMEOUT_MS, restBudget)),
      });

      if (!response.ok) throw new Error(`Strapi request failed: ${response.status}`);

      const payload = (await response.json()) as StrapiPage<T>;
      items.push(...(payload.data ?? []));
      pageCount = payload.meta?.pagination?.pageCount ?? page;
      page += 1;
    } catch (error) {
      // Eine hängende Seite darf die bereits geladenen nicht mitreißen.
      console.error(`Strapi-Seite ${page} nicht geladen (${url}):`, error);
      break;
    }
  } while (page <= pageCount);

  return items;
}
