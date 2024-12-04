const s = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

function mullItOver(s) {
	const regex =  /(?<=mul\()\d{1,3}(?:,\d{1,3})*(?=\))/g
	let matched = s.match(regex)
	let numberArray = matched.map(m => m.split(',')).map(m => m.map(n => parseInt(n)))
	let multiply = numberArray.map( m => m.reduce((k,a) => k * a, 1))
	return multiply.reduce((k,a) => k + a, 0)
}	

function main(){
  mullItOver()
}

main()
