let images = document.querySelectorAll(".images-box img")
let infoImage = document.querySelector(".info-images")
let prevBtn = document.querySelector(".previous")
let nextBtn = document.querySelector(".next")
let theGallery = document.querySelector(".gallery")

theGallery.style.gridTemplateColumns = `repeat(${images.length}, 1fr)`

let currentImages = 0

updateTheImages()

function changeImage(number) {

    images[currentImages].classList.remove("active")

    currentImages = (number + images.length) % images.length // (1 + 7) [Value-> 8] 8 % 7 [Value-> 1]

    images[currentImages].classList.add("active")

    updateTheImages()
    updateTheCopiesImages(currentImages)

}

prevBtn.onclick = () => changeImage(currentImages - 1)
nextBtn.onclick = () => changeImage(currentImages + 1)

function updateTheImages() {

    prevBtn.disabled = currentImages === 0
    nextBtn.disabled = currentImages === images.length - 1

    infoImage.innerHTML = `Image ${currentImages + 1} of ${images.length}`

}

images.forEach((img, i) => {

    let copiesImages = img.cloneNode()

    copiesImages.onclick = () => changeImage(i)

    theGallery.appendChild(copiesImages)

})

function updateTheCopiesImages(currentImage) {

    document.querySelectorAll(".gallery img").forEach((img, i) => {img.classList.toggle("active", currentImage === i)})

}

function myInformation(myInfo) {

    myInfo = document.createElement("div")
    myInfo.className = `my-info`

    let xLink = document.createElement("a")
    xLink.href = "https://twitter.com/AhmadAlhadidi95"
    xLink.target = "_blank"
    xLink.rel = "noopener noreferrer"
    xLink.title = "Visit my Twitter (X)"

    let xIcon = document.createElement("i")
    xIcon.className = `fa-brands fa-x-twitter`

    xLink.appendChild(xIcon)

    let myLogo = document.createElement("img")
    myLogo.src = `My-sign.png`
    myLogo.alt = `My-sign`
    myLogo.style.width = `50px`

    let githubLink = document.createElement("a")
    githubLink.href = "https://github.com/AhmadAlhadidi95"
    githubLink.target = "_blank"
    githubLink.rel = "noopener noreferrer"
    githubLink.title = "Visit my Github"

    let githubIcon = document.createElement("i")
    githubIcon.className = `fa-brands fa-github`

    githubLink.appendChild(githubIcon)

    myInfo.append(xLink, myLogo, githubLink)

    return myInfo

}

document.body.appendChild(myInformation())