// var checkUserId = () =>  {
//     var userId = document.getElementsByName("userId")[0].value;
//     if (userId.length < 5 || userId.length > 12)
//         // document.getElementById("userIdError") = "Username length must be between 5 and 12 characters";
//     if (userId.charAt(0) < 'A' || userId.charAt(0) > 'Z')   {
//         return "Username must sta"
//     }
// }

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