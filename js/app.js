const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue=0;

window.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - (window.innerWidth/2); //clientX is the x co-ordinate of mouse cusror
    yValue = e.clientY - (window.innerWidth/2); //clientY is the y co-ordinate of mouse cusror

    parallax_el.forEach(el=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        el.style.transform  = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue *speedy}px))`;
    });
});