// Bai 1
document.getElementById("btn-1").addEventListener("click", function() {
    var dt = new Date();
    document.getElementById("rs-bai-1").innerHTML = dt;
})


//Bai 2
document.getElementById("btn-2").addEventListener("click", function() {
    var dt = new Date();
    var d = dt.getDate();
    var m = dt.getMonth();
    var y = dt.getFullYear();
    
    document.getElementById("rs-bai-2-f1").innerHTML = m + "-" + d + "-" + y;
    document.getElementById("rs-bai-2-f2").innerHTML = m + "/" + d + "/" + y;
    document.getElementById("rs-bai-2-f3").innerHTML = d + "-" + m + "-" + y;
    document.getElementById("rs-bai-2-f4").innerHTML = m + "/" + d + "/" + y;
})


//Bai 3
document.getElementById("btn-3").addEventListener("click", function() {
    let str = document.getElementById("input-3").value;
    let strArr = str.split("");
    let rs = "";

    let numArr = strArr.map(function(x) {
        return parseInt(x);
    })
    for (let i = 0; i < numArr.length - 1; i++) {
        if(numArr[i + 1] - numArr[i] < 0) {
            rs = "khong la chuoi so tang";
            break;
        }
        else rs = "la chuoi so tang";
    }

    document.getElementById("rs-bai-3").innerHTML = rs;
})

//Bai 4
document.getElementById("btn-4").addEventListener("click", function() {
    let str = document.getElementById("input-4").value;
    let strArr = str.split("");
    
    let mapStr = strArr.map(function(x) {
        return String.fromCharCode(x.charCodeAt(0) + 1);
    })
    str = mapStr.join("");
    document.getElementById("rs-bai-4").innerHTML = str;
})

//Bai 5
document.getElementById("btn-5").addEventListener("click", function() {
    let str = document.getElementById("input-5").value;
    let start = str.length / 2 - 1.5;
    let newStr = "";
    if (str.length % 2 != 0 && str.length > 2) {
        newStr = str.slice(start, start + 3);
    } else newStr = "Nhap lai ki tu co do dai le";
    document.getElementById("rs-bai-5").innerHTML = newStr;
})


