it('waitForExist', () => {
    browser.url('/')
    const cmp = browser.react$('Cmp')
    cmp.waitForExist(3000)

    expectExport(cmp.isDisplayedInViewport()).toBeTruthy()
})