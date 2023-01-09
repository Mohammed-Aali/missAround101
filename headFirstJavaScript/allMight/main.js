let secret = `007`;

function getSecret() {
    let secret = `008`;

    function getValue(){
        return secret;
    }
    return getValue
}
let getValueFun = getSecret();
console.log(getValueFun())