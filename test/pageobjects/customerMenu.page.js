import {browser, $} from '@wdio/globals'

class CustomerPage{
    get btnTransaction() {return $('button=Transaction')}
    get tableTransaction() {return $('a=Date-Time')}
    get btnDeposit() {return $('button=Deposit')}
    get titleDeposit() {return $('label*=Deposited')}
    get btnWithdraw() {return $('button=Withdrawl')}
    get titleWithdraw() {return $('label*=Withdrawn')}
    get btnLogout() {return $('button=Logout')}
}

export default new CustomerPage()