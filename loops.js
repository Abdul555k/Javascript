// var a = 1;
// document.write
// while(a <= 10){
//     document.write("Hello <br>");
//     a = a + 1;
// }

// for (var a = 1; a <=100; a = a+10){
//     for (var c = a; c < a+10 ; c++){
//     document.write(c + " ");

//     }

//     document.write("<br>");
// }

var array = new Array(3);

for (var g = 0; g < 3; g++) {
    array[g] = prompt("Enter The Value : ");
}

document.write("<ul>")

for (var a = 0; a < 3; a++) {
    document.write("<li>" + array[a] + "</li>")
}
document.write("</ul>")
