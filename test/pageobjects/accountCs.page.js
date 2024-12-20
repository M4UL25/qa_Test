import {browser, $} from '@wdio/globals'

class AccountCsPage{
    get user() { return $('#userSelect')}
    get btnLogin() {return $('button=Login')}
    get titlePage() {return $('strong=Welcome')}

    selectCustomerAcc = async (index) => {
        await this.user.click()
        await this.user.selectByIndex(index)
        await this.btnLogin.click()
    }
}

export default new AccountCsPage()