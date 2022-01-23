function clearContent(){
    const principal = document.querySelector(".principal")
    while (principal.firstChild) {
        principal.firstChild.remove()
    }
    return
}

export default clearContent;