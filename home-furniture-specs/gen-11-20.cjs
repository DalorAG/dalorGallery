const fs = require('fs');
const F = (key, label, placeholder, required = false, inputType = 'text') => ({ key, label, inputType, placeholder, required });
const IMG = ph => F('image_description', 'What should be the main subject?', ph, false, 'textarea');
const out = [];
const t = (o) => out.push(o);

t({
 slug: 'home-furniture-extendable-oak-dining-table',
 title: 'Extendable Oak Dining Table',
 description: 'An extendable oak dining table with a small diagram showing both lengths.',
 searchKeywords: ['dining table','extendable table','solid oak','kitchen table','diagram','furniture ad','scandinavian','tables','seats eight','home furniture'],
 prompt: `A clear, practical advertisement for an extendable dining table, vertical 4:5.

A bright room with {{wall_color}} walls and a wide plank floor, nothing in it but the table. The table stands centred and is shot from a standing height with a 35mm lens, so you look slightly down onto the top and can read the whole surface. The top is {{table_wood}} with the grain running lengthways, an open knot near one end and a fine scratch catching the light; the legs are {{leg_style}}. Daylight comes flat from a large window on the left, cool and even, and the table throws a soft grey shadow to the right.

Text layout: across the top in a plain sans, "{{headline_text}}". Under the table a thin technical drawing shows the same table twice, closed and extended, with the two lengths labelled "{{length_labels}}" and a small arrow between them. Upper right corner "{{brand_name}}". Lower right, one short line reading "{{detail_line}}", and beside it "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Daylight left cool, real timber with knots and grain, no honey coloured varnish glow.

{{image_description}}`,
 fields: [
  IMG('an extendable solid oak dining table alone in a bright room'),
  F('brand_name', 'Brand name', 'HALDEN', true),
  F('headline_text', 'Headline', 'Six on a Tuesday. Ten on a Sunday.', true),
  F('length_labels', 'Length labels', '180 cm closed / 260 cm extended'),
  F('table_wood', 'Table wood', 'white oiled solid oak'),
  F('leg_style', 'Leg style', 'tapered solid oak legs set slightly inboard'),
  F('wall_color', 'Wall colour', 'chalk white'),
  F('detail_line', 'Detail line', 'Butterfly leaf, no loose parts to store'),
  F('price_text', 'Price line', '1290')
 ]
});

t({
 slug: 'home-furniture-marble-coffee-table-plum',
 title: 'Marble Coffee Table Plum',
 description: 'A round marble and brass coffee table against a deep plum backdrop, lit from one side.',
 searchKeywords: ['coffee table','marble table','brass base','round table','plum','living room','tables','furniture ad','luxury','home furniture'],
 prompt: `A rich, low key advertisement for a round marble coffee table, vertical 4:5.

The backdrop is a hung canvas painted {{background_color}}, its folds still faintly visible along the bottom. The table sits low in the frame on a {{floor_material}} floor, photographed from just above table height with a 70mm lens so the top reads as a full ellipse. The top is {{stone_type}}, its veining running off the edge, one small honed patch where the polish is duller; the base is {{base_material}}. A single large softbox at the right rakes across the stone and picks out every vein, leaving the left side of the base almost black. A short glass and a folded newspaper sit on the top, slightly off centre.

Text layout: the headline "{{headline_text}}" runs across the upper area in a high contrast serif with a very large first line and a smaller second line. To the right of the table, a narrow vertical strip of small caps reads "{{spec_lines}}". Bottom centre "{{brand_name}}" with a hairline rule above it and "{{cta_text}}" set small underneath.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real stone with irregular veining, warm practical light, no mirror finish render.

{{image_description}}`,
 fields: [
  IMG('a round marble coffee table with a brass base against a plum backdrop'),
  F('brand_name', 'Brand name', 'VOSSLER', true),
  F('headline_text', 'Headline', 'ONE STONE. ONE TABLE.', true),
  F('stone_type', 'Stone', 'green Guatemala marble'),
  F('base_material', 'Base material', 'antique brushed brass'),
  F('background_color', 'Backdrop colour', 'deep plum'),
  F('floor_material', 'Floor', 'dark stained oak boards'),
  F('spec_lines', 'Spec lines', '90 CM ACROSS / 38 KG / EVERY SLAB DIFFERENT'),
  F('cta_text', 'Call to action', 'Book a viewing')
 ]
});

t({
 slug: 'home-furniture-standing-desk-two-heights',
 title: 'Standing Desk Two Heights',
 description: 'A height adjustable desk against a forest green wall with a ghosted second position above it.',
 searchKeywords: ['standing desk','height adjustable','home office','desk','forest green','double exposure','tables','furniture ad','sit stand','home furniture'],
 prompt: `An advertisement for a height adjustable desk that shows both of its positions at once, vertical 4:5.

A home office corner with a wall painted {{wall_color}} and a grey speckled vinyl floor. The desk stands square to the camera, shot straight on with a 40mm lens. The top is {{desk_top}}; the frame is {{frame_finish}} with a visible cable tray underneath and one cable hanging loose over the back edge. On the top sit a lamp, a mug and a stack of paper, all slightly out of alignment. The desk appears twice in the same frame: solid at sitting height, and again at standing height as a soft semi transparent double exposure, the two overlapping in the middle. Warm side light from a window at the left, cool ambient from the room, a faint reflection in the desk surface.

Text layout: "{{headline_text}}" runs across the top in a medium weight sans. A slim vertical measuring scale sits along the right edge with two marks labelled "{{height_labels}}". Bottom left "{{brand_name}}" over the line "{{detail_line}}"; bottom right a small solid button reading "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Ordinary room light, real desk clutter, no showroom perfection.

{{image_description}}`,
 fields: [
  IMG('a height adjustable desk shown at two heights in one frame'),
  F('brand_name', 'Brand name', 'TARNOW', true),
  F('headline_text', 'Headline', 'Both halves of the day', true),
  F('height_labels', 'Height marks', '72 cm / 118 cm'),
  F('desk_top', 'Desk top', 'linoleum in deep blue with an oak edge'),
  F('frame_finish', 'Frame finish', 'matt black steel'),
  F('wall_color', 'Wall colour', 'forest green'),
  F('detail_line', 'Detail line', 'Whisper motor, two memory positions'),
  F('cta_text', 'Button text', 'Configure yours')
 ]
});

t({
 slug: 'home-furniture-nesting-side-tables-trio',
 title: 'Nesting Side Tables Trio',
 description: 'Three nesting side tables set apart on a pale ground and numbered like a catalogue page.',
 searchKeywords: ['side table','nesting tables','set of three','catalogue layout','numbered','tables','furniture ad','accent table','colour options','home furniture'],
 prompt: `A catalogue style advertisement for a set of three nesting side tables, vertical 4:5.

A shallow set with a seamless {{background_color}} sweep. The three tables have been pulled apart and stand in a loose diagonal from lower left to upper right, each one photographed from the same slightly raised angle. They are the same shape in three sizes, tops in {{top_material}} finished in {{colour_names}}, all three on {{leg_material}} legs. One of them carries a small chip on the rim, left in. Soft overhead light with a second light low from the front, so each table has its own short shadow and none of them merge.

Text layout: beside each table a small circled number 01, 02, 03, and under each number two lines giving its diameter and colour, reading "{{table_specs}}". The headline "{{headline_text}}" sits across the top left in a light grotesque. Upper right, small, "{{brand_name}}". Bottom edge, a full width thin bar containing "{{footer_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Even product lighting from real heads, matt painted surfaces with faint brush texture, no glow.

{{image_description}}`,
 fields: [
  IMG('three nesting side tables of different sizes arranged on a pale sweep'),
  F('brand_name', 'Brand name', 'ODDMARK', true),
  F('headline_text', 'Headline', 'Three tables that live inside each other', true),
  F('table_specs', 'Table specs', '52 cm terracotta / 44 cm ink blue / 36 cm bottle green'),
  F('colour_names', 'Colours', 'terracotta, ink blue and bottle green'),
  F('top_material', 'Top material', 'lacquered MDF'),
  F('leg_material', 'Legs', 'natural beech'),
  F('background_color', 'Background', 'pale grey'),
  F('footer_line', 'Footer line', 'Sold as a set of three - free delivery')
 ]
});

t({
 slug: 'home-furniture-terrazzo-console-hallway',
 title: 'Terrazzo Console Hallway',
 description: 'A slim terrazzo topped console table in a dusty pink hallway with a long low sun.',
 searchKeywords: ['console table','hallway furniture','terrazzo','entryway','dusty pink','tables','narrow table','furniture ad','sunlight','home furniture'],
 prompt: `A calm advertisement for a slim hallway console table, vertical 4:5.

A narrow hallway with walls in {{wall_color}} and a floor of {{floor_material}}. The console stands against the left wall, seen almost in profile from a low camera position with a 28mm lens so the corridor stretches away behind it. The top is {{top_material}}, thin and slightly overhanging; the frame is {{frame_material}}. On the top lie a set of keys, an open envelope and a small dish, arranged the way somebody actually dropped them. Low late sun comes down the corridor from the far end and throws the long shadow of the console legs across the floor towards the camera; the wall behind is half in shade.

Text layout: the headline "{{headline_text}}" sits in the upper right in a light serif, set narrow and well clear of the console. Below it a single line of small type reading "{{subline_text}}". Bottom left "{{brand_name}}" set small, with "{{detail_line}}" under it in even smaller type.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real low sun with a warm cast and long shadows, dust visible in the light, plaster with slight unevenness.

{{image_description}}`,
 fields: [
  IMG('a slim terrazzo topped console table in a hallway with long low sun'),
  F('brand_name', 'Brand name', 'CALDERA', true),
  F('headline_text', 'Headline', 'The first thing you put down', true),
  F('subline_text', 'Subline', 'Twenty eight centimetres deep. It fits where nothing else does.'),
  F('top_material', 'Top material', 'pink flecked terrazzo'),
  F('frame_material', 'Frame material', 'powder coated steel in cream'),
  F('wall_color', 'Wall colour', 'dusty pink'),
  F('floor_material', 'Floor', 'polished concrete'),
  F('detail_line', 'Detail line', 'Also as a pair')
 ]
});

t({
 slug: 'home-furniture-glass-steel-table-loft',
 title: 'Glass Steel Table Loft',
 description: 'A glass and blackened steel dining table in a raw loft, shot from a high angle.',
 searchKeywords: ['dining table','glass table','steel frame','industrial','loft','tables','furniture ad','minimal','high angle','home furniture'],
 prompt: `An industrial advertisement for a glass topped dining table, vertical 4:5.

A raw loft: {{wall_color}} concrete walls, a scuffed screed floor, tall factory windows out of frame on the right. The table stands under the windows and is shot from high up, almost from above, with a 24mm lens, so the frame reads as a drawing through the glass. The top is {{top_material}} with visible polished edges and a couple of fingerprints; the base is {{frame_material}}, welds ground but not hidden. Hard grey daylight comes in sideways and prints the shadow of the frame onto the floor twice, once through the glass and once as a solid line.

Text layout: the headline "{{headline_text}}" runs vertically up the left edge in narrow condensed capitals. In the upper right, a compact block of four short specification lines reading "{{spec_lines}}". Bottom centre "{{brand_name}}" small and letterspaced. Directly beneath it a single word, "{{cta_text}}", underlined.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Overcast industrial daylight, dust and scuffs on the floor, no shine added to the glass.

{{image_description}}`,
 fields: [
  IMG('a glass topped dining table with a blackened steel frame in a raw loft'),
  F('brand_name', 'Brand name', 'GRAUWERK', true),
  F('headline_text', 'Headline', 'NOTHING TO HIDE', true),
  F('spec_lines', 'Spec lines', '12 mm float glass / hand welded frame / 200 by 90 cm / 61 kg'),
  F('top_material', 'Table top', '12 mm clear float glass'),
  F('frame_material', 'Frame material', 'blackened mild steel'),
  F('wall_color', 'Wall colour', 'raw grey'),
  F('cta_text', 'Call to action', 'Enquire')
 ]
});

t({
 slug: 'home-furniture-walnut-desk-grain-inset',
 title: 'Walnut Desk Grain Inset',
 description: 'A solid walnut writing desk with a circular macro inset showing the grain up close.',
 searchKeywords: ['writing desk','walnut','wood grain','macro inset','study','tables','furniture ad','solid wood','craft','home furniture'],
 prompt: `A craft focused advertisement for a solid wood writing desk, vertical 4:5.

A study with a wall painted {{wall_color}} and a worn pine board floor. The desk stands three quarters on, slightly left of centre, shot at chest height with a 50mm lens. It is made from {{desk_wood}} with two drawers, {{hardware_finish}} pulls, and a top that shows the grain running the full length plus one shallow ring where a cup has stood. A brass lamp on the corner is switched on; the rest of the light is grey afternoon daylight from the side, and the two colours meet across the top.

To the right, overlapping the edge of the desk, a circular inset shows a macro photograph of the same grain and the chamfered front edge, sharp enough to see the pores in the timber.

Text layout: across the top, "{{headline_text}}" in a serif with a long first line. Under the circular inset, one short caption reading "{{inset_caption}}". Bottom left "{{brand_name}}", and along the bottom edge a thin rule with "{{footer_line}}" and "{{price_text}}" at either end.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Mixed daylight and lamp light left unbalanced, real timber pores and marks, no uniform varnish shine.

{{image_description}}`,
 fields: [
  IMG('a solid walnut writing desk with a macro inset of its grain'),
  F('brand_name', 'Brand name', 'ELLINGSON', true),
  F('headline_text', 'Headline', 'The grain decides where the drawer goes', true),
  F('inset_caption', 'Inset caption', 'One board, one desk'),
  F('desk_wood', 'Desk wood', 'American black walnut'),
  F('hardware_finish', 'Hardware finish', 'unlacquered brass'),
  F('wall_color', 'Wall colour', 'deep ink blue'),
  F('footer_line', 'Footer line', 'Built to order in eleven weeks'),
  F('price_text', 'Price line', '1740')
 ]
});

t({
 slug: 'home-furniture-steel-oak-shelving-unit',
 title: 'Steel Oak Shelving Unit',
 description: 'An open shelving unit against a white gallery wall with specification chips along the bottom.',
 searchKeywords: ['shelving','bookcase','open shelf','steel and oak','storage','furniture ad','modular','spec chips','minimal','home furniture'],
 prompt: `A clean advertisement for an open shelving unit, vertical 4:5.

A white gallery wall and a pale ash board floor, nothing else in the room. The unit stands square on, shot straight from the front with a 50mm lens so the uprights stay vertical. The frame is {{frame_material}}, the shelves {{shelf_material}}. The shelves are only half filled - a lean of books, two ceramic pots, a folded blanket, one empty bay left deliberately bare - and one book has been pushed in crooked. A big soft light from the front left gives the frame a thin highlight along each upright and drops a light shadow to the right.

Text layout: the headline "{{headline_text}}" sits top left in a medium sans, wrapping narrow with its continuation indented. Down the right margin, a vertical list of the bay heights reading "{{bay_labels}}". Along the bottom, a row of four small rounded chips carrying "{{spec_chips}}". Top right corner "{{brand_name}}". One thin {{accent_color}} line points at a shelf bracket with the note "{{callout_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real softbox light, powder coat with a slightly uneven sheen, honest shadow under the bottom shelf.

{{image_description}}`,
 fields: [
  IMG('an open steel and oak shelving unit half filled with books against a white wall'),
  F('brand_name', 'Brand name', 'STAVERN', true),
  F('headline_text', 'Headline', 'Add a bay whenever you need one', true),
  F('bay_labels', 'Bay labels', '35 cm / 35 cm / 45 cm / 45 cm'),
  F('spec_chips', 'Spec chips', 'NO TOOLS - 60 KG PER SHELF - 5 FINISHES - WALL ANCHOR'),
  F('frame_material', 'Frame material', 'powder coated steel in deep olive'),
  F('shelf_material', 'Shelf material', 'solid oak with a natural oil'),
  F('accent_color', 'Callout colour', 'signal orange'),
  F('callout_text', 'Callout', 'shelf clicks in')
 ]
});

t({
 slug: 'home-furniture-walnut-sideboard-mustard',
 title: 'Walnut Sideboard Mustard',
 description: 'A mid-century sideboard against a mustard wall, one door left open on purpose.',
 searchKeywords: ['sideboard','credenza','mid century','walnut','mustard','storage','furniture ad','dining room','retro','home furniture'],
 prompt: `A retro flavoured advertisement for a mid century sideboard, vertical 4:5.

A wall painted flat {{wall_color}} runs the full width behind, meeting a {{floor_material}} floor low in the frame. The sideboard sits centred, shot straight on and a little from the left with a 40mm lens. It is {{sideboard_wood}} on splayed solid beech legs, with {{handle_style}}; one of the doors stands open, showing shelves inside with a couple of records and a stacked set of bowls. On the top sit a ceramic jug and a folded newspaper, pushed to one side. A single warm key light from the upper left and a bounce from the right, so the wall gets a gentle gradient and the underside of the carcass falls into shadow.

Text layout: the headline "{{headline_text}}" is set across the wall above the piece in a wide geometric sans with tight spacing. To the right of the headline, a small circle badge carries "{{badge_text}}". Bottom left "{{brand_name}}" small; bottom right two lines reading "{{detail_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Warm tungsten key light left warm, real veneer figure, a slight sheen rather than a mirror.

{{image_description}}`,
 fields: [
  IMG('a mid century walnut sideboard with one door open against a mustard wall'),
  F('brand_name', 'Brand name', 'DEVERAUX', true),
  F('headline_text', 'Headline', 'PUT IT AWAY BEAUTIFULLY', true),
  F('badge_text', 'Badge text', 'MADE 1962. MADE AGAIN.'),
  F('sideboard_wood', 'Sideboard wood', 'figured walnut veneer'),
  F('handle_style', 'Handles', 'carved finger pulls, no metal'),
  F('wall_color', 'Wall colour', 'mustard yellow'),
  F('floor_material', 'Floor', 'herringbone parquet'),
  F('detail_line', 'Detail line', 'Three widths / Two depths')
 ]
});

t({
 slug: 'home-furniture-black-wardrobe-mirror-door',
 title: 'Black Wardrobe Mirror Door',
 description: 'A matt black wardrobe with one mirrored door reflecting part of the room back at the camera.',
 searchKeywords: ['wardrobe','closet','mirror door','matt black','bedroom storage','storage','furniture ad','reflection','minimal','home furniture'],
 prompt: `A cool, architectural advertisement for a tall wardrobe, vertical 4:5.

A bedroom stripped almost bare: {{wall_color}} walls, a {{floor_material}} floor, one window out of frame at the left. The wardrobe fills most of the height of the picture, shot straight on from slightly below with a 35mm lens so the doors read as flat planes. The carcass is {{carcass_finish}}; the right hand door is a full height mirror, and in it you see a slice of the room behind the camera - the corner of a bed, a curtain moving, no person. The left door stands open by a hand's width, showing a rail with three coats and a shelf above. Grey daylight, one cool highlight down the mirror edge, a soft shadow where the wardrobe meets the floor.

Text layout: the headline "{{headline_text}}" is set small and precise in the upper left corner, no larger than it needs to be. Directly beneath it a short paragraph of tiny type reading "{{body_text}}". Along the bottom, three measurements evenly spaced reading "{{dimension_line}}". Lower right corner "{{brand_name}}" with "{{cta_text}}" beneath it.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Overcast daylight, matt lacquer that absorbs rather than shines, a real reflection with slight distortion.

{{image_description}}`,
 fields: [
  IMG('a tall matt black wardrobe with one mirrored door reflecting the room'),
  F('brand_name', 'Brand name', 'NEUHOLM', true),
  F('headline_text', 'Headline', 'A wall that opens', true),
  F('body_text', 'Body text', 'Floor to ceiling, built to the millimetre, delivered in two panels that fit through a normal door.'),
  F('dimension_line', 'Dimensions', 'W 240 / D 62 / H 265'),
  F('carcass_finish', 'Carcass finish', 'matt black lacquer'),
  F('wall_color', 'Wall colour', 'cool pale grey'),
  F('floor_material', 'Floor', 'wide grey oak boards'),
  F('cta_text', 'Call to action', 'Measure with us')
 ]
});

fs.writeFileSync(__dirname + '/11-20.json', JSON.stringify(out, null, 1) + '\n');
console.log(out.length + ' Spezifikationen geschrieben');
