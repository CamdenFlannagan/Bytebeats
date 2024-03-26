const sample = [.1, 0, .8, .4, .95, .3];

return function main(time, sampleRate) {
	return (
		sample[floor(440*time % (sample.length))] +
		sin(2*3.14159*110*time)
	);
}
