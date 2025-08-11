function calculateInductiveReactance() {
	const mode = document.querySelector('input[name="indReac-output"]:checked').value;
	const omegaVal = parseFloat(document.getElementById('indReacOmega').value);
	const omegaUnit = parseFloat(document.getElementById('indReacOmega-unit').value);
	const inductanceVal = parseFloat(document.getElementById('reacInd').value);
	const inductanceUnit = parseFloat(document.getElementById('reacInd-unit').value);
	const reactanceVal = parseFloat(document.getElementById('indReactance').value);
	const reactanceUnit = parseFloat(document.getElementById('indReactance-unit').value);
	
	const omega = isNaN(omegaVal) ? null : omegaVal * omegaUnit;
	const L = isNaN(inductanceVal) ? null : inductanceVal * inductanceUnit;
	const X = isNaN(reactanceVal) ? null : reactanceVal / reactanceUnit;
		
	if (mode === 'indReacOmega') {
		if (L > 0 && X > 0) {
			const indReacOmegaout = X / L;
			const indReacOmegaconv = indReacOmegaout / omegaUnit;
			document.getElementById('indReacOmega').value = indReacOmegaconv.toFixed(6);
		}
	} else if (mode === 'reacInd') {
		if (omega > 0 && X > 0) {
			const reacIndout = X / omega;
			const reacIndconv = reacIndout / inductanceUnit;
			document.getElementById('reacInd').value = reacIndconv.toFixed(6);
		}
	} else if (mode === 'indReactance') {
		if (L > 0 && omega > 0) {
			const indReactanceout = omega * L;
			const indReactanceconv = indReactanceout * reactanceUnit;
			document.getElementById('indReactance').value = indReactanceconv.toFixed(6);
		}
	}
	
}