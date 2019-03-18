class Main {
	execute(){
		//this is one comment
		//your code 

		let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
		for(let i = 0; i <color.length; i++){
			let number= (i+1);
        console.log( number+ " is "+color[i]+ " your favorite color ");
       
    	}
	}

}

new Main().execute();