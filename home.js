const me = {
    first: "kaia",
    last: "b-d",
    age: 27,
    meInfo: function () {
        return this.first + "\n" + this.last;
    }
}

document.getElementById("someText").innerHTML = me["first"] + "\n" + me["last"]
console.log(me.meInfo())
function meReport(object) {
    return object.first + "\n" + object.last;
}
console.log(meReport(me))

let age = prompt("how old are you?")

if ((age >=18) && (age<=35)) {
   console.log("target demo")
} else {
    console.log("not target")
}

switch (7) {
    case 0:
        text="weekend";
    case 5:
        text="weekend";
    case 6:
        text="weekend";
    default:
        text="weekday";

}