var checkUsername = () =>  {
    var userId = document.getElementsByName("id")[0].value;
    if (!/^[A-Z].{4,11}$/.test(userId))   {
        document.getElementsByName("id")[0].className = "red-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='wrong'>Username must be between 5 and 12 characters and start with a capital letter.</div>";
    } else  {
        document.getElementsByName("id")[0].className = "green-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='correct'>Looks good!</div>";
        return true;
    }
    return false;
}

var checkName = a => {
    var name = document.getElementsByName("name")[a].value;
    if (!/^[A-Z][A-Za-z]*$/.test(name))   {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = 
        "<div class='wrong'>Name should start with a capital letter and only contain letters.</div>";
    } else  {
        document.getElementsByName("name")[a].className = "green-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='correct'>Looks good!</div>";
        return true;
    }
    return false;
};

var checkEmail = () =>  {
    var email = document.getElementsByName("email")[0].value;
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))    {
        document.getElementsByName("email")[0].className = "red-input";
        document.getElementById("emailError").innerHTML = 
            "<div class='wrong'>Please input a valid email address.</div>";
    } else    {
        document.getElementsByName("email")[0].className = "green-input";
        document.getElementById("emailError").innerHTML = 
            "<div class='correct'>Looks good!</div>";
        return true;
    }
    return false;
}

var checkZipCode = () =>    {
    var zip = document.getElementsByName("zip")[0].value;
    if (!/^[1-9][0-9]{3} ?[a-z]{2}$/i.test(zip))  {
        document.getElementsByName("zip")[0].className = "red-input";
        document.getElementById("zipError").innerHTML = 
            "<div class='wrong'>Please input a valid zip code.</div>"; 
    } else  {
        document.getElementsByName("zip")[0].className = "green-input";
        document.getElementById("zipError").innerHTML = 
            "<div class='correct'>Looks good!</div>"; 
        return true;
    }
    return false;
}

var checkCountry = () =>    {
    var country = document.getElementById("country").value;
    if (!/.$/.test(country))   {
        document.getElementById("country").className = "red-input";
        document.getElementById("countryError").innerHTML = "<div class='wrong'>Please select your country.</div>"; 
    } else  {
        document.getElementById("country").className = "green-input";
        document.getElementById("countryError").innerHTML = ""; 
        return true;
    }
    return false;
}

var checkLang = () =>    {
    var lang = document.getElementById("lang").value;
    if (!/.$/.test(lang))   {
        document.getElementById("lang").className = "red-input";
        document.getElementById("langError").innerHTML = "<div class='wrong'>Please select your preferred language.</div>"; 
    } else  {
        document.getElementById("lang").className = "green-input";
        document.getElementById("langError").innerHTML = ""; 
        return true;
    }
    return false;
}

var checkForm = () =>   {
    if(checkName(0) & checkName(1) & checkUsername() & checkEmail() 
        & checkLang() & checkCountry() & checkZipCode() & checkSex() & checkPassword(0)
        && verifyPassword(0, 1)) {
        document.getElementById("signup").reset();
    }
};

var checkPassword = p => {
    var psw = document.getElementsByName("psw")[p].value;
    if(!/.$/.test(psw)) {
        document.getElementsByName("psw")[p].className = "red-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Please fill out this field.</div>";
    } else if(!/.{12,}$/.test(psw)) {
        document.getElementsByName("psw")[p].className = "red-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Password should be at least 12 characters long.</div>";
    } else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(psw)) {
            document.getElementsByName("psw")[p].className = "red-input";
            document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Password should contain a combination of uppercase letters, lowercase letters, numbers, and symbols.</div>";
    } else if(/^.{12,14}$/.test(psw)) {
        document.getElementsByName("psw")[p].className = "yellow-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'weak'>Your pawwsord is weak.</div>";
    } else {
        document.getElementsByName("psw")[p].className = "green-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'correct'>Your pawwsord looks good!</div>";
    }
};

var verifyPassword = (p, q) => {
    var psw1 = document.getElementsByName("psw")[p].value;
    checkPassword(0);
    var psw2 = document.getElementsByName("psw")[q].value;
    if(!/.$/.test(psw2)) {
        document.getElementsByName("psw")[q].className = "red-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'wrong'>Please fill out this field.</div>";
    } else if(psw1 !== psw2) {
        document.getElementsByName("psw")[q].className = "red-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'wrong'>The passwords do not match.</div>"; 
    } else {
        document.getElementsByName("psw")[q].className = "green-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'correct'>The passswords match!</div>";
    }

}

var checkSex = () =>    {
    if (document.querySelector('input[name="sex"]:checked') == null)    {
        document.getElementById("sexError").innerHTML = "<div class = 'wrong'>Please select gender.</div>";
        return false;
    }
    return true;
};
var removeGenderError = () =>    {
    if (document.querySelector('input[name="sex"]:checked') != null)    {
        document.getElementById("sexError").innerHTML = "";
    }
}

function handleForm(event) { event.preventDefault(); } 
document.getElementById("signup").addEventListener('submit', handleForm);