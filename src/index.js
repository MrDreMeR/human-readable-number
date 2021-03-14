module.exports = function toReadable (number) {
    const hundreds = Math.trunc(number / 100); 
    const dozens = Math.trunc((number % 100) / 10);
    const ones = number % 100 % 10;

    let str = '';
    const decimalsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondDozen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (+number === 0) {
        return 'zero';
    }

    if (hundreds) {
        str += decimalsArr[hundreds -1] + ' hundred ';
    }

    if (dozens) {
        if (dozens === 1) {
            if (ones) {
                str += secondDozen[ones -1] + ' ';
            } else {
                str += 'ten';
            }
        } else {
            str += dozensArr[dozens - 2] + ' ';
        }
    }     

    
    if (ones && dozens !== 1) {
        str += decimalsArr[ones - 1];
    }    

    return str.trim();
}
