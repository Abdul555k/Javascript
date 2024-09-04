
function myfunction() {
    document.write('my name is ' + 'abdullah');
};
myfunction();


// function hello(){
//     document.write("hello world")
// }

// hello();
// document.write("<br>")
// hello();
// document.write("<br>")
// hello();

// var a = 'hello';

// function abc() {
//     var b = 'how are you';
// };
// document.write(b);


document.write('Total Subject - 5 <br> Total Marks - 500 <br> <br>');
function sumMarks(english, urdu, maths, science, physics) {
    var a = english + urdu + maths + science + physics;
    return a;
};
var b = sumMarks(50, 85, 100, 70, 80);
document.write('Marks Obtain -' + b + '<br>');
function percentage(tm) {
    var c = tm / 500 * 100;
    return c;
};
var d = percentage(b);
document.write('percentage -' + d + '%')