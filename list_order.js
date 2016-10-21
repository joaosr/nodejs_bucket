var rands = [];

var _rand = function(min, max){	
	var r;	

	while(true){				
		r =  Math.floor(Math.random() * max);

		if(r >= min){			
			return r;
		}		
	}		
}

var generate_rand = function(min, max){	
	var rand;

	while(true){
		rand = _rand(min, max);
		if(rands.indexOf(rand) == -1){
			rands.push(rand);
			return rand;
		}
	}	
}

var list = [];
var start = 0;
var end = 10;

for(i=start;i<end;i++){	
	list.push(generate_rand(start,end));				
}

console.log(list);