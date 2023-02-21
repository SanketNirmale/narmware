let count = 2;

slideshow(count);

function slideshow(x) {
    let slids = document.getElementsByClassName("slide");
    if (x == slids.length) {
        count = 0;
        x = 0;
    }
    if (x < 0) {
        count = slids.length - 1;
        x = slids.length - 1;
    }
    for (let y of slids) {
        y.style.display = "none"; // visible
    }
    slids[x].style.display = "block";
}
function control(y) {
    count = count + y;
    slideshow(count); ///all visible
}
