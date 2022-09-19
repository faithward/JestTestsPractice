
const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1.2 dollars should be 127.9 yen", function(){
    let expected = (3.5/1.2)*127.9;
    expected = expected.toFixed(2);
    expect(fromDollarToYen(3.5).toFixed(2)).toBe(expected);
})

test("127.9 yen should be 0.8 pounds", function(){
    let expected = 350*(0.8/127.9);
    expected = expected.toFixed(2);
    expect(fromYenToPound(350).toFixed(2)).toBe(expected);
}
)