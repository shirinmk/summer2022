// Looping a Triangle
// Write a loop that displays the following triangle within a console window:
// #
// ##
// ###
// ####
// #####
// ######
// #######


let i = 1;
while (i <= 7) {
    for (let j = 1; j <= i; j++) {
        document.write('#');
    }
        document.write('<br/>');
        i++;
    }
