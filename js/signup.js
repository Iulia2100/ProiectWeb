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
    } else if (!zipCodeRequirements())  {
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
    if (checkName(0) & checkName(1) & checkUsername() & checkEmail() 
        & checkLang() & checkCountry() & checkZipCode() & checkSex() & checkPassword(0)
        && verifyPassword(0, 1)) {
        document.getElementById("data").style.display = "block";
        alert("First name: " + document.getElementsByName("name")[0].value 
        + "\nLast name: " + document.getElementsByName("name")[1].value
        + "\nUsername: " + document.getElementsByName("id")[0].value
        + "\nEmail: " + document.getElementsByName("email")[0].value
        + "\nPassword: " + document.getElementsByName("psw")[0].value
        + "\nPassword verification: " + document.getElementsByName("psw")[1].value
        + "\nAddress: " + document.getElementsByName("adr")[0].value
        + "\nCountry: " + document.getElementById("country").value
        + "\nZip Code: " + document.getElementsByName("zip")[0].value
        + "\nSex: " + (document.querySelector('input[name="sex"]:checked') == null ? "" : 
        document.querySelector('input[name="sex"]:checked').nextElementSibling.innerHTML)
        + "\nLanguage: " + document.getElementById("lang").value
        + "\nAbout/bio: " + document.getElementsByName("bio")[0].value);
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
    } else if(!passwordRequirements(p)) {
            document.getElementsByName("psw")[p].className = "red-input";
            document.getElementsByName("pswError")[p].innerHTML = "<div class = 'wrong'>Password should contain a combination of uppercase letters, lowercase letters, numbers, and symbols.</div>";
    } else if(psw.length >= 12 && psw.length < 14) {
        document.getElementsByName("psw")[p].className = "yellow-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'weak'>Your pawwsord is weak.</div>";
        return true;
    } else {
        document.getElementsByName("psw")[p].className = "green-input";
        document.getElementsByName("pswError")[p].innerHTML = "<div class = 'correct'>Your pawwsord looks good!</div>";
        return true;
    }
    return false;
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
        return true;
    }
    return false;

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
};

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
};


var passwordRequirements = p => {
    var psw = document.getElementsByName("psw")[p].value;
    var letter, capitalLetter, digit, char;
    for(i = 0; i < psw.length; i++) {
        if(psw.charAt(i) >= 'a' && psw.charAt(i) <= "z") {
            letter =  true;
        }
    }
    for(i = 0; i < psw.length; i++) {
        if(psw.charAt(i) >= 'A' && psw.charAt(i) <= "Z") {
            capitalLetter = true;
        }
    }
    for(i = 0; i < psw.length; i++) {
        if(psw.charAt(i) >= 0 && psw.charAt(i) <= 9) {
            digit = true;
        }
    }
    for(i = 0; i < psw.length; i++) {
        if((psw.charCodeAt(i) >= 33 && psw.charCodeAt(i) <= 47) || 
        !(psw.charCodeAt(i) >= 58 && psw.charCodeAt(i) <= 64)) {
            char = true;
        }
    }
    return letter && capitalLetter && digit && char;
}

var zipCodeRequirements = () => {
    var zip = document.getElementsByName("zip")[0].value;
    if(zip.length != 6) return false;
    for(i = 0; i < 4; i++) {
        if(!(zip.charAt(i) >= '0' && zip.charAt(i) <= '9')) {
            return false;
        }
    }
    for(i = 4; i < 6; i++) {
        if(!((zip.charAt(i) >= 'A' && zip.charAt(i) <= 'Z') ||
        (zip.charAt(i) >= 'a' && zip.charAt(i) <= 'z'))) {
            return false;
        }
    }
    return true;
}

function handleForm(event) { 
    event.preventDefault();
} 
window.onload = () => {
    document.getElementById("signup").addEventListener('submit', handleForm);
    window.onclick = () =>  {
        var nr = parseInt(document.getElementById("nrClicks").innerHTML);
        document.getElementById("nrClicks").innerHTML = nr + 1;
    }
    var seconds = 0;
    setInterval(function () {
        ++seconds;
        document.getElementById("time").innerHTML = Math.floor(seconds / 60 / 60) + " hours " + 
        Math.floor(seconds / 60) % 60 + " minutes " + seconds % 60 + " seconds";
    }, 1000);
    document.getElementById("signup").addEventListener("keydown", (event) =>  {
        var nr = parseInt(document.getElementById("keypress").innerHTML);
        document.getElementById("keypress").innerHTML = nr + 1;
        if (event.key == "Enter")   {
            event.preventDefault();
        } else if (event.key.length == 1 && !event.ctrlKey)    {
            nr = parseInt(document.getElementById("totalChars").innerHTML);
            document.getElementById("totalChars").innerHTML = nr + 1;
        }
    });
    window.addEventListener('paste', e => {
        nr = parseInt(document.getElementById("totalChars").innerHTML);
        document.getElementById("totalChars").innerHTML = nr + e.clipboardData.getData("Text").length;
    });
}