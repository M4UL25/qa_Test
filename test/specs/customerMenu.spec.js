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
})