let currentStep = 1; // Start with step 1

function startTutorial() {
    const startButton = document.querySelector('.start-button');
    const req = document.querySelector('.req');
    const step1 = document.querySelector('#step1');
    const stepContent = step1.querySelector('.step-content');

    startButton.classList.add('fade-out');
    req.classList.add('fade-out');

    setTimeout(() => {
        startButton.style.display = 'none';
        req.style.display = 'none';
        startButton.classList.remove('fade-out');
        req.classList.remove('fade-out');
        step1.classList.add('fade-in');
        stepContent.style.opacity = '1';
    }, 1000);
}

function nextStep() {
    const currentStepDiv = document.querySelector(`#step${currentStep}`);
    currentStepDiv.style.opacity = '0'; // Fade out the current step
    currentStep++;

    const nextStepDiv = document.querySelector(`#step${currentStep}`);
    nextStepDiv.style.opacity = '1'; // Fade in the next step

    // You need to adjust the opacity of the step content as well
    const nextStepContent = nextStepDiv.querySelector('.step-content');
    nextStepContent.style.opacity = '1';
}


function prevStep() {
    const currentStepDiv = document.querySelector(`#step${currentStep}`);
    currentStepDiv.style.opacity = '0'; // Fade out the current step
    currentStep--;

    const prevStepDiv = document.querySelector(`#step${currentStep}`);
    prevStepDiv.style.opacity = '1'; // Fade in the previous step
}
