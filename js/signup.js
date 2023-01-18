var checkUsername = () =>  {
    var userId = document.getElementsByName("id")[0].value;
    if (userId == null || userId == "") {
        document.getElementsByName("id")[0].className = "red-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='wrong'>Please fill out this field.</div>";
    } else if (userId.length < 5 || userId.length > 12)    {
        document.getElementsByName("id")[0].className = "red-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='wrong'>Username length must be between 5 and 12 characters.</div>";
    } else if (userId.charAt(0) < 'A' || userId.charAt(0) > 'Z')   {
        document.getElementsByName("id")[0].className = "red-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='wrong'>Username must start with a capital letter.</div>";
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
    if (name == null || name == "") {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Please fill out this field.</div>";
    } else if (!onlyLetters(name))   {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Name should only contain letters.</div>";
    } else if (name.charAt(0) < 'A' || name.charAt(0) > 'Z')    {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Name should start with a capital letter.</div>";
    } else  {
        document.getElementsByName("name")[a].className = "green-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='correct'>Looks good!</div>";
        return true;
    }
    return false;
};

var checkEmail = () =>  {
    var email = document.getElementsByName("email")[0].value;
    if (email == null || email == "")   {
        document.getElementsByName("email")[0].className = "red-input";
        document.getElementById("emailError").innerHTML = "<div class='wrong'>Please fill out this field.</div>"; 
    } else if (!isEmail(email))    {
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
    if (zip == null || zip == "")   {
        document.getElementsByName("zip")[0].className = "red-input";
        document.getElementById("zipError").innerHTML = "<div class='wrong'>Please fill out this field.</div>"; 
    } else if (!/^[1-9][0-9]{3} ?[a-z]{2}$/i.test(zip))  {
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
    if (country == null || country == "")   {
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
    if (lang == null || lang == "")   {
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
        & checkLang() & checkCountry() & checkZipCode() & checkPassword(0)
        && verifyPassword(0, 1)) {
        document.getElementById("signup").reset();
    }
};

var checkPassword = p => {
    var psw = document.getElementsByName("psw")[p].value;
    if(psw == null || psw == "") {
        document.getElementsByName("psw")[p].className = "red-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Please fill out this field.</div>";
    } else if(psw.length < 12) {
        document.getElementsByName("psw")[p].className = "red-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Password should be at least 12 characters long.</div>";
    } else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(psw)) {
            document.getElementsByName("psw")[p].className = "red-input";
            document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Password should contain a combination of uppercase letters, lowercase letters, numbers, and symbols.</div>";
    } else if(psw.length >= 12 && psw.length < 14) {
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
    if(psw2 == null || psw2 == "") {
        document.getElementsByName("psw")[q].className = "red-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'wrong'>Please fill out this field.</div>";
    } else if(psw1 !== psw2) {
        document.getElementsByName("psw")[q].className = "red-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'wrong'>The passwords do not match.</div>"; 
    } else {
        document.getElementsByName("psw")[q].className = "green-input";
        document.getElementsByName("pswError")[q].innerHTML = "<div class = 'correct'>The passswords match!</div>";
    }

};

var onlyLetters = word => {
    for (var i = 0; i < word.length; ++i)   {
        if (!((word.charAt(i) >= 'a' && word.charAt(i) <= 'z') 
        || (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z')))
            return false;
    }
    return true;
};

var isEmail = word =>   {
    var nrLetters = 0;
    var section = 0;
    for (var i = 0; i < word.length; ++i)   {
        if (section == 0)   {
            ++nrLetters;
            if (word.charAt(i) <= '9' && word.charAt(i) >= '0')
                continue;
            if (word.charAt(i) <= 'z' && word.charAt(i) >= 'a')
                continue;
            if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z')
                continue;
            if (word.charAt(i) == '_' || word.charAt(i) == '-')
                continue;
            if (word.charAt(i) == '@')  {
                ++section;
                if (nrLetters == 1)
                    return false;
                nrLetters = 0;
                continue;
            }
            return false;
        } else if (section == 1)    {
            ++nrLetters;
            if (word.charAt(i) == '.')  {
                if (nrLetters == 1)
                    return false;
                ++section;
                nrLetters = 0;
                continue;
            }
            if (word.charAt(i) == '_' || word.charAt(i) == '-')
                continue;
            if (word.charAt(i) <= '9' && word.charAt(i) >= '0')
                continue;
            if (word.charAt(i) <= 'z' && word.charAt(i) >= 'a')
                continue;
            if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z')
                continue;
            return false;
        } else if (section == 2)    {
            ++nrLetters;
            if (word.charAt(i) == '_' || word.charAt(i) == '-')
                continue;
            if (word.charAt(i) <= '9' && word.charAt(i) >= '0')
                continue;
            if (word.charAt(i) <= 'z' && word.charAt(i) >= 'a')
                continue;
            if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z')
                continue;
            return false;
        }
    }
    return section == 2 && nrLetters >= 2 && nrLetters <= 4;
}