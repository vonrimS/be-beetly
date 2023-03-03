// util to generate random short url (default length = 7)

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// generate <subpart> with no special characters
const GenerateString = (length) => {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

// console.log(GenerateString(7));

module.exports = { GenerateString };