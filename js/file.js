let sendButton = document.querySelector('#send');
let today = new Date();
let datetime = today.getFullYear()+ "/" + (today.getMonth()+1) + "/" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
function send() {
    let lastName = document.querySelector('#lastName').value;
    let firstName = document.querySelector('#firstName').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let projectName = document.querySelector('#projectName').value;
    // let projectImg = document.querySelector('#projectImg').value;
    let projectDescription = document.querySelector('#projectDescription').value;
    // console.log(datetime);
    // console.log(lastName);
    // console.log(firstName);
    // console.log(email);
    // console.log(phone);
    // console.log(projectName);
    // console.log(projectDescription);
    if(lastName == ''){
        alert("請確實輸入姓氏")
        $("#lastName").addClass("border-red")
    }else if(firstName == ''){
        alert("請確實輸入名字")
        $("#firstName").addClass("border-red")
    }else if(email == ''){
        alert("請確實輸入信箱")
        $("#email").addClass("border-red")
    }else if(phone == ''){
        alert("請確實輸入電話")
        $("#phone").addClass("border-red")
    }else if(projectName == ''){
      alert("請確實輸入專案名稱")
      $("#projectName").addClass("border-red")
    }else{
      alert("已新增")
      window.setTimeout(" window.location.href = './no_file.html'", 1000)
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwXF-7loB34qgvJlwWwA2DIdNJbtab6hNUrAj_2b08d-fC938E/exec",
            // url: "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxEvc31hr02NnMuMDpgHeCQRIy-gOe0VaiXrKxBlqs1ACnflH6o/exec",
            data: {
                "time": datetime,
                "lastName": lastName,
                "firstName": firstName,
                "email": email,
                "phone": phone,
                "projectName": projectName,
                // "projectImg": projectImg,
                "projectDescription": projectDescription
            },
            success: function(response) {
                console.log(response)
              if(response == "成功"){
                alert("成功");
              }
            },
          });

        };
      }      
        sendButton.addEventListener('click', send);
