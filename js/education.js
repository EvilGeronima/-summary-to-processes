
const renderPage = setTimeout(() => {

	const loading = document.querySelector('.loading')

	loading.style.display = 'none'

	const renderTitle = () => {
		const title = document.querySelector('.title')

		title.innerHTML =
			`
				<p>Резюме Тройченко Роман</p>
	
			`
	}

	const renderDescription = () => {
		const link = document.querySelector('.description')

		link.innerHTML =
			`
				<p>Места в которых я прошел обучение</p>
	
			`
	}

	const renderEducationList = () => {
		const link = document.querySelector('.education-list')

		link.innerHTML =
			`
							<div class="text-field">

					<div class="volume-icon">
						<svg class="volume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g data-name="Layer 2">
								<g data-name="volume-up">
									<path
										d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z" />
									<path
										d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77zm-5.17-2.11a1 1 0 0 0-1 0L7 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z" />
								</g>
							</g>
						</svg>
					</div>
					<div class="text-information">

						<h2>Образование:</h2>

						<p><span>Среднее общее образование:</span>МБОУ СОШ №3 г. Городовиковск</p>


						<div class="professionsl">
							<p><span>Среднее профессиональное:</span>Ставропольский Региональный Колледж Вычислительной
								Техники и Электроники.</p>

							<p><span class="professionsl-add">Факультет:</span> Программирование в компьютерных
								системах.</p>
							<p><span class="professionsl-add">Специальность:</span> Техник-программист.</p>

						</div>



					</div>

				</div>
			`
	}


	const renderButton = () => {
		const link = document.querySelector('.button')

		link.innerHTML =
			`
				
				<a href="index.html" class="button-back"><svg class="arrow-left" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16">
						<path fill-rule="evenodd"
							d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
					</svg>
				</a>

				<a href="index.html" class="button-next">
					<p>Завершить</p>
				</a>
	
			`
	}

	renderTitle()
	renderDescription()
	renderEducationList()

	renderButton()
}, 1500)

