module.exports = [
{
 n:31, occasion:"Anniversary", variant:"text", slug:"seasonal-anniversary-number-confetti",
 title:"Anniversary Number Confetti",
 description:"A giant metallic number standing in falling confetti with the anniversary offer set around it.",
 keywords:["seasonal","anniversary","number","confetti","celebration","gold","sale","poster","milestone","offer"],
 prompt:`Advertising poster for an anniversary promotion, vertical 4:5.

A large freestanding number "{{year_number}}" cut from {{accent_color}} metal stands in the middle of a deep teal studio, taller than a person and slightly angled. Confetti falls around it and has piled at its base, and a few paper streamers hang from above.

Type over the photograph: the brand name "{{brand_name}}" small at the top, the occasion "{{occasion}}" in a wide spaced serif just under it, then across the lower third the headline "{{headline}}", the discount "{{discount}}" in heavy capitals, and a filled pill button reading "{{cta_text}}" with "{{validity_period}}" beneath it.

Photographed with a 50mm lens at f/5.6, one hard light from the upper left and a coloured kicker from the right so the metal picks up two different reflections and throws a real shadow, colour straight out of the camera. The metal is brushed and fingerprinted with one dented edge, the confetti falls unevenly, the studio floor is scuffed.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a giant metallic number standing in a studio with confetti falling around it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MARLOWE & SONS",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"TEN YEARS WITH YOU",required:true},
  {key:"year_number",label:"Number",inputType:"text",placeholder:"10",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"A decade deserves a discount",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"10% OFF EVERY ORDER",required:true},
  {key:"cta_text",label:"Button label",inputType:"text",placeholder:"CELEBRATE WITH US",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"ALL THIS MONTH",required:false},
  {key:"accent_color",label:"Number finish",inputType:"text",placeholder:"brushed gold",required:false},
 ]
},
{
 n:32, occasion:"Grand Opening", variant:"text", slug:"seasonal-ribbon-cutting-opening",
 title:"Ribbon Cutting Opening",
 description:"A red ribbon stretched across a new shop door with scissors mid cut and the opening details set beside it.",
 keywords:["seasonal","grand opening","ribbon","shop","launch","red","poster","event","retail","offer"],
 prompt:`Advertising photograph for a shop opening, vertical 4:5.

A new shop front fills the frame, its door glazed and its {{surface_material}} facade freshly painted. A wide {{accent_color}} ribbon is stretched across the doorway and a pair of large scissors is closing on it, held by a hand entering from the right edge. {{prop_detail}} stands on the pavement to one side.

Type over the photograph: the occasion "{{occasion}}" in heavy capitals across the upper third, under it the opening date "{{date_label}}", then along the bottom the headline "{{headline}}", the offer line "{{discount}}", and the brand name "{{brand_name}}" set large as the last line.

Photographed with a 35mm lens at f/5.6, bright overcast daylight with a weak fill from the left, colour straight out of the camera, taken by a person with a camera. The ribbon is creased and hangs unevenly, the pavement is wet in patches, protective tape is still on part of the door frame, one reflection in the glass shows the ordinary street opposite.

The brand is invented; no real shop names, chains or logos appear anywhere, and no recognisable faces are shown.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a red ribbon across a new shop door with scissors closing on it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"KESTREL LANE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"GRAND OPENING",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Our doors are finally open",required:true},
  {key:"discount",label:"Offer line",inputType:"text",placeholder:"25% OFF ON OPENING WEEKEND",required:true},
  {key:"date_label",label:"Opening date",inputType:"text",placeholder:"SATURDAY 14 MARCH",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"two tall bay trees in pots",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"bright pillar box red",required:false},
  {key:"surface_material",label:"Facade",inputType:"text",placeholder:"deep green painted timber",required:false}
 ]
},
{
 n:33, occasion:"Grand Opening", variant:"brand", slug:"seasonal-balloon-arch-entrance",
 title:"Balloon Arch Entrance",
 description:"A balloon arch built over a shop entrance in morning light, the brand on the door glass and the sky left open.",
 keywords:["seasonal","grand opening","balloons","arch","entrance","celebration","brand","copy space","retail","launch"],
 prompt:`Advertising photograph for a {{occasion}}, vertical 4:5.

An arch of balloons in {{accent_color}} is built over the entrance of a small shop, filling the lower two thirds of the frame. The door stands open, {{prop_detail}} is set out on the pavement, and a strip of {{surface_material}} facade runs above the arch with the upper {{copy_space_position}} of the frame left plain.

The only writing in the picture is the brand name "{{brand_name}}", applied in white vinyl capitals across the door glass.

Photographed with a 35mm lens at f/5.6 from across the pavement, {{light_mood}}, colour straight out of the camera. The balloons are not all the same size and a couple are slightly underinflated, the tape holding the arch shows at one anchor, the pavement is cracked and a drain cover sits in the foreground.

The brand is invented; no real shop names, chains or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a balloon arch built over an open shop entrance",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"FINCH & PARR",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Grand Opening",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a chalkboard sign and a crate of flowers",required:false},
  {key:"accent_color",label:"Balloon colours",inputType:"text",placeholder:"cobalt blue, white and gold",required:false},
  {key:"surface_material",label:"Facade",inputType:"text",placeholder:"pale render with a tiled band",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"low clear morning sun from the left",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"third",required:false}
 ]
},
{
 n:34, occasion:"Anniversary", variant:"brand", slug:"seasonal-cake-sparkler-counter",
 title:"Cake and Sparkler Counter",
 description:"A celebration cake with a burning sparkler on a shop counter, the brand printed on the cake box behind.",
 keywords:["seasonal","anniversary","cake","sparkler","counter","warm","brand","copy space","celebration","bakery"],
 prompt:`Advertising photograph for an {{occasion}}, vertical 4:5.

A single round cake finished in {{accent_color}} sits on a {{surface_material}} shop counter in the lower half of the frame, one sparkler burning in the top of it and throwing sparks. Pushed to the side are {{prop_detail}}. Behind the counter the room falls into soft darkness so the upper {{copy_space_position}} of the frame is open.

The only writing in the picture is the brand name "{{brand_name}}", printed on the flat cake box standing on its edge behind the cake.

Photographed with a 50mm lens at f/2.8 and a shutter slow enough for the sparks to draw short trails, warm tungsten from above the counter plus the sparkler itself, {{light_mood}}, colour straight out of the camera. The icing is hand spread and not perfectly even, the counter has knife marks and a few crumbs, one spark has landed on the wood.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a round iced cake on a counter with a burning sparkler in the top",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"DOVEHILL",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Anniversary",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a stack of small plates and a cake knife",required:false},
  {key:"accent_color",label:"Icing colour",inputType:"text",placeholder:"deep raspberry pink",required:false},
  {key:"surface_material",label:"Counter surface",inputType:"text",placeholder:"worn butcher block",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"warm pool of light with the room dark behind",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:35, occasion:"Valentine's Day", variant:"text", slug:"seasonal-heart-balloon-percent",
 title:"Heart Balloon Percent",
 description:"Red heart balloons crowding the top of the frame with the discount set large underneath them.",
 keywords:["seasonal","valentines","hearts","balloons","red","romantic","sale","poster","discount","offer"],
 prompt:`Advertising poster for a Valentine promotion, vertical 4:5.

A dozen heart shaped foil balloons in {{accent_color}} crowd the upper half of a soft {{background_color}} wall, their ribbons hanging down loose across the middle of the frame. The lower part of the wall is bare.

Type over the photograph: the brand name "{{brand_name}}" small at the very top, the occasion "{{occasion}}" in a light script across the middle where the ribbons hang, the discount "{{discount}}" in very large capitals underneath, then the line "{{closing_line}}" and a filled pill button reading "{{cta_text}}" with "{{validity_period}}" below it.

Photographed with a 50mm lens at f/4, one big softbox from the front left and a warm bounce from the right so the foil takes two soft highlights and the balloons throw real shadows on the wall, colour straight out of the camera. The foil is creased where it was folded, one balloon is sagging, the wall paint is uneven.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a dozen red foil heart balloons with ribbons hanging down a pink wall",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"CARINELLE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Valentine's Day",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"35% OFF",required:true},
  {key:"closing_line",label:"Closing line",inputType:"text",placeholder:"ON EVERY GIFT SET",required:false},
  {key:"cta_text",label:"Button label",inputType:"text",placeholder:"SHOP THE EDIT",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"UNTIL 14 FEBRUARY",required:false},
  {key:"accent_color",label:"Balloon colour",inputType:"text",placeholder:"deep scarlet red",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"warm blush pink",required:false}
 ]
},
{
 n:36, occasion:"Valentine's Day", variant:"text", slug:"seasonal-rose-petal-podium",
 title:"Rose Petal Podium",
 description:"A product on a pink podium in a drift of rose petals, with the offer set in a soft serif around it.",
 keywords:["seasonal","valentines","roses","podium","pink","product","sale","poster","romantic","discount"],
 prompt:`Product advertising photograph for a Valentine promotion, vertical 4:5.

A short round podium in {{podium_color}} stands centre frame against a {{background_color}} backdrop. {{product_type}} sits on it. Fresh rose petals lie drifted around the foot of the podium and a few fall through the frame, blurred by their speed. A single long stemmed rose lies flat just behind.

Type over the photograph: the brand name "{{brand_name}}" small at the top, the occasion "{{occasion}}" in a light script across the upper third, a bordered box on the left carrying "{{discount}}", and along the bottom the headline "{{headline}}" with the validity line "{{validity_period}}" underneath.

Photographed with an 85mm lens at f/4, one large softbox from the upper left through diffusion and a warm bounce from below, colour straight out of the camera. The petals are real and slightly bruised at the edges, the podium has a chalky chipped rim, the backdrop seam shows faintly at the bottom.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a glass perfume bottle on a pink podium surrounded by fallen rose petals",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"AMOURVEL",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Valentine's Edit",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Something worth unwrapping",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"25% OFF",required:true},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"a faceted glass perfume bottle",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"7 - 14 FEBRUARY",required:false},
  {key:"podium_color",label:"Podium colour",inputType:"text",placeholder:"dusty rose",required:false},
  {key:"background_color",label:"Backdrop colour",inputType:"text",placeholder:"deep cherry red",required:false}
 ]
},
{
 n:37, occasion:"Valentine's Day", variant:"brand", slug:"seasonal-two-cups-marble",
 title:"Two Cups on Marble",
 description:"Two cups and a single rose on a marble top in low warm light, the brand glazed onto one cup.",
 keywords:["seasonal","valentines","coffee","marble","romantic","warm","brand","copy space","still life","cafe"],
 prompt:`Still life advertising photograph for a {{occasion}} campaign, vertical 4:5.

Two small cups sit close together on a counter top of {{surface_material}} in the lower third of the frame, one of them still steaming. A single {{accent_color}} rose lies across the marble beside them and {{prop_detail}} is pushed to the edge. Above the counter the background is a plain dark wall, so the upper {{copy_space_position}} of the frame stays clear.

The only writing in the picture is the brand name "{{brand_name}}", glazed in small letters on the side of the nearer cup.

Photographed with an 85mm lens at f/2.8, one warm window light from the right raking across the marble, a black flag on the left, {{light_mood}}, colour straight out of the camera. The marble is veined and slightly chipped at the front edge, one cup has a coffee ring under it, a petal has already come loose.

The brand is invented; no real company names, cafes or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"two small cups and a single red rose on a marble counter",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MERIDA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Valentine's Day",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a folded linen napkin and a small spoon",required:false},
  {key:"accent_color",label:"Rose colour",inputType:"text",placeholder:"deep crimson",required:false},
  {key:"surface_material",label:"Counter surface",inputType:"text",placeholder:"warm cream marble with grey veins",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"low warm side light with the background dark",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"two thirds",required:false}
 ]
},
{
 n:38, occasion:"Valentine's Day", variant:"brand", slug:"seasonal-wax-seal-envelope",
 title:"Wax Seal Envelope",
 description:"A red envelope closed with a wax seal carrying the brand initial, lying on soft fabric with room above.",
 keywords:["seasonal","valentines","envelope","wax seal","red","romantic","brand","copy space","still life","letter"],
 prompt:`Close still life for a {{occasion}} campaign, vertical 4:5.

A single {{accent_color}} envelope lies at an angle in the lower half of the frame on rumpled {{surface_material}}, closed with a round wax seal. Partly under it lie {{prop_detail}}. The fabric runs on smooth and unbroken through the upper {{copy_space_position}} of the frame.

The only writing in the picture is the brand name "{{brand_name}}", pressed into the wax seal in small capitals.

Photographed with a 100mm macro lens at f/4, one soft window light from the upper left and a weak warm bounce from the right, {{light_mood}}, colour straight out of the camera. The wax is unevenly poured with a thin lip on one side, the paper has a soft fold and a fibrous torn edge, the fabric holds real creases and a stray thread.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a red envelope closed with a wax seal lying on rumpled fabric",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"LOVAINE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Valentine's Day",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a few dried rose petals and a length of thin ribbon",required:false},
  {key:"accent_color",label:"Envelope colour",inputType:"text",placeholder:"deep pillar box red",required:false},
  {key:"surface_material",label:"Fabric",inputType:"text",placeholder:"heavy oxblood velvet",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"soft directional light with a gentle falloff",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:39, occasion:"Easter", variant:"text", slug:"seasonal-pastel-egg-grid",
 title:"Pastel Egg Grid",
 description:"Painted eggs set out in an even grid on a pastel ground with the offer running across the middle rows.",
 keywords:["seasonal","easter","eggs","pastel","grid","overhead","sale","poster","spring","discount"],
 prompt:`Overhead advertising poster for an Easter promotion, vertical 4:5.

Shot straight down onto a flat {{background_color}} board. Painted eggs in {{accent_color}} are set out in an even grid of five across and seven down, each one slightly different in pattern, one of them tipped over on its side and one missing so a gap shows in the middle rows.

Type over the photograph: the brand name "{{brand_name}}" small at the top, the occasion "{{occasion}}" in a rounded sans across the upper third, the discount "{{discount}}" set very large across the middle rows where the eggs are missing, and at the bottom the headline "{{headline}}" with the validity line "{{validity_period}}" under it.

Photographed from directly overhead with a 50mm lens at f/8, one broad diffused light from the top of the frame so each egg throws a short soft shadow, colour straight out of the camera. The paint on the eggs is brushed on and streaky, two shells are chipped, the board is faintly scratched.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"painted pastel eggs set out in an even grid on a flat board",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HAVENDALE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Easter Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"30% OFF",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Spring stock, spring prices",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"THE WHOLE EASTER WEEKEND",required:false},
  {key:"accent_color",label:"Egg colours",inputType:"text",placeholder:"mint, butter yellow and pale coral",required:false},
  {key:"background_color",label:"Board colour",inputType:"text",placeholder:"soft duck egg blue",required:false}
 ]
},
{
 n:40, occasion:"Easter", variant:"text", slug:"seasonal-spring-basket-offer",
 title:"Spring Basket Offer",
 description:"A woven basket of eggs and tulips on a bright table, with the offer set on a card leaning against it.",
 keywords:["seasonal","easter","basket","tulips","spring","bright","sale","poster","fresh","discount"],
 prompt:`Advertising photograph for an Easter promotion, vertical 4:5.

A woven basket sits on a whitewashed plank table filled with painted eggs and {{prop_detail}}, cut {{accent_color}} tulips leaning out of it to one side. The background is a bright {{background_color}} wall with a soft shadow falling across it.

A printed card leans against the front of the basket and carries the offer: the occasion "{{occasion}}" at the top in a rounded serif, the discount "{{discount}}" very large in the middle, the line "{{closing_line}}" under it, and the brand name "{{brand_name}}" small at the foot. A small tag tied to the basket handle reads "{{badge_text}}".

Photographed with a 50mm lens at f/4, bright diffused daylight from the left through a window, colour straight out of the camera. The willow of the basket is uneven with a broken strand, a tulip leaf is bent, the table has water marks and a few grains of soil.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a woven basket of painted eggs with tulips leaning out of it",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MEADOWROSS",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Easter Offer",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"BUY 2 GET 1 FREE",required:true},
  {key:"badge_text",label:"Basket tag",inputType:"text",placeholder:"THIS WEEKEND",required:false},
  {key:"closing_line",label:"Closing line",inputType:"text",placeholder:"IN STORE AND ONLINE",required:false},
  {key:"prop_detail",label:"In the basket",inputType:"text",placeholder:"straw and small chocolate eggs in foil",required:false},
  {key:"accent_color",label:"Tulip colour",inputType:"text",placeholder:"warm coral",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"pale spring green",required:false},
 ]
}
];
