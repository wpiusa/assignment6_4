//Employee objects in an array. Using for in 
//loop display the name, age, salary, city, state and pin code

var Employee= [];
for (i=0; i<5; i++){
   
    if (i==0){
	  Employee[i] = ["Tom Lee", 52, 100000,"LA","CA","11111"];
	}else if (i==1){
      Employee[i] = ["Paul Lee", 23, 60000,"LA","CA","11111"];
	}else if (i==2){
      Employee[2] = ["Steve Lee", 22, 70000,"LA","CA","11111"];
	}
	  else if (i==3){
	  Employee[3] = ["Sue Lee", 21, 80000,"LA","CA","11111"];  	
	}else{
	  Employee[4] = ["Kim Lee", 22, 90000,"LA","CA","11111"];	
	}	

	console.log(Employee[i]);
}


	
	
	