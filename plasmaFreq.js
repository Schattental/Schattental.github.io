function calculatePlasmaFrequency() {
	const mode = document.querySelector('input[name="plasmaFreq-output"]:checked').value;
	const densityVal = parseFloat(document.getElementById('densityPlasmaFreq').value);
	const densityUnit = parseFloat(document.getElementById('densityPlasmaFreq-unit').value);
	const omegaVal = parseFloat(document.getElementById('plasmaFreq').value);
	const omegaUnit = parseFloat(document.getElementById('plasmaFreq-unit').value);

	const n = isNaN(densityVal) ? null : densityVal * densityUnit;
	const omega = isNaN(omegaVal) ? null : omegaVal * omegaUnit;
	const e = 1.602e-19;
	const eps0 = 8.854e-12;
	const me = 9.109e-31;
	
	if (mode === 'densityPlasmaFreq') {
		if (omega > 0) {
			const densityPlasmaFreqout = ((omega ** 2) * me * eps0) / (e ** 2);
			const densityPlasmaFreqconv = densityPlasmaFreqout / densityUnit;
			document.getElementById('densityPlasmaFreq').value = densityPlasmaFreqout.toFixed(6);
		}
	} else if (mode === 'plasmaFreq') {
		if (n > 0) {
			const plasmaFreqout = Math.sqrt((n * e ** 2) / (eps0 * me));
			const plasmaFreqconv = plasmaFreqout / omegaUnit;
			document.getElementById('plasmaFreq').value = plasmaFreqconv.toFixed(6);
		}
	}
}