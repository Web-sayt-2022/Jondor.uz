
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
        // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
/* $(document).ready(function (){ // when the document has completed loading
     $(document).mouseup(function (e){ // attach the mouseup event for all div and pre tags
         setTimeout(function() { // When clicking on a highlighted area, the value stays highlighted until after the mouseup event, and would therefore stil be captured by getSelection. This micro-timeout solves the issue.
             responsiveVoice.cancel(); // stop anything currently being spoken
             responsiveVoice.speak(getSelectionText(), 'Turkish Male', { volume: 1 }); //speak the text as returned by getSelectionText
         }, 1);
     });
 });*/

getSelectionText()

const container = document.documentElement;
// const container = document.querySelector(":root")

const menu = document.querySelector('.navbar-collapse');
const toggler = document.querySelector('.navbar-toggler');
const scrollBtn = document.createElement('div')
const reader = document.createElement('div');
const i = document.createElement('i');
scrollBtn.classList.add('scrollToTop');
i.classList.add('icon-arrow-up12')
scrollBtn.appendChild(i)
document.body.appendChild(scrollBtn);

reader.classList.add('localReader');
reader.innerHTML = "<i class='icon-volume-medium'></i>"
document.body.appendChild(reader)

document.addEventListener('scroll', () => {
    const totalScroll = container.scrollHeight - container.clientHeight
    if ((container.scrollTop / totalScroll) > 0.2) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.transform = "translateX(0%)";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.transform = "translateX(200%)";
    }
    reader.style.opacity = '0'
})

// toggler.onclick = () => {
//     setTimeout(() => {
//         menu.classList.toggle('show')
//         console.log(menu)
//     }, 5000)
// }

let word;
document.addEventListener('mouseup', (e) => {
    if (window.getSelection().toString() !== '') {
        word = window.getSelection().toString()
        reader.style.left = `${e.clientX}px`
        reader.style.top = `${e.clientY}px`
        reader.style.opacity = "1"
    }
})

scrollBtn.onclick = () => {
    container.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


const root = document.querySelector(':root')
const body = document.body;
const img = document.querySelectorAll('img');
const video = document.querySelectorAll('video');
document.querySelectorAll('.var');
const font = document.querySelector('.fontChanger');
const foiz = font.childNodes[1]
const input = font.childNodes[4]
document.querySelectorAll('.var');
const grey = document.querySelector('.grey-view');
const normal = document.querySelector('.simple-view');
const dark = document.querySelector('.dark-view');
const noImg = document.querySelector('.withoutImg-view');

input.oninput = () => {
    document.querySelector("#fontSize");
    const f = Number(16) * (1 + input.value / 100)
    foiz.textContent = input.value

    root.style.fontSize = `${f}px`
}


normal.onclick = () => {
    root.style.filter = 'none'
    root.style.transition = '.2s'

    img.forEach(item => {
        item.style.width = 'inherit'
    })
    video.forEach(item => {
        item.style.display = 'block'
        console.log(item)
    })
}

grey.onclick = () => {
    root.style.filter = 'grayscale(100%)'
    root.style.transition = '.2s'
}

dark.onclick = () => {
    root.style.filter = 'invert(100%) grayscale(1)'
    root.style.transition = '.2s'
}

noImg.onclick = () => {
    video.forEach(item => {
        item.style.width = "0"
    })

    img.forEach(item => {
        let last = item.src.split('/')
        if (last[last.length - 1] !== 'img.png') {
            item.style.width = "0"
        }
    })
}

reader.onclick = () => {
    setTimeout(function () { // When clicking on a highlighted area, the value stays highlighted until after the mouseup event, and would therefore stil be captured by getSelection. This micro-timeout solves the issue.
        responsiveVoice.cancel(); // stop anything currently being spoken
        responsiveVoice.speak(word.toLowerCase(), 'Turkish Female', { volume: 1, pitch: 1, rate: .8 }); //speak the text as returned by getSelectionText
    }, 1);
}

function printDiv() {
    window.print();
}

document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar');
    calendar.init();
});

let sharebtns = document.querySelectorAll(".share")

sharebtns.forEach(element => {
    element.addEventListener('click', event => {

        // Fallback, Tries to use API only
        // if navigator.share function is
        // available
        if (navigator.share) {
            navigator.share({

                // Title that occurs over
                // web share dialog
                title: 'Buxoro.uz ulashish xizmati',

                // URL to share
                url: window.location.href
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(err => {

                // Handle errors, if occured
                console.log(
                    "Error while using Web share API:");
                console.log(err);
            });
        } else {

            // Alerts user if API not available
            alert("Browser doesn't support this API !");
        }
    })
})