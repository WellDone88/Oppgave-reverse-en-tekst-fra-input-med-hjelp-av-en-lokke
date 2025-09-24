
updateView()

function updateView(){
    let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
    <input type="text" onchange="ReverseWord(this.value)">
    <div id="results"></div>
    
    
    
    
    
    
    
    `
    return HTML;
}