function calculatePressureConversion(changedField) {
    let pascal, bar, kgf, inHg, psi, psf, mmH2, inH2, atm, torr;

    const pascalVal = parseFloat(document.getElementById('pressConvPascal').value);
    const pascalUnit = parseFloat(document.getElementById('pressConvPascal-unit').value);
    const barVal = parseFloat(document.getElementById('pressConvBar').value);
    const barUnit = parseFloat(document.getElementById('pressConvBar-unit').value);
    const kgfVal = parseFloat(document.getElementById('pressConvKgf').value);
    const inHgVal = parseFloat(document.getElementById('pressConvInHg').value);
    const psiVal = parseFloat(document.getElementById('pressConvPsi').value);
    const psfVal = parseFloat(document.getElementById('pressConvPsf').value);
    const mmH2Val = parseFloat(document.getElementById('pressConvMmH2').value);
    const inH2Val = parseFloat(document.getElementById('pressConvInH2').value);
    const atmVal = parseFloat(document.getElementById('pressConvAtm').value);
    const torrVal = parseFloat(document.getElementById('pressConvTorr').value);
    const torrUnit = parseFloat(document.getElementById('pressConvTorr-unit').value);

    // --- Detect source and convert to Pascals ---
    if (changedField === 'pascal' && !isNaN(pascalVal)) {
        pascal = pascalVal * pascalUnit;
    }
    else if (changedField === 'bar' && !isNaN(barVal)) {
        bar = barVal * barUnit;
        pascal = bar * 1e5;
    }
    else if (changedField === 'kgf' && !isNaN(kgfVal)) {
        kgf = kgfVal;
        pascal = kgf * 98066.5;
    }
    else if (changedField === 'inHg' && !isNaN(inHgVal)) {
        inHg = inHgVal;
        pascal = inHg * 3386.39;
    }
    else if (changedField === 'psi' && !isNaN(psiVal)) {
        psi = psiVal;
        pascal = psi * 6894.76;
    }
    else if (changedField === 'psf' && !isNaN(psfVal)) {
        psf = psfVal;
        pascal = psf * 47.8803;
    }
    else if (changedField === 'mmH2' && !isNaN(mmH2Val)) {
        mmH2 = mmH2Val;
        pascal = mmH2 * 9.80665;
    }
    else if (changedField === 'inH2' && !isNaN(inH2Val)) {
        inH2 = inH2Val;
        pascal = inH2 * 249.08891;
    }
    else if (changedField === 'atm' && !isNaN(atmVal)) {
        atm = atmVal;
        pascal = atm * 101325;
    }
    else if (changedField === 'torr' && !isNaN(torrVal)) {
        torr = torrVal * torrUnit;
        pascal = torr * 133.322;
    }
	
    if (isNaN(pascal)) return;

    // --- Convert from Pascals to all others ---
    bar  = pascal / 1e5;
    kgf  = pascal / 98066.5;
    inHg = pascal / 3386.39;
    psi  = pascal / 6894.76;
    psf  = pascal / 47.8803;
    mmH2 = pascal / 9.80665;
    inH2 = pascal / 249.08891;
    atm  = pascal / 101325;
    torr = pascal / 133.322;

    // --- Update all fields except the one edited ---
    if (changedField !== 'pascal') {
        document.getElementById('pressConvPascal').value = (pascal / pascalUnit).toFixed(4);
    }
    if (changedField !== 'bar') {
        document.getElementById('pressConvBar').value = (bar / barUnit).toFixed(6);
    }
    if (changedField !== 'kgf') {
        document.getElementById('pressConvKgf').value = kgf.toFixed(6);
    }
    if (changedField !== 'inHg') {
        document.getElementById('pressConvInHg').value = inHg.toFixed(6);
    }
    if (changedField !== 'psi') {
        document.getElementById('pressConvPsi').value = psi.toFixed(6);
    }
    if (changedField !== 'psf') {
        document.getElementById('pressConvPsf').value = psf.toFixed(6);
    }
    if (changedField !== 'mmH2') {
        document.getElementById('pressConvMmH2').value = mmH2.toFixed(6);
    }
    if (changedField !== 'inH2') {
        document.getElementById('pressConvInH2').value = inH2.toFixed(6);
    }
    if (changedField !== 'atm') {
        document.getElementById('pressConvAtm').value = atm.toFixed(6);
    }
    if (changedField !== 'torr') {
        document.getElementById('pressConvTorr').value = (torr / torrUnit).toFixed(6);
    }
}

// --- Event listeners ---
document.getElementById('pressConvPascal').addEventListener('input', () => calculatePressureConversion('pascal'));
document.getElementById('pressConvPascal-unit').addEventListener('change', () => calculatePressureConversion('pascal'));
document.getElementById('pressConvBar').addEventListener('input', () => calculatePressureConversion('bar'));
document.getElementById('pressConvBar-unit').addEventListener('change', () => calculatePressureConversion('bar'));
document.getElementById('pressConvKgf').addEventListener('input', () => calculatePressureConversion('kgf'));
document.getElementById('pressConvInHg').addEventListener('input', () => calculatePressureConversion('inHg'));
document.getElementById('pressConvPsi').addEventListener('input', () => calculatePressureConversion('psi'));
document.getElementById('pressConvPsf').addEventListener('input', () => calculatePressureConversion('psf'));
document.getElementById('pressConvMmH2').addEventListener('input', () => calculatePressureConversion('mmH2'));
document.getElementById('pressConvInH2').addEventListener('input', () => calculatePressureConversion('inH2'));
document.getElementById('pressConvAtm').addEventListener('input', () => calculatePressureConversion('atm'));
document.getElementById('pressConvTorr').addEventListener('input', () => calculatePressureConversion('torr'));
document.getElementById('pressConvTorr-unit').addEventListener('change', () => calculatePressureConversion('torr'));
