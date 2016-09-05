function findPosInArray(name, names) {
  if (typeof names !== undefined) {
    for (var i = 0; i < names.length; i++) {
      if (name === names[i]) {
        return function() {
					alert("You are in position: "+(i+1));
        }
      }
    }
  }
}

var myPosition = findPosInArray("Sriram", ["John", "Jack", "Tom", "Sriram", "Bill", "Chelsea"]);
myPosition();
