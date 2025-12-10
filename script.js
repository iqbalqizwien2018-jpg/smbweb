// Toggle menu utama di HP
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
}

// Dropdown klik di HP
const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Hanya aktif di layar kecil
    if (window.innerWidth <= 768) {
      e.preventDefault();
      item.classList.toggle('open');
    }
  });
});
