import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { Color } from "lively.graphics/color.js";
import { Image } from "lively.morphic/morph.js";
import { num } from "lively.lang/index.js";
"format esm";
const AnImage = component({
  type: Image,
  name: undefined,
  borderColor: Color.rgb(23,160,251),
  borderWidth: 1,
  extent: pt(202.4,175.3),
  fill: Color.rgb(255,255,255),
  position: pt(360.8,174.9),
  rotation: num.toRadians(-37.3)
});



export { AnImage }