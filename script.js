var number_display = [document.getElementById("number-display-1"), document.getElementById("number-display-2"), document.getElementById("number-display-3"), document.getElementById("number-display-4")];
// var number_display = document.getElementById("number-display-container").children;

function generate() {
    // var result = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    // for (const display in number_display) {
    //     console.log("feds")
        // display.innerHTML = Math.floor(Math.random()*10).toString();
        // display.innerHTML = "sgdgf";
    // }
    for (let i = 0; i < 4; i++) {
        var random_num = Math.floor(Math.random()*10).toString();
        while (random_num == 0) {
            random_num = Math.floor(Math.random()*10).toString();
        }
        number_display[i].innerHTML = random_num;
    }
    // number_display.innerHTML = result.join(" ");
}

// console.log(generate());

// var res = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
// for (let i = 0; i < 1000000; i++) {
//     let n = Math.floor(Math.random()*10);
//     for (const key in res) {
//         if (n === parseInt(key)) {
//             res[key] += 1;
//         }
//     }
// }
// console.log(res);
