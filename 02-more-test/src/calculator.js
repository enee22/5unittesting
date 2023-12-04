

export const add = (numbers) => {
    if (numbers.length == 0) {
        return 0;
    }
    else if (numbers.includes('') == true) {
        return NaN;
    }
    else {
        let sum = 0;
        for (const number of numbers) {
            if (isFinite(number) ==false) {
                return NaN;
            }
            sum += parseInt(number);
        }
        return sum;
    }
}
