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
    const content = event.path[2].childNodes[3];
    content.classList.toggle('visible')
    const arrow = event.path[1];
    arrow.classList.toggle('active')
}

