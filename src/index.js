module.exports = function toReadable (number) {
    const decimals = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    const ten_whole = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number <= 19) {
        return decimals[number];
    }

    if (number >= 20) {
    
        if (number.toString().length === 2) {

            if (number % 10 === 0) {
                return ten_whole[String(number).slice(0, 1)];
            } else {
                return `${ten_whole[String(number).slice(0, 1)]} ${decimals[String(number).slice(1)]}`;
            }
        }

        if (number.toString().length === 3) {
            const arrNumber = String(number).split('');
            const digit= arrNumber[2]; // последняя цифра
            const tenth_num = Number(arrNumber[1] + arrNumber[2]); // второй десяток 11..19
            const dozens = arrNumber[1]; // вторая цифра с конца: десятки
            const hundreds = arrNumber[0]; // сотки

            // 100 200 300 400 500 600 700 800 900
            if (number % 100 === 0) {
                return `${decimals[hundreds]} hundred`;
            }
            // 101...109
            else if (dozens == '0')
            {
                return `${decimals[hundreds]} hundred ${decimals[digit]}`;
            }
            // 110..115..119
            else if (dozens == '1')
            {
                
                if (digit > 0 || digit <= 9) {
                    return `${decimals[hundreds]} hundred ${decimals[tenth_num]}`;
                }
            }
            // 110 150 280 990
            else if (digit == '0')
            {
                return `${decimals[hundreds]} hundred ${ten_whole[dozens]}`;
            }
            // 565 288
            else {
                return `${decimals[String(number).slice(0, 1)]} hundred ${ten_whole[String(number).slice(1, 2)]} ${decimals[String(number).slice(2)]}`;
            }
        }
    }
}
