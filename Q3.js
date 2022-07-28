// Write a javascript function that prints the reverse of a number. Example: if the number is 149, then output should be 941.

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

console.log(reverseInt(149));