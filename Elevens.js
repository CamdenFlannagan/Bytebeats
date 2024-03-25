/**
 * "Elevens"
 * For some reason, this square function doesn't produce a pure square wave
 * By playing with the input frequency, I got a fun sound effect 
 */

function square(time, freq, amp) {
	if (time % (1/freq) < (.5/freq)) return amp;
	else return -amp;
}

let tenPow = 1;

return function main(time, sampleRate) {
	if (time % (1/16) == 0) tenPow *= 10;
	return (
		square(time, tenPow + 1, .1)
	);
}
