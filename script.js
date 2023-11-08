let popUpText=document.querySelectorAll(".pop-up-text");
let popUpImg=document.querySelectorAll(".pop-up-image");

popUpText[0].onclick= function(){popUpImg[0].style.display="block";};
popUpText[1].onclick= function(){popUpImg[1].style.display="block"};
popUpText[2].onclick= function(){popUpImg[2].style.display="block"};
popUpText[3].onclick= function(){popUpImg[3].style.display="block"};
popUpText[4].onclick= function(){popUpImg[4].style.display="block"};
popUpText[5].onclick= function(){popUpImg[5].style.display="block"};
popUpText[6].onclick= function(){popUpImg[6].style.display="block"};
popUpText[7].onclick= function(){popUpImg[7].style.display="block"};
popUpText[8].onclick= function(){popUpImg[8].style.display="block"};
popUpText[9].onclick= function(){popUpImg[9].style.display="block"};
popUpText[10].onclick= function(){popUpImg[10].style.display="block"};

// for(i=0;i<popUpImg.length;i++){
//     popUpText[i].onclick= function(){
//         for(j=0;j<popUpImg.length;j++){
//             popUpImg[j].style.display="block";
//         }
        
//     }
// }


for(i=0;i<popUpImg.length;i++){
    popUpImg[i].onclick= function(){
        for(j=0;j<popUpImg.length;j++){
            popUpImg[j].style.display="none";
        }
        
    }
}


