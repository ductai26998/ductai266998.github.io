// const axios = require('axios').default;

var error = "";

main();

async function main() {
    await getAPI();

    if (error != "") {
        modal.style.display = "block";
        document.getElementById("error").innerHTML = error;
    }

    document.getElementById("submit").addEventListener("click", async function() {
        await postAPI();
        getAPI();
        if (error != "") {
            modal.style.display = "block";
            document.getElementById("error").innerHTML = error;
        }
    });

    document.getElementById("close").addEventListener("click", function() {
        modal.style.display = "none";
    });
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

async function getAPI() {
    console.log("get");

    var text = "";
    try {
        let result = await axios.get("https://606b20daf8678400172e5aff.mockapi.io/users/users");

        for (let i = 0; i < result.data.length; i++) {
            text += "<li>" + result.data[i].id + ". " + result.data[i].name + "</li>";
        }
        
        document.getElementById("data").innerHTML = text;
    } catch(err) {
        error = "GET: " + err;
    }

    
    
}

async function postAPI() {
    console.log("post");
    let name = document.getElementById("name").value;

    if (name != "") {
        let newUser = {
            "name": name
        }
        try {
            let result = await axios.post("https://606b20daf8678400172e5aff.mockapi.io/users/users", newUser);
        } catch(err) {
            error = "POST: " + err;
        }
    } else error = "Name is invalid !!!";
    
}






