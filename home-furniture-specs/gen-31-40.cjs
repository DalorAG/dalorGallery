const fs = require('fs');
const F = (key, label, placeholder, required = false, inputType = 'text') => ({ key, label, inputType, placeholder, required });
const IMG = ph => F('image_description', 'What should be the main subject?', ph, false, 'textarea');
const out = [];
const t = (o) => out.push(o);

t({
 slug: 'home-furniture-canopy-bed-black-metal',
 title: 'Canopy Bed Black Metal',
 description: 'A slim black metal four poster bed standing free in a dark, almost empty room.',
 searchKeywords: ['canopy bed','four poster','black metal','bedroom','architectural','sleeping','furniture ad','minimal frame','dark interior','home furniture'],
 prompt: `A severe, architectural advertisement for a slim four poster bed, vertical 4:5.

A large empty room with walls in {{wall_color}} and a {{floor_material}} floor, one tall window at the left with no curtain. The bed stands well away from every wall, dead centre, shot straight on with a 28mm lens from just above mattress height, so the four uprights make a rectangle of thin lines against the room. The frame is {{frame_material}}, the tubes no thicker than a thumb, welds visible at the corners. The bedding is {{bedding_description}} and only half made. Late grey daylight from the window puts a soft rectangle on the floor and turns the frame into a silhouette on the shadow side.

Text layout: the headline "{{headline_text}}" is set inside the rectangle formed by the frame, centred, in a very light sans, letterspaced wide. Upper left corner "{{brand_name}}". Along the bottom edge, a thin line of type spread across the full width reading "{{footer_line}}". Bottom right, a short line reading "{{cta_text}}" with an arrow after it.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Flat overcast daylight, real welds and slight tube warp, no black that is pure and even.

{{image_description}}`,
 fields: [
  IMG('a slim black metal four poster bed standing free in a dark empty room'),
  F('brand_name', 'Brand name', 'KORVALD', true),
  F('headline_text', 'Headline', 'A ROOM INSIDE THE ROOM', true),
  F('frame_material', 'Frame material', 'matt black powder coated steel tube'),
  F('bedding_description', 'Bedding', 'heavy oatmeal linen with a rust wool throw'),
  F('wall_color', 'Wall colour', 'deep graphite'),
  F('floor_material', 'Floor', 'raw concrete screed'),
  F('footer_line', 'Footer line', 'Ships in four boxes. Two people, forty minutes.'),
  F('cta_text', 'Call to action', 'See it in three finishes')
 ]
});

t({
 slug: 'home-furniture-arc-floor-lamp-dark-room',
 title: 'Arc Floor Lamp Dark Room',
 description: 'An arc floor lamp reaching over a dark room, its pool of light the brightest thing in frame.',
 searchKeywords: ['floor lamp','arc lamp','lighting','dark room','light pool','lamp','furniture ad','living room','marble base','home furniture'],
 prompt: `A dramatic advertisement for an arc floor lamp, vertical 4:5.

A dark living room, walls in {{wall_color}}, everything else barely readable. The lamp enters from the lower right, its arm sweeping up and over to the left so the shade hangs near the centre of the frame; shot with a 35mm lens from a seated height. The base is {{base_material}}, the arm {{arm_material}}, the shade {{shade_style}}. The bulb is on and casts a hard circle of warm light onto the floor and across the arm of a sofa that is only half visible at the edge. Everything outside that circle drops into near black. A little haze in the air makes the beam faintly visible.

Text layout: the headline "{{headline_text}}" sits inside the dark upper left area in a light serif, set narrow. Small type under it reads "{{subline_text}}". Bottom left "{{brand_name}}". Bottom right, in the light pool itself so it reads dark on light, "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. One practical light source, warm colour left uncorrected, visible falloff and grain, no ambient fill.

{{image_description}}`,
 fields: [
  IMG('an arc floor lamp sweeping over a dark room with a hard pool of warm light'),
  F('brand_name', 'Brand name', 'ANSELM', true),
  F('headline_text', 'Headline', 'Reaches where the ceiling will not', true),
  F('subline_text', 'Subline', 'Two metre arm, dimmable to almost nothing.'),
  F('base_material', 'Base material', 'honed black granite'),
  F('arm_material', 'Arm material', 'brushed steel'),
  F('shade_style', 'Shade', 'a shallow spun aluminium dome in deep red inside'),
  F('wall_color', 'Wall colour', 'near black brown'),
  F('cta_text', 'Call to action', 'Switch on')
 ]
});

t({
 slug: 'home-furniture-pendant-cluster-dining',
 title: 'Pendant Cluster Dining',
 description: 'Three pendant lights hung at different heights over a dining table, seen from below.',
 searchKeywords: ['pendant light','ceiling light','cluster','dining lighting','glass shade','lamp','furniture ad','hanging lamp','green wall','home furniture'],
 prompt: `An advertisement for a cluster of three pendant lights, vertical 4:5.

A dining room with walls in {{wall_color}} and a dark timber ceiling. The camera stands at the end of the table, tilted upward with a 24mm lens, so the three pendants hang across the upper two thirds of the frame at three different heights and the table edge runs along the bottom. The shades are {{shade_material}} in {{shade_colour}}, suspended on {{cord_style}}. All three are lit; the bulbs are visible through the glass and flare gently. Below, the table top catches three overlapping circles of light and a wine glass throws a small bright caustic. The ceiling stays dark.

Text layout: the headline "{{headline_text}}" is placed between the pendants in the darker part of the ceiling, in a modern serif, interrupted by the middle cord. Along the left edge, running vertically, "{{brand_name}}". In the lower right, three short lines reading "{{spec_lines}}". Below them a small underlined "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real bulbs with genuine flare and warm colour, glass with slight bubbles, no evenly lit ceiling.

{{image_description}}`,
 fields: [
  IMG('three pendant lights hanging at different heights over a dining table'),
  F('brand_name', 'Brand name', 'FENWICK', true),
  F('headline_text', 'Headline', 'Hang them at three heights', true),
  F('shade_material', 'Shade material', 'mouth blown ribbed glass'),
  F('shade_colour', 'Shade colour', 'smoked amber'),
  F('cord_style', 'Cord style', 'braided textile cord with a brass ceiling rose'),
  F('wall_color', 'Wall colour', 'deep forest green'),
  F('spec_lines', 'Spec lines', 'E27 fitting / 3 m cord / dimmable'),
  F('cta_text', 'Call to action', 'Build a cluster')
 ]
});

t({
 slug: 'home-furniture-ribbed-glass-table-lamp-retro',
 title: 'Ribbed Glass Table Lamp Retro',
 description: 'A ribbed glass table lamp on a deep maroon poster with hand drawn retro annotations.',
 searchKeywords: ['table lamp','ribbed glass','retro poster','annotations','maroon','lamp','furniture ad','bedside lamp','vintage style','home furniture'],
 prompt: `A retro poster for a ribbed glass table lamp, vertical 4:5.

The entire ground is a flat {{background_color}} with a faint halftone dot texture, like an old printed advertisement. The lamp is cut out and sits centred, photographed straight on with a 90mm lens; the base is {{base_material}}, the shade ribbed cased glass in {{shade_colour}}. The bulb is on, so the shade glows from within and throws a soft warm bloom onto the flat background behind it, the one place where the flat colour breaks.

Around the lamp, four hand drawn notes in {{accent_color}} with looping underlines and small arrows point at the parts, reading "{{callout_notes}}". The drawing is deliberately loose and slightly wobbly.

Text layout: at the top, small and letterspaced, "{{eyebrow_text}}". Beneath it the headline "{{headline_text}}" in a fat rounded retro type, its second word much larger than the first. At the bottom, a small oval badge with "{{brand_name}}" inside.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Printed poster character with slight ink misregistration, real glass with visible ribs and a warm glow, no clean 3D render.

{{image_description}}`,
 fields: [
  IMG('a ribbed glass table lamp glowing on a flat maroon poster ground'),
  F('brand_name', 'Brand name', 'AMARIS', true),
  F('headline_text', 'Headline', 'Think warm.', true),
  F('eyebrow_text', 'Eyebrow', 'LOOKING FOR A BEDSIDE LAMP?'),
  F('callout_notes', 'Handwritten notes', 'HAND RIBBED GLASS - 38 CM HIGH - DIMMER ON THE CORD - FITS ANY SHELF'),
  F('background_color', 'Poster colour', 'deep maroon'),
  F('base_material', 'Base material', 'turned solid brass'),
  F('shade_colour', 'Shade colour', 'milky opal'),
  F('accent_color', 'Annotation colour', 'pale peach')
 ]
});

t({
 slug: 'home-furniture-paper-lantern-floor-lamp',
 title: 'Paper Lantern Floor Lamp',
 description: 'A tall paper lantern floor lamp alone in a white room, most of the frame left empty.',
 searchKeywords: ['floor lamp','paper lantern','minimal','white room','negative space','lamp','furniture ad','japanese style','soft light','home furniture'],
 prompt: `A very quiet advertisement for a paper lantern floor lamp, vertical 4:5.

An empty white room: {{wall_color}} walls, a {{floor_material}} floor, a skirting board and nothing else. The lamp stands far to the right of the frame, small in the picture, leaving most of the image as bare wall. Shot with a 50mm lens from standing height, dead level. The lantern is {{shade_material}} stretched over {{rib_style}}, standing on {{base_style}}. It is lit low, so the paper glows evenly and casts a broad soft wash onto the wall behind it, the ribs showing as faint horizontal lines through the paper. Everything else is flat, even, slightly cool daylight.

Text layout: the headline "{{headline_text}}" sits in the empty left half in small type, low down. Under it a thin rule and three words reading "{{detail_line}}". Top left "{{brand_name}}", tiny. No badges, no buttons, no price.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real paper with visible fibre and one small crease, honest soft light, plenty of empty space left alone.

{{image_description}}`,
 fields: [
  IMG('a tall paper lantern floor lamp glowing in an almost empty white room'),
  F('brand_name', 'Brand name', 'SHIOKA', true),
  F('headline_text', 'Headline', 'Light with nothing around it', true),
  F('detail_line', 'Detail line', 'Paper. Bamboo. Nothing else.'),
  F('shade_material', 'Shade material', 'handmade mulberry paper'),
  F('rib_style', 'Rib style', 'a fine spiral bamboo rib'),
  F('base_style', 'Base', 'three slim black lacquered legs'),
  F('wall_color', 'Wall colour', 'flat white'),
  F('floor_material', 'Floor', 'pale grey resin')
 ]
});

t({
 slug: 'home-furniture-brass-wall-sconce-blue',
 title: 'Brass Wall Sconce Blue',
 description: 'A brass wall sconce mounted on a deep blue plaster wall, lit and photographed close.',
 searchKeywords: ['wall sconce','wall light','brass','blue plaster','close up','lamp','furniture ad','lighting detail','hallway light','home furniture'],
 prompt: `A close, tactile advertisement for a brass wall sconce, vertical 4:5.

Nothing but a wall: {{wall_color}} lime plaster with visible trowel marks and a slightly uneven surface. The sconce is mounted just left of centre and photographed almost square on with an 85mm lens, close enough that you can see the machining marks on the metal. The body is {{metal_finish}} with {{shade_style}}. The lamp is on; the light spills upward into a soft fan across the plaster and downward in a narrower cone, so the trowel texture is raked into relief on both sides. There is a faint tarnish bloom around the fixing plate.

Text layout: the headline "{{headline_text}}" sits in the lit fan above the sconce, in a light sans, dark against the glow. Down the right hand side a narrow vertical column of small type reads "{{spec_lines}}". Bottom left "{{brand_name}}". Bottom right, small, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real raking light, real plaster texture, brass with fingerprints and uneven patina rather than a mirror finish.

{{image_description}}`,
 fields: [
  IMG('a brass wall sconce lit on a deep blue plastered wall'),
  F('brand_name', 'Brand name', 'CALLOWAY', true),
  F('headline_text', 'Headline', 'Up the wall, down the wall', true),
  F('metal_finish', 'Metal finish', 'raw brushed brass, unlacquered'),
  F('shade_style', 'Shade style', 'a half cylinder shade open top and bottom'),
  F('wall_color', 'Wall colour', 'deep ultramarine'),
  F('spec_lines', 'Spec lines', '2700 K / hard wired / IP44 / 22 cm'),
  F('price_text', 'Price line', '96')
 ]
});

t({
 slug: 'home-furniture-cordless-lamp-terrace',
 title: 'Cordless Lamp Terrace',
 description: 'A small rechargeable table lamp on an outdoor terrace table at dusk.',
 searchKeywords: ['cordless lamp','rechargeable lamp','terrace','dusk','outdoor lighting','lamp','furniture ad','portable light','table lamp','home furniture'],
 prompt: `An evening advertisement for a small rechargeable cordless table lamp, vertical 4:5.

A terrace at dusk: a {{table_material}} table top filling the lower half of the frame, and behind it a soft blue hour sky over a dark railing and out of focus foliage. The lamp stands on the table slightly right of centre, shot with a 50mm lens at table height and a shallow depth of field, so the background is a smooth blur. The lamp body is {{lamp_material}} in {{lamp_colour}} with {{shade_style}}, and there is no cable anywhere. It is lit warm and low, throwing a small pool onto the table where a glass, a book and a scattering of crumbs sit. The sky is still blue enough to contrast with the warm bulb.

Text layout: the headline "{{headline_text}}" is set into the sky area in the upper left in a light sans. Small type underneath reads "{{subline_text}}". Along the bottom edge, a slim strip with "{{brand_name}}" on the left and "{{battery_line}}" on the right.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real blue hour, a warm lamp against cool sky, gentle sensor noise in the shadows, no daylight fill.

{{image_description}}`,
 fields: [
  IMG('a small cordless table lamp glowing on a terrace table at dusk'),
  F('brand_name', 'Brand name', 'NEVOLA', true),
  F('headline_text', 'Headline', 'Carry the light outside', true),
  F('subline_text', 'Subline', 'Take it to the table, the bath, the balcony. No cable, no socket.'),
  F('battery_line', 'Battery line', '18 hours on one charge'),
  F('lamp_material', 'Lamp material', 'anodised aluminium'),
  F('lamp_colour', 'Lamp colour', 'deep olive'),
  F('shade_style', 'Shade style', 'a small frosted polycarbonate dome'),
  F('table_material', 'Table top', 'weathered teak')
 ]
});

t({
 slug: 'home-furniture-statement-chandelier-low-angle',
 title: 'Statement Chandelier Low Angle',
 description: 'A sculptural chandelier photographed from directly below in a dark stairwell.',
 searchKeywords: ['chandelier','statement light','stairwell','low angle','sculptural','lamp','furniture ad','ceiling light','dramatic','home furniture'],
 prompt: `A dramatic advertisement for a sculptural chandelier, vertical 4:5.

A tall dark stairwell with walls in {{wall_color}}, the banister spiralling away at the edges of the frame. The camera lies almost flat on the floor looking straight up with a 20mm lens, so the chandelier hangs directly overhead and the walls converge towards it. The structure is {{frame_material}} carrying {{bulb_count}} bare bulbs at different heights on {{drop_style}}. Every bulb is on, warm and slightly flaring, and the light rakes down the stairwell walls, catching the edge of each tread. Between the bulbs the ceiling is completely black.

Text layout: the type follows the shape of the fixture. The headline "{{headline_text}}" curves around the outside of the chandelier in small capitals. In the top left corner "{{brand_name}}". Along the bottom edge a single centred line reading "{{footer_line}}". Nothing else - the picture carries it.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real filament bulbs with flare and warm colour, unlifted blacks, a little lens distortion left at the corners.

{{image_description}}`,
 fields: [
  IMG('a sculptural chandelier seen from directly below in a dark stairwell'),
  F('brand_name', 'Brand name', 'ORVEDAL', true),
  F('headline_text', 'Headline', 'LOOK UP ON THE WAY PAST', true),
  F('frame_material', 'Frame material', 'blackened brass rods'),
  F('bulb_count', 'Number of bulbs', 'eleven'),
  F('drop_style', 'Drop style', 'braided black cords of different lengths'),
  F('wall_color', 'Wall colour', 'deep aubergine'),
  F('footer_line', 'Footer line', 'Made to your ceiling height - tell us the drop')
 ]
});

t({
 slug: 'home-furniture-hand-knotted-rug-flatlay',
 title: 'Hand Knotted Rug Flatlay',
 description: 'A rug photographed from directly above with one corner folded back to show the knots.',
 searchKeywords: ['rug','hand knotted','flatlay','top down','wool rug','textile','furniture ad','floor covering','pattern','home furniture'],
 prompt: `A textile advertisement for a hand knotted rug, seen from above, vertical 4:5.

The camera is mounted directly overhead with a 50mm lens, looking straight down at a {{floor_material}} floor. The rug fills most of the frame at a slight angle, so two corners are cropped. It is {{rug_material}} in {{rug_colours}}, with {{pattern_style}}. One corner is folded back on itself, showing the reverse and the knot density, and the pile along the fold stands up unevenly. A pair of shoes has been left at the edge of the rug and a small stack of books sits on it, both cropped by the frame. Broad soft daylight from one side gives the pile direction and a soft shadow along the folded corner.

Text layout: the headline "{{headline_text}}" runs across the exposed floor at the top in a light sans. On the folded corner itself, small type reads "{{knot_line}}". Bottom left "{{brand_name}}". Bottom right, three short lines reading "{{size_lines}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real daylight from one side, wool with visible fibre and slightly uneven dye, no flat scanned look.

{{image_description}}`,
 fields: [
  IMG('a hand knotted wool rug seen from above with one corner folded back'),
  F('brand_name', 'Brand name', 'TARAVELL', true),
  F('headline_text', 'Headline', 'Nine months on one loom', true),
  F('knot_line', 'Knot line', '160,000 knots per square metre'),
  F('rug_material', 'Rug material', 'hand spun highland wool'),
  F('rug_colours', 'Rug colours', 'ink blue, madder red and undyed cream'),
  F('pattern_style', 'Pattern', 'a broken diamond lattice that drifts out of alignment'),
  F('floor_material', 'Floor', 'dark stained oak boards'),
  F('size_lines', 'Size lines', '170 x 240 / 200 x 300 / made to measure')
 ]
});

t({
 slug: 'home-furniture-velvet-curtains-jewel',
 title: 'Velvet Curtains Jewel',
 description: 'Heavy velvet curtains half drawn across a tall window with light burning through the gap.',
 searchKeywords: ['curtains','velvet','window dressing','jewel tone','backlight','textile','furniture ad','drapes','blackout','home furniture'],
 prompt: `A rich advertisement for heavy velvet curtains, vertical 4:5.

A tall window in a room with walls in {{wall_color}}. The curtains hang from a {{rail_style}} and are drawn most of the way across, leaving a narrow vertical gap in the middle. The camera is straight on with a 50mm lens, exposed for the fabric, so the gap burns out to pure white and the light spills onto the floor as a bright strip. The velvet is {{fabric_colour}} in {{fabric_type}}, falling in deep uneven folds, one pleat hanging slightly out of line, the pile catching light along every ridge. The hem pools a little on the floor.

Text layout: the headline "{{headline_text}}" is set inside the burnt out gap, dark on the bright light, in a condensed serif running vertically down the gap. Upper left "{{brand_name}}". Lower left a short paragraph of small type reading "{{body_text}}". Bottom right, in a small pill, "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Exposed for the fabric with a genuinely blown highlight, real velvet pile and folds, no HDR balancing.

{{image_description}}`,
 fields: [
  IMG('heavy velvet curtains half drawn with light burning through the gap'),
  F('brand_name', 'Brand name', 'MARLOWE', true),
  F('headline_text', 'Headline', 'SHUT THE MORNING OUT', true),
  F('body_text', 'Body text', 'Triple weave lining behind a cotton velvet face. Cuts the light, the noise and the draught.'),
  F('fabric_colour', 'Fabric colour', 'emerald green'),
  F('fabric_type', 'Fabric type', 'heavy cotton velvet'),
  F('rail_style', 'Rail style', 'slim blackened steel pole with rings'),
  F('wall_color', 'Wall colour', 'warm plaster pink'),
  F('cta_text', 'Button text', 'Order a swatch')
 ]
});

fs.writeFileSync(__dirname + '/31-40.json', JSON.stringify(out, null, 1) + '\n');
console.log(out.length + ' Spezifikationen geschrieben');
