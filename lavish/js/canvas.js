var launch = function()
{
      (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
      })();
       
            
             
             var curPerc = 0;
             var counterClockwise = false;
             var circ = Math.PI * 2;
             var quart = Math.PI / 2;

             
            
       function animate(current) {
                  var canvas = document.getElementById('html');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;

                  var endPercent = $('#html').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#d9ff00';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("HTML5",x-30,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         animate(curPerc / 100)
                     });
                 }
            }
       animate();

       function animat(current) {
                  var canvas = document.getElementById('css');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#css').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#bcdb55';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("CSS3",x-20,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         animat(curPerc / 100)
                     });
                 }
            }
       animat();
       function jsa(current) {
                  var canvas = document.getElementById('js');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#js').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#bd910d';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("JS",x-10,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         jsa(curPerc / 100)
                     });
                 }
            }
       jsa();
       function photoshop(current) {
                  var canvas = document.getElementById('photoshop');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#photoshop').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#f0f565';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("Photoshop",x-55,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         photoshop(curPerc / 100)
                     });
                 }
            }
       photoshop();
       function php(current) {
                  var canvas = document.getElementById('php');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#php').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#bd590d';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("PHP",x-20,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         php(curPerc / 100)
                     });
                 }
            }
       php();

       function objc(current) {
                  var canvas = document.getElementById('objc');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#objc').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#bd0d0d';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("Objective C",x-55,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         objc(curPerc / 100)
                     });
                 }
            }
       objc();

       function python(current) {
                  var canvas = document.getElementById('python');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#python').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#982332';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("Python",x-30,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         python(curPerc / 100)
                     });
                 }
            }
       python();


       function oops(current) {
                  var canvas = document.getElementById('oops');
                  var context = canvas.getContext('2d');
                  var x = canvas.width / 2;
                  var y = canvas.height / 2;
                  var radius = 75;
                  var endPercent = $('#oops').data('per');
                  context.lineWidth = 10;
                  context.strokeStyle = '#ffc266';
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 0;
                  context.shadowBlur = 10;
                  context.shadowColor = '#656565';
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 context.beginPath();
                 context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                 context.stroke();
                 context.font="20px Open Sans";
                 context.fillStyle = "#dcdcdc"
                 context.fillText("OOPS",x-24,y);
                 curPerc++;
                 if (curPerc < endPercent) {
                     requestAnimationFrame(function () {
                         oops(curPerc / 100)
                     });
                 }
            }
       oops();


}
$(document).ready(function(){
      var flag = true;
      $(window).scroll(function(){
            var a = $(window).scrollTop();
            var b = $('#Skills').offset().top;
            b -=300;
            var c = $('#Work').offset().top;
            var d = $('#Bio').offset().top;
            if(a >= (c+200))
                  flag=true;
            if(a >= b)
            {
                  if(flag)
                  {
                        launch();
                        flag = false;
                  }
            }
      });
});