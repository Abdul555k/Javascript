
// var day = 2;

// switch (day) {
//     case 0:
//         document.write("MONDAY")
//         break;
//     case 1:
//         document.write("TUESDAY")
//         break;
//     case 2:
//         document.write("WEDNUSDAY")
//         break;
//     case 3:
//         document.write("THURSDAY")
//         break;
//     case 4:
//         document.write("FRIDAY")
//         break;
//     case 5:
//         document.write("SATURDAY")
//         break;
//     case 6:
//         document.write("SUNDAY")
//         break;
//         default:
//             document.write("The is not valid")
// }




document.write('Total Subject - 5 <br> Total Marks - 500 <br> <br>');
function sumMarks(english,urdu,maths,science,physics){
    var a = english+urdu+maths+science+physics;
    return a;
};
var b = sumMarks(50,50,50,80,80);
document.write('Marks Obtain -'+b+ '<br>');
function percentage(tm) {
    var c = tm/500*100;
    return c;
};
var d = percentage(b);
document.write('percentage -' + d + '%')
