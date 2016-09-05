var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squares = function(number) {
  return number * number;
}
var squares = numbers.map(squares);
console.log(numbers);
console.log(squares);

//input array
var names = ["Sriram Ranganathan", "", " ", "SRIDEVI RANGANATHAN", "tanushri Sriram", "NiRUupama puthur"];
//function that will take a name(first last) and covnert it to camelcase
var camelCase = function(name) {
    var newName = ""
      //if the passed in name is not undefined
    if (typeof(name) !== undefined) {
      //tokenize the name into [firstName,lastName] array
      var nameArray = name.split(" ");
      //iterate over the nameArray which will have two values first and last
      for (var i = 0; i < nameArray.length; i++) {
        //convert the first character to uppercase
        var firstCharacter = nameArray[i].charAt(0).toUpperCase();
        //Add the first character to rest of the name transformed to lower case with a space at the end
        newName += firstCharacter + nameArray[i].substring(1, nameArray[i].length).toLowerCase() + " ";
      }
    }
    //return the trimmed name as there will be an extra space at the end becuase of the above logic
    return newName.trim();
  }
  //call the map function which will transform the input array and pass in the transformation function
var camelCaseNames = names.map(camelCase);
console.log(names);
//output the transformed array
console.log(camelCaseNames);
