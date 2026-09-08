module.exports = [
{
 n:1, occasion:"Christmas", variant:"text", slug:"seasonal-fir-frame-countdown",
 title:"Fir Frame Countdown",
 description:"An overhead flat lay with a wreath of fir, cones and baubles framing all four edges and the whole offer stacked in the bare middle.",
 keywords:["seasonal","christmas","sale","flat lay","wreath","fir","discount","poster","holiday","offer"],
 prompt:`Flat lay advertising poster for a seasonal sale, vertical 4:5.

Shot straight down onto a painted board in {{background_color}}. Fir sprigs, pine cones, red glass baubles and {{prop_detail}} are laid in a wreath frame around all four edges, leaving the middle of the board bare.

In the open middle, from top to bottom: the brand name "{{brand_name}}" in small widely spaced capitals, the occasion "{{occasion}}" in a tall serif, the discount "{{discount}}" set very large in {{accent_color}} across the full width, the validity line "{{validity_period}}" in small capitals, and at the bottom a filled pill button reading "{{cta_text}}".

Photographed from directly overhead with a 50mm lens at f/8, two softboxes low to the board so every needle throws a short shadow, colour straight out of the camera. The board shows brush marks and a few scuffs, the needles are matte and uneven, one bauble sits slightly off the line.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a wreath of fir, cones and red baubles framing a bare painted board",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"NORDHAVN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Christmas Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"40% OFF",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"20 - 26 DECEMBER",required:false},
  {key:"cta_text",label:"Button label",inputType:"text",placeholder:"SHOP NOW",required:false},
  {key:"accent_color",label:"Accent colour",inputType:"text",placeholder:"warm gold",required:false},
  {key:"background_color",label:"Board colour",inputType:"text",placeholder:"deep cranberry red",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"dried orange slices and cinnamon sticks",required:false}
 ]
},
{
 n:2, occasion:"Christmas", variant:"text", slug:"seasonal-advent-podium-offer",
 title:"Advent Podium Offer",
 description:"A product raised on a round podium between candy canes and fir, with a discount badge pinned to the side.",
 keywords:["seasonal","christmas","podium","product","sale","badge","red","holiday","display","discount"],
 prompt:`Product advertising photograph for a holiday promotion, vertical 4:5.

A short cylindrical podium in {{podium_color}} stands centre frame against a seamless {{background_color}} wall. On the podium sits {{product_type}}. Fir branches, red glass baubles and candy canes crowd in from the top corners and along the bottom edge, some of them out of focus.

Text sits on top of the photograph: the brand name "{{brand_name}}" small at the very top, the occasion "{{occasion}}" in a bold condensed serif across the upper third, and a round badge pinned to the right side carrying "{{discount}}". Along the bottom edge a thin line of capitals reads "{{validity_period}}".

Photographed on a full-frame camera with an 85mm lens at f/4, one large softbox from the left and a bare bulb behind the fir for a hard rim, colour straight out of the camera. The podium paint is slightly chalky with a chipped edge, the baubles carry fingerprints, the seam where the paper backdrop curves is visible at the bottom.

The brand is invented; no real company names, logos or product names appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a glass jar of spiced biscuits standing on a round red podium",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"KRINGLE & CO",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Christmas Limited Sale",required:true},
  {key:"discount",label:"Badge text",inputType:"text",placeholder:"50% OFF",required:true},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"a glass jar of spiced biscuits with a cloth lid",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"ONLY UNTIL 24 DECEMBER",required:false},
  {key:"podium_color",label:"Podium colour",inputType:"text",placeholder:"glossy postbox red",required:false},
  {key:"background_color",label:"Backdrop colour",inputType:"text",placeholder:"deep wine red",required:false}
 ]
},
{
 n:3, occasion:"Christmas", variant:"text", slug:"seasonal-santa-sack-drop",
 title:"Santa Sack Drop",
 description:"A stuffed red sack tipping gifts across a dark red floor, with the date in one corner and the offer stacked below.",
 keywords:["seasonal","christmas","gifts","sack","sale","december","red","poster","holiday","offer"],
 prompt:`Advertising poster for a holiday sale, vertical 4:5.

A heavy red felt sack lies tipped on its side on a dark {{background_color}} floor, wrapped gifts in {{wrap_style}} spilling out of the mouth of it towards the camera. The sack fills the middle of the frame, the floor above and below it is empty.

Text over the photograph: the day and month "{{date_label}}" stacked small in the top left corner, the brand name "{{brand_name}}" opposite it on the right, the occasion "{{occasion}}" in a large script across the lower third with the discount "{{discount}}" set beneath it in heavy capitals, and a last line in small spaced capitals reading "{{closing_line}}".

Photographed with a 35mm lens at f/5.6 from just above floor level, one hard key light from the upper right so the sack throws a long shadow, a weak fill from the left, colour straight out of the camera. The felt is fuzzy and creased, the ribbon on one parcel has come loose, dust shows on the floor in the light.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a heavy red felt sack tipped over with wrapped gifts spilling out",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"VELDMARK",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Merry Christmas Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"UP TO 60% OFF",required:true},
  {key:"date_label",label:"Corner date",inputType:"text",placeholder:"25 DEC",required:false},
  {key:"closing_line",label:"Closing line",inputType:"text",placeholder:"IN STORE AND ONLINE",required:false},
  {key:"wrap_style",label:"Gift wrap",inputType:"text",placeholder:"gold paper with green velvet ribbon",required:false},
  {key:"background_color",label:"Floor colour",inputType:"text",placeholder:"deep oxblood red",required:false}
 ]
},
{
 n:4, occasion:"Christmas", variant:"brand", slug:"seasonal-candlelit-table-corner",
 title:"Candlelit Table Corner",
 description:"A dark table corner with candles, fir and gift boxes lit by flame, keeping the whole upper half of the frame free.",
 keywords:["seasonal","christmas","candles","table","copy space","warm","holiday","still life","gifts","dark"],
 prompt:`Still life advertising photograph for a {{occasion}} campaign, vertical 4:5.

The bottom third of the frame is the corner of a {{surface_material}} table. Three tapered candles burn at different heights, fir sprigs and {{prop_detail}} lie between them, and two wrapped gift boxes sit at the edge. Above the table the room falls away into darkness, so the upper {{copy_space_position}} of the frame stays open and empty for text to be added later.

The only writing anywhere in the picture is the brand name "{{brand_name}}", printed small on the paper tag tied to the nearest gift box, and the ribbon on that box is {{accent_color}}.

Photographed with a 50mm lens at f/2.8, lit only by the candle flames plus one weak warm lamp from outside the frame to the left, {{light_mood}}, colour straight out of the camera. Wax has run down one candle, the tabletop has ring marks and scratches, the fir needles have dropped onto the wood.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"three burning candles, fir sprigs and two wrapped gifts on a dark table corner",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HOLMWOOD",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Christmas",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a bowl of clementines and a few star anise",required:false},
  {key:"surface_material",label:"Table surface",inputType:"text",placeholder:"dark scrubbed oak",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"low amber candlelight with deep shadow",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"two thirds",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"forest green",required:false}
 ]
},
{
 n:5, occasion:"Christmas", variant:"brand", slug:"seasonal-snow-window-display",
 title:"Snow Window Display",
 description:"A lit shop window at night behind falling snow, the brand painted in gold on the glass and the wall above left clear.",
 keywords:["seasonal","christmas","shop window","night","snow","gold","retail","storefront","holiday","brand"],
 prompt:`Night photograph of a shop front for a {{occasion}} campaign, vertical 4:5.

A small retail window glows warm against a cold blue street. A fir wreath with {{accent_color}} ribbon hangs in the centre of the glass, {{prop_detail}} is arranged on the sill inside, and snow has settled along the bottom of the frame and on the ledge. Snow falls through the light. The upper {{copy_space_position}} of the frame is {{surface_material}} with nothing on it.

The only writing in the picture is the brand name "{{brand_name}}", painted in gold across the glass in a plain serif.

Photographed handheld with a 35mm lens at f/2, mixed light: warm tungsten from inside the shop, cold street lamp from the left, {{light_mood}}. Grain in the shadows, a slight tilt to the frame, snowflakes blurred by the shutter, condensation and old fingerprints on the glass, the paintwork on the frame chipped.

The brand is invented; no real shop names, chains or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a warmly lit shop window with a fir wreath, seen through falling snow",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"ELSBERG",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Christmas",required:false},
  {key:"prop_detail",label:"Window display",inputType:"text",placeholder:"a row of glass bottles on wooden crates",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"deep red velvet",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"warm window against a cold blue street",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"third",required:false},
  {key:"surface_material",label:"Building wall",inputType:"text",placeholder:"dark painted brick",required:false}
 ]
},
{
 n:6, occasion:"Christmas", variant:"brand", slug:"seasonal-gift-wrap-flat-lay",
 title:"Gift Wrap Flat Lay",
 description:"Wrapping paper, ribbon and scissors laid out on a work table with a wide bare strip through the middle.",
 keywords:["seasonal","christmas","wrapping","flat lay","ribbon","craft","copy space","holiday","paper","brand"],
 prompt:`Overhead still life for a {{occasion}} campaign, vertical 4:5.

Shot straight down onto a {{surface_material}} work table. A part unrolled sheet of {{wrap_style}} runs in from the top edge, a wooden spool of ribbon, open scissors, a stack of blank gift tags and {{prop_detail}} are arranged along the bottom edge. A wide bare strip of table runs across the {{copy_space_position}} of the frame with nothing on it.

The only writing in the picture is the brand name "{{brand_name}}", woven small and repeated along the length of the ribbon.

Photographed from directly overhead with a 50mm lens at f/7.1, one big diffused light from the upper left, {{light_mood}}, colour straight out of the camera. The paper has real creases and one torn corner, the table is marked with old cuts and glue spots, a few paper offcuts have been left where they fell.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"an unrolled sheet of wrapping paper, ribbon spool, scissors and blank tags on a work table",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"PAPIRHUS",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Christmas",required:false},
  {key:"wrap_style",label:"Paper",inputType:"text",placeholder:"deep green paper with small gold stars",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"fir sprigs and a small pot of glue",required:false},
  {key:"surface_material",label:"Table surface",inputType:"text",placeholder:"pale worn pine",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"bright even daylight with soft shadows",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"middle",required:false}
 ]
},
{
 n:7, occasion:"Black Friday", variant:"text", slug:"seasonal-caution-tape-percentage",
 title:"Caution Tape Percentage",
 description:"Yellow barrier tape crossing a black wall with an enormous percentage number wedged between the strips.",
 keywords:["seasonal","black friday","tape","yellow","discount","bold","poster","sale","graphic","offer"],
 prompt:`Graphic advertising poster, vertical 4:5.

Two strips of {{accent_color}} barrier tape run diagonally across a matte {{background_color}} wall, crossing near the middle and leaving a clear triangle in the centre. The tape carries the words "{{tape_text}}" repeated along its length.

In the clear triangle, stacked and centred: the occasion "{{occasion}}" in tight bold capitals, then the discount "{{discount}}" set enormous and filling almost the full width, then the validity line "{{validity_period}}" and the line "{{contact_line}}" in small capitals. The brand name "{{brand_name}}" sits small at the very bottom.

Photographed straight on with a 50mm lens at f/8, one hard light from the upper left so the tape casts a real shadow onto the wall behind it, colour straight out of the camera. The tape is creased and slightly twisted, the wall has filler marks and a scuffed patch, the print on the tape is worn in places.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"two strips of yellow barrier tape crossing a black wall",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"VOLTGRIP",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"BLACK FRIDAY",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"30%",required:true},
  {key:"tape_text",label:"Tape wording",inputType:"text",placeholder:"BLACK FRIDAY",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"15 - 26 NOVEMBER",required:false},
  {key:"contact_line",label:"Extra line",inputType:"text",placeholder:"ALL CLOTHING IN STORE",required:false},
  {key:"accent_color",label:"Tape colour",inputType:"text",placeholder:"high visibility yellow",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"flat black",required:false}
 ]
},
{
 n:8, occasion:"Black Friday", variant:"text", slug:"seasonal-balloon-letter-sale",
 title:"Balloon Letter Sale",
 description:"Black foil balloon letters spelling the offer against a hard yellow ground, strings hanging loose below.",
 keywords:["seasonal","black friday","balloons","yellow","typography","sale","bold","poster","discount","graphic"],
 prompt:`Advertising poster built on a photograph of balloons, vertical 4:5.

A flat {{background_color}} wall fills the frame. Black foil balloon letters spelling "{{balloon_word}}" float in the middle of it, their strings hanging down loose and crossing each other, a small weight resting on the floor at the bottom edge.

Flat type is set over the photograph: the occasion "{{occasion}}" in heavy lowercase across the top, and below the balloons the line "{{prefix_line}}" in small capitals followed by the discount "{{discount}}" in very large numerals. The brand name "{{brand_name}}" and the note "{{cta_text}}" are set small in the bottom right corner.

Photographed straight on with a 50mm lens at f/8, one large softbox from the front left and a second from the right so the foil picks up two soft highlights and throws real shadows onto the wall, colour straight out of the camera. The foil is dented in a couple of places and reflects the room unevenly, one letter hangs slightly lower than the rest, the wall has roller texture.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"black foil balloon letters spelling SALE against a yellow wall",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HALDER",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"black friday",required:true},
  {key:"balloon_word",label:"Balloon word",inputType:"text",placeholder:"SALE",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"80%",required:true},
  {key:"prefix_line",label:"Line above the discount",inputType:"text",placeholder:"UP TO",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"hard chrome yellow",required:false},
  {key:"cta_text",label:"Corner note",inputType:"text",placeholder:"ONLINE ONLY",required:false}
 ]
},
{
 n:9, occasion:"Black Friday", variant:"text", slug:"seasonal-cracked-wall-reveal",
 title:"Cracked Wall Reveal",
 description:"A red plaster wall broken open in the centre, the occasion set in the black depth behind it.",
 keywords:["seasonal","black friday","cracked","red","wall","dramatic","sale","poster","discount","offer"],
 prompt:`Advertising poster, vertical 4:5.

A wall of {{background_color}} plaster fills the whole frame. It has been smashed open in the middle, the hole roughly square with jagged broken edges, chunks and dust still hanging in the air around it. Behind the hole there is nothing but black depth.

Inside the hole, centred: the occasion "{{occasion}}" in heavy condensed capitals over two lines, and under it a small filled bar carrying "{{badge_text}}". Above the hole the brand name "{{brand_name}}" is set small in {{accent_color}}; below the hole the discount "{{discount}}" runs in large capitals with the validity line "{{validity_period}}" beneath it.

Photographed straight on with a 50mm lens at f/9, one hard light from the upper left so every broken edge throws a shadow into the hole, colour straight out of the camera. The plaster is uneven, the paint is thicker in some places than others, real dust hangs in the beam and has settled on the lower edge of the break.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a red plaster wall smashed open in the middle with dust in the air",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"RUKTA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"BLACK FRIDAY SALE",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"UP TO 70% OFF",required:true},
  {key:"badge_text",label:"Badge text",inputType:"text",placeholder:"LIMITED TIME ONLY",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"28 - 30 NOVEMBER",required:false},
  {key:"accent_color",label:"Accent colour",inputType:"text",placeholder:"pale bone white",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"bright signal red",required:false}
 ]
},
{
 n:10, occasion:"Black Friday", variant:"brand", slug:"seasonal-street-balloon-drop",
 title:"Street Balloon Drop",
 description:"A giant white balloon hanging over an empty street while black gift boxes fall around it, the brand printed on the balloon.",
 keywords:["seasonal","black friday","balloon","street","gifts","surreal","brand","copy space","city","campaign"],
 prompt:`Advertising photograph for a {{occasion}} campaign, vertical 4:5.

A huge white weather balloon hangs low over an empty {{location_detail}}, tied by cords to a single large gift box wrapped in matte black paper with a {{accent_color}} ribbon that hangs just above the road. Dozens of {{prop_detail}} tumble through the air around it, some sharp, some blurred by their speed. The upper {{copy_space_position}} of the frame is open sky.

The only writing in the picture is the brand name "{{brand_name}}", printed in plain black capitals across the curve of the balloon.

Photographed from street level with a 24mm lens at f/5.6, {{light_mood}}, colour straight out of the camera, taken by a person with a camera rather than from a tripod. The balloon skin is creased where it was folded, the road is wet in patches with tyre marks, the buildings on both sides are ordinary and slightly out of level at the edges of the frame.

The brand is invented; no real company names, shopfronts or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a giant white balloon over an empty street with black gift boxes falling around it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"OSTMANN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Black Friday",required:false},
  {key:"location_detail",label:"Location",inputType:"text",placeholder:"city street lined with tall stone buildings",required:false},
  {key:"prop_detail",label:"Falling objects",inputType:"text",placeholder:"matte black gift boxes",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"flat overcast midday light",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"third",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"white",required:false}
 ]
}
];
