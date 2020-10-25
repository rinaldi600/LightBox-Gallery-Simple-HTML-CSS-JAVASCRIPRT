const container = document.querySelector(".container");
const thumbnails = document.querySelector(".preview");
const gallery = document.querySelector(".gallery");
const thumbnailss = document.querySelector(".thumbnails");
const body = document.getElementsByTagName("body")[0];

container.addEventListener("click" , function (event) {
    if (event.target.className == 'pictures') {

        thumbnails.src = event.target.src;
        gallery.classList.toggle("active");
        thumbnailss.classList.remove("active");
        body.classList.add("theme");
    }

    if (event.target.className == 'preview') {
        gallery.classList.toggle("active");
        thumbnailss.classList.toggle("active");
        body.classList.remove("theme");
    }
});