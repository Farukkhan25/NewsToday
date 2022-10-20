// Spinner Function

const spinner = isSpin => {
    const spinnerSection = document.getElementById('spinner-section');
    if (isSpin) {
        spinnerSection.classList.remove('hidden');
    }
    else {
        spinnerSection.classList.add('hidden');
    }
}