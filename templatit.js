function templatit(selector,data={}){
    var tstr = document.querySelector(selector).innerHTML
    Object.keys(data).forEach(key=>{
        tstr = tstr.replaceAll(`{${key}}`,data[key])
    })
    return tstr
}