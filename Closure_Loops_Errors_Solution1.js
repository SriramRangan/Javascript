function findPosInArray(names) {
  return function findMatch(name) {
  	if(typeof names !== undefined) {
    	for(var i=0; i<names.length; i++) {
      	if(name === names[i]) {
        	alert("Your are in position: "+(i+1));
        }
      }
    }
  };
}

var myPosition = findPosInArray(["John", "Jack", "Tom", "Sriram", "Bill","Chelsea"]);
myPosition("Sriram");
