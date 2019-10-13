const processText = (text) => {
	const cleanedText = text.toLowerCase().replace(/[^0-9A-Za-z ]/gi, '').trim();
	console.log(cleanedText);
	const textArray = cleanedText.split(" ");
	const output = {};
	for (let i = 0; i < textArray.length - 1; i++) {
		const first = textArray[i];
		const second = textArray[i+1];
		const firstSecond = first + " " + second;
		const secondFirst = second + " " + first;
		if (firstSecond in output || secondFirst in output) {
			output[firstSecond] ? output[firstSecond]++ : output[secondFirst]++
		}
		else {
			output[firstSecond] = 1;
		}
	}
	return output;
}

exports.processText = processText;