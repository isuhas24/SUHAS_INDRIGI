function compute(arr){
    const findMultiplyCount = (ele) => {
        let count = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]%ele === 0){
                count++;
            }
        }
        return count;
    }
    let multipleMap = new Map();
    for(let i=1;i<10;i++){
        let count = findMultiplyCount(i);
        multipleMap.set(i, count);
    }
    return multipleMap;
}

console.log(compute( [1,2,8,9,12,46,76,82,15,20,30]));

// output: 
// Map(9) {
//   1 => 11,
//   2 => 8,
//   3 => 4,
//   4 => 4,
//   5 => 3,
//   6 => 2,
//   7 => 0,
//   8 => 1,
//   9 => 1
// }