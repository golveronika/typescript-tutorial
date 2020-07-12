// вспомогательные конструкции, которые позволяют работать с типами

function strip(x: string | number) {

    if (typeof x === 'number') {
        return x.toFixed()
    }

    return x.trim()
}

// instanse of можно проверить принадлежность к какому либо классу

 class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle (res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        info: res.header + res.message
    }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
 // ....    
}

setAlertType('danger')

