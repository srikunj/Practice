function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let man = a-b;
    return man;
}

function mul(a,b){
    let into = a*b;
    return into;
}

function div(a,b){
    let divide = a/b;
    divide = divide.toFixed(2);
    return divide;
}

export default add;
export {sub,mul,div}