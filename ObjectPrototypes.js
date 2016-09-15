/**
 * Created by SriramRanganathan on 9/7/16.
 */
(function() {
    function Employee(name, empId, department, dateOfJoining, location) {
        this.name = name;
        this.empId = empId;
        this.department = department;
        this.dateOfJoining = dateOfJoining;
        this.location = location;
    }

    Employee.prototype.perform = function () {
        console.log("Hi... My job includes coding, testing, design etc");
    };

    Employee.prototype.speakOut = function () {
        console.log("Hi... My name is " + this.name);
    };
    var bharath = new Employee("Bharath Mukund","222","Insurance","01-01-2008","Chicago");
    console.log(bharath);
    var sriram = new Employee("Sriram Ranganathan","333","Insurance","01-01-2005","Newark");
    console.log(sriram);
    sriram.perform();
    sriram.speakOut();
    bharath.speakOut();
})();



