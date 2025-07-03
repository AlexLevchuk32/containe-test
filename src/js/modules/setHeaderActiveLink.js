document.addEventListener('DOMContentLoaded', () => {
	setHeaderActiveLink();
});

function setHeaderActiveLink() {
	const headerLinks = document.querySelectorAll('.header__menu-item');
	const currentPath = window.location.href;
	const logoLink = document.querySelector('.header__logo-link');
	let activeLink = false;

	headerLinks.forEach((link) => {
		if (link) {
			const linkPath = new URL(link.href).href;

			if (currentPath === linkPath) {
				link.classList.add('menu-item--active');
				activeLink = true;
			} else {
				link.classList.remove('menu-item--active');
			}
		}
	});

	if (!activeLink) {
		headerLinks[0].classList.add('menu-item--active');

		logoLink.addEventListener('click', () => {
			headerLinks.forEach((el) => el.classList.remove('menu-item--active'));
			headerLinks[0].classList.add('menu-item--active');
		});
	}

	headerLinks.forEach((link) => {
		if (link) {
			link.addEventListener('click', () => {
				headerLinks.forEach((el) => el.classList.remove('menu-item--active'));
				link.classList.add('menu-item--active');
			});
		}
	});
}
