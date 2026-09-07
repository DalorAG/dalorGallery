const fs = require('fs');
const F = (key, label, placeholder, required = false, inputType = 'text') => ({ key, label, inputType, placeholder, required });
const IMG = ph => F('image_description', 'What should be the main subject?', ph, false, 'textarea');
const out = [];
const t = (o) => out.push(o);

t({
 slug: 'home-furniture-chest-of-drawers-colour-fronts',
 title: 'Chest Of Drawers Colour Fronts',
 description: 'A chest of drawers with five different coloured fronts, the middle drawer pulled open.',
 searchKeywords: ['chest of drawers','dresser','colour fronts','bedroom storage','modular','storage','furniture ad','drawers','customisable','home furniture'],
 prompt: `A playful advertisement for a chest of drawers with interchangeable fronts, vertical 4:5.

A flat wall in {{wall_color}} and a floor in the same tone, so the piece reads almost like a cut out. The chest stands centred and is shot straight on with a 60mm lens, dead square, no perspective on the fronts. The carcass is {{carcass_material}}; the five drawer fronts are each a different colour, from top to bottom {{colour_names}}, in a {{front_finish}}. The middle drawer is pulled halfway out and you can see folded jumpers inside, one sleeve hanging over the edge. Flat frontal light with a second light from below to keep the underside open, and a soft shadow only where the drawer sticks out.

Text layout: to the left of the chest, five short lines stacked so each one lines up with its drawer, reading "{{drawer_labels}}". The headline "{{headline_text}}" runs across the top in a heavy rounded sans. Top right "{{brand_name}}". Bottom centre a wide flat button reading "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real paint with a slight roller texture, honest matt surfaces, no gradient behind the product.

{{image_description}}`,
 fields: [
  IMG('a chest of drawers with five differently coloured fronts, middle drawer open'),
  F('brand_name', 'Brand name', 'BLIXTHOLM', true),
  F('headline_text', 'Headline', 'FIVE DRAWERS, FIVE DECISIONS', true),
  F('drawer_labels', 'Drawer labels', 'socks / shirts / the drawer with everything / jumpers / winter'),
  F('colour_names', 'Front colours', 'coral, sand, sky blue, moss, deep plum'),
  F('carcass_material', 'Carcass', 'birch plywood with a visible edge'),
  F('front_finish', 'Front finish', 'chalky matt lacquer'),
  F('wall_color', 'Wall and floor colour', 'pale warm grey'),
  F('cta_text', 'Button text', 'Build your own')
 ]
});

t({
 slug: 'home-furniture-hallway-shoe-cabinet',
 title: 'Hallway Shoe Cabinet',
 description: 'A slim tilting shoe cabinet in a narrow hallway, one flap open and shoes half visible.',
 searchKeywords: ['shoe cabinet','hallway storage','slim cabinet','entryway','tilting drawer','storage','furniture ad','small spaces','organiser','home furniture'],
 prompt: `A practical advertisement for a slim tilting shoe cabinet, vertical 4:5.

A narrow hallway, walls in {{wall_color}}, a grey checkerboard tile floor, a coat hook rail high on the wall with two coats on it. The cabinet is mounted flat against the wall and photographed from a low three quarter angle with a 35mm lens, so you see how little it sticks out. It is finished in {{cabinet_finish}} with {{handle_style}}. The upper flap is tilted open and three pairs of shoes lean inside on the angled rack; one trainer sits on the floor beside the cabinet where somebody kicked it off. Cool daylight from a glazed front door out of frame, plus a warm bulb overhead, and the two mix across the wall.

Text layout: the headline "{{headline_text}}" is set on the empty wall above the cabinet in a condensed sans. A thin dimension arrow runs across the depth of the cabinet with the label "{{depth_label}}". Bottom left "{{brand_name}}"; bottom right, small, "{{detail_line}}" over "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Ordinary hallway light with mixed colour temperature, scuffs on the skirting, nothing styled to perfection.

{{image_description}}`,
 fields: [
  IMG('a slim wall mounted shoe cabinet with one flap tilted open in a hallway'),
  F('brand_name', 'Brand name', 'VESTHOLM', true),
  F('headline_text', 'Headline', 'Sixteen centimetres of order', true),
  F('depth_label', 'Depth label', 'only 16 cm deep'),
  F('cabinet_finish', 'Cabinet finish', 'deep ink blue lacquer'),
  F('handle_style', 'Handles', 'a routed groove instead of a handle'),
  F('wall_color', 'Wall colour', 'warm off white'),
  F('detail_line', 'Detail line', 'Nine pairs per unit'),
  F('price_text', 'Price line', '179')
 ]
});

t({
 slug: 'home-furniture-cube-storage-playroom',
 title: 'Cube Storage Playroom',
 description: 'A modular cube storage unit in a bright playroom with primary coloured boxes.',
 searchKeywords: ['cube storage','shelf unit','playroom','kids furniture','modular','storage','furniture ad','toy storage','primary colours','home furniture'],
 prompt: `A bright, cheerful advertisement for a modular cube storage unit, vertical 4:5.

A child's room with one wall painted {{wall_color}} and a light beech laminate floor with a rug corner showing at the bottom edge. The unit is a nine cube grid standing on the floor, shot straight on from a low camera height with a 35mm lens, as if from a child's eye level. The frame is {{frame_finish}}; five of the cubes hold fabric boxes in {{box_colours}}, the others are open with books lying flat, a wooden train and a stack of paper. One box is pulled half out and tilted. Big soft daylight from the right, a warm bounce from the floor, and a scattering of toys on the rug in the foreground slightly out of focus.

Text layout: across the top, in a chunky rounded sans, "{{headline_text}}". A small speech bubble in {{accent_color}} sits over the top right cube reading "{{badge_text}}". Bottom left "{{brand_name}}". Along the bottom a single line of small type reading "{{footer_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real daylight, cotton boxes that look woven, floor that has actually been played on.

{{image_description}}`,
 fields: [
  IMG('a nine cube storage unit with fabric boxes in a bright playroom'),
  F('brand_name', 'Brand name', 'POMMELO', true),
  F('headline_text', 'Headline', 'Tidy in under a minute', true),
  F('badge_text', 'Badge text', 'anti tip strap included'),
  F('box_colours', 'Box colours', 'tomato red, sunflower, sky blue, grass green, violet'),
  F('frame_finish', 'Frame finish', 'white lacquered birch'),
  F('wall_color', 'Wall colour', 'soft mint'),
  F('accent_color', 'Bubble colour', 'bright coral'),
  F('footer_line', 'Footer line', 'Three, six or nine cubes - stack them any way up')
 ]
});

t({
 slug: 'home-furniture-media-console-cable-channel',
 title: 'Media Console Cable Channel',
 description: 'A low oak media console shot from behind so the cable channel becomes the subject.',
 searchKeywords: ['media console','lowboard','tv unit','cable management','oak','storage','furniture ad','living room','detail shot','home furniture'],
 prompt: `A detail led advertisement for a low media console, vertical 4:5.

The console stands against a wall painted {{wall_color}}, on a dark cork tile floor. The camera is behind and above it, looking down over the back edge with a 50mm lens, so the top surface and the open cable channel along the back fill the middle of the frame and the room is only suggested at the edges. The carcass is {{console_wood}} with {{door_style}}. In the channel, cables are coiled and clipped with fabric ties, one plug left unplugged and resting on the timber. A small lamp at the left is on; the rest is grey daylight, and the timber shows a dust film that has not been wiped.

Text layout: the headline "{{headline_text}}" runs across the lower third in a plain medium sans. A fine {{accent_color}} line runs from the cable channel out to the margin and ends in the note "{{callout_text}}". Upper left "{{brand_name}}". Lower right a short block of two lines reading "{{spec_lines}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Ordinary domestic light, visible dust and real cable, no immaculate render.

{{image_description}}`,
 fields: [
  IMG('a low oak media console seen from behind with an open cable channel'),
  F('brand_name', 'Brand name', 'LOWEN', true),
  F('headline_text', 'Headline', 'The cables live in here now', true),
  F('callout_text', 'Callout', 'brush strip closes over it'),
  F('console_wood', 'Console wood', 'solid ash with a smoked finish'),
  F('door_style', 'Doors', 'two sliding fronts in fluted glass'),
  F('wall_color', 'Wall colour', 'olive green'),
  F('accent_color', 'Callout colour', 'pale yellow'),
  F('spec_lines', 'Spec lines', '160 cm wide / fits a soundbar underneath')
 ]
});

t({
 slug: 'home-furniture-brass-bar-cart-green',
 title: 'Brass Bar Cart Green',
 description: 'A brass bar cart against a dark green wall at night, with a discount ribbon across a corner.',
 searchKeywords: ['bar cart','drinks trolley','brass','dark green','night','storage','furniture ad','entertaining','offer ribbon','home furniture'],
 prompt: `An evening advertisement for a two tier bar cart, vertical 4:5.

A dark room with walls in {{wall_color}} and a black stained board floor. The cart stands three quarters on near the right of the frame, photographed at chest height with a 50mm lens. The frame is {{frame_material}} with {{wheel_style}}; the two shelves are {{shelf_material}}. On the upper shelf a soda siphon, a bowl of citrus and three tumblers, one of them tipped over on its side; the lower shelf holds folded napkins and a small ice bucket. A single warm lamp out of frame at the left is the only source, so the metal shows one long specular streak and the corners of the room disappear.

Text layout: a diagonal ribbon crosses the upper left corner carrying "{{offer_text}}". The headline "{{headline_text}}" sits across the middle left in a modern serif, set narrow and well clear of the cart. Bottom left "{{brand_name}}" with a hairline rule under it. Bottom right, small, "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Warm tungsten light that stays warm, brass with fingerprints and slight tarnish, deep unlifted shadows.

{{image_description}}`,
 fields: [
  IMG('a brass two tier bar cart in a dark green room lit by one warm lamp'),
  F('brand_name', 'Brand name', 'HARROLD', true),
  F('headline_text', 'Headline', 'Wheel the evening over', true),
  F('offer_text', 'Ribbon text', '25% OFF THIS WEEK'),
  F('frame_material', 'Frame material', 'unlacquered brass tube'),
  F('shelf_material', 'Shelf material', 'smoked glass'),
  F('wheel_style', 'Wheels', 'black rubber castors that actually roll'),
  F('wall_color', 'Wall colour', 'dark bottle green'),
  F('cta_text', 'Call to action', 'See the drinks range')
 ]
});

t({
 slug: 'home-furniture-upholstered-bed-tall-headboard',
 title: 'Upholstered Bed Tall Headboard',
 description: 'A bed with a very tall upholstered headboard in a dark room, shot like a portrait.',
 searchKeywords: ['bed','upholstered bed','headboard','bedroom','velvet','sleeping','furniture ad','double bed','dark interior','home furniture'],
 prompt: `A moody advertisement for a bed with a tall upholstered headboard, vertical 4:5.

A bedroom painted {{wall_color}} from floor to ceiling, curtains drawn. The bed is shot straight on from the foot with a 35mm lens, low down, so the headboard rises almost to the top of the frame and the bedding runs towards the camera. The headboard is {{upholstery_material}} in {{headboard_color}}, channel stitched in wide vertical panels, one panel catching the light more than the others. The bedding is {{bedding_description}}, deliberately unmade - the duvet pushed to one side, a pillow dented, a book face down near the edge. One bedside lamp on the left is lit; a thin line of daylight escapes at the edge of the curtain on the right.

Text layout: the headline "{{headline_text}}" is set across the headboard in a light serif with wide letterspacing, the type running over the channel stitching. Upper left "{{brand_name}}". Lower left a small stacked block of three lines reading "{{spec_lines}}". Lower right, underlined, "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Practical lamp light with real falloff, creased bedlinen, no even studio fill.

{{image_description}}`,
 fields: [
  IMG('a bed with a very tall channel stitched headboard in a dark bedroom'),
  F('brand_name', 'Brand name', 'ROSSEN', true),
  F('headline_text', 'Headline', 'STAY IN LONGER', true),
  F('headboard_color', 'Headboard colour', 'deep aubergine'),
  F('upholstery_material', 'Headboard material', 'cotton velvet'),
  F('bedding_description', 'Bedding', 'washed linen in slate grey'),
  F('wall_color', 'Wall colour', 'charcoal blue'),
  F('spec_lines', 'Spec lines', 'Headboard 140 cm high / Slatted base / Four sizes'),
  F('cta_text', 'Call to action', 'Order swatches')
 ]
});

t({
 slug: 'home-furniture-mattress-layer-cutaway',
 title: 'Mattress Layer Cutaway',
 description: 'A mattress sliced open at one corner so the internal layers read as a diagram.',
 searchKeywords: ['mattress','layers','cutaway','diagram','sleep','sleeping','furniture ad','pocket spring','foam','home furniture'],
 prompt: `A technical advertisement for a mattress shown in cutaway, vertical 4:5.

A plain studio with a seamless {{background_color}} sweep. The mattress lies on a simple pale ash slatted base in the middle of the frame, shot from a low three quarter angle with a 50mm lens. The near corner is cut away in a clean stepped section, so you look straight into the build: from the top down, {{layer_names}}, each layer a slightly different colour and texture, the springs visible as a honeycomb. The cover is {{cover_fabric}} with a piped edge and a woven label sewn into the side seam. Even soft light from above with one raking light from the left to give the layers separation and real shadow between them.

Text layout: to the right of the cutaway, a stack of thin leader lines points at each layer, each ending in a two word label, reading "{{layer_labels}}". The headline "{{headline_text}}" runs along the top in a medium sans. Upper right "{{brand_name}}". Along the bottom, a full width bar in {{accent_color}} carrying "{{footer_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real photographic light, foam that looks like foam with open cells, no glowing edges.

{{image_description}}`,
 fields: [
  IMG('a mattress with a stepped cutaway corner showing its internal layers'),
  F('brand_name', 'Brand name', 'AUFELD', true),
  F('headline_text', 'Headline', 'Seven layers, no mystery', true),
  F('layer_names', 'Layer build', 'a quilted top, cooling latex, a comfort foam, pocket springs and a firm base foam'),
  F('layer_labels', 'Layer labels', 'quilted top / cooling latex / comfort foam / 2000 pocket springs / base foam'),
  F('cover_fabric', 'Cover fabric', 'undyed organic cotton twill'),
  F('background_color', 'Background', 'cool light blue'),
  F('accent_color', 'Footer bar colour', 'deep navy'),
  F('footer_line', 'Footer line', '100 nights to change your mind')
 ]
});

t({
 slug: 'home-furniture-bedside-table-lamplight',
 title: 'Bedside Table Lamplight',
 description: 'A small bedside table at night lit only by the pool of its own lamp.',
 searchKeywords: ['bedside table','nightstand','lamp light','night','bedroom','sleeping','furniture ad','small table','warm light','home furniture'],
 prompt: `An intimate night time advertisement for a bedside table, vertical 4:5.

The room is nearly dark, walls in {{wall_color}}, and the only light is the lamp standing on the table itself. The camera sits at mattress height, close, with a 50mm lens wide open, so the front edge of the table is sharp and the room behind falls into soft blur. The table is {{table_material}} with {{drawer_detail}}. On the top: the lit lamp with a {{shade_material}} shade, a glass of water half drunk, reading glasses folded, a paperback with a receipt used as a bookmark. The lamp throws a warm circle onto the wall and leaves everything beyond it dark.

Text layout: very little. The headline "{{headline_text}}" sits in the dark area at the top left in small light capitals. Bottom right, in the corner where the light dies, "{{brand_name}}" and beneath it, smaller, "{{detail_line}}". A single tiny line at the very bottom edge reads "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. One practical light source only, warm colour left uncorrected, grain in the dark areas, no fill light.

{{image_description}}`,
 fields: [
  IMG('a small bedside table at night lit only by its own lamp'),
  F('brand_name', 'Brand name', 'MIREN', true),
  F('headline_text', 'Headline', 'THE LAST THING YOU TOUCH', true),
  F('table_material', 'Table material', 'solid cherry with a soft wax finish'),
  F('drawer_detail', 'Drawer detail', 'one shallow drawer with a leather pull'),
  F('shade_material', 'Lamp shade', 'pleated ivory paper'),
  F('wall_color', 'Wall colour', 'deep teal'),
  F('detail_line', 'Detail line', 'Left hand and right hand versions'),
  F('price_text', 'Price line', '245')
 ]
});

t({
 slug: 'home-furniture-slatted-bed-frame-scandi',
 title: 'Slatted Bed Frame Scandi',
 description: 'A pale ash bed frame in a bright, almost empty Scandinavian room with morning light.',
 searchKeywords: ['bed frame','slatted bed','ash wood','scandinavian','morning light','sleeping','furniture ad','minimal bedroom','light wood','home furniture'],
 prompt: `A light, airy advertisement for a slatted wooden bed frame, vertical 4:5.

An almost empty bedroom: walls in {{wall_color}}, a wide pale pine board floor, a single window with a plain linen curtain half drawn. The bed stands away from the wall, shot from a high three quarter angle with a 35mm lens so you see the frame, the slats at the foot end and the floor around it. The frame is {{frame_wood}}, the joints visible as {{joint_detail}}. Bedding is {{bedding_description}}, loosely made, the corner of the sheet untucked. Early morning sun comes low through the window and lays a long bright stripe across the bed and up the far wall; everything outside the stripe is cool and blue.

Text layout: the headline "{{headline_text}}" sits low in the frame on the empty floor area in a light sans. In the upper left "{{brand_name}}" small. Along the right edge, running vertically, a thin line of type reading "{{spec_lines}}". Bottom right a small outlined button with "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real low sun with a warm to cool split across the room, linen that creases, no soft glow filter.

{{image_description}}`,
 fields: [
  IMG('a pale ash slatted bed frame in a bright almost empty bedroom'),
  F('brand_name', 'Brand name', 'SOLBRIN', true),
  F('headline_text', 'Headline', 'Fifteen minutes to build. Twenty years to keep.', true),
  F('frame_wood', 'Frame wood', 'solid pale ash, soap finished'),
  F('joint_detail', 'Joint detail', 'exposed dowels and wedged tenons'),
  F('bedding_description', 'Bedding', 'white waffle cotton with a pale blue throw'),
  F('wall_color', 'Wall colour', 'chalky white'),
  F('spec_lines', 'Spec line', 'no screws / no tools / 140 or 160 cm'),
  F('cta_text', 'Button text', 'See the build')
 ]
});

t({
 slug: 'home-furniture-loft-bunk-bed-kids',
 title: 'Loft Bunk Bed Kids',
 description: 'A loft bed with a ladder and a desk underneath in a bright coral childrens room.',
 searchKeywords: ['loft bed','bunk bed','kids bedroom','ladder','desk under bed','sleeping','furniture ad','childrens furniture','small room','home furniture'],
 prompt: `A friendly advertisement for a loft bed with a desk underneath, vertical 4:5.

A small child's room with one wall in {{wall_color}} and a {{floor_material}} floor. The bed stands in the corner and is shot from a low front angle with a 28mm lens, so the ladder runs diagonally up through the frame and the space beneath reads clearly. The structure is {{frame_material}} with {{safety_detail}}. Underneath sits a small desk with a lamp, an open sketchbook, a mug of pencils and a chair pushed out at an angle. Fairy lights are looped along the upper rail and switched on. Daylight from a window on the left, warm bulbs above the desk, and the two colours meet in the middle of the frame.

Text layout: the headline "{{headline_text}}" is set into the empty upper right corner in a friendly rounded sans. Three small circular icons run along the bottom edge, each with one word beneath, reading "{{icon_labels}}". Top left "{{brand_name}}". Bottom right, small, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real mixed room light, a room that looks lived in, no perfectly tidy showroom styling.

{{image_description}}`,
 fields: [
  IMG('a loft bed with a ladder and a small desk underneath in a childrens room'),
  F('brand_name', 'Brand name', 'KRUMPEL', true),
  F('headline_text', 'Headline', 'Two rooms in one corner', true),
  F('icon_labels', 'Icon labels', 'tested to 100 kg / rail both sides / grows with them'),
  F('frame_material', 'Frame material', 'solid pine painted chalk white'),
  F('safety_detail', 'Safety detail', 'a high guard rail and wide flat ladder treads'),
  F('wall_color', 'Wall colour', 'bright coral'),
  F('floor_material', 'Floor', 'natural cork'),
  F('price_text', 'Price line', '499')
 ]
});

fs.writeFileSync(__dirname + '/21-30.json', JSON.stringify(out, null, 1) + '\n');
console.log(out.length + ' Spezifikationen geschrieben');
