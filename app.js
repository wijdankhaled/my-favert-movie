/*var value= prompt ('do you know dr watson pleas answer yes or no');
if (value =="yes"){
alert ('that is great enjoy the movie');
}else if(value == "no"){
  document.write('<img src="https://static.wikia.nocookie.net/heroes-and-villain/images/5/55/Profile_-_John_Watson_%28BBC%29.jpg/revision/latest/scale-to-width-down/333?cb=20190720063701">');
  
  
}*/
var favChar;
var favActore = function(){ 
  favChar=prompt ('hello,please enter your fav char name move!');

while(favActore !=='sherlock'&& favActore!=='watson'){
  favActore = prompt('please enter the name sherlock or watson');
}
}
favActore();

var userChoose;
function imagNum (){
if (favActore ==='sherlock')
{
  userChoose='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCs3KcQP3_UM95ztD6TKupSCtPLEEO0IcFg&usqp=CAU">';
}
else if(favActore ==='watson'){
  userChoose='<img src="https://pbs.twimg.com/profile_images/643469490920005633/PLfwXB05_400x400.jpg"https://pbs.twimg.com/profile_images/643469490920005633/PLfwXB05_400x400.jpg>';
}

var imgNum= prompt('how many image do you want');
for(var i=0;i<imgNum;i++){
  document.write(userChoose);
}
}
imagNum ();