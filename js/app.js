`use strict`;
let allHorns = [];
let KeywordArray = [];

$(document).ready(function () {


  function Horns(horns) {
    this.image_url = horns.image_url;
    this.title = horns.title;
    this.description = horns.description;
    this.keyword = horns.keyword;
    this.numHornes = horns.numHornes;
    allHorns.push(this);
  }



  Horns.prototype.render = function () {
    let $hornClone = $("#photo-template").clone();
    $hornClone.find("img").attr("src", this.image_url);
    $hornClone.find("h2").text(this.title);
    $hornClone.find("p").text(this.description);
    $hornClone.find("img").attr("class", this.keyword);
    $hornClone.find("img").attr("alt", this.title);
    $hornClone.removeAttr("id");
    $hornClone.attr("class", this.keyword);
    $(" main ").append($hornClone);
  };

  Horns.prototype.selectedMenu = function () {
    let menuSelect = $('.select');
    if (!(KeywordArray.includes(this.keyword))) {
      KeywordArray.push(this.keyword);
      menuSelect.append(`<option> ${this.keyword} </option>`);
    }
  };
    const readJson = () => {
      $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).
        then(data => {
          data.forEach(honrItem => {
            let horn = new Horns(honrItem);
            horn.selectedMenu();
            horn.render();
          });
        });
    };
    readJson();
  });

  $('.select').change(function(){
    let key = $(this).children('option:selected').val();
    KeywordArray.forEach(function(val){
      if(key === val){
        $('div').hide();
        $(`.${val}`).show();
      }
    });
  });












