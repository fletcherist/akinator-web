const a = {
	value: 0,
	next: [
		{
			value: 1,
			next: {
				value: 8
			}
		},
		{
			value: 3,
			next: {
				value: 5,
			}
		}
	]
}

let ANSWER = 0

const searchInObject = obj => {
	let sum = 0
	for (const elem of obj) {
		sum += elem.value
		if (elem.next) {
			searchInObject(elem.next)
		}
	}
	return sum
}

const foo = () => {
	for (const e in a) {
		if (e === 'next') {
			ANSWER += searchInObject(a[e])
		}
	}
}
foo()
console.log(ANSWER)
