function response(name) {
    return name;
}

document.getElementById("button").onclick = function() {
    let name = document.getElementById("name").value
    alert(response(`${name}, благодарю за обращение! В ближайшее время я свяжусь с вами.`))
}


