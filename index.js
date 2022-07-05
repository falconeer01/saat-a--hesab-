function calc(hour, min){
    //saat 24'lük dilimdeyse:
    if(hour>12 && hour <=24){
        hour = hour%12;
        }
    //saat 12; dakika 30'dan küçükse:
    if(hour==12 && min<30){
        return angle = (hour*0)+(min*6);
    }
    //saat 12 ve dakika 30'dan büyükse:
    else if(hour==12 && min>30){
        return angle = Math.abs((min*6)-(hour*30));
    }
    //saat 6'dan büyük dakika 30'dan küçükse:
    else if(hour>=6 && min<=30){
        return angle = Math.abs((min*6)-(hour*30));
    }
    //saat 6'dan büyük dakika 30'dan büyükse: 
    else if(hour>=6 && min>30){
        return angle = Math.abs((min*6)-(hour*30));
    }
    //saat 6'dan küçük dakika 30'dan küçükse:
    else if(hour<6 && min<=30){
        return angle = Math.abs((min*6)-(hour*30));
    }
    //saat 6'dan küçük dakika 30'dan büyükse:
    else if(hour<6 && min>=30){
        return angle = Math.abs((min*6)-(hour*30)-360);
    }
}
let x = prompt("Saati giriniz...");
let y = prompt("Dakikayı giriniz...");
alert("Saat ile dakika arasındaki açı = " + calc(x, y));