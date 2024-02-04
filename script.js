function toggleMenu() {
    //targeting the menu links and hamburger icon in index.html
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelector('.flip-btn').addEventListener('click', function() {
    document.querySelector('.flip-container').classList.toggle('flipped');
  });