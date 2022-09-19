
function fromDollarToYen(USD){
    let JPY = USD * (127.9/1.2);
    return JPY;
}

function fromEuroToDollar(EUR){
    let USD = EUR * 1.2;
    return USD;
}

function fromYenToPound(JPY){
    let GBP = JPY * (0.8/127.9);
    return GBP;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen , fromEuroToDollar , fromYenToPound };