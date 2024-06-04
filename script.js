// Arrays
// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
//  console.log("Hello" + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// Short hand array creation
var helloSpeaker = {
    speak: function(name) {
        console.log("Hello " + name + "!");
    }
};

var byeSpeaker = {
    speak: function(name) {
        console.log("Goodbye " + name + "!");
    }
};

var names = ["Yaakov", "John", "John", "Jen", "Jason", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstletter = names[i].charAt(0).toLowerCase();

    if (firstletter === 'j') {
        byeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}