function scrollToV(id){
    document.getElementById(id).scrollIntoView(
        {
            behavior: 'smooth',
            block: 'start'
        }
    )
}

function display(id){
    console.log(id);
    
}