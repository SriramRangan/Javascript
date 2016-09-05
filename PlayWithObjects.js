/**
 * Created by SriramRanganathan on 9/5/16.
 */
var myTeamObj = {
    Sriram: {type: "Manager", location: "Chicago", background: "J2EE"},
    Omkar: {type: "Manager", location: "Mysore", background: "J2EE"},
    Kannan: {type: "Developer", location: "Colorado", background: "Mainframes"},
    Raju: {type: "Developer", location: "Chicago", background: ".NET"},
    Deepak: {type:"Manager", location: "Chicago", background: ".NET"},
    numOfTeamMembers: 5
    addTeamMember: function(name, type, location, background) {
        this[name] = {type: type, location: location, background: background};
        this["numOfTeamMembers"]++;
    },
    removeTeamMember: function(name) {
        this[name].name = name;
        delete this.name;


    },
    countByType: function() {

    },
    count : function() {

    }

};

console.log(myTeamObj.Sriram);
console.log(myTeamObj["Omkar"]);
console.log(myTeamObj["numOfTeamMembers"]);