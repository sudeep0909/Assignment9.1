
// Javascript External File

/* 
JavaScript function named createObject which creates object using Object constructor and
returns object with following properties
• Name
• Height
• Aboutyourself - method 
*/


// Function createObject created
function createObject() {
    var newObject = new Object();
    //objetc created as newObject
    newObject.name = "Bala";
    newObject.height = 180;
    newObject.aboutYourSelf = function () {
        return "I am " + this.name + ". I am " + this.height + " cm height";
    }
    // function returning Object with 2 properties & a method
    return newObject;
}

var self = createObject();
console.log(self.aboutYourSelf())
