function calculateResonantFrequency() {
	const mode = document.querySelector('input[name="lc-output"]:checked').value;
	const Lval = parseFloat(document.getElementById('inductance').value);
	const Lunit = parseFloat(document.getElementById('inductance-unit').value);
	const Cval = parseFloat(document.getElementById('capacitance').value);
	const Cunit = parseFloat(document.getElementById('capacitance-unit').value);
	const Fval = parseFloat(document.getElementById('frequency').value);
	const Funit = parseFloat(document.getElementById('freq-unit').value);

	const L = isNaN(Lval) ? null : Lval * Lunit;
	const C = isNaN(Cval) ? null : Cval * Cunit;
	const f = isNaN(Fval) ? null : Fval / Funit;

	if (mode === 'frequency') {
		if (L > 0 && C > 0) {
			const freq = 1 / (2 * Math.PI * Math.sqrt(L * C));
			const out = freq * Funit;
			document.getElementById('frequency').value = out.toFixed(6);
		}
	} else if (mode === 'inductance') {
		if (C > 0 && f > 0) {
			const Lout = 1 / ((2 * Math.PI * f) ** 2 * C);
			const Lconv = Lout / Lunit;
			document.getElementById('inductance').value = Lconv;
		}
	} else if (mode === 'capacitance') {
		if (L > 0 && f > 0) {
			const Cout = 1 / ((2 * Math.PI * f) ** 2 * L);
			const Cconv = Cout / Cunit;
			document.getElementById('capacitance').value = Cconv;
		}
	}
}