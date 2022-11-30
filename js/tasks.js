
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
				<p>Выполненные задания</p>
	
			`
	}

	const renderJiraTasks = () => {
		const link = document.querySelector('.jira-tasks')

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

						<h2>Обратная связь по существующим процедурам:</h2>

						<p><a href="https://jira2.tcsbank.ru/browse/FBI-60343" target="_blank">Повторное обращение
								Мобайл</a></p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-61135" target="_blank">Конструктор тарифа
								Мобайл
							</a>
						</p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-62063" target="_blank">Проблема с заявкой СИМ
							</a>
						</p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-62065" target="_blank">Заявка мобайл в статусе
								Ошибка
							</a>
						</p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-66010" target="_blank">Проблема с заявкой СИМ
							</a>
						</p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-66380" target="_blank">Ошибочный платеж Мобайл
							</a>
						</p>
						<p>
							<a href="https://jira2.tcsbank.ru/browse/FBI-69503" target="_blank">Расторжение договора
								Мобайл
							</a>
						</p>
						<p><a href="https://jira2.tcsbank.ru/browse/FBI-70517" target="_blank">Юридические ответы
								Мобайл</a></p>

					</div>

				</div>
			`
	}

	const renderTask1 = () => {
		const link = document.querySelector('.task1')

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

			<h2>Задание 1:</h2>

			<a href="img/Pizza.svg" target="_blank">Ссылка на блок-схему</a>

		</div>

	</div>
			`
	}

	const renderTask2 = () => {
		const link = document.querySelector('.task2')

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
					<div class="text-information long-read">

						<h2>Задание 2:</h2>

						<ol>

							<li>
								<p>
								<p>
									Неоднозначная ситуация. С одной стороны процедура стала понятнее сотрудникам и
									работать
									стала лучше. Это видно по
									снижению трансферов по причине "Нужна помощь по обращению"и небольшим приростом
									успешных
									подключений процедуры. С другой
									стороны время время прохождения по процедуре значительно увеличилась, а так же
									количество
									передаваемых претензий стало
									явно больше.
								</p>
								</p>
							</li>
							<li>

								<p>
									Вероятно владелец в принципе расширил функционал процедуры и добавил информацию. Так
									как
									время прохождения стало
									больше - значит добавлено много новой информации. Возможно добавлены новые услуги.
								</p>

								<p>
									Так как
									возросло количество
									передаваемых претензий, но при этом запуски процедуры остались примерно на том же
									уровне, а
									так же количество успешно
									подключенных услуг возрасло - я бы предположил, что добавился новый функционал,
									которым обладает
									только
									Бэк, на примере, как это было с
									Восстановлением номера. На всех раскатали возможность передавать претензии для
									восстановления и количество передаваемых
									претензий соответственно выросло.
								</p>
								<p>
									Таким же примером служит ограничение свободного
									переключения подписки с одного номера
									на другой. Из-за срабатывания лимитов - сотрудники вынуждены передавать претензии
									для
									принудительной смены.
								</p>

							</li>
							<li>
								<p>
									Нам необходимы причины передаваемых обращений для понимания, в чем именно
									потребность
									передачи претензии. Мы должны
									выяснить, обращения передаются, так как у сотрудников недосточно информации и они не
									могут
									разобраться, у них возникают
									проблемы с подключением самостоятельно или же передача претензий изначально
									подразумевалась
									и ожидалась из-за отсутствия
									доступов у первой линии, но наличия их у Бэк-а.
								</p>
								<p>
									Так же, для понмания процесса необходимы данные о том, сколько новых шагов/веток
									было
									добавлено в процедуру, чтобы на
									основании этих факторов иначе взглянуть на показатели.
								</p>
							</li>
						</ol>

					</div>

				</div>
			`
	}

	const renderTask3 = () => {
		const link = document.querySelector('.task3')

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

			<h2>Задание 3:</h2>

			<a href="" target="_blank">Ссылка на блок-схему</a>

		</div>

	</div>
			`
	}

	const renderTask4 = () => {
		const link = document.querySelector('.task4')

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

			<h2>Задание 4:</h2>

			<p>На 59 минуте она будет заполнена на половину, после чего на 60 минуте удвоится и заполнит полностью</p>

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
	renderJiraTasks()
	renderTask1()
	renderTask2()
	renderTask3()
	renderTask4()

	renderButton()
}, 1500)

