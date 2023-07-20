let image = document.getElementById('image-url')
let upperText = document.getElementById('upper-text')
let lowerText = document.getElementById('lower-text')

function create() {
    let imagevalue = image.value
    document.getElementById('image').src = imagevalue
    let upperTextValue = upperText.value
    document.getElementById('upper-text-display').textContent = upperTextValue
    let lowerTextValue = lowerText.value
    document.getElementById('lower-text-display').textContent = lowerTextValue
    let backgroundcolor = document.getElementById('Background-color-input').value
    document.getElementById('meme-image').style.backgroundColor = backgroundcolor
    let textcolor = document.getElementById('Text-color-input').value
    document.getElementById('lower-text-display').style.color = textcolor
    document.getElementById('upper-text-display').style.color = textcolor
}