import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import accountCsPage from '../pageobjects/accountCs.page.js'
import customerPage from '../pageobjects/customerMenu.page.js'

describe('CUSTOMER MENU', () => {
    beforeEach( async () => {
        await loginPage.customerPage();
        await accountCsPage.selectCustomerAcc(1);
    })

    it('Membuka fitur transaksi pada menu customer', async () => {
        await customerPage.btnTransaction.click()

        await expect(customerPage.tableTransaction).toHaveText('Date-Time')
    })

    it('Membuka fitur deposit pada menu customer', async () => {
        await customerPage.btnDeposit.click()

        await expect(customerPage.titleDeposit).toHaveText(
            expect.stringContaining('Amount to be Deposited :')
        )
    })

    it('Membuka fitur withdraw pada menu customer', async () => {
        await customerPage.btnWithdraw.click()

        await expect(customerPage.titleWithdraw).toHaveText(
            expect.stringContaining('Amount to be Withdrawn :')
        )
    })

    it('Keluar dan kembali lagi ke halaman account customer', async () => {
        await customerPage.btnLogout.click()

        await expect(browser).toHaveUrl('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
    })
})

describe('DEPOSITE', () => {
    beforeEach( async () => {
        customerPage.depositMenu()
    })
})