function func() {
    var date = new Date()
    document.body.innerHTML = "<h1> The date is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "<h1>"
}