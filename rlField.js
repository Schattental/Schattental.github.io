function calculateRectangularLoopField() {
	const mode = document.querySelector('input[name="mfieldRL-output"]:checked').value;
	const turns = parseFloat(document.getElementById('turnsRL').value);
	const currentVal = parseFloat(document.getElementById('currentRL').value);
	const currentUnit = parseFloat(document.getElementById('current-unitRL').value);
	const distanceVal = parseFloat(document.getElementById('distanceRL').value);
	const distanceUnit = parseFloat(document.getElementById('distance-unitRL').value);
	const lengthaVal = parseFloat(document.getElementById('lengthaRL').value);
	const lengthaUnit = parseFloat(document.getElementById('lengtha-unitRL').value);
	const lengthbVal = parseFloat(document.getElementById('lengthbRL').value);
	const lengthbUnit = parseFloat(document.getElementById('lengthb-unitRL').value);
	const mfield = parseFloat(document.getElementById('mfieldRL').value);
	const mfieldUnit = parseFloat(document.getElementById('mfield-unitRL').value);
	
	const I = isNaN(currentVal) ? null : currentVal * currentUnit;
	const x = isNaN(distanceVal) ? null : distanceVal * distanceUnit;
	const a = isNaN(lengthaVal) ? null : lengthaVal * lengthaUnit;
	const b = isNaN(lengthbVal) ? null : lengthbVal * lengthbUnit;
	const B = isNaN(mfield) ? null : mfield / mfieldUnit;
	
	const u0 = 1.256637061 * 1e-6;
		
	if (mode === 'turnsRL') {
		if (I > 0 && x > 0 && a > 0 && b > 0 && B > 0) {
			const turnsout = B / (u0 * I * (2 / Math.PI) * ((a * b) / Math.sqrt(4 * x**2 + a**2 + b**2)) * (1 / (4 * x**2 + a**2) + 1 / (4 * x**2 + b**2)));
			document.getElementById('turnsRL').value = turnsout.toFixed(2);
		}
	} else if (mode === 'currentRL') {
		if (turns > 0 && x > 0 && a > 0 && b > 0 && B > 0) {
			const Iout = B / (turns * u0 * (2 / Math.PI) * ((a * b) / Math.sqrt(4 * x**2 + a**2 + b**2)) * (1 / (4 * x**2 + a**2) + 1 / (4 * x**2 + b**2)));
			const Iconv = Iout / currentUnit;
			document.getElementById('currentRL').value = Iconv.toFixed(6);
		}
	} else if (mode === 'mfieldRL') {
		if (I > 0 && x > 0 && a > 0 && b > 0 && turns > 0) {
			const Bout = turns * u0 * I * (2 / Math.PI) * ((a * b) / Math.sqrt(4 * x**2 + a**2 + b**2)) * (1 / (4 * x**2 + a**2) + 1 / (4 * x**2 + b**2));
			const Bconv = Bout * mfieldUnit;
			document.getElementById('mfieldRL').value = Bconv.toFixed(6);
		}
	}
}