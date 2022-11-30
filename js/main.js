
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
				<p>Что ты хочешь узнать?</p>
	
			`
	}

	const renderRadioButtonsList = () => {
		const link = document.querySelector('.radiobuttons-list')

		link.innerHTML =
			`
							<div class="radiobutton-container">
					<div class="radiobutton">
						<input class="radio" type="radio" id="about" name="information" value="about-me-text">
						<div class="radio-text">
							<p>Обо мне</p>
							<p class="add-info">Контактная информация / личностные качества / описание</p>
						</div>
					</div>

					<div class="radiobutton">
						<input class="radio" type="radio" id="education" name="information" value="my-education">
						<div class="radio-text">
							<p>Образование</p>
							<p class="add-info">Список оконченных учебных заведений</p>
						</div>
					</div>

					<div class="radiobutton">
						<input class="radio" type="radio" id="work" name="information" value="work-experience">
						<div class="radio-text">
							<p>Опыт работы</p>
							<p class="add-info">Прошлые / текущие места работы</p>
						</div>
					</div>

					<div class="radiobutton">
						<input class="radio" type="radio" id="skills" name="information" value="professional-skills">
						<div class="radio-text">
							<p>Профессиональные навыки</p>
							<p class="add-info">Знания и умения</p>
						</div>

					</div>

					<div class="radiobutton">
						<input class="radio" type="radio" id="tasks" name="information" value="vacancy-tasks">
						<div class="radio-text">
							<p>Задания</p>
							<p class="add-info">Выполненные задания из вакансии / ссылки на заведенные задачи</p>
						</div>

					</div>
				</div>
	
			`
	}

	const renderButton = () => {
		const link = document.querySelector('.button')

		link.innerHTML =
			`
				<a href="" class="button-next">
					<p>Далее</p>
				</a>
	
			`
	}

	const checkRadio = () => {
		const option = document.querySelectorAll('.radio')

		const link = document.querySelector('.button')

		option[0].addEventListener('click', () => {
			link.innerHTML =
				`
				<a href="about.html" class="button-next">
					<p>Далее</p>
				</a>
	
			`
		})

		option[1].addEventListener('click', () => {
			link.innerHTML =
				`
				<a href="education.html" class="button-next">
					<p>Далее</p>
				</a>
	
			`
		})

		option[2].addEventListener('click', () => {
			link.innerHTML =
				`
				<a href="work.html" class="button-next">
					<p>Далее</p>
				</a>
	
			`
		})

		option[3].addEventListener('click', () => {
			link.innerHTML =
				`
				<a href="skills.html" class="button-next">
					<p>Далее</p>
				</a>
	
			`
		})

		option[4].addEventListener('click', () => {
			link.innerHTML =
				`
				<a href="tasks.html" class="button-next">
					<p>Далее</p>
				</a>
	
			`
		})


	}

	renderTitle()
	renderDescription()
	renderRadioButtonsList()
	renderButton()
	checkRadio()
}, 1500)


