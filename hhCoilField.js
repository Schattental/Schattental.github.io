function calculateHelmHoltzCoilField() {
	const mode = document.querySelector('input[name="mfieldHH-output"]:checked').value;
	const turns = parseFloat(document.getElementById('turns').value);
	const currentVal = parseFloat(document.getElementById('current').value);
	const currentUnit = parseFloat(document.getElementById('current-unit').value);
	const radiusVal = parseFloat(document.getElementById('radius').value);
	const radiusUnit = parseFloat(document.getElementById('radius-unit').value);
	const mfield = parseFloat(document.getElementById('mfield').value);
	const mfieldUnit = parseFloat(document.getElementById('mfield-unit').value);
	
	const I = isNaN(currentVal) ? null : currentVal * currentUnit;
	const R = isNaN(radiusVal) ? null : radiusVal * radiusUnit;
	const B = isNaN(mfield) ? null : mfield / mfieldUnit;
	
	const u0 = 4 * Math.PI * 1e-7;
		
	if (mode === 'turns') {
		if (I > 0 && R > 0 && B > 0) {
			const turnsout = ((8 / (5 * Math.sqrt(5))) * (u0 * I)/(R * B)) ** (-1)
			document.getElementById('turns').value = turnsout.toFixed(2);
		}
	} else if (mode === 'current') {
		if (B > 0 && R > 0 && turns > 0) {
			const Iout = ((8 / (5 * Math.sqrt(5))) * (u0 * turns)/(R * B)) ** (-1)
			const Iconv = Iout / currentUnit;
			document.getElementById('current').value = Iconv.toFixed(6);
		}
	} else if (mode === 'radius') {
		if (I > 0 && B > 0 && turns > 0) {
			const Rout = (8 / (5 * Math.sqrt(5))) * (u0 * turns * I)/B;
			const Rconv = Rout / radiusUnit;
			document.getElementById('radius').value = Rconv.toFixed(6);
		}
	} else if (mode === 'mfield') {
		if (I > 0 && R > 0 && turns > 0) {
			const Bout = (8 / (5 * Math.sqrt(5))) * (u0 * turns * I)/R;
			const Bconv = Bout * mfieldUnit;
			document.getElementById('mfield').value = Bconv.toFixed(6);
		}
	}
	
}