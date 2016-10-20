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

var array_test = [];
var array_order = [];
var start = 0;
var end = 5;

var searchMinor = function(m){
	var n = m;
	while(n>=0){		
		if(array_order.indexOf(n) > -1){
			return array_order.indexOf(n);
		}else{
			n--;
		}		
	}

	return m;
}

for(i=start;i<end;i++){	
	var a = generate_rand(start,end);	
	array_test.splice(a, 0, a);				
}

console.log(array_test);