function calculateTemperatureConversion(changedField) {
    let C, K, e, F, R;
    
    const celsiusVal = parseFloat(document.getElementById('tempConvCels').value);
    const kelvinVal = parseFloat(document.getElementById('tempConvKelv').value);
    const kelvinUnit = parseFloat(document.getElementById('tempConvKelv-unit').value);
	const eVVal = parseFloat(document.getElementById('tempConvEV').value);
    const fahrenVal = parseFloat(document.getElementById('tempConvFahren').value);
    const rankVal   = parseFloat(document.getElementById('tempConvRank').value);
    
    if (changedField === 'C' && !isNaN(celsiusVal)) {
        C = celsiusVal;
        K = C + 273.15;
        F = (C * 9/5) + 32;
        R = (C + 273.15) * 9/5;
		e = K * (1/11600);
    } 
    else if (changedField === 'K' && !isNaN(kelvinVal)) {
        K = kelvinVal * kelvinUnit;
        C = K - 273.15;
        F = (K - 273.15) * 9/5 + 32;
        R = K * 9/5;
		e = K * (1/11600);
    }
	else if (changedField === 'e' && !isNaN(eVVal)) {
		e = eVVal;
		K = e * 11600;
        C = K - 273.15;
        F = (K - 273.15) * 9/5 + 32;
        R = K * 9/5;
    }
    else if (changedField === 'F' && !isNaN(fahrenVal)) {
        F = fahrenVal;
        C = (F - 32) * 5/9;
        K = C + 273.15;
        R = K * 9/5;
		e = K * (1/11600);
    }
    else if (changedField === 'R' && !isNaN(rankVal)) {
        R = rankVal;
        K = R * 5/9;
        C = K - 273.15;
        F = (C * 9/5) + 32;
		e = K * (1/11600);
    }

    // Update all fields except the one being edited
    if (changedField !== 'C' && !isNaN(C)) {
        document.getElementById('tempConvCels').value = C.toFixed(2);
    }
    if (changedField !== 'K' && !isNaN(K)) {
        document.getElementById('tempConvKelv').value = (K / kelvinUnit).toFixed(2);
    }
	if (changedField !== 'e' && !isNaN(C)) {
        document.getElementById('tempConvEV').value = e.toFixed(2);
    }
    if (changedField !== 'F' && !isNaN(F)) {
        document.getElementById('tempConvFahren').value = F.toFixed(2);
    }
    if (changedField !== 'R' && !isNaN(R)) {
        document.getElementById('tempConvRank').value = R.toFixed(2);
    }
}

// Event listeners
document.getElementById('tempConvCels').addEventListener('input', () => calculateTemperatureConversion('C'));
document.getElementById('tempConvKelv').addEventListener('input', () => calculateTemperatureConversion('K'));
document.getElementById('tempConvKelv-unit').addEventListener('change', () => calculateTemperatureConversion('K'));
document.getElementById('tempConvEV').addEventListener('input', () => calculateTemperatureConversion('e'));
document.getElementById('tempConvFahren').addEventListener('input', () => calculateTemperatureConversion('F'));
document.getElementById('tempConvRank').addEventListener('input', () => calculateTemperatureConversion('R'));
