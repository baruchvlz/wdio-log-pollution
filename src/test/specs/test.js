const { expect } = require('chai')

it('waitForExist', () => {
    browser.url('/')
    browser.pause(2000)
    const cmp = browser.react$('Cmp')

    expect(cmp.isDisplayed()).to.be.true
})