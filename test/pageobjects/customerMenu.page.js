import {browser, $} from '@wdio/globals'

class CustomerPage{
    get btnTransaction() {return $('button=Transaction')}
    get tableTransaction() {return $('a=Date-Time')}
}

export default new CustomerPage()