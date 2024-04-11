'format esm';
import { AnImage } from './ui/an-image.cp.js';
import { part } from 'lively.morphic';

export async function main () {
  const demo = part(AnImage).openInWorld();
  demo.center = $world.center;
}
