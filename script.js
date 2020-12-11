//expressions

let n = 50;

var str = "*";

//fertilizer conditionals

var inches = prompt ("How many inches of rain fell?")

var fertilizer = prompt ("Did you use fertilizer?")

if (fertilizer == "yes") {
    var type = prompt ("Did you use premium or regular fertilizer?")
} else {
    alert ("yay code!")
}

//asterisk expressions

var repeat = (str,inches) => {
    return str.repeat(inches);
}

//yield conditionals

if (inches >= 20) {
    let y = (n *= 0.9);
} 

if (inches < 20) {
    let y = (n *= 0.8);
}

if (type == "regular") {
    n *= 1.1;
}

if (type == "premium") {
    n *= 1.15;
} 

if (fertilizer == "no") {
    n *= 1;
}

//console at end

console.log (repeat("*",inches));

console.log ("The yield should be " + n + " bushels per acre");