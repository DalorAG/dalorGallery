module.exports = [
{
 n:41, occasion:"Easter", variant:"brand", slug:"seasonal-meadow-picnic-cloth",
 title:"Meadow Picnic Cloth",
 description:"A checked cloth spread on spring grass with eggs and a basket, the brand on the basket tag and the grass left open.",
 keywords:["seasonal","easter","picnic","meadow","spring","outdoor","brand","copy space","grass","daylight"],
 prompt:`Outdoor still life for an {{occasion}} campaign, vertical 4:5.

A {{accent_color}} checked cloth is spread across the lower half of the frame on real grass, painted eggs and {{prop_detail}} laid out on it, a low willow basket at the edge. Beyond the cloth the meadow runs on into soft focus with {{location_detail}}, so the upper {{copy_space_position}} of the frame is open green.

The only writing in the picture is the brand name "{{brand_name}}", printed on the small paper tag tied to the basket handle.

Photographed with a 50mm lens at f/2.8 from just above the cloth, {{light_mood}}, colour straight out of the camera. The cloth is creased from folding and rucked where the grass pushes up under it, a few blades have blown onto the eggs, one corner is turned back, the grass is uneven and not uniformly green.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a checked picnic cloth on grass with painted eggs and a willow basket",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"WILLOWMEAD",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Easter",required:false},
  {key:"prop_detail",label:"On the cloth",inputType:"text",placeholder:"a jug of milk and a plate of small cakes",required:false},
  {key:"location_detail",label:"Background",inputType:"text",placeholder:"a hedgerow with blossom behind it",required:false},
  {key:"accent_color",label:"Cloth colour",inputType:"text",placeholder:"soft red and white",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"bright hazy afternoon sun from behind",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"third",required:false}
 ]
},
{
 n:42, occasion:"Easter", variant:"brand", slug:"seasonal-foil-egg-mint",
 title:"Foil Egg Mint",
 description:"Foil wrapped chocolate eggs poured across a mint green sweep, the brand repeated on the foil.",
 keywords:["seasonal","easter","chocolate","foil","mint","overhead","brand","copy space","sweets","colour"],
 prompt:`Overhead still life for an {{occasion}} promotion, vertical 4:5.

Shot straight down onto a smooth {{background_color}} paper sweep. Small chocolate eggs wrapped in {{accent_color}} foil are poured in a loose diagonal drift across the lower two thirds of the frame, tighter in the middle and thinning out at the edges. Two eggs are unwrapped with the foil crumpled beside them, and {{prop_detail}} lies at the side. The {{copy_space_position}} of the frame is bare paper.

The only writing in the picture is the brand name "{{brand_name}}", printed small and repeated across the foil of every egg.

Photographed from directly overhead with a 50mm lens at f/6.3, one broad soft light from the top of the frame plus a small hard light from the right so the foil flashes in places, {{light_mood}}, colour straight out of the camera. The foil is creased and slightly torn, one egg has a fingerprint melted into the chocolate, the paper has a soft crease near one edge.

The brand is invented; no real confectionery brands, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"foil wrapped chocolate eggs poured in a drift across a mint green sweep",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"COCOA LARK",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Easter",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a small paper cone half filled with eggs",required:false},
  {key:"accent_color",label:"Foil colours",inputType:"text",placeholder:"rose gold, lilac and pale yellow",required:false},
  {key:"background_color",label:"Paper colour",inputType:"text",placeholder:"soft mint green",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"clean bright light with small hard highlights",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"upper third",required:false}
 ]
},
{
 n:43, occasion:"Mother's Day", variant:"text", slug:"seasonal-handwritten-bouquet-card",
 title:"Handwritten Bouquet Card",
 description:"A wrapped bouquet lying on a table with a handwritten card, the offer set in script above it.",
 keywords:["seasonal","mothers day","flowers","bouquet","handwritten","warm","sale","poster","gift","offer"],
 prompt:`Advertising photograph for a Mother's Day promotion, vertical 4:5.

A bouquet of {{accent_color}} flowers wrapped in {{wrap_style}} lies at an angle across a pale worn oak table in the lower two thirds of the frame, the stems cut and a few loose petals around them. A small folded card stands propped against the wrapping with handwriting on it. The background is a plain {{background_color}} wall.

Type over the photograph: the brand name "{{brand_name}}" small at the very top, the occasion "{{occasion}}" in a flowing script across the upper third, then the headline "{{headline}}" in a light serif, the discount "{{discount}}" in capitals, and at the bottom "{{validity_period}}" in small spaced letters.

Photographed with a 50mm lens at f/3.5, soft window light from the left with a white bounce on the right, colour straight out of the camera. The paper is creased from the roll, one bloom is past its best, water has spotted the table, the handwriting on the card is uneven.

The brand is invented; no real florists, company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a wrapped bouquet lying on a table with a handwritten card propped against it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"ROSABEL",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Mother's Day",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"For the one who never asks for anything",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"20% OFF ALL BOUQUETS",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"ORDER BY FRIDAY FOR SUNDAY",required:false},
  {key:"wrap_style",label:"Wrapping",inputType:"text",placeholder:"soft brown kraft paper with twine",required:false},
  {key:"accent_color",label:"Flower colours",inputType:"text",placeholder:"blush pink and cream peony",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"warm clay pink",required:false},
 ]
},
{
 n:44, occasion:"Mother's Day", variant:"text", slug:"seasonal-breakfast-tray-note",
 title:"Breakfast Tray Note",
 description:"A breakfast tray with peonies photographed from above, the offer set in the free space beside it.",
 keywords:["seasonal","mothers day","breakfast","tray","overhead","warm","sale","poster","gift","discount"],
 prompt:`Overhead advertising photograph for a Mother's Day promotion, vertical 4:5.

Shot straight down onto a {{surface_material}} bed cover. A wooden tray sits in the lower half of the frame carrying {{prop_detail}}, with a few stems of {{accent_color}} peonies laid across one corner and a small folded note tucked under the plate. The cover above the tray is smooth and empty.

Type over the photograph in that empty space: the occasion "{{occasion}}" in a light script, then the headline "{{headline}}" in a serif, then the discount "{{discount}}" in capitals inside a thin ruled box, and the brand name "{{brand_name}}" with the validity line "{{validity_period}}" at the very bottom of the frame.

Photographed from directly overhead with a 35mm lens at f/5.6, soft warm morning window light from the left, colour straight out of the camera. The cover is genuinely rumpled, the coffee has spilled a little into the saucer, a petal has dropped, the tray is scratched.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a breakfast tray with coffee, pastries and peonies seen from above on a bed",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MAISON ELVEA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Mother's Day",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Let her stay in bed this Sunday",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"15% OFF GIFT BOXES",required:true},
  {key:"prop_detail",label:"On the tray",inputType:"text",placeholder:"a cup of coffee, two pastries and a small jug",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"UNTIL THE SECOND SUNDAY IN MAY",required:false},
  {key:"accent_color",label:"Flower colour",inputType:"text",placeholder:"soft blush pink",required:false},
  {key:"surface_material",label:"Bed cover",inputType:"text",placeholder:"rumpled cream linen",required:false},
 ]
},
{
 n:45, occasion:"Mother's Day", variant:"brand", slug:"seasonal-peony-vase-window",
 title:"Peony Vase Window",
 description:"Peonies in a glass vase on a windowsill in backlight, the brand printed on the wrapping paper beside it.",
 keywords:["seasonal","mothers day","peonies","window","backlight","brand","copy space","flowers","still life","warm"],
 prompt:`Still life advertising photograph for a {{occasion}} campaign, vertical 4:5.

A clear glass vase of {{accent_color}} peonies stands on a {{surface_material}} windowsill in the lower right of the frame, backlit by a bright window so the petals glow and the stems show through the water. A sheet of used wrapping paper and {{prop_detail}} lie folded beside it. The window fills the upper {{copy_space_position}} of the frame as a soft white blur with no detail.

The only writing in the picture is the brand name "{{brand_name}}", printed in a small repeated pattern across the wrapping paper.

Photographed with an 85mm lens at f/2.8 into the light, {{light_mood}}, colour straight out of the camera. The glass has water marks and a chip in the rim, the water is slightly cloudy with cut stems, one bloom has dropped petals onto the sill, the paint on the sill is worn back to bare wood in one place.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a glass vase of peonies backlit on a painted windowsill",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"FLEURETTA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Mother's Day",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a coil of twine and a pair of florist scissors",required:false},
  {key:"accent_color",label:"Flower colour",inputType:"text",placeholder:"pale blush and cream",required:false},
  {key:"surface_material",label:"Windowsill",inputType:"text",placeholder:"chipped white painted wood",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"strong backlight with the room dark in front",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:46, occasion:"Summer Sale", variant:"text", slug:"seasonal-beach-umbrella-grid",
 title:"Beach Umbrella Grid",
 description:"Striped beach umbrellas seen from straight above on hot sand with the offer set into a gap between them.",
 keywords:["seasonal","summer sale","beach","umbrellas","aerial","bright","sale","poster","holiday","discount"],
 prompt:`Aerial advertising photograph for a summer sale, vertical 4:5.

Looking straight down from high above a beach. Striped umbrellas in {{accent_color}} are open in a loose grid across hot pale sand, each throwing a hard round shadow, with towels, {{prop_detail}} and a few tiny figures between them. One patch of open sand runs through the middle of the frame with nothing on it.

Type over the photograph in that open patch: the occasion "{{occasion}}" in heavy capitals, the discount "{{discount}}" set very large beneath it, then "{{closing_line}}" and the validity line "{{validity_period}}" in small capitals. The brand name "{{brand_name}}" sits small in the top left corner.

Photographed from a drone with a 24mm lens at f/5.6 at midday, {{light_mood}}, colour straight out of the camera. The umbrellas are not evenly spaced or aligned, the fabric is faded on some of them, the sand is scuffed with footprints and one towel is half kicked over. The figures are small and anonymous, no faces are readable.

The brand is invented; no real resorts, company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"striped beach umbrellas on hot sand seen from directly above",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"SOLANTE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"END OF SUMMER SALE",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"UP TO 50% OFF",required:true},
  {key:"closing_line",label:"Closing line",inputType:"text",placeholder:"SWIM, SUN AND EVERYTHING AFTER",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"WHILE STOCK LASTS",required:false},
  {key:"prop_detail",label:"Extra props",inputType:"text",placeholder:"striped loungers and a few inflatable rings",required:false},
  {key:"accent_color",label:"Umbrella colours",inputType:"text",placeholder:"orange, turquoise and white",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"hard midday sun with short black shadows",required:false}
 ]
},
{
 n:47, occasion:"Summer Sale", variant:"brand", slug:"seasonal-poolside-float-towel",
 title:"Poolside Float Towel",
 description:"A float and towel at the edge of a pool in strong sun, the brand woven into the towel and the water left open.",
 keywords:["seasonal","summer sale","pool","float","towel","sun","brand","copy space","holiday","bright"],
 prompt:`Advertising photograph for a {{occasion}} campaign, vertical 4:5.

The edge of a swimming pool runs across the lower third of the frame, {{surface_material}} at the near side. A rolled towel, {{prop_detail}} and a pair of sunglasses lie on the tiles, and a {{accent_color}} inflatable float drifts in the water just beyond. The rest of the frame is the pool surface, lit sun caustics moving across the bottom, so the upper {{copy_space_position}} is open water.

The only writing in the picture is the brand name "{{brand_name}}", woven into the border of the towel.

Photographed with a 35mm lens at f/5.6 from a standing height at the poolside, {{light_mood}}, colour straight out of the camera. Wet footprints are drying on the tiles, one tile is cracked, the float has a scuffed patch and a slightly soft valve, the water surface is genuinely broken rather than glassy.

The brand is invented; no real resorts, company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a rolled towel and sunglasses at a pool edge with an inflatable float in the water",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"CALDERA BAY",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Summer Sale",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a straw hat and a cold drink in a tumbler",required:false},
  {key:"accent_color",label:"Float colour",inputType:"text",placeholder:"hot coral",required:false},
  {key:"surface_material",label:"Poolside surface",inputType:"text",placeholder:"pale terracotta tiles",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"hard high sun with bright caustics in the water",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"two thirds",required:false}
 ]
},
{
 n:48, occasion:"Summer Sale", variant:"brand", slug:"seasonal-palm-shadow-wall",
 title:"Palm Shadow Wall",
 description:"Palm fronds throwing a hard shadow across a coral painted wall with the brand painted small at the base.",
 keywords:["seasonal","summer sale","palm","shadow","coral","wall","minimal","brand","copy space","sun"],
 prompt:`Advertising photograph for a {{occasion}} campaign, vertical 4:5.

A rendered wall painted {{background_color}} fills the frame. Late afternoon sun throws the hard shadow of palm fronds across it from the right, the leaves themselves out of frame. Against the wall at the bottom edge stands {{prop_detail}}. The upper {{copy_space_position}} of the frame is wall and shadow only.

The only writing in the picture is the brand name "{{brand_name}}", hand painted small in {{accent_color}} near the bottom of the wall.

Photographed straight on with a 50mm lens at f/8, direct low sun as the only light, {{light_mood}}, colour straight out of the camera. The render is patched in two places and cracked near the base, the paint has faded unevenly, the shadow edges soften towards the top as the fronds get further from the wall, and a little sand has blown against the foot of it.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"palm frond shadows thrown across a coral painted rendered wall",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"PALMERA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Summer Sale",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a folded striped deck chair",required:false},
  {key:"accent_color",label:"Lettering colour",inputType:"text",placeholder:"deep teal",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"warm coral",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"hard low afternoon sun, no fill",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"two thirds",required:false}
 ]
},
{
 n:49, occasion:"Back to School", variant:"text", slug:"seasonal-grid-paper-supplies",
 title:"Grid Paper Supplies",
 description:"Stationery laid out on squared paper with the offer ruled into the grid like a worked exercise.",
 keywords:["seasonal","back to school","stationery","grid paper","overhead","bright","sale","poster","supplies","discount"],
 prompt:`Overhead advertising poster for a back to school promotion, vertical 4:5.

Shot straight down onto a large sheet of squared exercise paper, {{background_color}}. Along the right edge and the bottom, {{prop_detail}} are laid out in a neat row, all in {{accent_color}}. The rest of the squared sheet is bare.

Type over the photograph, aligned to the printed squares as if ruled in: the occasion "{{occasion}}" in a heavy sans across the top, the discount "{{discount}}" set very large in the middle with a hand drawn box ruled around it, then the headline "{{headline}}", and at the bottom the brand name "{{brand_name}}" with the validity line "{{validity_period}}" beside it.

Photographed from directly overhead with a 50mm lens at f/7.1, one broad even light so the paper stays flat in tone and every object throws a short shadow, colour straight out of the camera. The paper has a fold line and a slightly torn punched hole, one pencil is sharpened short with shavings left beside it, the ruler has scratches.

The brand is invented; no real stationery brands, company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"pencils, a ruler and an eraser laid out along the edges of squared exercise paper",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"KRAYON HOUSE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"BACK TO SCHOOL",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"25% OFF",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Everything on the list, cheaper",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"UNTIL 5 SEPTEMBER",required:false},
  {key:"prop_detail",label:"Stationery",inputType:"text",placeholder:"pencils, a ruler, an eraser and a pair of scissors",required:false},
  {key:"accent_color",label:"Stationery colours",inputType:"text",placeholder:"bright red, yellow and cobalt",required:false},
  {key:"background_color",label:"Paper colour",inputType:"text",placeholder:"white with pale blue squares",required:false}
 ]
},
{
 n:50, occasion:"Back to School", variant:"brand", slug:"seasonal-locker-row-backpack",
 title:"Locker Row Backpack",
 description:"A backpack hanging on an open locker door in a school corridor, the brand on its patch and the wall left open.",
 keywords:["seasonal","back to school","lockers","backpack","corridor","brand","copy space","school","interior","daylight"],
 prompt:`Interior photograph for a {{occasion}} campaign, vertical 4:5.

A row of {{accent_color}} metal lockers runs away down a school corridor on the right of the frame, one door standing open with a {{product_type}} hanging from its hook and {{prop_detail}} stacked on the shelf inside. The corridor floor is {{surface_material}}. The wall on the left takes the {{copy_space_position}} of the frame and carries nothing.

The only writing in the picture is the brand name "{{brand_name}}", stitched onto the woven patch on the front of the bag.

Photographed with a 35mm lens at f/2.8 from standing height, daylight through a window further down the corridor plus overhead strip lights, {{light_mood}}, colour straight out of the camera. The lockers are dented and the paint is chipped around the handles, old sticker residue is left on two doors, the floor is scuffed and shows a mop streak.

The brand is invented; no real school names, company names or logos appear anywhere, and no people are in the frame.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a backpack hanging from the hook of an open school locker",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"BRIXWELL",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Back to School",required:false},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"canvas backpack in mustard yellow",required:false},
  {key:"prop_detail",label:"In the locker",inputType:"text",placeholder:"a stack of exercise books and a water bottle",required:false},
  {key:"accent_color",label:"Locker colour",inputType:"text",placeholder:"faded teal green",required:false},
  {key:"surface_material",label:"Floor",inputType:"text",placeholder:"scuffed grey vinyl",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"mixed daylight and cool strip lighting",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"left third",required:false}
 ]
}
];
