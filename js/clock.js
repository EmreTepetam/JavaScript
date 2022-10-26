
function showTime() {
    var bugun = new Date();
    var saat = bugun.getHours();
    var dak = bugun.getMinutes();
    var sn = bugun.getSeconds();
    ap = (saat<12) ? `<span style="font-size:50%; font-family:cursive; letter-spacing:-2px;"> Öğleden Önce </span>` : `<span style="font-size:50%; font-family:cursive; letter-spacing:-2px;"> Öğleden Sonra </span>`;
   
    saat = (saat == 0) ? 12 : saat;
    saat = (saat > 12) ? saat - 12 : saat;
    saat = checkTime(saat);
    dak = checkTime(dak);
    sn = checkTime(sn);
    document.getElementById("myClock").innerHTML = saat + ":" + dak + ":" + sn + ap;

    var ay = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasm','Aralık'];
    var gun = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];
    var ghafta = gun[bugun.getDay()];
    var ggun = bugun.getDate();
    var gay = ay[bugun.getMonth()];
    var gyil = bugun.getFullYear();
    var zaman = ggun + " " + gay + " " + ghafta + " " + gyil;
    document.getElementById("zaman").innerHTML = zaman;

    var time = setTimeout(function(){ showTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
showTime();
nameal();

function nameal() {
    var isim = prompt("Lütfen adınızı giriniz");
    isim = isim[0].toUpperCase() + isim.substring(1);
    document.getElementById("myName").innerHTML = isim;


}



