/**
 * Created by SriramRanganathan on 9/5/16.
 */
var myTeamObj = {
    Sriram: {type: "Manager", location: "Chicago", background: "J2EE"},
    Omkar: {type: "Manager", location: "Mysore", background: "J2EE"},
    Kannan: {type: "Developer", location: "Colorado", background: "Mainframes"},
    Raju: {type: "Developer", location: "Chicago", background: ".NET"},
    Deepak: {type:"Manager", location: "Chicago", background: ".NET"},
    numOfTeamMembers: 5,
    addTeamMember: function(name, type, location, background) {
        this[name] = {type: type, location: location, background: background};
        this["numOfTeamMembers"]++;
    },
    removeTeamMember: function(name) {
        //The below line of code retrieves the object denoted by name and add a property called name and assigns
        //it with a value of name being passed in. So if Raju is the name being passed in, then it retrieves
        //the object Raju by using this["Raju"]. Now it has a handle of the Raju object. Then it adds a property
        //called name to the Raju object and assigns it a value Raju.
        //this always refers to the current object
        this[name].name = name;

        //assign the object being deleted to a temp variable after adding a new properrty in the above line.
        var temp = this[name];

        //delete the object that is to be removed.
        delete this[name];

        //reduce the count
        this["numOfTeamMembers"]--;
        return temp;
    },
    countByType: function(type) {
        //TODO

    },
    count : function() {

    }

};

console.log(myTeamObj.Sriram); //returns Object Sriram. Retrieval using "." notation
console.log(myTeamObj["Omkar"]); //returns Object Omkar. Retrieval using array notation.
console.log(myTeamObj["numOfTeamMembers"]); //returns number of Team members
var myReturnedTeamMember = myTeamObj.removeTeamMember("Raju");
console.log(myTeamObj);
console.log("Adding Team Members");
myTeamObj.addTeamMember(myReturnedTeamMember.name, myReturnedTeamMember.type, myReturnedTeamMember.location, myReturnedTeamMember.background);
console.log(myTeamObj);