var modal = document.getElementById("modal");

document.getElementById("btn").addEventListener("click", addMember);

document.getElementById("name").value = localStorage.getItem("name");
document.getElementById("age").value = localStorage.getItem("age");
document.getElementById("university").value = localStorage.getItem("university");
document.getElementById("phone").value = localStorage.getItem("phone");
document.getElementById("data").innerHTML = localStorage.getItem("text");

var members = [];

function display(members) {
    console.log(members);
    let text = "<tr><th>Name</th><th>Age</th><th>University</th><th>Phone</th></tr>";
    for(let i = 0; i < members.length; i++) {
        text += "<tr><td>" + members[i].name + "</td>" +
        "<td>" + members[i].age + "</td>" +
        "<td>" + members[i].university + "</td>" +
        "<td>" + members[i].phone + "</td></tr>";
    }
    console.log(text);
    localStorage.setItem("text", text);
    document.getElementById("data").innerHTML = text;
    
}

function addMember() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var university = document.getElementById("university").value;
    var phone = document.getElementById("phone").value;
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("age", age);
    window.localStorage.setItem("university", university);
    window.localStorage.setItem("phone", phone);

    var error = "";

    if (name == "" || age == "" || university == "" || phone == "") {
        error += "You need to enter all fields !!! <br>";
    }
    if (/\d/.test(name)) {
        error += "Name is invalid !!! <br>";
    }
    if (parseInt(age) > 30 || /\D/.test(age)) {
        error += "Age is invalid !!! <br>";
    }
    if (/\D/.test(phone)) {
        error += "Number phone is invalid !!! <br>";
    }
    if (error != "") {
        modal.style.display = "block";
        document.getElementById("error").innerHTML = error;
    } else {
        var member = {
            name: name,
            age: age,
            university: university,
            phone: phone
        };
        members.push(member);
        display(members);
    }

}

document.getElementById("close").addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}