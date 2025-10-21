var arr = [1, 2, 3, 4, 5];
let max = Math.max(...arr)
let min = Math.min(...arr)
let total = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        total++
    }
    sum += arr[i];

}
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
}
let le = 0;
console.log(reversed)
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        le += arr[i]
    }
}
console.log(le)