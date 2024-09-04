var per = prompt("Enter the percentage:")


if (per >= 80 && per <= 100) {
    document.write("you are in merit");
} else if (per >= 60 && per <= 80) {
    document.write("you are in Ist Division");
} else if (per >= 45 && per <= 60) {
    document.write("you are in IInd Division");
} else if (per >= 33 && per <= 45) {
    document.write("you are in IIIrd Division");
} else if (per <= 33) {
    document.write("you are fail");
} else {
    document.write("Please Enter Valid Percentage.");
}