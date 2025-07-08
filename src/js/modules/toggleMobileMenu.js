document.addEventListener('DOMContentLoaded', () => {
	toggleMobileMenu();
});

function toggleMobileMenu() {
	const burgerBtn = document.querySelector('.header__burger-btn');
	const menu = document.querySelector('.header__menu');
	const menuItems = menu.querySelectorAll('.header__menu-item');
	const overlay = document.querySelector('.overlay');

	if (burgerBtn && menu) {
		burgerBtn.addEventListener('click', () => {
			if (!burgerBtn.classList.contains('active') && !menu.classList.contains('open')) {
				addAciveClass();
			} else {
				removeActiveClass();
			}
		});

		overlay.addEventListener('click', () => {
			if (overlay.classList.contains('active')) {
				removeActiveClass();
			}
		});

		menuItems.forEach((item) => {
			item.addEventListener('click', () => {
				removeActiveClass();
			});
		});

		function addAciveClass() {
			burgerBtn.classList.add('active');
			menu.classList.add('open');
			overlay.classList.add('active');
			document.body.classList.add('lock');
		}

		function removeActiveClass() {
			burgerBtn.classList.remove('active');
			menu.classList.remove('open');
			overlay.classList.remove('active');
			document.body.classList.remove('lock');
		}
	}
}
