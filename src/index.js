exports.min = function min(array) {
    return (arguments.length === 0 || array.length === 0) ? 0 : Math.min(...array);
}

exports.max = function max(array) {
    return (arguments.length === 0 || array.length === 0) ? 0 : Math.max(...array);
}

exports.avg = function avg(array) {
    // return (arguments.length === 0 || array.length === 0) ? 0 : array.reduce((a,b,array)=> ((a+b) / array.length));
    let sum = 0;
    let res;
    if(arguments.length === 0 || array.length === 0){
        return 0;
    } else {
        sum = array.reduce((a,b,array)=>(a+b));
        res = sum / array.length;
    }
    return res;
}
