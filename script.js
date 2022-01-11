let active = ""
window.addEventListener('DOMContentLoaded',(event)=>{
    const items = document.getElementsByTagName("h4")
    for (let item of items){
        item.addEventListener('click',handleClick)
    }

    const imgs = document.getElementsByClassName("arrow")
    for (let item of imgs){
        item.addEventListener('click',handleClick)
    }
})

const handleClick = event =>{
    const id = event.path[2].id
    console.log(id)
    console.log(active)
    id !== active && resetDefault()
    const content = event.path[2].childNodes[3];
    content.classList.toggle('visible')
    const arrow = event.path[1];
    arrow.classList.toggle('active')
    active = id
}

const resetDefault = ()=>{
    const items = document.getElementsByClassName("content")
    for (let item of items){
        item.classList.remove('visible')
    }

    const imgs = document.getElementsByClassName("contain-item")
    for (let item of imgs){
        item.classList.remove('active')
    }
}