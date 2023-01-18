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
    } else if (!/^[A-Z]*$/.test(userId.charAt(0)))   {
        document.getElementsByName("id")[0].className = "red-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='wrong'>Username must start with a capital letter.</div>";
    } else  {
        document.getElementsByName("id")[0].className = "green-input";
        document.getElementById("usernameError").innerHTML = 
        "<div class='correct'>Looks good!</div>";
    }
}

var checkName = a => {
    var name = document.getElementsByName("name")[a].value;
    if (name == null || name == "") {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Please fill out this field.</div>";
    } else if (!/^[A-Za-z]*$/.test(name))   {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Name should only contain letters.</div>";
    } else if (!/^[A-Z]*$/.test(name.charAt(0)))    {
        document.getElementsByName("name")[a].className = "red-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='wrong'>Name should start with a capital letter.</div>";
    } else  {
        document.getElementsByName("name")[a].className = "green-input";
        document.getElementsByName("nameError")[a].innerHTML = "<div class='correct'>Looks good!</div>";
    }
};

var checkEmail = () =>  {
    var email = document.getElementsByName("email")[0].value;
    if (email == null || email == "")   {
        document.getElementsByName("email")[0].className = "red-input";
        document.getElementById("emailError").innerHTML = "<div class='wrong'>Please fill out this field.</div>"; 
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))    {
        document.getElementsByName("email")[0].className = "red-input";
        document.getElementById("emailError").innerHTML = 
            "<div class='wrong'>Please input a valid email address.</div>";
    } else    {
        document.getElementsByName("email")[0].className = "green-input";
        document.getElementById("emailError").innerHTML = 
            "<div class='correct'>Looks good!</div>";
    }
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
    }
}