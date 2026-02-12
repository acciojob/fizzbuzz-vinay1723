//your JS code here. If required.

function answer() {
	for (let index = 1; index <=100; index++){
		if (index % 3 === 0 && index % 5 === 0) {
			alert('FizzBuzz');
			
		}else if(index % 3 === 0) {
			alert('Fizz');
		
		}else if(index % 5 === 0) {
			alert('Buzz');
		}else{
			alert(index);
		}
	}
}

answer();