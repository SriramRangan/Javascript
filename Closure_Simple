function foo() {
	var a = 20;
  var b = 30;
  var c = a + b;
  //return a function
  return function() {console.log("The sum is "+c)};
}
//Execute the returned function by adding a extra set of paranthes
foo()();
//Otherwise assign the output of foo which is function to another variable called print and then execute print
var print = foo();
//execute print
print();
