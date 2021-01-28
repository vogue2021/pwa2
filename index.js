
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var age = document.getElementById("age").value;
        var gender = RadioNodeList.value;
        var num = "";
        btn1.addEventListener('click', function(){
            var num1 = document.getElementById("height").value;
            var num2 = document.getElementById("weight").value;
            var num3 = num2/((num1*0.01)*(num1*0.01));
            var num4 = num3.toFixed(2);
            document.getElementById("result").innerHTML = num4;

            if(num4 < 18.5) {document.getElementById("result1").innerHTML = "痩せ型"}
			else if(num4>=18.5 && num4<25) {document.getElementById("result1").innerHTML = "普通体重"}
			else if(num4>=25 && num4<30) {document.getElementById("result1").innerHTML = "肥満１レベル"}
			else if(num4>=30 && num4<35) {document.getElementById("result1").innerHTML = "肥満２レベル"}
			else if(num4>=35 && num4<40) {document.getElementById("result1").innerHTML = "肥満３レベル"}
			else {L8.setText("肥満４レベル");}

            if(gender === "m") {
                var num5 = (13.397*num2)+(4.799*num1)-(5.677*age)+88.362;
                var num51 = num5.toFixed(2);
                document.getElementById("result2").innerHTML = num51;
            }
            else{
                var num6 = (9.247*num2) + (3.098*num1) - (4.33*age)+(447.593);
                var num61 = num6.toFixed(2);
                document.getElementById("result2").innerHTML = num61+"kcal/日";
            }
        })
        btn2.addEventListener('click', function() {
            var num1 = document.getElementById("height").value = num;
            var num2 = document.getElementById("weight").value = num;
            var num2 = document.getElementById("age").value = num;
            var num2 = document.getElementById("result").innerHTML = num;
            var num2 = document.getElementById("result1").innerHTML = num;
            var num2 = document.getElementById("result2").innerHTML = num;

        })
        if ('serviceWorker' in navigator) {
            window.addEventListener("load", async () => {
                console.log("swsw");
                await navigator.serviceWorker.register("/sw.js");
            })
        }
