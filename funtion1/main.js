class Main {
	execute(){
		//this is one comment
		//your code 

		function multiply (num1, num2){
			let c = num1 * num2
 		 console.log(c);
		}

		multiply(30,2); 

		function average (a,b,c,d){
			let result = (a+b+c+d ) / 4;
			console.log ("average:" +result);
		}
        average (70,60,65,80);

        function myFavouriteSong(song, author){
        	console.log( "my Favourite Song is "+song+" by "+author);

        }
        myFavouriteSong( "Don't worry be happy" , "by Bob Marley");

        function add (cats, dogs){
        	let m = cats+dogs  ;
 		 console.log(m);
		}

		add (3,4);  

	}

}

new Main().execute();