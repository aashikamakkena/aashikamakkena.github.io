let abduloldinfo = {
    imgurl: "https://1.bp.blogspot.com/-z_ecZJVXa5c/Xx6d8fKX3vI/AAAAAAAAAjw/oA7eeZbLopEi2KUCbSfaHNTEnXcDJkn6QCLcBGAsYHQ/s1600/APJ%2BAbdul%2BKalam%2BPhoto.jpg",
    name: "APJ Abdul Kalam",
    Description: "President of India"
}

let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        //displayobject.name = data.results[0].name.first+ " " +data.results[0].name.last
        displayobject.name = "User card"
       // displayobject.imgurl = data.results[0].picture.large
        //displayobject.Description = data.results[0].gender
        document.getElementById("abdul-img").src = displayobject.imgurl;
        document.getElementById("abdul-name").innerHTML = displayobject.name;
        document.getElementById("abdul-description").innerHTML = displayobject.Description;
    })
}


