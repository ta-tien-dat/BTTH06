var j = 18;
setInterval(handleRealTime = () => {
    j++
    let date = new Date();
    let hh = String(date.getHours());
    let mm = String(date.getMinutes());
    let ss = String(date.getSeconds());
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + mm + ss;
    for (var i = 0; i < time.length; i++) {
        document.getElementById("number" + (i + 1)).src = "BTTH_icons/0" + time[i] + ".gif";
    }
    let dom = document.getElementById("text")
    if (hh >= 0 && hh < 12) {
        dom.innerHTML = "CHÀO BUỔI SÁNG";
    } else if (hh >= 12 && hh < 17) {
        dom.innerHTML = "CHÀO BUỔI CHIỀU";
    } else if (hh >= 17 && hh <= 23) {
        dom.innerHTML = "CHÀO BUỔI TỐI";
    }
    if (j % 2 == 0) {
        dom.classList.add("text_red");
        dom.classList.remove("text_black");
    } else {
        dom.classList.remove("text_red");
        dom.classList.add("text_black");
    }
    dom.style.fontSize = j + 'px';
    if(j==23)j=18
}, 1000);

