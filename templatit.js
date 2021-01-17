function templatit(selector, data = {}, templateString) {
    var tstr = null
    if (selector) var tstr = document.querySelector(selector).innerHTML
    else var tstr = templateString
    Object.keys(data).forEach(key => {
        tstr = tstr.replaceAll(`{${key}}`, data[key])
    })
    return tstr
}

class TemplatitBase {
    constructor(tempStr = null) {
        if (tempStr) this.temp_str = tempStr
    }
    template() {
        let {temp_str=null} = this
        return temp_str.trim()
    }

    render({ data = {}, where = null, callback = null } = {}) {
        var tempStr = templatit(null, data, this.template())
        if (where) {
            document.querySelector(where).innerHTML = tempStr
        }
        if (callback) {
            callback(tempStr)
        }
        return tempStr
    }
}