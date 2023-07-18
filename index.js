
myfunction()
let frame1= document.getElementById("frame111")
let frame2= document.getElementById("frame222")
frame2.style.display = 'none';
frame1.style.display = 'block';
function selectframe(){

    let frame = document.getElementById("frameselector").value
    if(frame === "frame111"){
        frame2.style.display = 'none';
        frame1.style.display = 'block';
    }
    else{
        frame1.style.display = 'none';
        frame2.style.display = 'block';
    }
    
}
function myfunction() {
    let flexdirection = document.getElementById("flex-direction").value;
    let wrap = document.getElementById("flex-wrap").value;
    let justifycontent = document.getElementById("justify-content").value;
    let allignitem = document.getElementById("allign-items").value;
    let gap = document.getElementById("gap").value+'px';
    let alligncontent = document.getElementById("allign-content").value;
    let flexelement1 =document.getElementById('containddder2')
    let flexelement2 =document.getElementById('mainframe')
    flexelement1.style.flexWrap = wrap;
    flexelement1.style.flexDirection = flexdirection;
    flexelement1.style.justifyContent = justifycontent;
    flexelement1.style.alignItems = allignitem;
    flexelement1.style.alignContent= alligncontent;
    flexelement1.style.gap= gap;
    flexelement2.style.flexWrap = wrap;
    flexelement2.style.flexDirection = flexdirection;
    flexelement2.style.justifyContent = justifycontent;
    flexelement2.style.alignItems = allignitem;
    flexelement2.style.alignContent= alligncontent;
    flexelement2.style.gap= gap;
    console.log(wrap)
 


}