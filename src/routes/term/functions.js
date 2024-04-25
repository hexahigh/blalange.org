import { Howl, Howler } from "howler/dist/howler.core.min.js";

export function playSound(sound) {
	new Howl({
		src: [sound],
	}).play();
}