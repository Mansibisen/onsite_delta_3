var btn = document.getElementById("deletebtn")
var container = document.getElementById("container")
var pagecounter = 1
btn.addEventListener("click",function () {
    console.log("clicked")
    var ourRequest = new XMLHttpRequest();

ourRequest.open("delete","http://localhost:5000/delete")
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText)
    console.log(ourData)
    renderHTML(ourData)
    pagecounter++;
    if (pagecounter >1){
        //hide the button

    }

};
ourRequest.send();

})
function renderHTML(data){
    var dataHTML = ""
    
    dataHTML += "<p>"+ data.deletecount +"data is deleted "+".</p>"

    
    //dataHTML =+ data
    container.insertAdjacentHTML("beforeend",dataHTML)

}
