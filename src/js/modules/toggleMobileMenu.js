document.addEventListener('DOMContentLoaded', () => {
	toggleMobileMenu();
});

function toggleMobileMenu() {
	const burgerBtn = document.querySelector('.header__burger-btn');

	if (burgerBtn) {
		burgerBtn.addEventListener('click', () => {
			if (!burgerBtn.classList.contains('active')) {
				burgerBtn.classList.add('active');
			} else {
				burgerBtn.classList.remove('active');
			}
		});
	}
}
