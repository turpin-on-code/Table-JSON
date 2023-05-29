const table = document.querySelector('table')

const myData = [
	{
		"name": "Dean Valencia",
		"phone": "1-239-350-0327",
		"email": "tellus.aenean@hotmail.ca",
		"address": "Ap #988-140 Odio Rd.",
		"postalZip": "41101",
		"region": "Sucre",
		"country": "Russian Federation"
	},
	{
		"name": "Christopher Hull",
		"phone": "1-644-321-8279",
		"email": "diam.lorem@icloud.org",
		"address": "188-4492 Ac Street",
		"postalZip": "01757",
		"region": "Central Visayas",
		"country": "South Africa"
	},
	{
		"name": "Bruce Parker",
		"phone": "(138) 621-8758",
		"email": "non.enim.commodo@outlook.ca",
		"address": "P.O. Box 286, 5145 Pede. Street",
		"postalZip": "121631",
		"region": "Punjab",
		"country": "Australia"
	},
	{
		"name": "Ann Crane",
		"phone": "(978) 267-6787",
		"email": "nunc.lectus.pede@aol.net",
		"address": "5879 Lectus, Avenue",
		"postalZip": "4363",
		"region": "Andalucía",
		"country": "Singapore"
	},
	{
		"name": "Xantha Case",
		"phone": "(534) 274-9121",
		"email": "aliquam@icloud.net",
		"address": "Ap #564-3228 Nec St.",
		"postalZip": "441146",
		"region": "Azad Kashmir",
		"country": "Vietnam"
	}
]

const myHeadingsArray = Object.keys(myData[0])
// Array of <th> and headings ['<th>Name</th>...]
const myThArray = myHeadingsArray
	.map((heading) => `<th>${heading}</th>`)

// Nested array of values
const myValuesArray = myData.map(row => {
	return Object.values(row).map(val => `<td>${val}</td>`)
})

let myValues = ''

myValuesArray.forEach(arr => {
	myValues += `<tr>${arr.join('')}</tr>`
})

const myHeadingContainer = `
	<caption>
		Table of Users
	</caption>
	<tr>
		${myThArray.join('')}
	</tr>
`
table.innerHTML = myHeadingContainer + myValues

  