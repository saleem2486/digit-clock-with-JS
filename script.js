function clock(){
    var hours = document.getElementById("hr");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("am");

    var time = new Date();
    var hrs  = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";

    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText   = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
clock();
setInterval(clock, 1000);


function set(){

    var get1=  document.getElementById("select1").value;
    
    var get2 = document.getElementById("select2").value;
    var get3 = document.getElementById("select3").value;
    var get4 = document.getElementById("select4").value;
    var hour = new Date().getHours();

    if(get1==hour){

        document.getElementById("box5").style.backgroundImage="url(./pic.png)";
        document.getElementById("grab").innerText='Wake Up !!';
        document.getElementById("box6").innerText="Good Morning !!";
    }

    else if(get2==hour){
        document.getElementById("box5").style.backgroundImage="url(./lunch2.png)";
        document.getElementById("grab").innerText="GOOD AFTER NOON";
        document.getElementById("box6").innerText="Its Lunch Time !!"
    }

   else if(get3==hour){
        document.getElementById("box5").style.backgroundImage="url(./nap2.svg)"
        document.getElementById("grab").innerText="Good Evening !!";
        document.getElementById("box6").innerText="its Nap Time !!";
    }    
   else if(get4==hour){
        document.getElementById("box5").style.backgroundImage="url(./night2.svg)"
        document.getElementById("grab").innerText="Good Night !!";
        document.getElementById("box6").innerText=" Go For Sleep !!";
    }    
    getOption();
 }
 function getOption() {


    var get4 = document.getElementById("select1");
    var text1 = get4.options[get4.selectedIndex].text;
    
    var get5 = document.getElementById("select2");
    var text2 = get5.options[get5.selectedIndex].text;
    
    var get6 = document.getElementById("select3");
      var text3 = get6.options[get6.selectedIndex].text;

      var get7 = document.getElementById("select4");
      var text4 = get7.options[get7.selectedIndex].text;
    
    
         var panun = document.getElementById("saleem");
        if(panun){
            panun.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}<br> Sleep Time :${text4}`;
        }
     
    }