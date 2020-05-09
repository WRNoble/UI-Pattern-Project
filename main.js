const starWars = 'https://swapi.dev/api/people'

fetch(starWars)
	.then(res => {
		return res.json()
	})
	.then(res => {
		const list = document.createElement('ul')
		res.results.forEach(function(character){
			const listItem = document.createElement('li')
			listItem.textContent = character.name
			list.appendChild(listItem)
		})

		document.querySelector('div').appendChild(list)
	})
	.catch(error => {
		console.log("there has been a disturbance in the force")
	})
