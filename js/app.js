`use strict`;
 let keywors = [];
$(document).ready(function() {
  
   
function Horns(horns){
    this.image_url = horns.image_url;
    this.title = horns.title;
    this.description = horns.description;
    this.keyword = horns.keyword;
    this.numHornes = horns.numHornes;
    Horns.all.push(this);
}
 
  Horns.all= [];
  console.log(Horns.all);

Horns.prototype.render = function(){
    let $hornClone = $("#photo-template").clone();
    $hornClone.find("h2").text(this.title);
     $hornClone.find("p").text(this.description);
    $hornClone.find("img").attr("class",this.keyword);
    $hornClone.find("img").attr("src",this.image_url);
    $hornClone.find("img").attr("alt",this.title);
    $hornClone.removeAttr("id");
    $hornClone.attr("id", this.keyword);
    $("main section ").append($hornClone);
};

Horns.prototype.descriptions = function(){
    for(let i=0;i < Horns.all.length ; i++){

    }

};
// function matchKeyword(){
//     imgArray.forEach(img =>{
//         if(!KeywordArray .includes(this.keyword)){
//             KeywordArray.push(this.keyword);
        
//     }
//     });
// } 
 $("#select").click(function(){
    $('option').show();
 const readJson = () => {
    $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).
    then(data => {
      data.forEach(honrItem => {
        let horn = new Horns(honrItem);
        horn.render();
      });
    });
  };
readJson();
});
 });











