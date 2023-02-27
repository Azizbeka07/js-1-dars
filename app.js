// let userball = prompt("balingizni kiriting")

// if (userball< 56 && userball< 71) {
//     alert("Siz 3 olgansiz")
// } else if (userball> 72 && userball< 86) {
//     alert("Siz 4 olgansiz")
// } else if (userball> 87 && userball< 100) {
//     alert("Siz 5 olgansiz")
// }

let userweight = prompt("vazningiz")
let userheight = prompt("bo`yingiz")

if (userweight / userheight * userheight < 18.5) {
    alert("Under weight")
} else if (userweight / userheight * userheight > 18.5 && userweight / userheight < 24.9) {
    alert("Normal")
} else if (userweight / userheight * userheight > 24.9 && userweight / userheight < 29.9) {
    alert("over weight")
} else if (userweight / userheight * userheight > 29.9 && userweight / userheight < 34.9) {
    alert()
} else if (userweight / userheight * userheight > 34.9 && userweight / userheight < 39.9) {
    alert("obesity (class 2)")
} else if (userweight / userheight * userheight > 39.9 && userweight / userheight < 40) {
    alert("extreme obesity")
} else {
    alert("extreme obesitiy")
}