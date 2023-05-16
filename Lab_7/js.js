function triangle(value1, type1, value2, type2) {
    if (arguments.length !== 4) {
        console.log('Не вказані всі аргументи');
        return 'failed';
    }

    var validTypes = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log('Некоректні типи аргументів');
        return 'failed';
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log('Значення аргументів повинні бути більше нуля');
        return 'failed';
    }

    var hypotenuse, leg, alpha, beta;

    if (type1 === 'leg' && type2 === 'hypotenuse') {
        leg = value1;
        hypotenuse = value2;
        alpha = Math.asin(leg / hypotenuse);
        beta = Math.PI / 2 - alpha;
    } else if (type1 === 'hypotenuse' && type2 === 'leg') {
        hypotenuse = value1;
        leg = value2;
        alpha = Math.asin(leg / hypotenuse);
        beta = Math.PI / 2 - alpha;
    } else if (type1 === 'leg' && type2 === 'adjacent angle') {
        leg = value1;
        alpha = value2 * (Math.PI / 180);
        beta = Math.PI / 2 - alpha;
        hypotenuse = leg / Math.sin(alpha);
    } else if (type1 === 'adjacent angle' && type2 === 'leg') {
        alpha = value1 * (Math.PI / 180);
        leg = value2 * Math.sin(alpha);
        beta = Math.PI / 2 - alpha;
        hypotenuse = leg / Math.sin(alpha);
    } else if (type1 === 'leg' && type2 === 'opposite angle') {
        leg = value1;
        beta = value2 * (Math.PI / 180);
        alpha = Math.PI / 2 - beta;
        hypotenuse = leg / Math.sin(alpha);
    } else if (type1 === 'opposite angle' && type2 === 'leg') {
        beta = value1 * (Math.PI / 180);
        leg = value2 * Math.sin(beta);
        alpha = Math.PI / 2 - beta;
        hypotenuse = leg / Math.sin(alpha);
    } else {
        console.log('Некоректна комбінація типів аргументів');
        return 'failed';
    }

    if (alpha >= Math.PI / 2 || beta >= Math.PI / 2) {
        console.log('Негострі кути');
        return 'failed';
    }

    console.log('a:', leg);
    console.log('b:', leg);
    console.log('c:', hypotenuse);
    console.log('alpha:', alpha * (180 / Math.PI) + '°');
    console.log('beta:', beta * (180 / Math.PI) + '°');

    return 'success';
}

