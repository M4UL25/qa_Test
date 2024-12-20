import {expect, $} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

describe('LOGIN', () => {
    afterEach( async () => {
        await loginPage.btnHome.click()
        await browser.pause(3000)
    })
    it('User login sebagai customer', async () => {
        await loginPage.openPage()
        await loginPage.customer.click()

        await expect(loginPage.main).toExist()
    })

    it('User login sebagai Bank Manager', async () => {
        await loginPage.manager.click()

        await expect(browser).toHaveUrl('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
    })
})