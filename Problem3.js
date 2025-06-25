// Pattern:
// if a is odd: print first a odd no's
// if a is even: print series for a-1

function generateSeries(a) {
    let count = (a % 2 === 0) ? a - 1 : a;

    let result = [];
    for (let i = 0; i < count; i++) {
        result.push((2 * i) + 1); 
    }

    console.log(result.join(", "));
}