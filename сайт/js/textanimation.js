const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Video portals";
    }, 0);
    setTimeout(() => {
        text.textContent = "Applications";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Video services";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Websites";
    }, 12000);

}
textLoad();
setInterval(textLoad, 16000);