function ManipulateSize(){
    let size = document.getElementById("size").value
    document.getElementById("text").style.fontSize = `${size}px`
    
}


function ManipulateColor(){
    let color = document.getElementById("color").value
    document.getElementById("text").style.color=color
    
}


function ManipulateBgColor(){
    let color = document.getElementById("BgColor").value
    document.getElementById("DOM").style.backgroundColor =color
    document.getElementById("text").style.backgroundColor =color
}


function ManipulateWeight(){
    let size = document.getElementById("weight").value
    document.getElementById("text").style.fontWeight = `${size}`
    
}



function ManipulatePadding(){
    let size = document.getElementById("weight").value
    document.getElementById("DOM").style.padding = `${size}px`
    
}