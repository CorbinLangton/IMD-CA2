// Variable setup

// First project card variables
const firstLine = document.querySelector('.first-hover');
const secondYrProjCont = document.querySelector('.sndyr-proj');

// Second project card variables
const secondLine = document.querySelector('.second-hover');
const thirdYrProjCont = document.querySelector('.thrdyr-proj');

// Third project card variables
const thirdLine = document.querySelector('.third-hover');
const fourthYrProjCont = document.querySelector('.fortyr-proj');

// Eventlisteners setup

// First project card fade in functionality
firstLine.addEventListener('mouseover', () => {
    secondYrProjCont.style.display = 'block'
    setTimeout(() => {
        secondYrProjCont.style.opacity = '1';
    }, 50);
});

// First project card fade out functionality
firstLine.addEventListener('mouseout', () => {
    secondYrProjCont.style.display = '0';
    setTimeout(() => {
        secondYrProjCont.style.opacity = 'none';
    }, 300);
});

// Second project card fade in functionality
secondLine.addEventListener('mouseover', () => {
    thirdYrProjCont.style.display = 'block'
    setTimeout(() => {
        thirdYrProjCont.style.opacity = '1';
    }, 50);
});

// Second project card fade out functionality
secondLine.addEventListener('mouseout', () => {
    thirdYrProjCont.style.display = '0';
    setTimeout(() => {
        thirdYrProjCont.style.opacity = 'none';
    }, 300);
});

// Third project card fade in functionality
thirdLine.addEventListener('mouseover', () => {
    thirdYrProjCont.style.display = 'block'
    setTimeout(() => {
        thirdYrProjCont.style.opacity = '1';
    }, 50);
});

// Third project card fade out functionality
thirdLine.addEventListener('mouseout', () => {
    thirdYrProjCont.style.display = '0';
    setTimeout(() => {
        thirdYrProjCont.style.opacity = 'none';
    }, 300);
});