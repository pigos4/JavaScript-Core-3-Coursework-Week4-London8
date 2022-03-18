const verify = (pass) => {
if(!pass||pass===null)return "Password rejected";
if (pass.length > 7 && pass.match(/[0-9]/g)) return "Password accepted";
};
//h
module.exports = verify;