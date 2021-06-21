const rotate = (d, arr) => {
    for (let i = 0; i < d; i++) {
        let firstNumber = arr.shift();
        arr.push(firstNumber);
    }
    return arr;
}
