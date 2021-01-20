function templatit(selector = null, data = {}, templateString) {
    var tstr = null
    if (selector) var tstr = document.querySelector(selector).innerHTML
    else var tstr = templateString
    Object.keys(data).forEach(key => {
        tstr = tstr.replaceAll(`{${key}}`, data[key])
    })
    return tstr.trim()
}

class Templatit {
    constructor(tempStr = null, defaultData = {}) {
        if (tempStr) this.temp_str = tempStr
        this.default_data = defaultData
    }
    template() {
        let { temp_str = null } = this
        return temp_str.trim()
    }

    render({ data = null, where = null, callback = null, seperator = '' } = {}) {
        if (!data) {
            data = self.default_data
        }
        var tempStr = ''
        if (Array.isArray(data)) {
            data.forEach(value => {
                tempStr += templatit(null, value, this.template()) + seperator
            })
        } else {
            tempStr = templatit(null, data, this.template())
        }
        if (where) {
            document.querySelector(where).innerHTML = tempStr
        }
        if (callback) {
            callback(tempStr)
        }
        return tempStr
    }
}