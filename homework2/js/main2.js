class Main {
	execute(){
		//this is one comment
		//your code 

		let number = prompt ("give me a number");
		if (number %3 === 0 && number %5){
			alert ("fizzbuzz");
			}
		
		else if (number %5 === 0){
			alert ("buzz");
			}
		else if (number %3 === 0){
			alert ("Fizz");
			}
		
	}		
}

new Main().execute();