const sumAll = function(firstNum, secondNum) {
    let newNum = 0;
    let lowNum;
    let highNum;

    if (!(typeof(firstNum) === "number") || !(typeof(secondNum) === "number"))
    {
        return "ERROR"
    }
    if (firstNum < 0 || secondNum < 0)
    {
        return "ERROR"
    }
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))
    {
        return "ERROR"
    }

    if (firstNum <= secondNum)
    {
        lowNum = firstNum;
        highNum = secondNum;
    }
    else
    {
        lowNum = secondNum;
        highNum = firstNum;
    }

    for (let i = lowNum; i <= highNum; i++)
    {
        newNum += i;
    }
    return newNum;

};

// Do not edit below this line
module.exports = sumAll;
