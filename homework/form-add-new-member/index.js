var modal = document.getElementById("modal");

document.getElementById("btn").addEventListener("click", addMember);

var members = [];

function display(members) {
    let text = "";
    for(let i = 0; i < members.length; i++) {
        text = "<td>" + members[i].name + "</td>" +
        "<td>" + members[i].age + "</td>" +
        "<td>" + members[i].university + "</td>" +
        "<td>" + members[i].phone + "</td>";
    }
    console.log(text);
    document.getElementById("data").innerHTML = text;
    
}

function addMember() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var university = document.getElementById("university").value;
    var phone = document.getElementById("phone").value;
    
    var error = "";

    if (name == "" || age == "" || university == "" || phone == "") {
        error += "You need to enter all fields !!! <br>";
    }
    if (/\d/.test(name)) {
        error += "Name is invalid !!! <br>";
    }
    if (parseInt(age) > 30) {
        error += "Age is invalid !!! <br>";
    }
    if (/\d/.test(phone) == false) {
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
        console.log("aaaaaaaaa" + members.length);
        display(members);
    }

}

// document.getElementById("btn").addEventListener("click", function() {
//     modal.style.display = "block";
// });

document.getElementById("close").addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}