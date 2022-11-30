
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

	const renderPanda = () => {
		const link = document.querySelector('.panda')

		link.innerHTML =
			`
				<div class="panda-container"><img src="img/panda.svg" alt=""></div>

				<h2>Процедура завершилась с ошибкой</h2>
				<p>Не нужно сообщать об этой ошибке, ответственные считают, что таких причин не может быть</p>
	
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
	renderPanda()

	renderButton()
}, 5000)

