const links = document.querySelectorAll('.navbar-right ul li a');
const activeBg = document.createElement('div');
activeBg.classList.add('active-bg');
document.querySelector('.navbar-right').appendChild(activeBg);

// Set the initial position of the active background
function setActiveBg(link) {
    const { left, width } = link.getBoundingClientRect();
    const navRight = document.querySelector('.navbar-right').getBoundingClientRect();
    activeBg.style.left = `${left - navRight.left}px`; // Calculate left position
    activeBg.style.width = `${width}px`; // Set width to match the active link
}

// Click event for links
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active')); // Remove active class from all
        link.classList.add('active'); // Add active class to the clicked link
        setActiveBg(link); // Update the active background position
    });
});

// Trigger click on the first link to set the initial active state
links[0].click();



window.onload = () => {
    const imageSection = document.querySelector('.image-section');
    setTimeout(() => {
        imageSection.classList.add('animate');
    }, 2000); // Wait for 2 seconds before aligning to the left
};

window.scrollTo(0, 0);
