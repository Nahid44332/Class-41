function calculate()
{
    event.preventDefault();

    let mark = document.getElementById('mark').value;
    let converted = parseFloat(mark);

    if (converted > 100){
        console.log("Invalid Marks");
        document.getElementById("result").innerHTML = "Invalid Marks";
    }
    else if(converted < 0){
        console.log("Invalid Marks");
        document.getElementById("result").innerHTML = "Invalid Marks";
        }
    else if(converted >= 80){
        console.log("Your Grade is A+");
        document.getElementById("result").innerHTML = "Your Grade is A+";
    }
    else if(converted >= 70){
        console.log("Your Grade is A");
        document.getElementById("result").innerHTML = "Your Grade is A";
    }
    else if(converted >= 60){
        console.log("Your Grade is -A");
        document.getElementById("result").innerHTML = "Your Grade is -A";
    }
    else if(converted >= 50){
        console.log("Your Grade is B");
        document.getElementById("result").innerHTML = "Your Grade is B";
    }
    else if(converted >= 40){
        console.log("Your Grade is C");
        document.getElementById("result").innerHTML = "Your Grade is C";
    }
    else if(converted >= 33){
        console.log("Your Grade is D");
        document.getElementById("result").innerHTML = "Your Grade is D";
    }
    else{
        console.log("Your Grade is F");
        document.getElementById("result").innerHTML = "Your Grade is F";
    }
    document.getElementById('mark').value ="";
}