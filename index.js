let score=0;
let nclick=0;
let choices=[];
let matchs=[];
const title=document.createElement("h1");
title.id="title";
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
    choices.push("images/image1.jfif");
   }else{
    elem.src="images/image2.jfif";
    choices.push("images/image2.jfif");
   }
   if(nclick%2==0){  
      console.log(choices);
      console.log(nclick);
    if(choices[choices.length-2]==choices[choices.length-1]){ 
      matchs.push(choices[choices.length-2],choices[choices.length-1]);
      score+=1;
      document.getElementById('title').textContent = "Score :"+score;
       console.log(score); 
    }else{
       let imgs= document.getElementsByTagName("img");
       for(i=0;i<imgs.length;i++){
        for(j=0;j<matchs.length;j++){
         if(imgs[i].src !=matchs[j]){
            imgs[i].src="images/images.jfif";
         }
        }
         
        
       } 
       
      
    }
   }
  
}


