function generateOddSeries(a) {
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push((2 * i) + 1);
    }
    console.log(result.join(", "));
}

generateOddSeries(1);  // Output: 1
generateOddSeries(2);  // Output: 1, 3
generateOddSeries(3);  // Output: 1, 3, 5
generateOddSeries(4);  // Output: 1, 3, 5, 7
generateOddSeries(5);  // Output: 1, 3, 5, 7, 9