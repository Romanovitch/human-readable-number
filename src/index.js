module.exports = function toReadable (number) {
	//
  const table = {
		'unit': { 
			'0': 'zero',
			'1': 'one',
			'2': 'two',
			'3': 'three',
			'4': 'four',
			'5': 'five',
			'6': 'six',
			'7': 'seven',
			'8': 'eight',
			'9': 'nine'
		},
		'simple': { 
			'10': 'ten',
			'11': 'eleven',
			'12': 'twelve',
			'13': 'thirteen',
			'14': 'fourteen',
			'15': 'fifteen',
			'16': 'sixteen',
			'17': 'seventeen',
			'18': 'eighteen',
			'19': 'nineteen'
		},
		'ten': { 
			'2': 'twenty',
			'3': 'thirty',
			'4': 'forty',
			'5': 'fifty',
			'6': 'sixty',
			'7': 'seventy',
			'8': 'eighty',
			'9': 'ninety',
		}
	}
	function number10_99(num){
		let numberArr = num.toString().split('').reverse()
		if (num < 20) return table.simple[num.toString()]
		if (num < 100) {
			return !+numberArr[0]
				? table.ten[numberArr[1]]		
				: `${table.ten[numberArr[1]]} ${table.unit[numberArr[0]]}`
		}
	}
	if (!number) return 'zero'
	if (number < 10) return table.unit[number]
	if (number < 100) return number10_99(number)
	if (number <= 999) {
		let numberArr = number.toString().split('')
		let numberSecondThird = +`${numberArr[1]}${numberArr[2]}`
		let tens = !numberSecondThird 
			? ''
			: numberSecondThird < 10 
				? table.unit[numberSecondThird]
				: number10_99(numberSecondThird) 
		return `${table.unit[numberArr[0]]} hundred ${tens}`.trim()
	}
}
