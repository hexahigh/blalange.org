import { Howl } from 'howler';

export function playSound(sound) {
	new Howl({
		src: [sound],
	}).play();
}