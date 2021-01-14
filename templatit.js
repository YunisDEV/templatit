function templatit(selector,data={}){
    let tstr = document.querySelector(selector).innerHTML
    Object.keys(data).forEach(key=>{
        tstr.replaceAll(`{${key}}`,data[key])
    })
    return tstr
}