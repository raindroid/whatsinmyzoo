

export var account = {
    logged: false,
    user: "",
    email: "",
    uid: ""
}

export var getAccount = () => {
    let savedAccount = localStorage.getItem('accountInfo')
    if (account.logged == false && savedAccount != undefined) {
        account = JSON.parse(savedAccount)
    }
}

export var logoutAccount = () => {
    account.logged = false
    localStorage.setItem('accountInfo', JSON.stringify(account))
}

export var setAccount = (acc) => {
    account.logged = true
    account.user = acc.user
    account.email = acc.email
    account.uid = acc.uid
    localStorage.setItem('accountInfo', JSON.stringify(account))
}