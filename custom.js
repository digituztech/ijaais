    fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Now header is in DOM — apply active state
    setActiveNav();
  });

function setActiveNav() {
  const links = document.querySelectorAll("nav a");

  // Get current file name
  let currentPage = window.location.pathname.split("/").pop();


  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

      fetch("headtag.html")
      .then(response => response.text())
      .then(data => document.getElementById("headtag").innerHTML = data);

    fetch("footer.html")
      .then(response => response.text())
      .then(data => document.getElementById("footer").innerHTML = data);

  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  mobileNavToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Close mobile nav when clicking a link
  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
