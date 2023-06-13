let abduloldinfo = {
    imgurl: "https://1.bp.blogspot.com/-z_ecZJVXa5c/Xx6d8fKX3vI/AAAAAAAAAjw/oA7eeZbLopEi2KUCbSfaHNTEnXcDJkn6QCLcBGAsYHQ/s1600/APJ%2BAbdul%2BKalam%2BPhoto.jpg",
    name: "APJ Abdul Kalam",
    Description: "President of India"
}
let abdulyounginfo = {
    imgurl: "https://im.indiatimes.in/content/2015/Jul/1_1438014687_725x725.jpg",
    name: "A.P.J Abdul Kalam",
    Description: "Scientist"
}
let isabdulold = true;
let displayobject;
let getRandomUser = function(){
    if(isabdulold == true){
        displayobject = abdulyounginfo;
        isabdulold = false;
    }
    else{
        displayobject = abduloldinfo;
        isabdulold = true;
    }
    document.getElementById("abdul-img").src = displayobject.imgurl;
    document.getElementById("abdul-name").innerHTML = displayobject.name;
    document.getElementById("abdul-description").innerHTML = displayobject.Description;

}


