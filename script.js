const input = {
    a: 'I',
    b: ['not', 'am'],
    c: {
        a: ['f', 'f', 'a', 'n', 'f', 'f'],
        b: ['a'],
        c: ['s', 'o', 'm', 'e']
    },
    d: 'repoleved'
}


function awesome() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('awesome');
        }, 1000);
    })
}
/**
* Receives a string as input, returns the reverse
*
* @param str
* @example sentence = 'mirror', the output should be 'rorrim'
* @return - The reversed string
*/
function reverse(str) {
    return str.split("").reverse().join("")
}

/**
* This function builds the string that should be displayed in the
container.
* If built correctly, the returned string should be: "I am an awesome
developer"
*/
async function solve() {
    return awesome().then(function(res){
        return input['a']+' '+input['b'][1]+' an '+res+' '+reverse(input['d'])
    });
}


// Outputs a message to the web console
solve().then(function (result){
    console.log(result)
});
