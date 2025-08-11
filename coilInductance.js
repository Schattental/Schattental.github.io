function calculateCoilInductance() {
	const mode = document.querySelector('input[name="coilInd-output"]:checked').value;
	const relpermeabilityVal = parseFloat(document.getElementById('relPermCoilInd').value);
	const turns = parseFloat(document.getElementById('turnsCoilInd').value);
	const radiusVal = parseFloat(document.getElementById('radiusCoilInd').value);
	const radiusUnit = parseFloat(document.getElementById('radiusCoilInd-unit').value);
	const lengthVal = parseFloat(document.getElementById('lengthCoilInd').value);
	const lengthUnit = parseFloat(document.getElementById('lengthCoilInd-unit').value);
	const inductanceVal = parseFloat(document.getElementById('coilInd').value);
	const inductanceUnit = parseFloat(document.getElementById('coilInd-unit').value);
	
	const R = isNaN(radiusVal) ? null : radiusVal * radiusUnit;
	const length = isNaN(lengthVal) ? null : lengthVal * lengthUnit;
	const L = isNaN(inductanceVal) ? null : inductanceVal * inductanceUnit;
	
	const u0 = 4 * Math.PI * 1e-7;
		
	if (mode === 'relPermCoilInd') {
		if (turns > 0 && R > 0 && length > 0 && L > 0) {
			const relPermCoilIndout = (length * L) / (u0 * (turns ** 2) * (R ** 2) * Math.PI);
			document.getElementById('relPermCoilInd').value = relPermCoilIndout.toFixed(6);
		}
	} else if (mode === 'turnsCoilInd') {
		if (relpermeabilityVal > 0 && R > 0 && length > 0 && L > 0) {
			const turnsCoilIndout = Math.sqrt((length * L) / (relpermeabilityVal * u0 * (R ** 2) * Math.PI));
			document.getElementById('turnsCoilInd').value = turnsCoilIndout.toFixed(6);
		}
	} else if (mode === 'radiusCoilInd') {
		if (turns > 0 && relpermeabilityVal > 0 && length > 0 && L > 0) {
			const radiusCoilIndout = Math.sqrt((length * L) / (relpermeabilityVal * u0 * (turns ** 2) * Math.PI));
			const radiusCoilIndconv = radiusCoilIndout / radiusUnit;
			document.getElementById('radiusCoilInd').value = radiusCoilIndconv.toFixed(6);
		}
	} else if (mode === 'lengthCoilInd') {
		if (turns > 0 && R > 0 && relpermeabilityVal > 0 && L > 0) {
			const lengthCoilIndout = (relpermeabilityVal * u0 * (turns ** 2) * (R ** 2) * Math.PI) / L;
			const lengthCoilIndconv = lengthCoilIndout / lengthUnit;
			document.getElementById('lengthCoilInd').value = lengthCoilIndconv.toFixed(6);
		}
	} else if (mode === 'coilInd') {
		if (turns > 0 && R > 0 && length > 0 && relpermeabilityVal > 0) {
			const coilIndout = (relpermeabilityVal * u0 * (turns ** 2) * Math.PI * (R ** 2)) / length;
			const coilIndconv = coilIndout / inductanceUnit;
			document.getElementById('coilInd').value = coilIndconv.toFixed(6);
		}
	}
	
}