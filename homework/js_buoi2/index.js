// const axios = require('axios').default;

getAPI();

async function getAPI() {
    var text = "";
    let result = await axios.get("https://606b20daf8678400172e5aff.mockapi.io/users/users");

    for (let i = 0; i < result.data.length; i++) {
        text += "<li>" + result.data[i].id + ". " + result.data[i].name + "</li>";
    }

    document.getElementById("data").innerHTML = text;
}

async function postAPI() {
    let name = document.getElementById("name").value;
    let newUser = {
        "name": name
    }
    let result = await axios.post("https://606b20daf8678400172e5aff.mockapi.io/users/users", newUser);
}


document.getElementById("submit").addEventListener("click", async function() {
    await postAPI();
    getAPI();
});
    



