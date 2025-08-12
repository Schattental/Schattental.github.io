function calculateResonantFrequency() {
	const mode = document.querySelector('input[name="lc-output"]:checked').value;
	const LVal = parseFloat(document.getElementById('lcInd').value);
	const LUnit = parseFloat(document.getElementById('lcInd-unit').value);
	const CVal = parseFloat(document.getElementById('lcCap').value);
	const CUnit = parseFloat(document.getElementById('lcCap-unit').value);
	const omegaVal = parseFloat(document.getElementById('lcFreq').value);
	const omegaUnit = parseFloat(document.getElementById('lcFreq-unit').value);
	
	const L = isNaN(LVal) ? null : LVal * LUnit;
	const C = isNaN(CVal) ? null : CVal * CUnit;
	const omega = isNaN(omegaVal) ? null : omegaVal * omegaUnit;
	
	if (mode === 'lcFreq') {
		if (L > 0 && C > 0) {
			const omegaout = 1 / (Math.sqrt(L * C));
			const omegaconv = omegaout / omegaUnit;
			document.getElementById('lcFreq').value = omegaconv.toFixed(6);
		}
	} else if (mode === 'lcInd') {
		if (C > 0 && omega > 0) {
			const Lout = 1 / ((omega ** 2) * C);
			const Lconv = Lout / LUnit;
			document.getElementById('lcInd').value = Lconv.toFixed(6);
		}
	} else if (mode === 'lcCap') {
		if (L > 0 && omega > 0) {
			const Cout = 1 / ((omega ** 2) * L);
			const Cconv = Cout / CUnit;
			document.getElementById('lcCap').value = Cconv.toFixed(6);
		}
	}
}