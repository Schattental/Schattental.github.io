function calculateCapacitiveReactance() {
	const mode = document.querySelector('input[name="capReac-output"]:checked').value;
	const omegaVal = parseFloat(document.getElementById('capReacOmega').value);
	const omegaUnit = parseFloat(document.getElementById('capReacOmega-unit').value);
	const capacitanceVal = parseFloat(document.getElementById('reacCap').value);
	const capacitanceUnit = parseFloat(document.getElementById('reacCap-unit').value);
	const reactanceVal = parseFloat(document.getElementById('capReactance').value);
	const reactanceUnit = parseFloat(document.getElementById('capReactance-unit').value);
	
	const omega = isNaN(omegaVal) ? null : omegaVal * omegaUnit;
	const C = isNaN(capacitanceVal) ? null : capacitanceVal * capacitanceUnit;
	const X = isNaN(reactanceVal) ? null : reactanceVal / reactanceUnit;
		
	if (mode === 'capReacOmega') {
		if (C > 0 && X > 0) {
			const capReacOmegaout = 1/(X * C);
			const capReacOmegaconv = capReacOmegaout / omegaUnit;
			document.getElementById('capReacOmega').value = capReacOmegaconv.toFixed(6);
		}
	} else if (mode === 'reacCap') {
		if (omega > 0 && X > 0) {
			const reacCapout = 1/(omega * X);
			const reacCapconv = reacCapout / capacitanceUnit;
			document.getElementById('reacCap').value = reacCapconv.toFixed(6);
		}
	} else if (mode === 'capReactance') {
		if (C > 0 && omega > 0) {
			const capReactanceout = 1/(omega * C);
			const capReactanceconv = capReactanceout * reactanceUnit;
			document.getElementById('capReactance').value = capReactanceconv.toFixed(6);
		}
	}
	
}