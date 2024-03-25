/**
 * "Simple Additive Bass" Funcbeat
 * A simple bass created with additive synthesis
 */

function sine(time, freq) {
	return sin(2*3.14159*freq*time);
}

function bass(time, freq, amp) {
	let signal = 0;
	for(let i = 1; i < 10; i++) {
		signal += sine(time, (i-1)*freq)/(i);
	}
	return signal * amp;
}

return function main(time, sampleRate) {
	return bass(time, 55, .2);
}
