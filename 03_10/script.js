/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const jillianPack = new Backpack("My basics", 20, "Gold", 15, 22, 21, true);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Jillian pack :)", jillianPack);
console.log("The pocketNumber value of jillianPack is:", jillianPack.pocketNum);
