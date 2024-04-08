const noti = document.getElementById('noti');
const closeIcon = document.getElementById('closeIcon');
const dismissBTN = document.getElementById('dismissBTN');

function closeNoti(e) {
    if (e) { e.stopPropagation(); }

    noti.style.display = 'none';
}

function doTrgt() {
    window.open('http://safakamali.ir', '_blank')
    closeNoti(undefined)
}

function fireNoti() {
    noti.style.display = 'block';
    const audio = new Audio('notisound.wav');
    audio.play();
}


setTimeout(() => {
    fireNoti()
}, 3000)

closeIcon.addEventListener('click', closeNoti);
dismissBTN.addEventListener('click', closeNoti);
noti.addEventListener('click', doTrgt)