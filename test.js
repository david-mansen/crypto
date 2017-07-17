

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://localhost:3000')
    .type('.form-control', 'test@test.com')
    .type('div [name="password"]', 'test')
    .click('div [type="submit"]')
    .wait(5000)
    .click('div [href="/profile"]')
    .wait(5000)
    .click('div [href="/logout"]')
    .wait(3000)

    .evaluate(function () {
        return document.querySelector('#zero_click_wrapper .c-info__title a').href;
    })
    .end()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });