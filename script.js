function checkfn(){
    strRegExp = /^[A-Za-z]+$/;
    val=document.getElementById("name1").value.trim();
    input=document.getElementById("name1");

    if(document.getElementById("name1").value.trim().length == 0){
       input.classList.add("fail");
       input.classList.remove("success");
        document.getElementById("fn").innerHTML="Field cannot be Empty";
    }
        else if(!val.match(strRegExp)){
           input.classList.remove("success");
        input.classList.add("fail");
        document.getElementById("fn").innerHTML = "Only Alphabets";
        }
    else{
        input.classList.remove("fail");
        input.classList.add("success");
        document.getElementById("fn").innerHTML="";

    }
}
function checkln(){
    strRegExp = /^[A-Za-z]+$/;
    val=document.getElementById("name2").value.trim();
    input=document.getElementById("name2");

    if(document.getElementById("name2").value.trim().length == 0){
       input.classList.add("fail");
       input.classList.remove("success");
        document.getElementById("ln").innerHTML="Field cannot be Empty";
    }
        else if(!val.match(strRegExp)){
           input.classList.remove("success");
        input.classList.add("fail");
        document.getElementById("ln").innerHTML = "Only Alphabets";
        }
    else{
        input.classList.remove("fail");
        input.classList.add("success");
        document.getElementById("ln").innerHTML="";
    }
}

function checkmail(){
    strRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    val=document.getElementById("mail").value.trim();
    input=document.getElementById("mail");

    if(document.getElementById("mail").value.trim().length == 0){
       input.classList.add("fail");
       input.classList.remove("success");
        document.getElementById("remail").innerHTML="Field cannot be Empty";
    }
        else if(!val.match(strRegExp)){
           input.classList.remove("success");
        input.classList.add("fail");
        document.getElementById("remail").innerHTML = "Incorrect Format";
        }
    else{
        input.classList.remove("fail");
        input.classList.add("success");
        document.getElementById("remail").innerHTML="";
    }
}

function checkphone(){
    regex=/[0-9]$/;
    value1=document.getElementById("phone").value.trim();
    if(!val.match(strRegExp)){
        input.classList.remove("success");
     input.classList.add("fail");
     document.getElementById("remail").innerHTML = "Incorrect Format";
     }
}

function checkall(){
        checkfn();
        checkln();
        checkmail();
        checkphone();
}

function display(){
    window.alert("Email: "+document.getElementById("mail").value+"\nApplicant Information: "+"\nAcademic Performance: "+document.getElementById("ap1").value+"\nIntellectual Ability: "+document.getElementById("ia1").value+" \nAbility to Express Him/Herself: "+document.getElementById("atoe1").value+"\nMotivation for Proposed Field of Study: "+document.getElementById("mfpfos1").value+"\nWould you admit the applicant in your department? "+document.getElementById("ap1").value);
}