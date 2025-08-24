const linksInternos = document.querySelectorAll(".header-list a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({

  })
}

linksInternos.forEach((item) => {
  item.addEventListener('click', scrollToSection)
})