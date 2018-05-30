var number = '33721',
		mult = 1,
		len = number.length;
		
for (var i = 0; i < len; i++) {
	mult = mult *= number%10;
	number = Math.floor(number / 10);
}

console.log (mult);	

document.write (Math.floor (mult ** 3 / 100000));