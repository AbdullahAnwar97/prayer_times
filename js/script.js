
var Fajr = document.querySelector(".Fajr");
var Sunrise = document.querySelector(".Sunrise");
var Dhuhr = document.querySelector(".Dhuhr");
var Asr = document.querySelector(".Asr");
var Maghrib = document.querySelector(".Maghrib");
var Isha = document.querySelector(".Isha");



     var date = new Date();
     var dayNumber = date.getDate();
    


     function dayName(){
        var dayName = date.toLocaleDateString('en-US', {
            weekday: 'long',
        });
        switch(dayName)
        {
            case 'Sunday':
                return 'الاحد';
                break;
            case 'Monday':
                return 'الاثنين';
                break;
            case 'Tuesday':
                return 'الثلاثاء';
                break;
            case 'Wednesday':
                return 'الاربعاء';
                break;
            case 'Friday':
                return 'الجمعة';
                break;
            case 'Saturday':
                return 'السبت';
        }
     }
    
     document.querySelector(".today-string").innerHTML = dayName();
     document.querySelector(".today-number").innerHTML = dayNumber;





 


var selectCity = document.querySelector(".selectCity");


selectCity.onchange = function (e) {
    api(this.value)
}
api();




function api(city = 'qena'){
    var request = new XMLHttpRequest();
    request.open("GET", `https://api.aladhan.com/v1/calendarByCity/2023/9?country=egy&city=${city}&year=2023&month=10`);


function createElement(el,text,parent){
        var el = document.createElement(el);
        el.innerHTML = text;
        parent.appendChild(el);
}

request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
            
        let data = JSON.parse(this.responseText);
       /* if(data.data[dayNumber - 1].timings.Asr.split(" ")[0].split(":")[0] > 12)
        {
            alert("Yes")
        }*/
        document.querySelector(".title-Fajr").innerHTML = "الفجْر";
        document.querySelector(".text-Fajr").innerHTML = data.data[dayNumber - 1].timings.Fajr.split(" ")[0];

        document.querySelector(".title-Sunrise").innerHTML = "الشروق";
        document.querySelector(".text-Sunrise").innerHTML = data.data[dayNumber - 1].timings.Sunrise.split(" ")[0];

        document.querySelector(".title-Dhuhr").innerHTML = "الظُّهْر";
        document.querySelector(".text-Dhuhr").innerHTML = data.data[dayNumber - 1].timings.Dhuhr.split(" ")[0];

        document.querySelector(".title-Asr").innerHTML = "العَصر";
        document.querySelector(".text-Asr").innerHTML = data.data[dayNumber - 1].timings.Asr.split(" ")[0];

        document.querySelector(".title-Maghrib").innerHTML = "المَغرب";
        document.querySelector(".text-Maghrib").innerHTML = data.data[dayNumber - 1].timings.Maghrib.split(" ")[0];

        document.querySelector(".title-Isha").innerHTML = "العِشاء";
        document.querySelector(".text-Isha").innerHTML = data.data[dayNumber - 1].timings.Isha.split(" ")[0];
    }


};

request.send();

}

