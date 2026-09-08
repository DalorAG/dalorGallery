module.exports = [
{
 n:11, occasion:"Black Friday", variant:"brand", slug:"seasonal-black-box-pyramid",
 title:"Black Box Pyramid",
 description:"A stack of matte black gift boxes lit hard from one side, one satin ribbon and the brand embossed on the top lid.",
 keywords:["seasonal","black friday","gift boxes","dark","studio","minimal","copy space","brand","stack","luxury"],
 prompt:`Studio advertising photograph for a {{occasion}} campaign, vertical 4:5.

Seven matte black gift boxes of different sizes are stacked into a leaning pyramid in the lower half of a {{background_color}} studio corner. One box near the top is tied with a single {{accent_color}} satin ribbon, the others are bare. {{prop_detail}} lies at the foot of the stack. The upper {{copy_space_position}} of the frame is empty wall.

The only writing in the picture is the brand name "{{brand_name}}", blind embossed small into the lid of the topmost box so it only shows where the light rakes across it.

Photographed with an 85mm lens at f/5.6, one hard light from the far right at a low angle so the boxes throw long shadows to the left and the card texture reads, {{light_mood}}, colour straight out of the camera. The card has faint scuffs and one dented corner, the ribbon is creased from the reel, the floor is scratched matte paint.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a leaning stack of matte black gift boxes in a dark studio corner",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"KALDER",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Black Friday",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a loose coil of ribbon",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"deep crimson",required:false},
  {key:"background_color",label:"Studio colour",inputType:"text",placeholder:"charcoal grey",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"hard raking sidelight with deep shadow",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:12, occasion:"Black Friday", variant:"brand", slug:"seasonal-neon-storefront-night",
 title:"Neon Storefront Night",
 description:"A shop front on a wet street at night with the brand glowing in neon above the door and the sky left open.",
 keywords:["seasonal","black friday","neon","night","street","rain","storefront","brand","copy space","city"],
 prompt:`Night street photograph for a {{occasion}} retail campaign, vertical 4:5.

A single shop front sits at the bottom of the frame on a wet pavement, its lit interior visible through the glass, {{prop_detail}} just inside. Rain has stopped and the pavement holds coloured reflections. Above the shop the building face is plain dark {{surface_material}}, and the upper {{copy_space_position}} of the frame is left empty.

The only writing in the picture is the brand name "{{brand_name}}", bent in {{accent_color}} neon tube above the door, its glow spilling onto the wall and the wet ground.

Photographed handheld with a 35mm lens at f/2, {{light_mood}}, colour straight out of the camera, a long enough shutter that a passing figure is smeared at the edge of the frame. Grain in the shadows, one dead segment in the neon tube, cables running from the sign into the wall, litter and a drain cover on the pavement.

The brand is invented; no real shop names, chains or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a lit shop front on a wet street at night under a neon sign",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"NOVRA",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Black Friday",required:false},
  {key:"prop_detail",label:"Shop interior",inputType:"text",placeholder:"racks of clothing and a bare bulb pendant",required:false},
  {key:"accent_color",label:"Neon colour",inputType:"text",placeholder:"electric orange",required:false},
  {key:"surface_material",label:"Building face",inputType:"text",placeholder:"soot stained brick",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"neon glow against a black street",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:13, occasion:"Cyber Monday", variant:"text", slug:"seasonal-grid-glow-countdown",
 title:"Grid Glow Countdown",
 description:"A perspective grid running to a dark horizon with the discount hovering above it and a countdown row underneath.",
 keywords:["seasonal","cyber monday","grid","digital","countdown","gradient","tech","sale","poster","discount"],
 prompt:`Digital advertising poster, vertical 4:5.

A grid of thin {{accent_color}} lines lies flat and runs away to a horizon a third of the way up the frame, the sky above it a smooth {{background_color}} gradient with a low haze at the horizon line. Nothing else is in the scene.

Type over it: the brand name "{{brand_name}}" small at the top, then the occasion "{{occasion}}" in wide spaced capitals, then the discount "{{discount}}" set very large across the middle. Under the horizon sits a row of four boxes carrying "{{countdown_labels}}", and at the bottom a filled bar reading "{{cta_text}}" with the validity line "{{validity_period}}" beneath it.

Rendered as a flat vector graphic with clean edges and no photographic texture, but with an honest print feel: even ink coverage, slight misregistration on one line of type, no gloss and no bevels.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a glowing perspective grid running to a dark horizon",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"BITHAVEN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"CYBER MONDAY",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"55% OFF",required:true},
  {key:"countdown_labels",label:"Countdown row",inputType:"text",placeholder:"01 DAYS / 12 HRS / 44 MIN / 09 SEC",required:false},
  {key:"cta_text",label:"Button label",inputType:"text",placeholder:"GRAB THE DEAL",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"ONE DAY ONLY - 1 DECEMBER",required:false},
  {key:"accent_color",label:"Grid colour",inputType:"text",placeholder:"cyan",required:false},
  {key:"background_color",label:"Sky gradient",inputType:"text",placeholder:"deep violet to near black",required:false}
 ]
},
{
 n:14, occasion:"Cyber Monday", variant:"text", slug:"seasonal-loading-bar-deal",
 title:"Loading Bar Deal",
 description:"A brick wall lit from below with the offer set above a striped loading bar that is most of the way full.",
 keywords:["seasonal","cyber monday","loading","progress bar","brick","dark","sale","poster","tech","discount"],
 prompt:`Advertising poster over a photographed wall, vertical 4:5.

A dark {{surface_material}} wall fills the frame, lit by a single lamp from the lower left so the mortar lines and the unevenness of the bricks read clearly and the top corners fall away dark.

Type over it: the brand name "{{brand_name}}" small in the top left, the occasion "{{occasion}}" in a heavy outlined display face across the upper middle, the first word white and the second in {{accent_color}}. Under it a wide rounded progress bar filled about four fifths of the way with diagonal {{accent_color}} stripes, and the word "{{status_text}}" centred just below it. At the bottom the discount "{{discount}}" in large capitals and the validity line "{{validity_period}}" in small ones.

Photographed with a 35mm lens at f/5.6, single hard lamp, colour straight out of the camera. The brickwork has chipped edges, patched mortar and old paint splashes, and the light falls off unevenly towards the corners.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a dark brick wall lit by a single lamp from below",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"ZEROQ",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Cyber Monday",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"UP TO 65% OFF SITEWIDE",required:true},
  {key:"status_text",label:"Status word",inputType:"text",placeholder:"Loading...",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"MIDNIGHT TO MIDNIGHT",required:false},
  {key:"accent_color",label:"Accent colour",inputType:"text",placeholder:"bright orange",required:false},
  {key:"surface_material",label:"Wall material",inputType:"text",placeholder:"black painted brick",required:false}
 ]
},
{
 n:15, occasion:"Cyber Monday", variant:"brand", slug:"seasonal-monitor-glow-desk",
 title:"Monitor Glow Desk",
 description:"A desk at night lit only by screen glow, the brand woven into the mousepad and the wall behind left dark and open.",
 keywords:["seasonal","cyber monday","desk","screen","night","glow","brand","copy space","tech","interior"],
 prompt:`Interior advertising photograph for a {{occasion}} campaign, vertical 4:5.

A desk stands against a dark wall, seen from slightly above and to the side. A monitor faces away from the camera so only its {{accent_color}} light spills out onto a {{surface_material}} desktop, a mechanical keyboard, a mug and {{prop_detail}}. The wall above the desk takes up the upper {{copy_space_position}} of the frame and carries nothing at all.

The only writing in the picture is the brand name "{{brand_name}}", printed small and low contrast along the front edge of the mousepad.

Photographed with a 35mm lens at f/2.2, lit only by the screen and a weak warm lamp far to the right, {{light_mood}}, colour straight out of the camera. Grain in the shadows, dust and a cable knot behind the monitor, fingerprints on the mug, one key on the board worn shiny.

The brand is invented; no real company names, operating systems or logos appear anywhere, and nothing readable is on the screen.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a desk at night lit only by the glow of a monitor facing away",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"HALVEX",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Cyber Monday",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a pair of headphones lying on their side",required:false},
  {key:"accent_color",label:"Screen glow",inputType:"text",placeholder:"cold cyan",required:false},
  {key:"surface_material",label:"Desk surface",inputType:"text",placeholder:"dark walnut veneer",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"screen light against a black room",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"half",required:false}
 ]
},
{
 n:16, occasion:"Cyber Monday", variant:"brand", slug:"seasonal-cable-coil-gradient",
 title:"Cable Coil Gradient",
 description:"Coiled charging cables arranged on a two colour gradient sweep, the brand printed on a single cable tie.",
 keywords:["seasonal","cyber monday","cables","gradient","overhead","tech","brand","copy space","colour","product"],
 prompt:`Overhead still life for a {{occasion}} technology promotion, vertical 4:5.

Shot straight down onto a paper sweep that runs from {{background_color}} at the top to {{accent_color}} at the bottom. Five charging cables are coiled into loose rings and laid across the lower half, along with {{prop_detail}}. The {{copy_space_position}} of the frame is bare paper.

The only writing in the picture is the brand name "{{brand_name}}", printed on the small fabric tie wrapped around the nearest coil.

Photographed from directly overhead with a 50mm lens at f/8, one broad diffused light from the top of the frame plus a weak bounce from below, {{light_mood}}, colour straight out of the camera. The paper is not perfectly flat and shows a crease near one edge, the cable rubber has fine dust on it, one connector is scratched.

The brand is invented; no real company names, connector brands or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"five coiled charging cables laid on a two colour paper sweep",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"PULSEWIRE",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"Cyber Monday",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a small plug adapter and two loose cable ties",required:false},
  {key:"accent_color",label:"Lower colour",inputType:"text",placeholder:"hot magenta",required:false},
  {key:"background_color",label:"Upper colour",inputType:"text",placeholder:"deep electric blue",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"clean even light with one soft shadow per object",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"upper third",required:false}
 ]
},
{
 n:17, occasion:"New Year", variant:"text", slug:"seasonal-midnight-countdown-clock",
 title:"Midnight Countdown Clock",
 description:"A wall clock a minute before midnight under falling gold confetti, with the offer stacked below it.",
 keywords:["seasonal","new year","countdown","clock","confetti","gold","midnight","sale","poster","offer"],
 prompt:`Advertising poster, vertical 4:5.

A plain round wall clock hangs in the upper half of a deep {{background_color}} wall, its hands at one minute to twelve. {{accent_color}} confetti and thin curls of streamer fall through the frame around it, blurred where they move fastest, some already settled along the bottom edge.

Type over the photograph: the brand name "{{brand_name}}" small at the very top, the occasion "{{occasion}}" in a wide spaced serif under the clock, then the discount "{{discount}}" in very large numerals, then the validity line "{{validity_period}}" and a filled pill button reading "{{cta_text}}".

Photographed with a 50mm lens at f/4, one hard light from the upper left and a warm bounce from below so the confetti catches highlights and the clock throws a shadow onto the wall, colour straight out of the camera. The wall paint is uneven, the clock face has a scratch and a little dust, some confetti is out of focus in the foreground.

The brand is invented; no real company names, watch brands or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a round wall clock at one minute to midnight with gold confetti falling",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"AURELM",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"New Year Countdown Sale",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"50% OFF",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"31 DECEMBER UNTIL MIDNIGHT",required:false},
  {key:"cta_text",label:"Button label",inputType:"text",placeholder:"START THE YEAR RIGHT",required:false},
  {key:"accent_color",label:"Confetti colour",inputType:"text",placeholder:"champagne gold",required:false},
  {key:"background_color",label:"Wall colour",inputType:"text",placeholder:"midnight navy",required:false}
 ]
},
{
 n:18, occasion:"New Year", variant:"text", slug:"seasonal-champagne-pour-offer",
 title:"Champagne Pour Offer",
 description:"Two coupes caught mid pour against black with gold confetti, the year and the offer set alongside.",
 keywords:["seasonal","new year","champagne","gold","black","celebration","sale","poster","drinks","offer"],
 prompt:`Advertising photograph for a New Year promotion, vertical 4:5.

Two shallow coupe glasses stand on a {{surface_material}} counter against a black background. Wine is being poured into the nearer one, the stream caught sharp and the foam rising, drops on the counter around the base. {{accent_color}} confetti lies scattered and a few pieces hang in the air.

Type over the photograph: the year "{{year_label}}" set very large and outlined across the upper third so the glasses show through the letters, the occasion "{{occasion}}" in small capitals above it, the discount "{{discount}}" in a filled bar on the right, and along the bottom the brand name "{{brand_name}}" with the validity line "{{validity_period}}" under it.

Photographed with a 100mm lens at f/5.6 and a fast shutter, one hard backlight behind the glasses to light the liquid and a small fill from the front left, colour straight out of the camera. The counter is marked, the glass has a water spot, the pour is genuinely uneven.

The brand is invented; no real drink brands, labels or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"two coupe glasses on a dark counter with wine being poured into one",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"MARQUE DORVAL",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"NEW YEAR EVENT",required:true},
  {key:"discount",label:"Discount",inputType:"text",placeholder:"40% OFF",required:true},
  {key:"year_label",label:"Year",inputType:"text",placeholder:"2027",required:true},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"29 DECEMBER - 2 JANUARY",required:false},
  {key:"accent_color",label:"Confetti colour",inputType:"text",placeholder:"gold",required:false},
  {key:"surface_material",label:"Counter surface",inputType:"text",placeholder:"black polished stone",required:false}
 ]
},
{
 n:19, occasion:"New Year", variant:"text", slug:"seasonal-new-year-box-burst",
 title:"New Year Box Burst",
 description:"An opening gift box throwing ribbon and sparks upward, with the offer split into two badges below.",
 keywords:["seasonal","new year","gift box","ribbon","red","burst","sale","poster","badge","offer"],
 prompt:`Advertising poster for a New Year promotion, vertical 4:5.

A red gift box sits centre frame on a deep burgundy ground with its lid lifting off, {{accent_color}} ribbon streaming upward out of it in long curved bands and a scatter of sparks and confetti following. {{product_type}} rises out of the open box, caught mid air.

Type over the photograph: the brand name "{{brand_name}}" small at the top left with the occasion "{{occasion}}" beside it, the headline "{{headline}}" in a bold script across the upper middle, and along the bottom two rounded badges side by side carrying "{{discount}}" and "{{badge_right}}", with the validity line "{{validity_period}}" beneath them.

Photographed with an 85mm lens at f/5.6 and a fast shutter, one hard light from the upper right and a coloured kicker from behind the box, colour straight out of the camera. The card of the box is dented at one corner, the ribbon shows reel creases, real dust hangs in the beam.

The brand is invented; no real company names, product names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"a red gift box opening with gold ribbon streaming upward",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"KORVEN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"New Year Sale",required:true},
  {key:"headline",label:"Headline",inputType:"text",placeholder:"Open the Year with a Deal",required:true},
  {key:"discount",label:"Left badge",inputType:"text",placeholder:"UP TO 45% OFF",required:true},
  {key:"badge_right",label:"Right badge",inputType:"text",placeholder:"FREE DELIVERY",required:false},
  {key:"product_type",label:"Product",inputType:"text",placeholder:"a compact camera and a pair of earbuds",required:false},
  {key:"validity_period",label:"Valid",inputType:"text",placeholder:"UNTIL 5 JANUARY",required:false},
  {key:"accent_color",label:"Ribbon colour",inputType:"text",placeholder:"gold",required:false}
 ]
},
{
 n:20, occasion:"New Year", variant:"brand", slug:"seasonal-confetti-floor-morning",
 title:"Confetti Floor Morning",
 description:"The morning after: confetti and a fallen streamer on a bare floor, the brand on a small card among it.",
 keywords:["seasonal","new year","confetti","floor","morning","quiet","brand","copy space","still life","party"],
 prompt:`Still life advertising photograph for a {{occasion}} campaign, vertical 4:5.

Looking down at a low angle across a bare {{surface_material}} floor. {{accent_color}} confetti lies scattered in drifts, one curled paper streamer trails across the frame, and {{prop_detail}} sits at the lower right. The far half of the floor runs clean and empty into shadow, so the {{copy_space_position}} of the frame is open.

The only writing in the picture is the brand name "{{brand_name}}", printed on a small card lying face up among the confetti.

Photographed with a 50mm lens at f/2.8 close to floor level, a single window light from the left, {{light_mood}}, colour straight out of the camera. The floorboards are scratched and one is lifted at the joint, some confetti is stuck to the floor, the card has a bent corner.

The brand is invented; no real company names or logos appear anywhere.

{{image_description}}`,
 fields:[
  {key:"image_description",label:"What should be the main subject?",inputType:"textarea",placeholder:"gold confetti and a fallen streamer scattered across a bare wooden floor",required:false},
  {key:"brand_name",label:"Brand name",inputType:"text",placeholder:"SILVREN",required:true},
  {key:"occasion",label:"Occasion",inputType:"text",placeholder:"New Year",required:false},
  {key:"prop_detail",label:"Extra prop",inputType:"text",placeholder:"a tipped over paper cup",required:false},
  {key:"accent_color",label:"Confetti colour",inputType:"text",placeholder:"gold and deep green",required:false},
  {key:"surface_material",label:"Floor surface",inputType:"text",placeholder:"pale scratched floorboards",required:false},
  {key:"light_mood",label:"Light mood",inputType:"text",placeholder:"cold flat morning light through one window",required:false},
  {key:"copy_space_position",label:"Free space",inputType:"text",placeholder:"upper half",required:false}
 ]
}
];
