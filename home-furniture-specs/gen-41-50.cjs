const fs = require('fs');
const F = (key, label, placeholder, required = false, inputType = 'text') => ({ key, label, inputType, placeholder, required });
const IMG = ph => F('image_description', 'What should be the main subject?', ph, false, 'textarea');
const out = [];
const t = (o) => out.push(o);

t({
 slug: 'home-furniture-cushion-covers-colour-grid',
 title: 'Cushion Covers Colour Grid',
 description: 'Six cushion covers laid out in a strict grid, each square a different colour and weave.',
 searchKeywords: ['cushion','pillow cover','colour grid','swatch','textile','furniture ad','soft furnishing','set','pattern','home furniture'],
 prompt: `A grid layout advertisement for a range of cushion covers, vertical 4:5.

Six cushions are laid flat on a {{background_material}} surface and photographed from directly above with a 50mm lens, arranged in a strict two by three grid with equal gaps. Each one is a different fabric and colour, reading across the rows as {{colour_names}}, in {{fabric_types}}. They are not perfectly square - one is plumped more than the others, one corner is dog eared, and the zips show along the lower edges. A broad soft light from the top left gives every weave direction and leaves a thin shadow along the right of each cushion.

Text layout: the headline "{{headline_text}}" sits across the top above the grid in a medium sans. Under each cushion a tiny caption gives its name, reading "{{cushion_names}}". Top right "{{brand_name}}". Along the bottom edge a full width bar in {{accent_color}} carrying "{{footer_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real overhead light, fabric with genuine weave and slight wrinkles, no flat scan and no drop shadows added afterwards.

{{image_description}}`,
 fields: [
  IMG('six cushion covers in different colours laid out in a grid from above'),
  F('brand_name', 'Brand name', 'HOLLAND & PYE', true),
  F('headline_text', 'Headline', 'Six ways to change a sofa', true),
  F('colour_names', 'Colours', 'rust, ink blue, moss, ochre, plum and off white'),
  F('cushion_names', 'Cushion names', 'Kiln / Harbour / Fern / Ember / Sloe / Chalk'),
  F('fabric_types', 'Fabrics', 'wool boucle, brushed cotton, corduroy and heavy linen'),
  F('background_material', 'Background surface', 'dark grey painted plywood'),
  F('accent_color', 'Footer bar colour', 'deep rust'),
  F('footer_line', 'Footer line', 'Covers only - all fit a 50 cm pad')
 ]
});

t({
 slug: 'home-furniture-chunky-knit-throw-macro',
 title: 'Chunky Knit Throw Macro',
 description: 'A very close macro of a chunky knit throw draped over a chair arm, texture filling the frame.',
 searchKeywords: ['throw','knit blanket','macro','texture','wool','textile','furniture ad','close up','chunky knit','home furniture'],
 prompt: `A macro advertisement for a chunky knit throw, vertical 4:5.

The frame is filled almost entirely by the knit itself. A 100mm macro lens sits close to a throw draped over the arm of a chair, so the stitches run diagonally across the picture and only a sliver of {{background_hint}} shows in the top corner. The yarn is {{yarn_type}} in {{throw_colour}}, hand knitted in {{stitch_style}}, with loose fibres standing up along the ridges and one dropped stitch left visible. Hard low side light rakes across the surface so each stitch throws its own shadow and the depth of the pile reads properly; focus falls off within a few centimetres.

Text layout: the headline "{{headline_text}}" runs across the lower third in a light sans, dropping over the soft out of focus area so it stays readable. Under it, one line of small type reading "{{detail_line}}". Top left, small, "{{brand_name}}". Bottom right, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. True macro depth of field with real falloff, wool fibre and irregular stitches, no smoothed or painted texture.

{{image_description}}`,
 fields: [
  IMG('an extreme close up of a chunky knit wool throw draped over a chair arm'),
  F('brand_name', 'Brand name', 'DUNSMORE', true),
  F('headline_text', 'Headline', 'Two kilos of wool and nothing else', true),
  F('detail_line', 'Detail line', 'Knitted on 25 mm needles, one throw a day'),
  F('yarn_type', 'Yarn', 'undyed merino roving'),
  F('throw_colour', 'Throw colour', 'deep petrol blue'),
  F('stitch_style', 'Stitch', 'a wide garter stitch'),
  F('background_hint', 'Background hint', 'a dark green velvet chair arm'),
  F('price_text', 'Price line', '165')
 ]
});

t({
 slug: 'home-furniture-linen-bedding-morning',
 title: 'Linen Bedding Morning',
 description: 'Washed linen bedding photographed unmade in low morning light, creases and all.',
 searchKeywords: ['bedding','bed linen','washed linen','duvet cover','morning light','textile','furniture ad','bedroom','creases','home furniture'],
 prompt: `A soft, honest advertisement for washed linen bedding, vertical 4:5.

A bed seen from above and slightly to one side, filling the whole frame, shot with a 35mm lens from a step ladder. The bedding is {{fabric_type}} in {{bedding_colour}}, thoroughly unmade - the duvet swept to one side in a heavy diagonal fold, two pillows dented, the fitted sheet pulled loose at one corner. Across the foot lies {{accent_textile}}. Low morning sun comes from the left through a gap in a curtain and lays one hard bright stripe across the linen, the rest staying in cool shadow; every crease casts its own small shadow along the stripe.

Text layout: the headline "{{headline_text}}" runs across the shadowed area at the bottom left in a light serif. To the right of it, small type reading "{{subline_text}}". Top right corner "{{brand_name}}" with "{{detail_line}}" underneath in smaller type.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real morning sun with a hard edge, linen that is genuinely creased and slightly pilled, no ironed perfection.

{{image_description}}`,
 fields: [
  IMG('unmade washed linen bedding in low morning sunlight seen from above'),
  F('brand_name', 'Brand name', 'AVERLY', true),
  F('headline_text', 'Headline', 'It is meant to look like this', true),
  F('subline_text', 'Subline', 'Stonewashed European flax. It never needs an iron and never will.'),
  F('bedding_colour', 'Bedding colour', 'slate blue'),
  F('fabric_type', 'Fabric', 'stonewashed heavy linen'),
  F('accent_textile', 'Accent textile', 'a mustard waffle blanket'),
  F('detail_line', 'Detail line', 'Five sizes, eleven colours')
 ]
});

t({
 slug: 'home-furniture-table-linen-laid-table',
 title: 'Table Linen Laid Table',
 description: 'A table runner and napkins on a laid table, shot along the surface at plate height.',
 searchKeywords: ['table runner','napkins','table linen','dining','place setting','textile','furniture ad','tablescape','ochre','home furniture'],
 prompt: `A warm advertisement for a set of table linen, vertical 4:5.

The camera sits right down on the table with a 50mm lens, so the surface runs away from the viewer and the far end goes soft. A {{runner_colour}} runner in {{fabric_type}} lies down the middle of a {{table_material}} table, not quite straight. Two napkins are folded loosely beside plates, one of them already unfolded and pushed aside, with a wine stain on it. Between them sit a candle burning low, a chipped stoneware jug and a heel of bread on a board. Late afternoon light comes from the far end so the linen is backlit and the weave shows through where it lifts off the table.

Text layout: the headline "{{headline_text}}" sits in the softer upper area, in a warm serif, partly overlapped by the out of focus candle flame. Bottom left "{{brand_name}}". Bottom right a small block of two lines reading "{{set_contents}}". Along the very bottom, faint, "{{footer_line}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Backlit late sun with warm colour left in, real stains and creases, no styled perfection.

{{image_description}}`,
 fields: [
  IMG('a table runner and napkins on a laid table shot along the surface'),
  F('brand_name', 'Brand name', 'BRIONNE', true),
  F('headline_text', 'Headline', 'Cloth that earns its stains', true),
  F('set_contents', 'Set contents', 'One runner, six napkins / packed in a cotton bag'),
  F('runner_colour', 'Runner colour', 'burnt ochre'),
  F('fabric_type', 'Fabric', 'loose weave washed linen with a hand rolled hem'),
  F('table_material', 'Table', 'scrubbed elm'),
  F('footer_line', 'Footer line', 'Wash hot. It only softens.')
 ]
});

t({
 slug: 'home-furniture-glazed-vase-trio-gloss',
 title: 'Glazed Vase Trio Gloss',
 description: 'Three high gloss glazed vases in strong colours on a coloured plinth, deliberately not neutral.',
 searchKeywords: ['vase','ceramic','glossy glaze','trio','colourful decor','decor','furniture ad','still life','pottery','home furniture'],
 prompt: `A saturated still life advertisement for three glazed ceramic vases, vertical 4:5.

A shallow set: a plinth of {{plinth_colour}} in front of a wall in {{background_color}}, the two colours deliberately clashing. The three vases stand on the plinth at different depths, shot with a 90mm lens from just above their shoulders. They are thrown stoneware in a {{glaze_finish}}, in {{vase_colours}}, each a different height and profile; one carries a visible throwing ring and a small glaze pool at the foot. Two are empty, one holds a single bare branch. One hard light from the upper right gives each vase a sharp specular highlight and a crisp shadow to the left; the shadows overlap.

Text layout: the headline "{{headline_text}}" runs across the wall above them in a heavy modern serif. In the upper left, small, "{{brand_name}}". Bottom left three short lines giving the heights, reading "{{height_lines}}". Bottom right a small solid square button with "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Hard light with real speculars, glaze that pools and varies, honest kiln marks, and no beige or cream anywhere in the picture.

{{image_description}}`,
 fields: [
  IMG('three glossy glazed ceramic vases in strong colours on a coloured plinth'),
  F('brand_name', 'Brand name', 'KILNWORTH', true),
  F('headline_text', 'Headline', 'NOT EVERYTHING HAS TO BE BEIGE', true),
  F('vase_colours', 'Vase colours', 'oxblood, cobalt and moss green'),
  F('glaze_finish', 'Glaze finish', 'high gloss glaze that pools darker in the throwing rings'),
  F('plinth_colour', 'Plinth colour', 'bright tangerine'),
  F('background_color', 'Wall colour', 'deep violet'),
  F('height_lines', 'Height lines', '34 cm / 26 cm / 19 cm'),
  F('cta_text', 'Button text', 'Take all three')
 ]
});

t({
 slug: 'home-furniture-arch-wall-mirror-brass',
 title: 'Arch Wall Mirror Brass',
 description: 'An arched brass framed mirror on a coloured wall, its reflection showing a slice of the room.',
 searchKeywords: ['mirror','arch mirror','brass frame','wall decor','reflection','decor','furniture ad','hallway mirror','round top','home furniture'],
 prompt: `An advertisement for an arched wall mirror, vertical 4:5.

A single wall painted {{wall_color}}, nothing else in the shot but a low bench cropped at the bottom edge. The mirror hangs slightly off centre and is photographed straight on with a 50mm lens, the camera deliberately placed so it does not appear in the glass. The frame is {{frame_material}}, {{frame_profile}}. In the reflection you see a slice of the room behind the camera: a window with the light blown out, the corner of a curtain, a plant, no person. The glass has one small bloom of desilvering in the lower corner, left in. Daylight from the left rakes across the wall and gives the frame a bright edge on one side.

Text layout: the headline "{{headline_text}}" is set inside the reflection itself, in a light sans, so it appears to float in the mirrored room. Outside the frame, upper left, "{{brand_name}}". Bottom left a short block of two lines reading "{{spec_lines}}". Bottom right, small, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real daylight, a genuine reflection with slight distortion and a blown window, brass with fingerprints rather than a chrome shine.

{{image_description}}`,
 fields: [
  IMG('an arched brass framed mirror on a coloured wall reflecting part of a room'),
  F('brand_name', 'Brand name', 'LARWOOD', true),
  F('headline_text', 'Headline', 'Borrow the window twice', true),
  F('frame_material', 'Frame material', 'aged solid brass'),
  F('frame_profile', 'Frame profile', 'a narrow rounded profile with a visible seam at the apex'),
  F('wall_color', 'Wall colour', 'clay red'),
  F('spec_lines', 'Spec lines', '70 by 110 cm / hangs portrait or leans'),
  F('price_text', 'Price line', '340')
 ]
});

t({
 slug: 'home-furniture-wall-clock-mustard-crop',
 title: 'Wall Clock Mustard Crop',
 description: 'A mid-century wall clock cropped hard against a mustard wall with the time as the headline.',
 searchKeywords: ['wall clock','mid century','mustard','crop','graphic','decor','furniture ad','timepiece','kitchen clock','home furniture'],
 prompt: `A graphic advertisement for a wall clock, vertical 4:5.

Nothing but a wall painted flat {{wall_color}}, its roller texture just visible. The clock hangs high and far to the right, cropped hard by the right edge of the frame so only two thirds of the dial is in shot, photographed straight on with an 85mm lens. The case is {{case_material}}, the dial a cream dial with slim printed baton markers, the hands {{hand_style}}. It reads {{clock_time}}. Low side light from the left makes the hands throw thin shadows onto the dial and gives the case a crescent of shadow beneath it.

Text layout: the headline "{{headline_text}}" fills the empty left half in a tall condensed sans, stacked and wrapping so its last part runs under the clock. Under it a thin rule and one line of small type reading "{{subline_text}}". Bottom left "{{brand_name}}" small. Top left corner, tiny, "{{eyebrow_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real directional light with hand shadows on the dial, a painted wall that is not perfectly flat, no vector cleanliness.

{{image_description}}`,
 fields: [
  IMG('a mid century wall clock cropped by the frame edge on a mustard wall'),
  F('brand_name', 'Brand name', 'HEPLOW', true),
  F('headline_text', 'Headline', 'SILENT SWEEP, NO TICK', true),
  F('eyebrow_text', 'Eyebrow', 'FOR THE ROOM YOU WORK IN'),
  F('subline_text', 'Subline', 'A quartz movement with no second hand jump. You will not hear it.'),
  F('case_material', 'Case material', 'solid walnut with a bevelled rim'),
  F('hand_style', 'Hands', 'thin brass hands with a red seconds hand'),
  F('wall_color', 'Wall colour', 'mustard yellow'),
  F('clock_time', 'Time shown', 'ten past two')
 ]
});

t({
 slug: 'home-furniture-gallery-frame-set-dark-plaster',
 title: 'Gallery Frame Set Dark Plaster',
 description: 'A set of picture frames hung as a small gallery wall on dark plaster, one still leaning.',
 searchKeywords: ['picture frames','gallery wall','frame set','dark plaster','wall decor','decor','furniture ad','art hanging','composition','home furniture'],
 prompt: `An advertisement for a set of picture frames, vertical 4:5.

A wall of {{wall_color}} polished plaster with visible trowel movement. Five frames hang in a loose cluster, deliberately not aligned to a grid, and a sixth stands on the floor leaning against the skirting with its backing paper still on. Shot straight on with a 50mm lens from standing height. The frames are {{frame_material}} in {{frame_finish}}, in mixed sizes, all with generous {{mount_style}}. What is inside them is plain: two abstract washes, a photograph of a coastline, a botanical print and one left empty showing the mount only. Warm side light from a lamp at the right gives every frame a hard shadow to the left; a hammer and two picture hooks lie on the floor.

Text layout: the headline "{{headline_text}}" is set in the empty wall to the left of the cluster in a light serif, set narrow. Under it a small paragraph reading "{{body_text}}". Bottom right "{{brand_name}}", and beneath it "{{cta_text}}" in a thin outlined pill.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real lamp light with hard directional shadows, plaster with genuine trowel texture, dust and tools left in shot.

{{image_description}}`,
 fields: [
  IMG('five picture frames hung as a loose cluster on a dark plaster wall'),
  F('brand_name', 'Brand name', 'MERRITT & LOWE', true),
  F('headline_text', 'Headline', 'Hang them badly on purpose', true),
  F('body_text', 'Body text', 'Six frames in four sizes, cut and joined by hand, with mounts already inside.'),
  F('frame_material', 'Frame material', 'solid oak'),
  F('frame_finish', 'Frame finish', 'a smoked dark stain'),
  F('mount_style', 'Mount style', 'wide off white cotton rag mounts'),
  F('wall_color', 'Wall colour', 'deep charcoal green'),
  F('cta_text', 'Button text', 'See the set')
 ]
});

t({
 slug: 'home-furniture-glazed-planter-fern',
 title: 'Glazed Planter Fern',
 description: 'A speckled glazed planter with a fern, shot close on a wet windowsill with rain outside.',
 searchKeywords: ['planter','plant pot','glazed ceramic','fern','windowsill','decor','furniture ad','indoor plants','speckled glaze','home furniture'],
 prompt: `A close, damp advertisement for a glazed ceramic planter, vertical 4:5.

A windowsill of {{sill_material}}, rain running down the glass behind it, the world outside reduced to a grey blur. The planter sits on the sill just left of centre, photographed with an 85mm lens at sill height. It is thrown stoneware in a {{glaze_style}} in {{planter_colour}}, sitting in a matching saucer with a ring of water around its foot. Out of it spills {{plant_type}}, one frond crossing the window. Grey rain light only, cool and soft, with the wet glaze picking up a broken highlight along the rim; a few drops of water sit on the sill.

Text layout: the headline "{{headline_text}}" is set on the blurred window area at the top in a light sans, dark against the grey. Lower left, on the sill, small type reads "{{spec_lines}}". Bottom right "{{brand_name}}" with "{{detail_line}}" underneath.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Overcast rain light left cool, real glaze speckling and a wet rim, no sunshine and no added glow.

{{image_description}}`,
 fields: [
  IMG('a speckled glazed planter holding a fern on a wet windowsill'),
  F('brand_name', 'Brand name', 'FERNGATE', true),
  F('headline_text', 'Headline', 'Drainage hole, saucer, done', true),
  F('planter_colour', 'Planter colour', 'deep teal'),
  F('glaze_style', 'Glaze style', 'speckled reactive glaze that breaks paler over the rim'),
  F('plant_type', 'Plant', 'a bushy maidenhair fern'),
  F('sill_material', 'Windowsill', 'painted timber with chipped paint'),
  F('spec_lines', 'Spec lines', '18 cm across / holds a 15 cm nursery pot'),
  F('detail_line', 'Detail line', 'Four sizes, six glazes')
 ]
});

t({
 slug: 'home-furniture-ceramic-candle-vessel-evening',
 title: 'Ceramic Candle Vessel Evening',
 description: 'A scented candle in a ceramic vessel burning on a dark surface, close and low.',
 searchKeywords: ['candle','scented candle','ceramic vessel','evening','flame','decor','furniture ad','home fragrance','still life','home furniture'],
 prompt: `An intimate advertisement for a scented candle in a ceramic vessel, vertical 4:5.

A dark room reduced to a {{surface_material}} surface and a wall of {{background_color}} behind it. The candle stands slightly right of centre and is photographed at surface level with a 100mm lens wide open, so the near edge of the vessel is sharp and everything behind melts away. The vessel is {{vessel_finish}} in {{vessel_colour}}, its glaze catching a thin arc of light. The wick is lit and the flame is the only source in the picture, so the wax pool glows amber and the light falls away within a hand's width. A used match and a small brass snuffer lie beside it, and a thread of smoke rises from the match.

Text layout: the headline "{{headline_text}}" sits in the dark upper left in small light capitals. Beneath it, smaller, the scent notes reading "{{scent_notes}}". Bottom right "{{brand_name}}", and under it "{{burn_line}}". Nothing else in the frame.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Candlelight only, warm colour left uncorrected, real smoke and grain in the shadows, no fill light.

{{image_description}}`,
 fields: [
  IMG('a lit scented candle in a ceramic vessel on a dark surface'),
  F('brand_name', 'Brand name', 'WHITTAKER HOUSE', true),
  F('headline_text', 'Headline', 'BURNS FOR SIXTY HOURS', true),
  F('scent_notes', 'Scent notes', 'black fig, cedar, a little woodsmoke'),
  F('vessel_colour', 'Vessel colour', 'oxblood red'),
  F('vessel_finish', 'Vessel finish', 'a matt crackle glaze with a glossy interior'),
  F('surface_material', 'Surface', 'dark oiled walnut'),
  F('background_color', 'Background colour', 'near black green'),
  F('burn_line', 'Burn line', 'Soy and rapeseed wax, cotton wick')
 ]
});

fs.writeFileSync(__dirname + '/41-50.json', JSON.stringify(out, null, 1) + '\n');
console.log(out.length + ' Spezifikationen geschrieben');
