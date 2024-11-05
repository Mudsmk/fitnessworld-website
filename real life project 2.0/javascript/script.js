window.onscroll = function(){
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollToTopBtn.style.display = "block";
    } else{
        scrollToTopBtn.style.display = "none";
    }
};
function scrollToTop(){
    window.scrollToTop({
        top: 0, behaviour: "smooth"
    });
}