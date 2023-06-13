let abduloldinfo = {
    imgurl: "https://1.bp.blogspot.com/-z_ecZJVXa5c/Xx6d8fKX3vI/AAAAAAAAAjw/oA7eeZbLopEi2KUCbSfaHNTEnXcDJkn6QCLcBGAsYHQ/s1600/APJ%2BAbdul%2BKalam%2BPhoto.jpg",
    name: "APJ Abdul Kalam",
    Description: "President of India"
}

let displayobject;
let getRandomUser = function(){
    
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("abdul-img").src = displayobject.imgurl;
    document.getElementById("abdul-name").innerHTML = displayobject.name;
    document.getElementById("abdul-description").innerHTML = displayobject.Description;

}


