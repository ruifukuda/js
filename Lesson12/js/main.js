window.onload = () => {
    const path = "images/";
    const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
    let index = 0;
    const ele = document.getElementById("mainImage");
    ele.addEventListener("click", () => {
        //%で余りを表示させて疑似無限ループにする
        ele.src = path + images[++index % images.length];
    });
};