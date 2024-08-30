let score=0;
let nclick=0;
let choices=[];
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
    choices.push(elem.id);
   }else{
    elem.src="images/image2.jfif";
    choices.push(elem.id);
   }
   if(nclick%2==0){  
      console.log(choices);
      console.log(nclick);
    if(document.getElementById(choices[choices.length-2]).src==document.getElementById(choices[choices.length-1]).src){ 
      score+=1;
      document.getElementById('title').textContent = "Score :"+score;
       console.log(score); 
    }else{

            
            let imgs=document.getElementsByTagName('img');
            for(k=0;k<imgs.length;k++){
               console.log(imgs[k].src); 
              
               if(imgs[k].id==choices[choices.length-2] || imgs[k].id==choices[choices.length-1] ){
                  console.log(imgs[k].src);
                  imgs[k].src="images/images.jfif";
                  console.log(imgs[k].src);
                }
               }
            }
         
       } 
       
      
    }
   
  



