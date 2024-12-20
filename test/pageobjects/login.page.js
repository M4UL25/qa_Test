import {browser, $} from '@wdio/globals'

class LoginPage{
    get customer() {return $('button=Customer Login')}
    get main() {return $('label*=Your Name')}

    get manager() {return $('button=Bank Manager Login')}

    get btnHome() {return $('button=Home')}

    openPage = async () => {
        await browser.url('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    }

    customerPage = async () => {
        await browser.url('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        await this.customer.click()
    }
}

export default new LoginPage()

