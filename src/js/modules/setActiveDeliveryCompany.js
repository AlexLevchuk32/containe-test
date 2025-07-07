document.addEventListener('DOMContentLoaded', () => {
	setActiveCompany();
});

function setActiveCompany() {
	const companyPoints = document.querySelectorAll('.main-banner__company-point');
	const companiesList = document.querySelectorAll('.main-banner__company.delivery-company');

	companyPoints.forEach((point) => {
		if (point) {
			const circle = point.querySelector('.circle--active');

			point.addEventListener('click', () => {
				const isActivePoint = point.classList.contains('active');

				companyPoints.forEach((el) => {
					const elCircle = el.querySelector('.circle--active');

					el.classList.remove('active');

					if (elCircle) elCircle.setAttribute('r', '5');
				});

				companiesList.forEach((company) => {
					if (company) {
						company.classList.remove('active');
					}
				});

				if (!isActivePoint) {
					point.classList.add('active');

					if (circle) circle.setAttribute('r', '10');

					companiesList.forEach((company) => {
						if (company) {
							if (point.dataset.company == company.dataset.company) {
								company.classList.add('active');
							}
						}
					});
				}
			});
		}
	});

	companiesList.forEach((company) => {
		if (company) {
			company.addEventListener('click', () => {
				const isActiveCompany = company.classList.contains('active');

				companiesList.forEach((el) => el.classList.remove('active'));

				companyPoints.forEach((point) => {
					const circle = point.querySelector('.circle--active');

					point.classList.remove('active');

					if (circle) circle.setAttribute('r', '5');
				});

				if (!isActiveCompany) {
					company.classList.add('active');

					companyPoints.forEach((point) => {
						const circle = point.querySelector('.circle--active');

						if (company.dataset.company == point.dataset.company) {
							point.classList.add('active');

							if (circle) circle.setAttribute('r', '10');
						}
					});
				}
			});
		}
	});
}
