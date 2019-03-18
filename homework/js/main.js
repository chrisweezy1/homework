class Main {
	execute(){
		//this is one comment
		//your code
		var points = 0

		var question1= prompt ("What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?");
			if (question1 === "Jack Sparrow") {
				points = points + 100;
			} else {
   				 points = points - 100;
   			}

   		var question2= prompt ("How many books has the Harry Potter saga");
   			if (question2 === "7") {
   					points =  points + 100;
   			} else {
   				points = points - 100;
   			}

   		var question3= prompt ("What are the first four digits of Pi?"); 
   		if (question3 === "3.1415") {
   				points = points + 100;
   			} else {
   				points = points - 100;
   			}

   		var question4= prompt ("How many countries are there in the world?");
   		if (question4 === "195") {
   				points = points + 100;
   			} else {
   				points = points - 100;
   			}
   		var question5= prompt ("Who's the current president of the UN?");
   		if (question5 === "María Fernanda Espinosa Garcés") {
   				points = points + 100;
   			} else {
   				points = points - 100
			} 

			alert ( points )
	}		
}											
new Main().execute();