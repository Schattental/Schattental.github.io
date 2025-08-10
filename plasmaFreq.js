function calculatePlasmaFrequency() {
	const density = parseFloat(document.getElementById('density').value);
	const densityUnit = parseFloat(document.getElementById('density-unit').value);
	const freqUnit = parseFloat(document.getElementById('pfreq-unit').value);

	const n = density * densityUnit;
	const e = 1.602e-19;
	const eps0 = 8.854e-12;
	const me = 9.109e-31;

	if (n > 0) {
		const f = Math.sqrt((n * e * e) / (eps0 * me)) / (2 * Math.PI);
		const fConv = f * freqUnit;
		const unitLabel = document.getElementById('pfreq-unit').selectedOptions[0].text;
		document.getElementById('plasma-result').innerText = `Plasma Frequency: ${fConv.toFixed(3)} ${unitLabel}`;
	} else {
		document.getElementById('plasma-result').innerText = '';
	}
}