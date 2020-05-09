const starWars = 'https://swapi.dev/api/people'

let section1 = document.querySelector('.section1')
section1.addEventListener('click', function(e){
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
})


let section2 = document.querySelector('.section2')
section2.addEventListener('click', function(e){
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

})


let section3 = document.querySelector('.section3')
section3.addEventListener('click', function(e){
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
	
})


let section3 = document.querySelector('.section3')
section3.addEventListener('click', function(e){
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
	
})

let section4 = document.querySelector('.section4')
section4.addEventListener('click', function(e){
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
	
})

let section5 = document.querySelector('.section5')
section5.addEventListener('click', function(e){
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
	
})