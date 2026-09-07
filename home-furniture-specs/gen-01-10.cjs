const fs = require('fs');
const F = (key, label, placeholder, required = false, inputType = 'text') => ({ key, label, inputType, placeholder, required });
const IMG = ph => F('image_description', 'What should be the main subject?', ph, false, 'textarea');
const out = [];
const t = (o) => out.push(o);

t({
 slug: 'home-furniture-modular-sofa-painted-arch',
 title: 'Modular Sofa Painted Arch',
 description: 'A modular three seat sofa in front of a painted arch, with a heavy headline running across the curve.',
 searchKeywords: ['sofa','modular sofa','couch','living room furniture','velvet','furniture ad','seating','arch backdrop','home furniture','interior brand'],
 prompt: `Create a furniture advertisement for a modular three seat sofa, vertical 4:5.

Behind the sofa a tall arch of flat {{background_color}} is painted straight onto a studio wall, the curve cropped by the top edge of the frame. The sofa stands a little left of centre on bare screed, shot from a low three quarter angle with a 50mm lens so the seat cushions sit at eye height. It is upholstered in {{upholstery_material}} in {{sofa_color}}, the cushions dented where somebody has been sitting, one seam standing slightly proud of the others. A single hard light from the right lays a long soft edged shadow across the floor; a weak fill keeps the dark side readable, and dust hangs in the beam.

Text layout: "{{brand_name}}" small and widely letterspaced along the very top. The headline "{{headline_text}}" runs across the arch in a heavy grotesque, wrapping naturally so its lower part overlaps the backrest. Bottom left one short line of small type reads "{{detail_line}}". Bottom right a pill shaped button in the same {{background_color}} carries "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Colour as it comes out of the camera, no glossy retouching, fabric weave clearly visible.

{{image_description}}`,
 fields: [
  IMG('a modular three seat sofa on bare screed in front of a painted arch'),
  F('brand_name', 'Brand name', 'NORWICK', true),
  F('headline_text', 'Headline', 'SIT LONGER', true),
  F('sofa_color', 'Sofa colour', 'deep petrol blue'),
  F('upholstery_material', 'Upholstery', 'ribbed velvet'),
  F('background_color', 'Arch colour', 'burnt orange'),
  F('detail_line', 'Detail line', 'Three modules. Twelve ways to sit.'),
  F('cta_text', 'Button text', 'See the range')
 ]
});

t({
 slug: 'home-furniture-boucle-lounge-chair-spotlight',
 title: 'Boucle Lounge Chair Spotlight',
 description: 'A single lounge chair alone in a dark room under one narrow spotlight, with almost no type.',
 searchKeywords: ['lounge chair','armchair','boucle','dark studio','spotlight','minimal poster','seating','furniture ad','designer chair','home furniture'],
 prompt: `A quiet, almost theatrical poster for one lounge chair, vertical 4:5.

The room is dark - a deep {{wall_color}} plaster wall and a floor in the same tone, no horizon line visible. A narrow spotlight drops from high above and lands only on the chair, so the light falls off into black within half a metre of it. The chair is upholstered in {{upholstery_material}} in {{chair_color}} and stands on {{leg_material}} legs; the loops of the fabric catch the light along the top of the backrest and go completely dark underneath. Shot on an 85mm lens from slightly below so the chair reads larger than it is. A little grain sits in the shadows, the way a pushed film frame looks.

Text layout: almost nothing. "{{brand_name}}" in small capitals in the upper left corner. In the lower left, set very small against the black, one tight block reading "{{tagline_text}}". Nothing else - no badges, no price, no icons.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real studio lighting rather than an even render, deep true blacks, no lifted shadows.

{{image_description}}`,
 fields: [
  IMG('a single boucle lounge chair under one narrow spotlight in a dark room'),
  F('brand_name', 'Brand name', 'HALVE', true),
  F('tagline_text', 'Tagline', 'One chair. Nothing else in the room.', true),
  F('chair_color', 'Chair colour', 'off white'),
  F('upholstery_material', 'Upholstery', 'chunky boucle'),
  F('leg_material', 'Leg material', 'blackened steel'),
  F('wall_color', 'Room colour', 'near black charcoal')
 ]
});

t({
 slug: 'home-furniture-midcentury-armchair-feature-column',
 title: 'Mid-Century Armchair Feature Column',
 description: 'A walnut framed armchair on a sage ground with a column of small feature notes down one side.',
 searchKeywords: ['armchair','mid century','walnut','sage green','feature list','furniture ad','accent chair','seating','wood frame','home furniture'],
 prompt: `Build a furniture advertisement for a mid century armchair, vertical 4:5.

The background is a flat wall painted {{background_color}}, lit from the left so a soft gradient runs across it. The chair sits centre right on a {{floor_material}} floor, angled about thirty degrees away from the camera, photographed at seat height with a 50mm lens. The frame is solid {{frame_wood}} with visible open grain and one small dent near the front leg; the seat and back pad are {{upholstery_color}} wool with piped edges. Late afternoon light comes through a window out of frame and puts a hard rectangle of sun across the seat and part of the wall.

Text layout: down the left third, clear of the chair, a narrow column of four small round icons each followed by two words of text, reading "{{feature_list}}". Above them "{{brand_name}}" as a small wordmark. Across the top of the image the headline "{{headline_text}}" in a light serif with generous letterspacing. Bottom right, small, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Honest daylight, wool that looks like wool, no plastic sheen.

{{image_description}}`,
 fields: [
  IMG('a mid century walnut armchair with a wool seat against a sage wall'),
  F('brand_name', 'Brand name', 'FELLGREN', true),
  F('headline_text', 'Headline', 'Made to be sat in', true),
  F('feature_list', 'Feature notes', 'Solid frame - Wool seat - Ten year guarantee - Flat packed'),
  F('background_color', 'Wall colour', 'sage green'),
  F('frame_wood', 'Frame wood', 'oiled walnut'),
  F('upholstery_color', 'Seat colour', 'rust orange'),
  F('floor_material', 'Floor', 'pale poured concrete'),
  F('price_text', 'Price line', 'from 449')
 ]
});

t({
 slug: 'home-furniture-office-chair-handwritten-callouts',
 title: 'Office Chair Handwritten Callouts',
 description: 'A mesh office chair on a deep colour field with hand drawn arrows and handwritten notes around it.',
 searchKeywords: ['office chair','desk chair','ergonomic','mesh chair','annotated poster','handwriting','home office','furniture ad','seating','lumbar support'],
 prompt: `A loud, hand annotated advertisement for an ergonomic office chair, vertical 4:5.

The whole background is one flat field of {{background_color}} with a faint paper grain over it. The chair floats in the middle, cut out cleanly, shot straight on from the front with a very slight tilt, its {{mesh_color}} mesh back translucent enough that the field colour shows faintly through the weave. Base and arms are {{frame_finish}}. A soft contact shadow sits under the castors so it does not look pasted on.

Around the chair, drawn in loose {{accent_color}} handwriting with curved arrows pointing at the parts, four short notes read "{{callout_notes}}". The handwriting is uneven, as if somebody marked up a print.

Text layout: top centre, small capitals, "{{eyebrow_text}}". Under it the headline "{{headline_text}}" in a fat condensed slab type large enough to fill the width. At the bottom a small badge with "{{brand_name}}" inside it.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Print poster feel with slightly imperfect registration, not a clean 3D render.

{{image_description}}`,
 fields: [
  IMG('an ergonomic mesh office chair cut out on a flat colour field'),
  F('brand_name', 'Brand name', 'ORDWAY', true),
  F('headline_text', 'Headline', 'SIT STRAIGHT.', true),
  F('eyebrow_text', 'Eyebrow', 'THINK POSTURE'),
  F('callout_notes', 'Handwritten notes', 'BREATHABLE MESH BACK - HEIGHT 44 TO 56 CM - LUMBAR THAT ACTUALLY MOVES - SILENT CASTORS'),
  F('background_color', 'Background colour', 'deep ink blue'),
  F('mesh_color', 'Mesh colour', 'warm grey'),
  F('frame_finish', 'Frame finish', 'matt black aluminium'),
  F('accent_color', 'Handwriting colour', 'chalk white')
 ]
});

t({
 slug: 'home-furniture-dining-chairs-colour-row',
 title: 'Dining Chairs Colour Row',
 description: 'Four dining chairs lined up in four colourways across a split background, each one numbered.',
 searchKeywords: ['dining chair','chair set','colour options','product row','furniture ad','seating','kitchen chair','colourway','numbered','home furniture'],
 prompt: `A colourway advertisement for a moulded dining chair, vertical 4:5.

The frame is split horizontally: the upper two thirds a flat {{upper_color}}, the lower third a flat {{lower_color}}, the seam running just below the seats. Four identical chairs stand in a row along that seam, evenly spaced, all photographed from the same three quarter angle and composited side by side. Their shells are {{shell_material}} in four colours reading left to right as {{colour_names}}; the legs are {{leg_material}} on all four. Even soft light from the front left, one shared shadow line under the row, tiny mould marks visible along the shell edges.

Text layout: above the row, centred, "{{headline_text}}" in a wide light sans. Under each chair a small number 01 to 04 with the colour name beneath it. Top left corner "{{brand_name}}". Bottom centre a thin outlined button reading "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Flat catalogue lighting made with real lamps, saturated colours, no gradient glow behind the chairs.

{{image_description}}`,
 fields: [
  IMG('four moulded dining chairs in four colours lined up in a row'),
  F('brand_name', 'Brand name', 'KESTNER', true),
  F('headline_text', 'Headline', 'FOUR MOODS, ONE CHAIR', true),
  F('colour_names', 'Colour names', 'tomato, moss, cobalt, bone'),
  F('shell_material', 'Shell material', 'matt recycled polypropylene'),
  F('leg_material', 'Legs', 'powder coated steel in black'),
  F('upper_color', 'Upper background', 'warm yellow'),
  F('lower_color', 'Lower background', 'deep teal'),
  F('cta_text', 'Button text', 'Pick your four')
 ]
});

t({
 slug: 'home-furniture-leather-club-chair-oxblood',
 title: 'Leather Club Chair Oxblood',
 description: 'A worn cognac leather club chair in a deep red room, shot like an editorial portrait.',
 searchKeywords: ['club chair','leather armchair','cognac leather','oxblood','editorial','seating','reading chair','furniture ad','patina','home furniture'],
 prompt: `An editorial style furniture advertisement for a leather club chair, vertical 4:5.

A small windowless room painted {{wall_color}} down to the skirting, floorboards stained almost black. The chair stands three quarters on, pushed close to the wall so its shadow doubles behind it. The hide is {{leather_type}} in {{leather_color}}, genuinely worn in - creased across the seat, darker along the arm tops where hands have rested, one small scuff near the front corner. A brass floor lamp just out of frame at the upper left gives the only light, warm and directional, so the top of the backrest glows while the base falls away. Slight lens vignetting, medium format look.

Text layout: the headline "{{headline_text}}" set in a high contrast serif across the top, right aligned to the outer margin. Below the chair a thin rule and one sentence of small italic type reading "{{subline_text}}". Bottom left "{{brand_name}}" small, and directly under it "{{detail_line}}" smaller still.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Leather with real grain and creases, tungsten colour left uncorrected, no HDR flattening.

{{image_description}}`,
 fields: [
  IMG('a worn cognac leather club chair against a deep red wall'),
  F('brand_name', 'Brand name', 'BRAETON', true),
  F('headline_text', 'Headline', 'YEARS SUIT IT', true),
  F('subline_text', 'Subline', 'Full grain hide that only looks better the longer you keep it.'),
  F('leather_color', 'Leather colour', 'cognac'),
  F('leather_type', 'Leather type', 'vegetable tanned full grain'),
  F('wall_color', 'Wall colour', 'oxblood red'),
  F('detail_line', 'Detail line', 'Made in small batches')
 ]
});

t({
 slug: 'home-furniture-pouf-ottoman-discount-disc',
 title: 'Pouf Ottoman Discount Disc',
 description: 'A round upholstered pouf on a strong colour field with a large circular discount badge.',
 searchKeywords: ['pouf','ottoman','footstool','discount badge','sale poster','seating','accent furniture','furniture ad','round','home furniture'],
 prompt: `A punchy sale advertisement for a round upholstered pouf, vertical 4:5.

The background is one saturated field of {{background_color}}, with a lighter disc of the same hue behind the product like a spotlight painted on. The pouf sits centred and low in the frame, photographed straight on at floor level, covered in {{upholstery_material}} in {{pouf_color}} with a piped seam running round the top edge and a small fabric tab on one side. The stitching runs slightly uneven where the seam closes. A short crisp shadow to the right keeps it grounded.

Text layout: upper left, a large circle in {{accent_color}} containing "{{offer_text}}" in two stacked lines. Across the upper right the headline "{{headline_text}}" in a rounded bold sans, wrapping to fit the space. Bottom strip: "{{brand_name}}" on the left, and on the right a solid rectangular button reading "{{cta_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Photographed fabric with visible pile and thread, not a smooth 3D surface.

{{image_description}}`,
 fields: [
  IMG('a round upholstered pouf centred on a saturated colour field'),
  F('brand_name', 'Brand name', 'PILLARD', true),
  F('headline_text', 'Headline', 'PUT YOUR FEET UP', true),
  F('offer_text', 'Offer badge', '30% OFF'),
  F('pouf_color', 'Pouf colour', 'mustard yellow'),
  F('upholstery_material', 'Cover material', 'corduroy'),
  F('background_color', 'Background colour', 'cobalt blue'),
  F('accent_color', 'Badge colour', 'hot pink'),
  F('cta_text', 'Button text', 'SHOP NOW')
 ]
});

t({
 slug: 'home-furniture-corner-sofa-night-sale',
 title: 'Corner Sofa Night Sale',
 description: 'An L-shaped corner sofa in a blacked out showroom with acid yellow sale typography.',
 searchKeywords: ['corner sofa','L shaped sofa','sectional','sale','night','showroom','furniture ad','seating','discount','home furniture'],
 prompt: `A late night sale advertisement for an L shaped corner sofa, vertical 4:5.

The set is a blacked out showroom: black floor, black walls, nothing else in it. The sofa sits at an angle across the lower half of the frame, lit by two hidden strip lights that rake along the front edge of the seat and leave the back in darkness. It is upholstered in {{upholstery_material}} in {{sofa_color}}, with {{cushion_count}} scatter cushions thrown onto it unevenly, one of them half fallen into the corner. A slim floor lamp stands behind the right arm, switched on, flaring a little into the lens.

Text layout: the word "{{headline_text}}" fills the upper third in enormous {{accent_color}} letters, slightly clipped by the frame edges. Under it, small and white, "{{subline_text}}". Lower right a round outlined badge carrying "{{offer_text}}". Bottom left "{{brand_name}}" in small white capitals.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Real showroom lighting with visible falloff and a little flare, deep blacks, no even ambient fill.

{{image_description}}`,
 fields: [
  IMG('an L shaped corner sofa lit by strip lights in a blacked out showroom'),
  F('brand_name', 'Brand name', 'LUNDHAGEN', true),
  F('headline_text', 'Headline word', 'SALE', true),
  F('subline_text', 'Subline', 'Four nights only. Every corner sofa in the showroom.'),
  F('offer_text', 'Badge text', 'UP TO 50% OFF'),
  F('sofa_color', 'Sofa colour', 'saffron yellow'),
  F('upholstery_material', 'Upholstery', 'brushed velvet'),
  F('cushion_count', 'Number of cushions', 'four'),
  F('accent_color', 'Type colour', 'acid yellow')
 ]
});

t({
 slug: 'home-furniture-rattan-chair-sunroom',
 title: 'Rattan Chair Sunroom',
 description: 'A rattan accent chair in a terracotta sunroom with hard midday shadows from a window frame.',
 searchKeywords: ['rattan chair','accent chair','cane furniture','sunroom','terracotta','shadow play','seating','furniture ad','natural material','home furniture'],
 prompt: `A warm, sunlit advertisement for a rattan accent chair, vertical 4:5.

A corner of a sunroom with walls in {{wall_color}} lime plaster and a floor of {{floor_material}}. The chair stands against the corner turned slightly to the left, photographed at standing height with a 35mm lens so a little of the ceiling shows. The frame is {{frame_material}} with a woven cane back you can see straight through, and a flat {{cushion_color}} seat pad tied on with two cloth ties, one bow looser than the other. Hard midday sun comes through an unseen window and lays the shadow of a glazing bar across the wall and over the seat; the woven back throws a lace of small shadows onto the floor.

Text layout: the headline "{{headline_text}}" sits high on the wall in a light condensed serif, following the picture edge rather than the shadows. Bottom left a small stacked block reads "{{brand_name}}" over "{{detail_line}}". Bottom right, very small, "{{price_text}}".

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Direct sun with genuinely hard shadow edges, warm cast left in, dust on the floor.

{{image_description}}`,
 fields: [
  IMG('a rattan accent chair in a plastered sunroom corner with hard window shadows'),
  F('brand_name', 'Brand name', 'ASOLARE', true),
  F('headline_text', 'Headline', 'The chair for the slow hour', true),
  F('wall_color', 'Wall colour', 'terracotta'),
  F('floor_material', 'Floor', 'unglazed red quarry tile'),
  F('frame_material', 'Frame material', 'bent rattan in a natural finish'),
  F('cushion_color', 'Cushion colour', 'olive green canvas'),
  F('detail_line', 'Detail line', 'Hand woven, one at a time'),
  F('price_text', 'Price line', '219')
 ]
});

t({
 slug: 'home-furniture-bar-stool-brass-walnut',
 title: 'Bar Stool Brass Walnut',
 description: 'A single bar stool on a dark ground with the brand name set vertically down one edge.',
 searchKeywords: ['bar stool','counter stool','brass','walnut','minimal poster','vertical wordmark','seating','kitchen furniture','furniture ad','home furniture'],
 prompt: `A restrained product poster for a counter height bar stool, vertical 4:5.

Nothing but a seamless {{background_color}} sweep, the horizon between floor and wall left visible as a soft curve rather than retouched away. The stool stands alone slightly right of centre, shot dead on from a low angle with a 100mm lens so the legs stay parallel. The seat is {{seat_material}}, the frame {{frame_material}} with brazed joints you can actually see, and the footrest bar carries a band of wear where shoes have rubbed the finish thin. One large soft light from the upper left, one narrow strip reflection running down the outside of the front leg.

Text layout: "{{brand_name}}" runs vertically down the left edge in tall thin capitals reading bottom to top, filling almost the whole height. In the upper right corner three short lines of small type read "{{spec_lines}}". Bottom right, in a single line, "{{tagline_text}}". No badges and no buttons.

Invented brand only, no real manufacturers and no real product names. Every piece of quoted text appears exactly once, spelled exactly as given and never repeated. Studio light from real softboxes, metal that reflects the room rather than a white void, small honest imperfections in the finish.

{{image_description}}`,
 fields: [
  IMG('a single counter height bar stool with a walnut seat and brass frame'),
  F('brand_name', 'Brand name', 'MERIDEN', true),
  F('tagline_text', 'Tagline', 'Sit high. Stay long.', true),
  F('spec_lines', 'Spec lines', 'Seat height 68 cm / Solid walnut seat / Lacquered brass frame'),
  F('seat_material', 'Seat material', 'solid oiled walnut'),
  F('frame_material', 'Frame material', 'lacquered brass tube'),
  F('background_color', 'Background', 'deep charcoal grey')
 ]
});

fs.writeFileSync(__dirname + '/01-10.json', JSON.stringify(out, null, 1) + '\n');
console.log(out.length + ' Spezifikationen geschrieben');
