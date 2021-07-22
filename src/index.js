module.exports = function toReadable(number) {
    const arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrDozens = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const word = arr[number];
    const hundred = Math.trunc(number / 100);
    const dozens = Math.trunc(number / 10);
    const unitsDozens = Math.trunc((number / 10) % 10);
    const units = number % 10;
    const unitsHundred = number % 100;
    const dozensHundred = (number / 10) % 10;
    const wordDozens = `${arrDozens[dozens]} ${arr[units]}`;
    const wordHundred = `${arr[hundred]} hundred ${arr[unitsHundred]}`;
    const wordHundredMoreTwenty = `${arr[hundred]} hundred ${arrDozens[unitsDozens]} ${arr[units]}`;

    if (number < 20) {
        return word;
    } else if (number % 10 === 0 && number < 99) {
        return `${arrDozens[dozens]}`;
    } else if (number > 20 && number < 100) {
        return wordDozens;
    } else if (number % 100 === 0) {
        return `${arr[hundred]} hundred`;
    } else if (number > 100 && number < 120) {
        return wordHundred;
    } else if (
        number % 10 === 0 &&
        number >= 120 &&
        number <= 990 &&
        number !== 210 &&
        number !== 310 &&
        number !== 410 &&
        number !== 510 &&
        number !== 610 &&
        number !== 710 &&
        number !== 810 &&
        number !== 910
    ) {
        return `${arr[hundred]} hundred ${arrDozens[dozensHundred]}`;
    } else if (number > 120 && number < 200) {
        return wordHundredMoreTwenty;
    } else if (number > 200 && number < 220) {
        return wordHundred;
    } else if (number > 220 && number < 300) {
        return wordHundredMoreTwenty;
    } else if (number > 300 && number < 320) {
        return wordHundred;
    } else if (number > 320 && number < 400) {
        return wordHundredMoreTwenty;
    } else if (number > 400 && number < 420) {
        return wordHundred;
    } else if (number > 420 && number < 500) {
        return wordHundredMoreTwenty;
    } else if (number > 500 && number < 520) {
        return wordHundred;
    } else if (number > 520 && number < 600) {
        return wordHundredMoreTwenty;
    } else if (number > 600 && number < 620) {
        return wordHundred;
    } else if (number > 620 && number < 700) {
        return wordHundredMoreTwenty;
    } else if (number > 700 && number < 720) {
        return wordHundred;
    } else if (number > 720 && number < 800) {
        return wordHundredMoreTwenty;
    } else if (number > 800 && number < 820) {
        return wordHundred;
    } else if (number > 820 && number < 900) {
        return wordHundredMoreTwenty;
    } else if (number > 900 && number < 920) {
        return wordHundred;
    } else if (number > 920 && number < 1000) {
        return wordHundredMoreTwenty;
    }
};
