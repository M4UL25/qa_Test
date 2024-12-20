import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import accountCsPage from '../pageobjects/accountCs.page.js'

describe('ACCOUNT CUSTOMER', () => {
    beforeEach( async () => {
        await loginPage.customerPage();
    })

    it('User sebagai customer masuk menggunakan account customer yang tersedia', async () => {
        await accountCsPage.selectCustomerAcc(1)

        await expect(accountCsPage.titlePage).toHaveText(
            expect.stringContaining('Welcome')
        )
    })

    it('User sebagai customer masuk dengan account customer yang tidak sesuai', async () => {
        await accountCsPage.user.click()
        await accountCsPage.user.selectByIndex(0)

        await browser.pause(2000)
        await expect(accountCsPage.btnLogin).toHaveAttribute('class', expect.stringContaining('ng-hide'))
        // await expect(accountCsPage.btnLogin).not.toExist()
    })

    it('User sebagai customer kembali pada menu awal login', async () => {
        await loginPage.btnHome.click()
        await browser.pause(3000)

        await expect(browser).toHaveUrl('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })
})