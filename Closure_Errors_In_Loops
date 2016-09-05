function findPosInArray(name, names) {
  var findMatch;
  if (typeof names !== undefined) {
    for (var i = 0; i < names.length; i++) {
      if(name === names[i]) {
      	findMatch = function() {
        	alert("You are in position number: "+i);
        };
      }
    }
  }
  return findMatch;
}

var myPosition = findPosInArray("Sriram", ["John", "Jack", "Tom", "Sriram", "Bill","Chelsea"]);
myPosition();
