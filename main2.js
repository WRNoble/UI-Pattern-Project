const starWarsApiUrl = 'https://swapi.dev/api/people'
let unorderedList = document.querySelector('#accordion')

fetch(starWarsApiUrl)
	.then(res => res.json())
	.then(data => {
		data.results.forEach(character => {
			let listItem = document.createElement('li')
			listItem.textContent = character.name
			let height = document.createElement('p')
			height.textContent = character.height
			height.style.display = 'none'
			listItem.appendChild(height)
			unorderedList.appendChild(listItem)

			listItem.addEventListener('click', () => {
				height.style.display = 'block'
				if ()
			})
		})
	})