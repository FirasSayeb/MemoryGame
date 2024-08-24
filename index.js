let score=0;
let nclick=0;
let choices=[];
const title=document.createElement("h1");
const textnode = document.createTextNode("Score : "+score);
title.appendChild(textnode);
document.body.appendChild(title);

function changeImage(id){
    nclick+=1;
    console.log(id);
   const elem=document.getElementById(id);
   console.log(elem); 
   if(id!= "image1" && id!= "image3" && id!= "image5" && id!= "image7" && id!= "image9"){
    elem.src="images/image1.jfif";
    choices.fill("images/image1.jfif");
   }else{
    elem.src="images/image2.jfif";
    choices.fill("images/image2.jfif");
   }
   if(nclick%2==0){
    if(choices[0] ==choices[1]){  
       score+=1;
    }else{
       let imgs= document.getElementsByTagName("img");
       imgs.forEach(element => {
        element.src="images/images.jfif";
       });
    }
   }
  
}


