"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get('https://random-data-api.com/api/stripe/random_stripe?size=5').then(function (res) {
    res.data.forEach(function (element) {
        var id = element.id, token = element.token;
        console.log(id, token);
    });
    console.log(returnIds(res.data));
});
function returnIds(resArr) {
    return resArr.map(function (e) { return e.id; });
}
