import React from "react";
import jQuery from "jquery";
import $ from 'jquery';

// import Puzzle from 'react-image-puzzle';

var img = new Image();
var width;
var height;
var length = 3;
var ylength = 3;
var count = 0
var pos = [];
var value = []
var sample = []
img.src = 'https://picsum.photos/seed/picsum/400/400';
img.onload = function () {
  var k=0;
  width = this.width;
  height = this.height;
  for (var j = 0; j < length; j++) {
    for (var i = 0; i < length; i++) {
      count = count + 1;

      var left = (-1 * width / length * i).toString() + "px";
      var top = (-1 * height / ylength * j).toString() + "px";
      // var newTile = {
      //   id: count,
      //   top: top,
      //   left: left
      // };
      var num = i +""+j;
      var element = jQuery('<div/>', {
        id: num,
        class: "splitImg",
        css: {
          "width": Math.floor(width / length),
          "height": Math.floor(height / ylength),
          "background-position": left + " " + top,
          "background-image": 'url(' + img.src + ')'
        },
        // onClick:() => {value.push(num);
        // console.log(value)} 
      
      })
      // pos.push(newTile);
      /* console.log(pos); */
      // element.appendTo('#wrapper');

      // $("#wrapper").width(width + (length * 2))
      sample.push(element)


    }
  }

  sample = sample.sort(() => Math.random() - 0.5)
  sample.map(e => {
  e.appendTo('#wrapper'); 
   $("#wrapper").width(width + (length *2)) 
  })


  $("#00").on("mousedown", function (e) {
    value.push(1)
    console.log(1);
  });
  $("#10").on("mousedown", function (e) {
    value.push(2)
    console.log(2);
  });
  $("#20").on("mousedown", function (e) {
    value.push(3)
    console.log(3);
  });
  $("#01").on("mousedown", function (e) {
    value.push(4)
    console.log(4);
  });
  $("#11").on("mousedown", function (e) {
    value.push(5)
    console.log(5);
  });
  $("#21").on("mousedown", function (e) {
    value.push(6)
    console.log(6);
  });
  $("#02").on("mousedown", function (e) {
    value.push(7)
    console.log(7);
  });
  $("#12").on("mousedown", function (e) {
    value.push(8)
    console.log(8);
  });
  $("#22").on("mousedown", function (e) {
    value.push(9)
    console.log(9);
  });


}






const ImgShuffle = () => {




  var Generate = () => {
    console.log(value);

  }


  return (
    <>
      <h1>Puzzle</h1>
      {/* <center><Puzzle
                image='https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            /></center> */}

      <center><div id="wrapper" >
      </div></center>
      <button onClick={Generate}>Generate</button>

    </>
  );
}

export default ImgShuffle;