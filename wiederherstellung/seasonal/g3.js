module.exports = [
{
 n:21, occasion:"New Year", variant:"brand", slug:"seasonal-rooftop-firework-banner",
 title:"Rooftop Firework Banner",
 description:"A rooftop party seen from behind with fireworks over the city, the brand on a hanging banner and the sky left open.",
 keywords:["seasonal","new year","fireworks","rooftop","city","night","brand","copy space","celebration","banner"],
 prompt:`Night photograph for a {{occasion}} campaign, vertical 4:5.

From a rooftop terrace looking out over {{location_detail}} at night. A handful of people stand at the parapet with their backs to the camera, seen only as dark shapes, {{prop_detail}} on a table in the near corner. Fireworks burst low over the skyline. String lights run across the top of the frame. The upper {{copy_space_position}} of the frame is open night sky.

The only writing in the picture is the brand name "{{brand_name}}", printed on a fabric banner tied along the parapet rail in {{accent_color}}.

Photographed with a 35mm lens at f/2.8 on a two second exposure, {{light_mood}}, colour straight out of the camera. The firework trails smear slightly, one figure is blurred by movement, the concrete parapet is stained and chipped, the banner sags between its ties. The people are anonymous silhouettes with no recognisable faces.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"people at a rooftop parapet watching fireworks over a city",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HOYLAND",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"New Year",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"an ice bucket and a row of glasses",required:false},
  {key:"accent_color",label:"Banner colour",inputType:"text",placeholder:"gold on deep green",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"warm string lights against a cold city night",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"third",required:false},
  {key:"location_detail",label:"Skyline",inputType:"text",placeholder:"low rise old town roofs with a river behind",required:false}
 ]
},
{
 n:22, occasion:"Halloween", variant:"text", slug:"seasonal-keyhole-shadow-spider",
 title:"Keyhole Shadow Spider",
 description:"A keyhole of orange light thrown onto a red wall with a product standing in the beam and spiders on the floor.",
 keywords:["seasonal","halloween","shadow","orange","spider","product","sale","poster","dramatic","offer"],
 prompt:`Advertising photograph for a Halloween promotion, vertical 4:5.

A hard {{accent_color}} light is thrown onto a deep {{background_color}} wall through a cut out, so a giant keyhole shape of light stands on the wall with everything around it in shadow. A hand reaches down into the top of the keyhole from above, seen only as a silhouette. {{product_type}} stands upright in the middle of the lit shape on a small step, and two plastic spiders sit on the floor in front of it.

Type over the photograph: the brand name "{{brand_name}}" small at the top, the occasion "{{occasion}}" in a rough brush face across the lower third, the discount "{{discount}}" in large capitals beneath it, and the validity line "{{validity_period}}" in small capitals at the very bottom.

Photographed with a 50mm lens at f/8, one hard light through the cut out and nothing else, colour straight out of the camera. The wall is painted unevenly, the edges of the light shape are slightly soft, dust sits on the step, the spiders are obviously plastic.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a bag of granola standing in a keyhole of orange light on a red wall",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HOLLOWFIELD",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Halloween Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"30% OFF EVERYTHING",required:true},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"a stand up pouch of granola",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"UNTIL 31 OCTOBER",required:false},
  {key:"accent_color",label:"Light colour",inputType:"text",placeholder:"burnt pumpkin orange",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"dark blood red",required:false}
 ]
},
{
 n:23, occasion:"Halloween", variant:"text", slug:"seasonal-pumpkin-podium-sale",
 title:"Pumpkin Podium Sale",
 description:"Carved pumpkins stacked into a podium carrying bags and shoes, lit from inside, with the offer set above.",
 keywords:["seasonal","halloween","pumpkin","podium","products","orange","sale","poster","display","discount"],
 prompt:`Advertising photograph for a Halloween retail promotion, vertical 4:5.

Three carved pumpkins of different sizes are stacked into a rough podium in the lower half of the frame, candles burning inside them so the cut faces glow. {{product_type}} is balanced on top of the stack and on the step beside it. The background is a smoky {{background_color}} gradient with low fog drifting across the floor.

Type over the photograph: the occasion "{{occasion}}" across the upper third, the first word in a light serif and the second in heavy {{accent_color}} capitals, under it a bordered box carrying "{{discount}}", and at the bottom the validity line "{{validity_period}}" with the brand name "{{brand_name}}" beneath it.

Photographed with a 50mm lens at f/4, candlelight from inside the pumpkins plus one hard blue rim light from behind, colour straight out of the camera. The pumpkin skin is ribbed and blemished, the carved edges are ragged, wax has run onto the floor, the fog is uneven.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"three carved pumpkins stacked into a podium with a handbag and heels on top",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MORWEN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"HALLOWEEN BIG SALE",required:true},
  {key:"discount",label:"Badge text",inputType:"text",placeholder:"SAVE UP TO 50%",required:true},
  {key:"product_type",label:"Products",inputType:"text",placeholder:"a handbag, a pair of heels and a folded scarf",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"LIMITED TIME ONLY - 31 OCTOBER",required:false},
  {key:"accent_color",label:"Accent colour",inputType:"text",placeholder:"bright pumpkin orange",required:false},
  {key:"background_color",label:"Background colour",inputType:"text",placeholder:"deep purple to black",required:false}
 ]
},
{
 n:24, occasion:"Halloween", variant:"brand", slug:"seasonal-fog-gate-lantern",
 title:"Fog Gate Lantern",
 description:"An iron gate standing in fog with one lantern burning, the brand on a hanging sign and the fog left clear above.",
 keywords:["seasonal","halloween","fog","gate","lantern","night","brand","copy space","atmosphere","dark"],
 prompt:`Night photograph for a {{occasion}} campaign, vertical 4:5.

A wrought iron gate stands half open at the bottom of the frame, thick fog behind it so the path beyond disappears after a few steps. A single lantern with {{accent_color}} flame hangs from the gatepost, and {{prop_detail}} sits at the foot of the post. Above the gate the fog is featureless, leaving the upper {{copy_space_position}} of the frame open.

The only writing in the picture is the brand name "{{brand_name}}", cut into a small metal sign that hangs crooked from the gate.

Photographed with a 50mm lens at f/2.8, the lantern the only warm light plus a weak cold moonlight from the left, {{light_mood}}, colour straight out of the camera. Grain in the shadows, rust running down the ironwork, wet leaves stuck to the {{surface_material}} path, the fog unevenly thick.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a half open iron gate in thick fog with one burning lantern",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"RAVENSHOLT",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Halloween",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"two small pumpkins and a pile of wet leaves",required:false},
  {key:"accent_color",label:"Lantern colour",inputType:"text",placeholder:"amber orange",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"one warm lantern against cold grey fog",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false},
  {key:"surface_material",label:"Path surface",inputType:"text",placeholder:"wet cobblestones",required:false}
 ]
},
{
 n:25, occasion:"Halloween", variant:"brand", slug:"seasonal-candy-bowl-overhead",
 title:"Candy Bowl Overhead",
 description:"An overhead bowl of wrapped sweets spilling onto black boards, the brand on the wrappers and one side kept clear.",
 keywords:["seasonal","halloween","candy","overhead","black","flat lay","brand","copy space","sweets","still life"],
 prompt:`Overhead still life for a {{occasion}} campaign, vertical 4:5.

Shot straight down onto {{surface_material}}. A wide ceramic bowl sits on the left half of the frame, filled with sweets wrapped in {{accent_color}} foil, a handful of them spilled across the boards beside it. {{prop_detail}} lies at the bottom edge. The {{copy_space_position}} of the frame is bare board.

The only writing in the picture is the brand name "{{brand_name}}", printed small and repeated across the sweet wrappers.

Photographed from directly overhead with a 50mm lens at f/6.3, one hard light from the upper right so each sweet throws a small sharp shadow and the foil flashes unevenly, {{light_mood}}, colour straight out of the camera. The boards are scratched with paint in the grain, the foil is creased, two sweets are half unwrapped.

The brand is invented; no real confectionery brands, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a ceramic bowl of foil wrapped sweets spilling onto black boards",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"GRIMWICK",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Halloween",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a small carved pumpkin and a black paper bat",required:false},
  {key:"accent_color",label:"Wrapper colour",inputType:"text",placeholder:"orange and purple",required:false},
  {key:"surface_material",label:"Surface",inputType:"text",placeholder:"black painted floorboards",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"hard directional light with short sharp shadows",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"right third",required:false}
 ]
},
{
 n:26, occasion:"Halloween", variant:"brand", slug:"seasonal-bat-shadow-wall",
 title:"Bat Shadow Wall",
 description:"Cut out bats throwing hard shadows across an orange plaster wall, the brand stencilled small at the bottom.",
 keywords:["seasonal","halloween","bats","shadow","orange","wall","graphic","brand","copy space","minimal"],
 prompt:`Advertising photograph for a {{occasion}} campaign, vertical 4:5.

A plain {{background_color}} plaster wall fills the frame. A dozen black paper bats are pinned to it at different heights and angles, mostly along the lower third, and a single hard light from the right throws a long sharp {{accent_color}} shadow from each one across the plaster. {{prop_detail}} stands on the floor at the bottom edge. The upper {{copy_space_position}} of the frame is bare wall and shadow.

The only writing in the picture is the brand name "{{brand_name}}", stencilled small in black near the bottom left corner.

Photographed straight on with a 50mm lens at f/8, one hard bare light from the right at a low angle, {{light_mood}}, colour straight out of the camera. The plaster is troweled unevenly with a filled crack, the bats are visibly cut from paper with slightly rough edges, the pins are visible.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"black paper bats pinned to an orange plaster wall throwing long shadows",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"VESPERA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Halloween",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a single small pumpkin",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"saturated pumpkin orange",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"one hard raking light, no fill",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false},
  {key:"accent_color",label:"Shadow tone",inputType:"text",placeholder:"deep brown black",required:false}
 ]
},
{
 n:27, occasion:"Winter Sale", variant:"text", slug:"seasonal-ice-block-price",
 title:"Ice Block Price",
 description:"A product frozen inside a block of ice on a cold blue ground, with the offer cut across the middle.",
 keywords:["seasonal","winter sale","ice","frozen","blue","product","sale","poster","cold","discount"],
 prompt:`Advertising photograph for a winter clearance, vertical 4:5.

A rough block of ice stands on a {{surface_material}} surface against a deep {{background_color}} background. {{product_type}} is frozen inside it, visible but distorted through the ice. Meltwater has pooled around the base and run down the front face, and a few chips of ice lie beside it.

Type over the photograph: the brand name "{{brand_name}}" small at the top, the occasion "{{occasion}}" in a wide light serif across the upper third, the discount "{{discount}}" set very large across the middle so the block shows through the counters of the letters, and at the bottom the line "{{closing_line}}" with the validity line "{{validity_period}}" under it.

Photographed with an 85mm lens at f/5.6, one hard light from behind and to the left so the ice glows from within and throws a caustic pattern onto the surface, a weak cold fill from the front, colour straight out of the camera. The ice is cloudy in the middle with trapped bubbles and a cracked corner, the surface is wet and streaked.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a rough block of ice with a folded knit jumper frozen inside it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"FROSTLINE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Winter Clearance",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"60% OFF",required:true},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"a folded cream knit jumper",required:false},
  {key:"closing_line",label:"Closing line",inputType:"text",placeholder:"EVERYTHING MUST GO",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"8 - 31 JANUARY",required:false},
  {key:"background_color",label:"Background colour",inputType:"text",placeholder:"glacier blue",required:false},
  {key:"surface_material",label:"Surface",inputType:"text",placeholder:"wet brushed steel",required:false}
 ]
},
{
 n:28, occasion:"Winter Sale", variant:"text", slug:"seasonal-knit-stack-card",
 title:"Knit Stack Card",
 description:"A stack of folded knitwear under cold light with the offer written on a card propped against it.",
 keywords:["seasonal","winter sale","knitwear","stack","card","cold","sale","poster","retail","discount"],
 prompt:`Advertising photograph for a winter sale, vertical 4:5.

A stack of six folded knit jumpers in {{accent_color}} tones stands on a pale ash table, shot from just above the height of the stack. {{prop_detail}} lies beside it. The background is a plain cold {{background_color}} wall.

A stiff paper card is propped against the front of the stack and the offer is printed on it: the occasion "{{occasion}}" in a condensed serif at the top, the discount "{{discount}}" very large in the middle, the validity line "{{validity_period}}" under it, and the brand name "{{brand_name}}" small at the foot of the card. A second, smaller card at the side carries "{{badge_text}}".

Photographed with an 85mm lens at f/4, one large softbox from the left and a black flag on the right so the fold edges read, cool north window light, colour straight out of the camera. The wool is pilled in places, the folds are not perfectly square, the table has ring marks, the card is slightly bent.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a stack of six folded knit jumpers with a printed card propped against it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"LAMBRIDGE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Winter Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"20% OFF EVERYTHING",required:true},
  {key:"badge_text",label:"Second card",inputType:"text",placeholder:"ONLY THIS WEEK",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"12 - 19 JANUARY",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a pair of folded wool gloves",required:false},
  {key:"accent_color",label:"Knitwear tones",inputType:"text",placeholder:"oatmeal, slate blue and rust",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"pale grey blue",required:false},
 ]
},
{
 n:29, occasion:"Winter Sale", variant:"brand", slug:"seasonal-frosted-window-brand",
 title:"Frosted Window Brand",
 description:"Ice crystals across a window pane with the brand drawn by a finger and the rest of the glass left clear.",
 keywords:["seasonal","winter sale","frost","window","cold","blue","brand","copy space","minimal","texture"],
 prompt:`Close photograph for a {{occasion}} campaign, vertical 4:5.

A single window pane fills the frame, feathered ice crystals grown across the {{copy_space_position}} of it and the rest of the glass clear enough to show a blurred {{location_detail}} outside. A frame edge of {{surface_material}} and a little dust cut into the bottom corner, and the whole picture sits under a {{accent_color}} cast.

The only writing in the picture is the brand name "{{brand_name}}", drawn with a fingertip through the frost so the clear glass shows through the strokes, with drips running down from the letters.

Photographed with a 50mm lens at f/2.8, daylight from outside only, {{light_mood}}, colour straight out of the camera. The old glass has bubbles and a slight wave, condensation has pooled on the sill, the frost is genuinely uneven with bare patches, one finger stroke smears rather than cuts clean.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a frosted window pane with a name drawn through the ice by a finger",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"NORDVANE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Winter Sale",required:false},
  {key:"location_detail",label:"View outside",inputType:"text",placeholder:"a snow covered yard with bare trees",required:false},
  {key:"accent_color",label:"Colour cast",inputType:"text",placeholder:"cold steel blue",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"flat blue winter daylight",required:false},
  {key:"copy_space_position",label:"Frosted area",inputType:"text",placeholder:"upper two thirds",required:false},
  {key:"surface_material",label:"Frame material",inputType:"text",placeholder:"peeling white painted wood",required:false}
 ]
},
{
 n:30, occasion:"Winter Sale", variant:"brand", slug:"seasonal-snow-field-rail",
 title:"Snow Field Rail",
 description:"A clothes rail standing alone in a snowy field at dusk, the brand printed on the swing tags.",
 keywords:["seasonal","winter sale","snow","clothing rail","dusk","surreal","brand","copy space","cold","retail"],
 prompt:`Advertising photograph for a {{occasion}} campaign, vertical 4:5.

A chrome clothes rail stands alone in the middle of a snow covered field, hung with {{product_type}}. Tracks lead up to it through the snow. The horizon is low and the sky above takes the upper {{copy_space_position}} of the frame, a flat {{background_color}} at dusk with a line of dark trees far behind. {{prop_detail}} lies half buried in the snow beside the rail.

The only writing in the picture is the brand name "{{brand_name}}", printed on the paper swing tags hanging from every garment.

Photographed with a 50mm lens at f/4 from just below eye level, {{light_mood}}, colour straight out of the camera, taken by a person with a camera rather than from a tripod. The snow is trodden and grey in places, the rail is spotted with rust at the joints, the coats move slightly in the wind so one hem is blurred.

The brand is invented; no real company names, garment brands or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a chrome clothes rail hung with winter coats standing alone in a snowy field",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"BRENHOLM",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Winter Sale",required:false},
  {key:"product_type",label:"On the rail",inputType:"text",placeholder:"six wool coats in dark colours",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a fallen wooden hanger",required:false},
  {key:"background_color",label:"Sky colour",inputType:"text",placeholder:"cold lilac blue",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"blue hour, no direct sun",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
}
];
