// Bai 1
document.getElementById("btn-1").addEventListener("click", function() {
    var dt = new Date();
    document.getElementById("rs-bai-1").innerHTML = dt;
})


//Bai 2
document.getElementById("btn-2").addEventListener("click", function() {
    var dt = new Date();
    var d = dt.getDate();
    var m = dt.getMonth() + 1;
    var y = dt.getFullYear();
    
    document.getElementById("rs-bai-2-f1").innerHTML = m + "-" + d + "-" + y;
    document.getElementById("rs-bai-2-f2").innerHTML = m + "/" + d + "/" + y;
    document.getElementById("rs-bai-2-f3").innerHTML = d + "-" + m + "-" + y;
    document.getElementById("rs-bai-2-f4").innerHTML = m + "/" + d + "/" + y;
})


//Bai 3
document.getElementById("btn-3").addEventListener("click", function() {
    let str = document.getElementById("input-3").value;
    let rs = "";
    if (/\D/.test(str)) {
        rs = "Vui long nhap lai so nguyen";
    } else {
        let strArr = str.split("");

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

// Bai 6
document.getElementById("btn-6").addEventListener("click", function() {
    let str = document.getElementById("input-6").value;
    let arr = str.split(" ");
    arr = arr.map(function(x) {
        return parseInt(x);
    })
    arr.sort();
    let count = 1;
    let max = 1;
    let value = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
    
        if (arr[i+1] == arr[i]) {
            count++;
        } else {
            count = 1;
        }
    
        if (count > max) {
            max = count;
            value = [arr[i]];
    
            console.log(count);
        } else if (count == max) {
            value.push(arr[i]);
        }
     
    }
    console.log(arr);
    console.log(max);
    console.log(value);
    document.getElementById("rs-bai-6").innerHTML = value;
})


// Bai 7
document.getElementById("btn-7").addEventListener("click", function() {
    let str = document.getElementById("input-7").value;
    let rs = "chuoi khong chua 'java'";
    if (str.includes('java')) {
        rs = "chuoi co chua 'java'";
    }
    document.getElementById("rs-bai-7").innerHTML = rs;
})

//Bai 8
document.getElementById("btn-8").addEventListener("click", function() {
    let str = document.getElementById("input-8").value;
    let rs = "";
    switch(parseInt(str)) {
        case 1: rs = "Thang mot";break;
        case 2: rs = "Thang hai";break;
        case 3: rs = "Thang ba";break;
        case 4: rs = "Thang bon";break;
        case 5: rs = "Thang nam";break;
        case 6: rs = "Thang sau";break;
        case 7: rs = "Thang bay";break;
        case 8: rs = "Thang tam";break;
        case 9: rs = "Thang chin";break;
        case 10: rs = "Thang muoi";break;
        case 11: rs = "Thang muoi mot";break;
        case 12: rs = "Thang muoi hai";break;
        default: rs = "So khong hop le";
    }
    document.getElementById("rs-bai-8").innerHTML = rs;
})

//Bai 9
document.getElementById("btn-9").addEventListener("click", function() {
    let str = document.getElementById("input-9").value;
    let arr= str.split(" ");
    let tempArr = arr.map(function(x) {
        return x.length;
    })
    let maxLength = Math.max(...tempArr);
    let rs = arr.filter(function(x) {
        return x.length == maxLength;
    })

    document.getElementById("rs-bai-9").innerHTML = rs;
})

//Bai 10

document.getElementById("btn-10").addEventListener("click", function() {
    let num1 = parseInt(document.getElementById("so-1").value);
    let num2 = parseInt(document.getElementById("so-2").value);
    let start = 0;
    let end = 0;
    let rs = [];

    if (num1 > num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }
    for (let i = start + 1; i < end; i++) {
        if (checkSNT(i)) rs.push(i);
    }

    document.getElementById("rs-bai-10").innerHTML = rs;
})

function checkSNT(x) {
    let check = 0;
    if (x == 2 || x == 3) check = 1;
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            check = 0;break;
        } else check = 1;
    }
    return check;
}



