function toggleMenu() {
    //targeting the menu links and hamburger icon in index.html
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



  // Select all flip buttons
const flipButtons = document.querySelectorAll('.flip-btn');

// Add a click event listener to each flip button
flipButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Prevent the default action of the button
    event.preventDefault();

    // Select the closest flip container
    const flipContainer = button.closest('.flip-container');

    // Toggle the 'flipped' class
    flipContainer.classList.toggle('flipped');
  });
});