function calculateHelmHoltzCoilField() {
	const mode = document.querySelector('input[name="mfieldHH-output"]:checked').value;
	const turns = parseFloat(document.getElementById('turnsHH').value);
	const currentVal = parseFloat(document.getElementById('currentHH').value);
	const currentUnit = parseFloat(document.getElementById('current-unitHH').value);
	const radiusVal = parseFloat(document.getElementById('radiusHH').value);
	const radiusUnit = parseFloat(document.getElementById('radius-unitHH').value);
	const mfield = parseFloat(document.getElementById('mfieldHH').value);
	const mfieldUnit = parseFloat(document.getElementById('mfield-unitHH').value);
	
	const I = isNaN(currentVal) ? null : currentVal * currentUnit;
	const R = isNaN(radiusVal) ? null : radiusVal * radiusUnit;
	const B = isNaN(mfield) ? null : mfield / mfieldUnit;
	
	const u0 = 1.256637061 * 1e-6;
		
	if (mode === 'turnsHH') {
		if (I > 0 && R > 0 && B > 0) {
			const turnsout = ((8 / (5 * Math.sqrt(5))) * (u0 * I)/(R * B)) ** (-1);
			document.getElementById('turnsHH').value = turnsout.toFixed(2);
		}
	} else if (mode === 'currentHH') {
		if (B > 0 && R > 0 && turns > 0) {
			const Iout = ((8 / (5 * Math.sqrt(5))) * (u0 * turns)/(R * B)) ** (-1);
			const Iconv = Iout / currentUnit;
			document.getElementById('currentHH').value = Iconv.toFixed(6);
		}
	} else if (mode === 'radiusHH') {
		if (I > 0 && B > 0 && turns > 0) {
			const Rout = (8 / (5 * Math.sqrt(5))) * (u0 * turns * I)/B;
			const Rconv = Rout / radiusUnit;
			document.getElementById('radiusHH').value = Rconv.toFixed(6);
		}
	} else if (mode === 'mfieldHH') {
		if (I > 0 && R > 0 && turns > 0) {
			const Bout = (8 / (5 * Math.sqrt(5))) * (u0 * turns * I)/R;
			const Bconv = Bout * mfieldUnit;
			document.getElementById('mfieldHH').value = Bconv.toFixed(6);
		}
	}
	
}