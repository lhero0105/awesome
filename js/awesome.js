const $nav = document.querySelector('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        $nav.style.marginBottom = "50px"
    } 
    else {
        
    }
};
// $nav.style.backgroundColor = "#fff";
const $imgBox = document.querySelectorAll(".main .main-bottom .main-bottom-imgbox .main-bottom-imgbox-item")
$imgBox.forEach((e,i)=>{
    e.addEventListener("mouseenter", ()=>{
        e.classList.add("on")
    })
})

