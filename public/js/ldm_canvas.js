//Created with Ai->Canvas Export Plug-In Version 1.3 (PC/64)
//By Mike Swanson (http://blog.mikeswanson.com/)
function load_canvas () {

  var canvas = document.getElementById("ldm_canvas");
  var ctx = canvas.getContext("2d");

  draw(ctx);
  canvas.addEventListener('click', function(event) {
    if (event.region) {
      console.log('hit region: ' + event.region);
    }
  })
}

function draw(ctx) {

  var alpha = ctx.globalAlpha;
  var gradient;

  // layer1/Solution Oriented
  ctx.save();

  // layer1/Solution Oriented/SO Outline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(171.3, 108.9);
  ctx.bezierCurveTo(172.2, 109.4, 172.8, 110.4, 172.8, 111.5);
  ctx.lineTo(172.8, 165.5);
  ctx.lineTo(242.9, 206.0);
  ctx.lineTo(242.9, 68.5);
  ctx.lineTo(242.7, 68.4);
  ctx.lineTo(124.3, 0.0);
  ctx.lineTo(124.3, 81.7);
  ctx.lineTo(171.3, 108.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(149, 90, 164)";
  ctx.fill();
  ctx.addHitRegion({id: 'SO'})

  // layer1/Solution Oriented/SO Picture

  // layer1/Solution Oriented/SO Picture/Compound Path
  ctx.save();
  ctx.beginPath();

  // layer1/Solution Oriented/SO Picture/Compound Path/Path
  ctx.moveTo(242.7, 68.4);
  ctx.lineTo(197.6, 42.3);
  ctx.lineTo(184.1, 53.4);
  ctx.bezierCurveTo(187.6, 61.9, 192.2, 71.5, 197.8, 80.9);
  ctx.bezierCurveTo(213.5, 106.8, 232.0, 124.7, 232.0, 124.7);
  ctx.lineTo(242.9, 115.7);
  ctx.lineTo(242.9, 68.5);
  ctx.lineTo(242.7, 68.4);
  ctx.closePath();

  // layer1/Solution Oriented/SO Picture/Compound Path/Path
  ctx.moveTo(210.9, 71.0);
  ctx.bezierCurveTo(206.1, 75.0, 198.9, 74.3, 195.0, 69.4);
  ctx.bezierCurveTo(191.0, 64.6, 191.7, 57.5, 196.6, 53.6);
  ctx.bezierCurveTo(201.4, 49.6, 208.5, 50.3, 212.4, 55.1);
  ctx.bezierCurveTo(216.4, 59.9, 215.7, 67.0, 210.9, 71.0);
  ctx.closePath();

  // layer1/Solution Oriented/SO Picture/Compound Path/Path
  ctx.moveTo(225.6, 88.9);
  ctx.bezierCurveTo(222.5, 91.4, 217.9, 91.0, 215.4, 87.9);
  ctx.bezierCurveTo(212.9, 84.8, 213.3, 80.3, 216.4, 77.7);
  ctx.bezierCurveTo(219.5, 75.2, 224.0, 75.6, 226.6, 78.7);
  ctx.bezierCurveTo(229.1, 81.8, 228.6, 86.4, 225.6, 88.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(246, 202, 26)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(175.7, 29.7);
  ctx.bezierCurveTo(176.9, 33.7, 179.6, 42.6, 184.1, 53.4);
  ctx.lineTo(197.6, 42.3);
  ctx.lineTo(175.7, 29.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(233, 183, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(201.0, 105.0);
  ctx.bezierCurveTo(199.1, 102.7, 197.3, 100.4, 195.7, 98.1);
  ctx.bezierCurveTo(194.5, 108.9, 195.2, 127.3, 208.4, 146.1);
  ctx.bezierCurveTo(208.4, 146.1, 209.9, 127.2, 217.4, 121.8);
  ctx.bezierCurveTo(211.9, 117.1, 206.4, 111.6, 201.0, 105.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 0.15;
  ctx.beginPath();
  ctx.moveTo(201.0, 105.0);
  ctx.bezierCurveTo(199.1, 102.7, 197.3, 100.4, 195.7, 98.1);
  ctx.bezierCurveTo(194.5, 108.9, 195.2, 127.3, 208.4, 146.1);
  ctx.bezierCurveTo(208.4, 146.1, 209.9, 127.2, 217.4, 121.8);
  ctx.bezierCurveTo(211.9, 117.1, 206.4, 111.6, 201.0, 105.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(34, 31, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 1.00;
  ctx.beginPath();
  ctx.moveTo(197.8, 80.9);
  ctx.bezierCurveTo(192.2, 71.5, 187.6, 61.9, 184.1, 53.4);
  ctx.lineTo(177.2, 59.2);
  ctx.bezierCurveTo(180.0, 70.5, 185.5, 83.9, 195.7, 98.1);
  ctx.bezierCurveTo(197.3, 100.4, 199.1, 102.7, 201.0, 105.0);
  ctx.bezierCurveTo(206.4, 111.6, 211.9, 117.1, 217.4, 121.8);
  ctx.bezierCurveTo(219.5, 123.6, 221.6, 125.2, 223.7, 126.8);
  ctx.lineTo(227.1, 124.0);
  ctx.lineTo(232.0, 124.7);
  ctx.bezierCurveTo(232.0, 124.7, 213.5, 106.8, 197.8, 80.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(246, 202, 26)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 0.15;
  ctx.beginPath();
  ctx.moveTo(197.8, 80.9);
  ctx.bezierCurveTo(192.2, 71.5, 187.6, 61.9, 184.1, 53.4);
  ctx.lineTo(177.2, 59.2);
  ctx.bezierCurveTo(180.0, 70.5, 185.5, 83.9, 195.7, 98.1);
  ctx.bezierCurveTo(197.3, 100.4, 199.1, 102.7, 201.0, 105.0);
  ctx.bezierCurveTo(206.4, 111.6, 211.9, 117.1, 217.4, 121.8);
  ctx.bezierCurveTo(219.5, 123.6, 221.6, 125.2, 223.7, 126.8);
  ctx.lineTo(227.1, 124.0);
  ctx.lineTo(232.0, 124.7);
  ctx.bezierCurveTo(232.0, 124.7, 213.5, 106.8, 197.8, 80.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(34, 31, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 1.00;
  ctx.beginPath();
  ctx.moveTo(177.2, 59.2);
  ctx.lineTo(184.1, 53.4);
  ctx.bezierCurveTo(179.6, 42.6, 176.9, 33.7, 175.7, 29.7);
  ctx.lineTo(174.8, 29.1);
  ctx.bezierCurveTo(174.3, 33.3, 173.5, 44.4, 177.2, 59.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(233, 183, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 0.15;
  ctx.beginPath();
  ctx.moveTo(177.2, 59.2);
  ctx.lineTo(184.1, 53.4);
  ctx.bezierCurveTo(179.6, 42.6, 176.9, 33.7, 175.7, 29.7);
  ctx.lineTo(174.8, 29.1);
  ctx.bezierCurveTo(174.3, 33.3, 173.5, 44.4, 177.2, 59.2);
  ctx.closePath();
  ctx.fillStyle = "rgb(34, 31, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 1.00;
  ctx.beginPath();
  ctx.moveTo(212.4, 55.1);
  ctx.bezierCurveTo(208.5, 50.3, 201.4, 49.6, 196.6, 53.6);
  ctx.bezierCurveTo(191.7, 57.5, 191.0, 64.6, 195.0, 69.4);
  ctx.bezierCurveTo(198.9, 74.3, 206.1, 75.0, 210.9, 71.0);
  ctx.bezierCurveTo(215.7, 67.0, 216.4, 59.9, 212.4, 55.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(246, 202, 26)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(212.4, 55.1);
  ctx.bezierCurveTo(208.5, 50.3, 201.4, 49.6, 196.6, 53.6);
  ctx.bezierCurveTo(191.7, 57.5, 191.0, 64.6, 195.0, 69.4);
  ctx.bezierCurveTo(198.9, 74.3, 206.1, 75.0, 210.9, 71.0);
  ctx.bezierCurveTo(215.7, 67.0, 216.4, 59.9, 212.4, 55.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(233, 183, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(216.4, 77.7);
  ctx.bezierCurveTo(213.3, 80.3, 212.9, 84.8, 215.4, 87.9);
  ctx.bezierCurveTo(217.9, 91.0, 222.5, 91.4, 225.6, 88.9);
  ctx.bezierCurveTo(228.6, 86.4, 229.1, 81.8, 226.6, 78.7);
  ctx.bezierCurveTo(224.0, 75.6, 219.5, 75.2, 216.4, 77.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(246, 202, 26)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(216.4, 77.7);
  ctx.bezierCurveTo(213.3, 80.3, 212.9, 84.8, 215.4, 87.9);
  ctx.bezierCurveTo(217.9, 91.0, 222.5, 91.4, 225.6, 88.9);
  ctx.bezierCurveTo(228.6, 86.4, 229.1, 81.8, 226.6, 78.7);
  ctx.bezierCurveTo(224.0, 75.6, 219.5, 75.2, 216.4, 77.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(233, 183, 31)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.beginPath();
  ctx.moveTo(232.0, 124.7);
  ctx.lineTo(242.9, 137.9);
  ctx.lineTo(242.9, 115.7);
  ctx.lineTo(232.0, 124.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(149, 90, 164)";
  ctx.fill();

  // layer1/Solution Oriented/SO Picture/Path
  ctx.globalAlpha = alpha * 0.40;
  ctx.beginPath();
  ctx.moveTo(232.0, 124.7);
  ctx.lineTo(242.9, 137.9);
  ctx.lineTo(242.9, 115.7);
  ctx.lineTo(232.0, 124.7);
  ctx.closePath();
  ctx.save();
  ctx.transform(0.773, -0.634, -0.634, -0.773, 462.2, 1188.1);
  gradient = ctx.createLinearGradient(503.7, 928.9, 503.7, 968.1);
  gradient.addColorStop(0.00, "rgba(255, 255, 255, 0.00)");
  gradient.addColorStop(0.66, "rgba(255, 255, 255, 0.50)");
  gradient.addColorStop(1.00, "rgb(255, 255, 255)");
  ctx.fillStyle = gradient;
  ctx.fill();

  // layer1/Solution Oriented/SO Text
  ctx.restore();
  ctx.restore();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.save();
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(147.9, 53.6);
  ctx.bezierCurveTo(146.9, 53.0, 146.0, 52.3, 145.3, 51.5);
  ctx.bezierCurveTo(144.5, 50.7, 144.0, 49.8, 143.7, 48.9);
  ctx.lineTo(146.7, 47.7);
  ctx.bezierCurveTo(147.0, 48.5, 147.4, 49.1, 148.0, 49.7);
  ctx.bezierCurveTo(148.5, 50.2, 149.0, 50.6, 149.6, 51.0);
  ctx.bezierCurveTo(149.9, 51.2, 150.2, 51.2, 150.3, 51.3);
  ctx.bezierCurveTo(150.5, 51.3, 150.6, 51.2, 150.7, 51.0);
  ctx.lineTo(150.7, 51.0);
  ctx.bezierCurveTo(150.8, 50.9, 150.8, 50.7, 150.7, 50.5);
  ctx.bezierCurveTo(150.5, 50.3, 150.2, 50.0, 149.7, 49.5);
  ctx.bezierCurveTo(149.2, 49.1, 148.8, 48.6, 148.3, 48.2);
  ctx.bezierCurveTo(147.9, 47.7, 147.6, 47.3, 147.3, 46.8);
  ctx.bezierCurveTo(147.1, 46.3, 146.9, 45.9, 146.9, 45.4);
  ctx.bezierCurveTo(146.9, 44.9, 147.0, 44.4, 147.3, 43.8);
  ctx.lineTo(147.3, 43.8);
  ctx.bezierCurveTo(147.6, 43.3, 148.0, 42.9, 148.4, 42.6);
  ctx.bezierCurveTo(148.8, 42.3, 149.3, 42.1, 149.9, 42.0);
  ctx.bezierCurveTo(150.4, 41.9, 151.0, 41.9, 151.6, 42.0);
  ctx.bezierCurveTo(152.3, 42.2, 152.9, 42.4, 153.6, 42.9);
  ctx.bezierCurveTo(154.6, 43.4, 155.4, 44.0, 156.0, 44.7);
  ctx.bezierCurveTo(156.6, 45.3, 157.1, 46.1, 157.4, 46.9);
  ctx.lineTo(154.4, 48.2);
  ctx.bezierCurveTo(154.1, 47.6, 153.8, 47.0, 153.3, 46.6);
  ctx.bezierCurveTo(152.9, 46.1, 152.4, 45.7, 152.0, 45.5);
  ctx.bezierCurveTo(151.7, 45.3, 151.5, 45.2, 151.3, 45.3);
  ctx.bezierCurveTo(151.2, 45.3, 151.0, 45.3, 151.0, 45.5);
  ctx.lineTo(151.0, 45.5);
  ctx.bezierCurveTo(150.9, 45.6, 150.9, 45.6, 150.9, 45.7);
  ctx.bezierCurveTo(150.9, 45.8, 151.0, 45.9, 151.0, 46.0);
  ctx.bezierCurveTo(151.1, 46.1, 151.2, 46.2, 151.3, 46.4);
  ctx.bezierCurveTo(151.5, 46.5, 151.7, 46.7, 151.9, 46.9);
  ctx.bezierCurveTo(152.5, 47.4, 153.0, 47.9, 153.5, 48.4);
  ctx.bezierCurveTo(153.9, 48.8, 154.2, 49.3, 154.5, 49.8);
  ctx.bezierCurveTo(154.7, 50.3, 154.8, 50.7, 154.8, 51.2);
  ctx.bezierCurveTo(154.8, 51.7, 154.7, 52.2, 154.4, 52.7);
  ctx.lineTo(154.4, 52.7);
  ctx.bezierCurveTo(154.0, 53.3, 153.7, 53.7, 153.2, 54.0);
  ctx.bezierCurveTo(152.8, 54.3, 152.2, 54.5, 151.7, 54.5);
  ctx.bezierCurveTo(151.1, 54.6, 150.5, 54.6, 149.9, 54.4);
  ctx.bezierCurveTo(149.2, 54.2, 148.6, 54.0, 147.9, 53.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(158.4, 59.7);
  ctx.bezierCurveTo(157.6, 59.2, 157.0, 58.7, 156.5, 58.0);
  ctx.bezierCurveTo(156.0, 57.4, 155.6, 56.7, 155.4, 55.9);
  ctx.bezierCurveTo(155.1, 55.1, 155.1, 54.4, 155.2, 53.5);
  ctx.bezierCurveTo(155.3, 52.7, 155.5, 52.0, 155.9, 51.2);
  ctx.lineTo(156.0, 51.2);
  ctx.bezierCurveTo(156.4, 50.5, 156.9, 49.9, 157.6, 49.4);
  ctx.bezierCurveTo(158.2, 48.9, 158.9, 48.6, 159.7, 48.4);
  ctx.bezierCurveTo(160.5, 48.2, 161.3, 48.2, 162.1, 48.3);
  ctx.bezierCurveTo(163.0, 48.4, 163.8, 48.7, 164.6, 49.1);
  ctx.bezierCurveTo(165.3, 49.6, 166.0, 50.1, 166.5, 50.8);
  ctx.bezierCurveTo(167.0, 51.5, 167.4, 52.2, 167.6, 52.9);
  ctx.bezierCurveTo(167.8, 53.7, 167.9, 54.5, 167.8, 55.3);
  ctx.bezierCurveTo(167.7, 56.1, 167.5, 56.8, 167.0, 57.6);
  ctx.lineTo(167.0, 57.6);
  ctx.bezierCurveTo(166.6, 58.3, 166.1, 58.9, 165.4, 59.4);
  ctx.bezierCurveTo(164.8, 59.9, 164.0, 60.2, 163.3, 60.4);
  ctx.bezierCurveTo(162.5, 60.6, 161.7, 60.7, 160.9, 60.5);
  ctx.bezierCurveTo(160.0, 60.4, 159.2, 60.1, 158.4, 59.7);
  ctx.closePath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(160.2, 56.7);
  ctx.bezierCurveTo(160.5, 56.9, 160.8, 57.0, 161.2, 57.0);
  ctx.bezierCurveTo(161.5, 57.0, 161.8, 57.0, 162.1, 56.9);
  ctx.bezierCurveTo(162.4, 56.8, 162.7, 56.6, 163.0, 56.4);
  ctx.bezierCurveTo(163.2, 56.2, 163.4, 56.0, 163.6, 55.7);
  ctx.lineTo(163.6, 55.6);
  ctx.bezierCurveTo(163.8, 55.3, 163.9, 55.0, 164.0, 54.7);
  ctx.bezierCurveTo(164.0, 54.3, 164.0, 54.0, 163.9, 53.7);
  ctx.bezierCurveTo(163.9, 53.4, 163.8, 53.1, 163.6, 52.8);
  ctx.bezierCurveTo(163.4, 52.5, 163.1, 52.3, 162.8, 52.1);
  ctx.bezierCurveTo(162.5, 51.9, 162.2, 51.8, 161.8, 51.8);
  ctx.bezierCurveTo(161.5, 51.8, 161.2, 51.8, 160.9, 51.9);
  ctx.bezierCurveTo(160.6, 52.0, 160.3, 52.2, 160.0, 52.4);
  ctx.bezierCurveTo(159.8, 52.6, 159.6, 52.9, 159.4, 53.2);
  ctx.lineTo(159.4, 53.2);
  ctx.bezierCurveTo(159.2, 53.5, 159.1, 53.8, 159.0, 54.1);
  ctx.bezierCurveTo(159.0, 54.5, 159.0, 54.8, 159.0, 55.1);
  ctx.bezierCurveTo(159.1, 55.4, 159.2, 55.7, 159.4, 56.0);
  ctx.bezierCurveTo(159.6, 56.3, 159.9, 56.5, 160.2, 56.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(170.9, 53.1);
  ctx.lineTo(174.3, 55.0);
  ctx.lineTo(170.1, 62.3);
  ctx.lineTo(174.9, 65.0);
  ctx.lineTo(173.2, 67.9);
  ctx.lineTo(165.0, 63.2);
  ctx.lineTo(170.9, 53.1);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(178.7, 71.4);
  ctx.bezierCurveTo(178.0, 70.9, 177.3, 70.5, 176.8, 69.9);
  ctx.bezierCurveTo(176.3, 69.4, 175.9, 68.8, 175.7, 68.2);
  ctx.bezierCurveTo(175.5, 67.5, 175.5, 66.8, 175.6, 66.1);
  ctx.bezierCurveTo(175.7, 65.4, 176.0, 64.6, 176.5, 63.7);
  ctx.lineTo(179.7, 58.2);
  ctx.lineTo(183.1, 60.1);
  ctx.lineTo(179.9, 65.7);
  ctx.bezierCurveTo(179.6, 66.3, 179.5, 66.9, 179.6, 67.3);
  ctx.bezierCurveTo(179.7, 67.8, 180.0, 68.1, 180.5, 68.4);
  ctx.bezierCurveTo(180.9, 68.7, 181.4, 68.7, 181.8, 68.6);
  ctx.bezierCurveTo(182.3, 68.5, 182.7, 68.2, 183.0, 67.6);
  ctx.lineTo(186.3, 62.0);
  ctx.lineTo(189.7, 63.9);
  ctx.lineTo(186.5, 69.5);
  ctx.bezierCurveTo(186.0, 70.3, 185.5, 71.0, 184.9, 71.5);
  ctx.bezierCurveTo(184.3, 71.9, 183.7, 72.2, 183.0, 72.4);
  ctx.bezierCurveTo(182.3, 72.5, 181.6, 72.5, 180.9, 72.3);
  ctx.bezierCurveTo(180.2, 72.1, 179.5, 71.8, 178.7, 71.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(191.7, 68.9);
  ctx.lineTo(188.7, 67.2);
  ctx.lineTo(190.4, 64.3);
  ctx.lineTo(199.8, 69.7);
  ctx.lineTo(198.1, 72.6);
  ctx.lineTo(195.1, 70.9);
  ctx.lineTo(190.9, 78.2);
  ctx.lineTo(187.5, 76.2);
  ctx.lineTo(191.7, 68.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(200.6, 70.2);
  ctx.lineTo(203.9, 72.2);
  ctx.lineTo(198.1, 82.3);
  ctx.lineTo(194.7, 80.3);
  ctx.lineTo(200.6, 70.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(204.4, 86.3);
  ctx.bezierCurveTo(203.7, 85.8, 203.0, 85.2, 202.5, 84.6);
  ctx.bezierCurveTo(202.0, 83.9, 201.6, 83.2, 201.4, 82.5);
  ctx.bezierCurveTo(201.2, 81.7, 201.1, 80.9, 201.2, 80.1);
  ctx.bezierCurveTo(201.3, 79.3, 201.5, 78.5, 202.0, 77.8);
  ctx.lineTo(202.0, 77.8);
  ctx.bezierCurveTo(202.4, 77.0, 202.9, 76.4, 203.6, 76.0);
  ctx.bezierCurveTo(204.2, 75.5, 205.0, 75.1, 205.7, 75.0);
  ctx.bezierCurveTo(206.5, 74.8, 207.3, 74.7, 208.1, 74.8);
  ctx.bezierCurveTo(209.0, 75.0, 209.8, 75.2, 210.6, 75.7);
  ctx.bezierCurveTo(211.4, 76.1, 212.0, 76.7, 212.5, 77.4);
  ctx.bezierCurveTo(213.0, 78.0, 213.4, 78.7, 213.6, 79.5);
  ctx.bezierCurveTo(213.9, 80.2, 213.9, 81.0, 213.8, 81.8);
  ctx.bezierCurveTo(213.7, 82.6, 213.5, 83.4, 213.1, 84.1);
  ctx.lineTo(213.0, 84.2);
  ctx.bezierCurveTo(212.6, 84.9, 212.1, 85.5, 211.4, 86.0);
  ctx.bezierCurveTo(210.8, 86.5, 210.1, 86.8, 209.3, 87.0);
  ctx.bezierCurveTo(208.5, 87.2, 207.7, 87.2, 206.9, 87.1);
  ctx.bezierCurveTo(206.0, 87.0, 205.2, 86.7, 204.4, 86.3);
  ctx.closePath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(206.2, 83.3);
  ctx.bezierCurveTo(206.5, 83.5, 206.8, 83.6, 207.2, 83.6);
  ctx.bezierCurveTo(207.5, 83.6, 207.8, 83.6, 208.1, 83.5);
  ctx.bezierCurveTo(208.4, 83.4, 208.7, 83.2, 209.0, 83.0);
  ctx.bezierCurveTo(209.2, 82.8, 209.4, 82.5, 209.6, 82.2);
  ctx.lineTo(209.6, 82.2);
  ctx.bezierCurveTo(209.8, 81.9, 209.9, 81.6, 210.0, 81.2);
  ctx.bezierCurveTo(210.0, 80.9, 210.0, 80.6, 210.0, 80.3);
  ctx.bezierCurveTo(209.9, 79.9, 209.8, 79.7, 209.6, 79.4);
  ctx.bezierCurveTo(209.4, 79.1, 209.1, 78.9, 208.8, 78.7);
  ctx.bezierCurveTo(208.5, 78.5, 208.2, 78.4, 207.8, 78.4);
  ctx.bezierCurveTo(207.5, 78.3, 207.2, 78.4, 206.9, 78.5);
  ctx.bezierCurveTo(206.6, 78.6, 206.3, 78.7, 206.0, 79.0);
  ctx.bezierCurveTo(205.8, 79.2, 205.6, 79.4, 205.4, 79.7);
  ctx.lineTo(205.4, 79.8);
  ctx.bezierCurveTo(205.2, 80.1, 205.1, 80.4, 205.0, 80.7);
  ctx.bezierCurveTo(205.0, 81.0, 205.0, 81.4, 205.1, 81.7);
  ctx.bezierCurveTo(205.1, 82.0, 205.2, 82.3, 205.4, 82.6);
  ctx.bezierCurveTo(205.6, 82.9, 205.9, 83.1, 206.2, 83.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(216.9, 79.6);
  ctx.lineTo(220.1, 81.5);
  ctx.lineTo(221.1, 88.0);
  ctx.lineTo(223.7, 83.5);
  ctx.lineTo(227.0, 85.5);
  ctx.lineTo(221.2, 95.6);
  ctx.lineTo(218.2, 93.9);
  ctx.lineTo(217.1, 87.0);
  ctx.lineTo(214.4, 91.7);
  ctx.lineTo(211.0, 89.8);
  ctx.lineTo(216.9, 79.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(142.3, 67.3);
  ctx.bezierCurveTo(141.5, 66.8, 140.9, 66.3, 140.4, 65.6);
  ctx.bezierCurveTo(139.8, 65.0, 139.5, 64.2, 139.2, 63.5);
  ctx.bezierCurveTo(139.0, 62.7, 139.0, 61.9, 139.0, 61.1);
  ctx.bezierCurveTo(139.1, 60.3, 139.4, 59.6, 139.8, 58.8);
  ctx.lineTo(139.8, 58.8);
  ctx.bezierCurveTo(140.3, 58.1, 140.8, 57.5, 141.5, 57.0);
  ctx.bezierCurveTo(142.1, 56.5, 142.8, 56.2, 143.6, 56.0);
  ctx.bezierCurveTo(144.4, 55.8, 145.2, 55.8, 146.0, 55.9);
  ctx.bezierCurveTo(146.8, 56.0, 147.7, 56.3, 148.4, 56.7);
  ctx.bezierCurveTo(149.2, 57.2, 149.9, 57.7, 150.4, 58.4);
  ctx.bezierCurveTo(150.9, 59.0, 151.3, 59.8, 151.5, 60.5);
  ctx.bezierCurveTo(151.7, 61.3, 151.8, 62.1, 151.7, 62.9);
  ctx.bezierCurveTo(151.6, 63.7, 151.3, 64.4, 150.9, 65.2);
  ctx.lineTo(150.9, 65.2);
  ctx.bezierCurveTo(150.5, 65.9, 149.9, 66.5, 149.3, 67.0);
  ctx.bezierCurveTo(148.6, 67.5, 147.9, 67.8, 147.1, 68.0);
  ctx.bezierCurveTo(146.4, 68.2, 145.6, 68.2, 144.7, 68.1);
  ctx.bezierCurveTo(143.9, 68.0, 143.1, 67.7, 142.3, 67.3);
  ctx.closePath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(144.1, 64.3);
  ctx.bezierCurveTo(144.4, 64.5, 144.7, 64.6, 145.0, 64.6);
  ctx.bezierCurveTo(145.4, 64.6, 145.7, 64.6, 146.0, 64.5);
  ctx.bezierCurveTo(146.3, 64.4, 146.6, 64.2, 146.8, 64.0);
  ctx.bezierCurveTo(147.1, 63.8, 147.3, 63.5, 147.5, 63.2);
  ctx.lineTo(147.5, 63.2);
  ctx.bezierCurveTo(147.7, 62.9, 147.8, 62.6, 147.8, 62.3);
  ctx.bezierCurveTo(147.9, 61.9, 147.9, 61.6, 147.8, 61.3);
  ctx.bezierCurveTo(147.8, 61.0, 147.6, 60.7, 147.4, 60.4);
  ctx.bezierCurveTo(147.3, 60.1, 147.0, 59.9, 146.7, 59.7);
  ctx.bezierCurveTo(146.4, 59.5, 146.0, 59.4, 145.7, 59.4);
  ctx.bezierCurveTo(145.4, 59.4, 145.0, 59.4, 144.7, 59.5);
  ctx.bezierCurveTo(144.4, 59.6, 144.2, 59.8, 143.9, 60.0);
  ctx.bezierCurveTo(143.7, 60.2, 143.4, 60.5, 143.3, 60.7);
  ctx.lineTo(143.3, 60.8);
  ctx.bezierCurveTo(143.1, 61.1, 143.0, 61.4, 142.9, 61.7);
  ctx.bezierCurveTo(142.8, 62.1, 142.8, 62.4, 142.9, 62.7);
  ctx.bezierCurveTo(143.0, 63.0, 143.1, 63.3, 143.3, 63.6);
  ctx.bezierCurveTo(143.5, 63.9, 143.7, 64.1, 144.1, 64.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(154.8, 60.7);
  ctx.lineTo(159.7, 63.5);
  ctx.bezierCurveTo(160.6, 64.0, 161.3, 64.6, 161.8, 65.1);
  ctx.bezierCurveTo(162.2, 65.7, 162.5, 66.2, 162.7, 66.8);
  ctx.bezierCurveTo(162.8, 67.3, 162.9, 67.8, 162.8, 68.2);
  ctx.bezierCurveTo(162.7, 68.7, 162.5, 69.2, 162.2, 69.7);
  ctx.lineTo(162.2, 69.8);
  ctx.bezierCurveTo(161.8, 70.5, 161.2, 71.0, 160.6, 71.3);
  ctx.bezierCurveTo(159.9, 71.6, 159.2, 71.8, 158.4, 71.7);
  ctx.lineTo(158.8, 76.5);
  ctx.lineTo(154.9, 74.3);
  ctx.lineTo(154.7, 70.3);
  ctx.lineTo(154.7, 70.3);
  ctx.lineTo(154.0, 69.9);
  ctx.lineTo(152.3, 72.8);
  ctx.lineTo(148.9, 70.8);
  ctx.lineTo(154.8, 60.7);
  ctx.closePath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(156.8, 68.3);
  ctx.bezierCurveTo(157.2, 68.5, 157.6, 68.6, 157.9, 68.6);
  ctx.bezierCurveTo(158.3, 68.5, 158.5, 68.4, 158.7, 68.1);
  ctx.lineTo(158.7, 68.0);
  ctx.bezierCurveTo(158.9, 67.7, 158.9, 67.4, 158.8, 67.1);
  ctx.bezierCurveTo(158.6, 66.8, 158.4, 66.5, 158.0, 66.3);
  ctx.lineTo(156.5, 65.5);
  ctx.lineTo(155.4, 67.4);
  ctx.lineTo(156.8, 68.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(165.1, 66.7);
  ctx.lineTo(168.5, 68.6);
  ctx.lineTo(162.7, 78.8);
  ctx.lineTo(159.3, 76.8);
  ctx.lineTo(165.1, 66.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(169.7, 69.3);
  ctx.lineTo(178.4, 74.3);
  ctx.lineTo(176.8, 77.1);
  ctx.lineTo(171.4, 74.0);
  ctx.lineTo(170.9, 75.0);
  ctx.lineTo(175.8, 77.9);
  ctx.lineTo(174.4, 80.3);
  ctx.lineTo(169.4, 77.5);
  ctx.lineTo(168.8, 78.6);
  ctx.lineTo(174.2, 81.7);
  ctx.lineTo(172.6, 84.5);
  ctx.lineTo(163.9, 79.4);
  ctx.lineTo(169.7, 69.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(179.4, 74.9);
  ctx.lineTo(182.5, 76.7);
  ctx.lineTo(183.6, 83.3);
  ctx.lineTo(186.1, 78.8);
  ctx.lineTo(189.5, 80.7);
  ctx.lineTo(183.6, 90.9);
  ctx.lineTo(180.6, 89.1);
  ctx.lineTo(179.6, 82.3);
  ctx.lineTo(176.9, 86.9);
  ctx.lineTo(173.5, 85.0);
  ctx.lineTo(179.4, 74.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(191.6, 85.8);
  ctx.lineTo(188.6, 84.0);
  ctx.lineTo(190.3, 81.2);
  ctx.lineTo(199.6, 86.6);
  ctx.lineTo(198.0, 89.4);
  ctx.lineTo(195.0, 87.7);
  ctx.lineTo(190.8, 95.0);
  ctx.lineTo(187.4, 93.0);
  ctx.lineTo(191.6, 85.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(200.4, 87.0);
  ctx.lineTo(209.0, 92.0);
  ctx.lineTo(207.4, 94.8);
  ctx.lineTo(202.1, 91.7);
  ctx.lineTo(201.5, 92.7);
  ctx.lineTo(206.5, 95.6);
  ctx.lineTo(205.1, 98.1);
  ctx.lineTo(200.1, 95.2);
  ctx.lineTo(199.5, 96.3);
  ctx.lineTo(204.9, 99.4);
  ctx.lineTo(203.3, 102.2);
  ctx.lineTo(194.5, 97.2);
  ctx.lineTo(200.4, 87.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Solution Oriented/SO Text/Compound Path
  ctx.beginPath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(210.0, 92.6);
  ctx.lineTo(213.9, 94.8);
  ctx.bezierCurveTo(214.9, 95.4, 215.7, 96.0, 216.4, 96.7);
  ctx.bezierCurveTo(217.0, 97.4, 217.4, 98.1, 217.7, 98.8);
  ctx.bezierCurveTo(217.9, 99.5, 218.0, 100.3, 217.9, 101.0);
  ctx.bezierCurveTo(217.8, 101.8, 217.5, 102.5, 217.1, 103.3);
  ctx.lineTo(217.1, 103.3);
  ctx.bezierCurveTo(216.6, 104.1, 216.1, 104.7, 215.5, 105.2);
  ctx.bezierCurveTo(214.9, 105.6, 214.2, 106.0, 213.4, 106.1);
  ctx.bezierCurveTo(212.6, 106.3, 211.8, 106.3, 210.8, 106.1);
  ctx.bezierCurveTo(209.9, 105.9, 209.0, 105.5, 207.9, 104.9);
  ctx.lineTo(204.2, 102.7);
  ctx.lineTo(210.0, 92.6);
  ctx.closePath();

  // layer1/Solution Oriented/SO Text/Compound Path/Path
  ctx.moveTo(209.8, 102.0);
  ctx.bezierCurveTo(210.6, 102.5, 211.3, 102.7, 212.0, 102.6);
  ctx.bezierCurveTo(212.6, 102.5, 213.2, 102.1, 213.6, 101.4);
  ctx.lineTo(213.6, 101.4);
  ctx.bezierCurveTo(214.0, 100.6, 214.1, 100.0, 213.8, 99.4);
  ctx.bezierCurveTo(213.6, 98.8, 213.1, 98.3, 212.3, 97.8);
  ctx.lineTo(211.7, 97.5);
  ctx.lineTo(209.3, 101.7);
  ctx.lineTo(209.8, 102.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware
  ctx.restore();
  ctx.restore();

  // layer1/Self Aware/SA Outline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(123.1, 197.5);
  ctx.bezierCurveTo(122.7, 197.8, 122.2, 197.9, 121.6, 197.9);
  ctx.bezierCurveTo(121.1, 197.9, 120.6, 197.8, 120.1, 197.5);
  ctx.lineTo(73.3, 170.4);
  ctx.lineTo(3.6, 210.7);
  ctx.lineTo(121.1, 278.6);
  ctx.lineTo(121.4, 278.8);
  ctx.lineTo(239.2, 210.8);
  ctx.lineTo(169.6, 170.6);
  ctx.lineTo(123.1, 197.5);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 200, 69)";
  ctx.fill();
  ctx.addHitRegion({id: 'SA'})

  // layer1/Self Aware/SA Picture

  // layer1/Self Aware/SA Picture/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(90.4, 255.9);
  ctx.bezierCurveTo(90.4, 254.9, 90.4, 254.0, 90.5, 253.1);
  ctx.bezierCurveTo(90.4, 254.0, 90.4, 254.9, 90.4, 255.8);
  ctx.bezierCurveTo(90.4, 255.8, 90.4, 255.8, 90.4, 255.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(152.2, 253.3);
  ctx.bezierCurveTo(152.3, 254.1, 152.3, 255.0, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.8, 152.3, 255.8, 152.3, 255.8);
  ctx.bezierCurveTo(152.3, 255.0, 152.3, 254.1, 152.2, 253.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.2, 234.5);
  ctx.bezierCurveTo(96.2, 234.5, 96.2, 234.5, 96.2, 234.5);
  ctx.bezierCurveTo(93.0, 239.7, 91.0, 245.9, 90.5, 252.7);
  ctx.bezierCurveTo(91.0, 246.0, 93.0, 239.7, 96.2, 234.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.1, 221.7);
  ctx.bezierCurveTo(110.9, 221.3, 111.8, 221.0, 112.7, 220.7);
  ctx.bezierCurveTo(111.8, 221.0, 110.9, 221.3, 110.1, 221.7);
  ctx.bezierCurveTo(110.1, 221.7, 110.1, 221.7, 110.1, 221.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(118.7, 219.4);
  ctx.bezierCurveTo(119.6, 219.3, 120.5, 219.2, 121.3, 219.2);
  ctx.bezierCurveTo(125.6, 219.2, 129.6, 220.2, 133.3, 222.1);
  ctx.bezierCurveTo(133.3, 222.0, 133.3, 222.0, 133.3, 222.0);
  ctx.bezierCurveTo(129.6, 220.2, 125.6, 219.2, 121.3, 219.2);
  ctx.bezierCurveTo(120.5, 219.2, 119.6, 219.3, 118.7, 219.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(147.1, 235.5);
  ctx.bezierCurveTo(149.9, 240.5, 151.8, 246.4, 152.2, 252.8);
  ctx.bezierCurveTo(151.8, 246.4, 149.9, 240.5, 147.1, 235.4);
  ctx.bezierCurveTo(147.1, 235.4, 147.1, 235.5, 147.1, 235.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(90.4, 256.0);
  ctx.bezierCurveTo(90.4, 255.9, 90.4, 255.9, 90.4, 255.9);
  ctx.bezierCurveTo(90.4, 255.9, 90.4, 255.9, 90.4, 255.9);
  ctx.bezierCurveTo(90.4, 255.9, 90.4, 255.9, 90.4, 256.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(52, 110, 123)";
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.9, 152.3, 255.9, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.9, 152.3, 255.9, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.9, 152.3, 255.9, 152.3, 255.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(95.0, 255.8);
  ctx.bezierCurveTo(95.0, 238.2, 106.8, 223.8, 121.3, 223.8);
  ctx.bezierCurveTo(135.9, 223.8, 147.7, 238.2, 147.7, 255.8);
  ctx.bezierCurveTo(147.7, 258.7, 147.4, 261.5, 146.8, 264.1);
  ctx.lineTo(152.0, 261.1);
  ctx.bezierCurveTo(152.1, 260.5, 152.1, 259.8, 152.2, 259.1);
  ctx.bezierCurveTo(152.2, 258.9, 152.2, 258.7, 152.2, 258.4);
  ctx.bezierCurveTo(152.3, 257.6, 152.3, 256.8, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.9, 152.3, 255.9, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 255.0, 152.3, 254.1, 152.2, 253.3);
  ctx.bezierCurveTo(152.2, 253.1, 152.2, 253.0, 152.2, 252.8);
  ctx.bezierCurveTo(151.8, 246.4, 149.9, 240.5, 147.1, 235.5);
  ctx.bezierCurveTo(147.1, 235.5, 147.1, 235.4, 147.1, 235.4);
  ctx.bezierCurveTo(143.7, 229.5, 138.9, 224.8, 133.3, 222.0);
  ctx.bezierCurveTo(133.3, 222.0, 133.3, 222.0, 133.3, 222.1);
  ctx.bezierCurveTo(129.6, 220.2, 125.6, 219.2, 121.3, 219.2);
  ctx.bezierCurveTo(120.5, 219.2, 119.6, 219.3, 118.7, 219.4);
  ctx.bezierCurveTo(118.6, 219.4, 118.5, 219.4, 118.4, 219.4);
  ctx.bezierCurveTo(118.0, 219.4, 117.6, 219.5, 117.2, 219.6);
  ctx.bezierCurveTo(117.1, 219.6, 117.0, 219.6, 116.9, 219.6);
  ctx.bezierCurveTo(116.5, 219.7, 116.1, 219.8, 115.7, 219.8);
  ctx.bezierCurveTo(115.6, 219.9, 115.5, 219.9, 115.5, 219.9);
  ctx.bezierCurveTo(115.0, 220.0, 114.6, 220.1, 114.2, 220.2);
  ctx.bezierCurveTo(114.2, 220.2, 114.1, 220.2, 114.1, 220.2);
  ctx.bezierCurveTo(113.6, 220.4, 113.2, 220.5, 112.8, 220.7);
  ctx.bezierCurveTo(112.7, 220.7, 112.7, 220.7, 112.7, 220.7);
  ctx.bezierCurveTo(111.8, 221.0, 110.9, 221.3, 110.1, 221.7);
  ctx.bezierCurveTo(110.1, 221.7, 110.1, 221.7, 110.1, 221.7);
  ctx.bezierCurveTo(104.5, 224.3, 99.7, 228.8, 96.2, 234.5);
  ctx.bezierCurveTo(96.2, 234.5, 96.2, 234.5, 96.2, 234.5);
  ctx.bezierCurveTo(93.0, 239.7, 91.0, 246.0, 90.5, 252.7);
  ctx.bezierCurveTo(90.5, 252.9, 90.5, 253.0, 90.5, 253.1);
  ctx.bezierCurveTo(90.4, 254.0, 90.4, 254.9, 90.4, 255.9);
  ctx.bezierCurveTo(90.4, 255.9, 90.4, 255.9, 90.4, 256.0);
  ctx.bezierCurveTo(90.4, 256.7, 90.4, 257.5, 90.5, 258.3);
  ctx.bezierCurveTo(90.5, 258.5, 90.5, 258.8, 90.5, 259.0);
  ctx.bezierCurveTo(90.6, 259.7, 90.6, 260.4, 90.7, 261.0);
  ctx.lineTo(95.9, 264.0);
  ctx.bezierCurveTo(95.3, 261.4, 95.0, 258.7, 95.0, 255.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(152.2, 258.4);
  ctx.bezierCurveTo(152.3, 257.6, 152.3, 256.8, 152.3, 255.9);
  ctx.bezierCurveTo(152.3, 256.8, 152.3, 257.6, 152.2, 258.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(90.4, 256.0);
  ctx.bezierCurveTo(90.4, 256.7, 90.4, 257.5, 90.5, 258.3);
  ctx.bezierCurveTo(90.4, 257.5, 90.4, 256.7, 90.4, 256.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Picture/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Picture/Compound Path/Path
  ctx.moveTo(121.3, 223.8);
  ctx.bezierCurveTo(106.8, 223.8, 95.0, 238.2, 95.0, 255.8);
  ctx.bezierCurveTo(95.0, 258.7, 95.3, 261.4, 95.9, 264.0);
  ctx.lineTo(121.1, 278.6);
  ctx.lineTo(121.4, 278.8);
  ctx.lineTo(146.8, 264.1);
  ctx.bezierCurveTo(147.4, 261.5, 147.7, 258.7, 147.7, 255.8);
  ctx.bezierCurveTo(147.7, 238.2, 135.9, 223.8, 121.3, 223.8);
  ctx.closePath();

  // layer1/Self Aware/SA Picture/Compound Path/Path
  ctx.moveTo(103.1, 239.5);
  ctx.lineTo(111.4, 231.2);
  ctx.bezierCurveTo(111.6, 231.0, 111.9, 231.0, 112.1, 231.2);
  ctx.bezierCurveTo(112.4, 231.4, 112.4, 231.8, 112.1, 232.0);
  ctx.lineTo(103.9, 240.2);
  ctx.bezierCurveTo(103.8, 240.3, 103.7, 240.4, 103.5, 240.4);
  ctx.bezierCurveTo(103.4, 240.4, 103.2, 240.3, 103.1, 240.2);
  ctx.bezierCurveTo(102.9, 240.0, 102.9, 239.7, 103.1, 239.5);
  ctx.closePath();

  // layer1/Self Aware/SA Picture/Compound Path/Path
  ctx.moveTo(116.0, 231.7);
  ctx.lineTo(103.6, 244.1);
  ctx.bezierCurveTo(103.5, 244.2, 103.3, 244.2, 103.2, 244.2);
  ctx.bezierCurveTo(103.1, 244.2, 102.9, 244.2, 102.8, 244.1);
  ctx.bezierCurveTo(102.6, 243.9, 102.6, 243.5, 102.8, 243.3);
  ctx.lineTo(115.2, 230.9);
  ctx.bezierCurveTo(115.4, 230.7, 115.8, 230.7, 116.0, 230.9);
  ctx.bezierCurveTo(116.2, 231.1, 116.2, 231.5, 116.0, 231.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(229, 240, 250)";
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(115.2, 230.9);
  ctx.lineTo(102.8, 243.3);
  ctx.bezierCurveTo(102.6, 243.5, 102.6, 243.9, 102.8, 244.1);
  ctx.bezierCurveTo(102.9, 244.2, 103.1, 244.2, 103.2, 244.2);
  ctx.bezierCurveTo(103.3, 244.2, 103.5, 244.2, 103.6, 244.1);
  ctx.lineTo(116.0, 231.7);
  ctx.bezierCurveTo(116.2, 231.5, 116.2, 231.1, 116.0, 230.9);
  ctx.bezierCurveTo(115.8, 230.7, 115.4, 230.7, 115.2, 230.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(153, 153, 153)";
  ctx.fill();

  // layer1/Self Aware/SA Picture/Path
  ctx.beginPath();
  ctx.moveTo(103.5, 240.4);
  ctx.bezierCurveTo(103.7, 240.4, 103.8, 240.3, 103.9, 240.2);
  ctx.lineTo(112.1, 232.0);
  ctx.bezierCurveTo(112.4, 231.8, 112.4, 231.4, 112.1, 231.2);
  ctx.bezierCurveTo(111.9, 231.0, 111.6, 231.0, 111.4, 231.2);
  ctx.lineTo(103.1, 239.5);
  ctx.bezierCurveTo(102.9, 239.7, 102.9, 240.0, 103.1, 240.2);
  ctx.bezierCurveTo(103.2, 240.3, 103.4, 240.4, 103.5, 240.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text
  ctx.restore();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.save();
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(69.5, 214.5);
  ctx.bezierCurveTo(68.3, 214.5, 67.2, 214.4, 66.2, 214.0);
  ctx.bezierCurveTo(65.1, 213.7, 64.3, 213.2, 63.5, 212.5);
  ctx.lineTo(65.6, 210.1);
  ctx.bezierCurveTo(66.2, 210.5, 66.9, 210.9, 67.6, 211.1);
  ctx.bezierCurveTo(68.3, 211.3, 69.0, 211.4, 69.7, 211.4);
  ctx.bezierCurveTo(70.1, 211.4, 70.3, 211.4, 70.5, 211.3);
  ctx.bezierCurveTo(70.6, 211.2, 70.7, 211.1, 70.7, 210.9);
  ctx.lineTo(70.7, 210.9);
  ctx.bezierCurveTo(70.7, 210.7, 70.6, 210.6, 70.4, 210.5);
  ctx.bezierCurveTo(70.1, 210.4, 69.7, 210.2, 69.1, 210.1);
  ctx.bezierCurveTo(68.4, 210.0, 67.8, 209.8, 67.2, 209.7);
  ctx.bezierCurveTo(66.6, 209.5, 66.1, 209.2, 65.6, 209.0);
  ctx.bezierCurveTo(65.2, 208.7, 64.8, 208.3, 64.5, 207.9);
  ctx.bezierCurveTo(64.3, 207.5, 64.1, 207.0, 64.1, 206.4);
  ctx.lineTo(64.1, 206.3);
  ctx.bezierCurveTo(64.1, 205.8, 64.3, 205.2, 64.5, 204.8);
  ctx.bezierCurveTo(64.7, 204.3, 65.0, 203.9, 65.4, 203.5);
  ctx.bezierCurveTo(65.8, 203.2, 66.4, 202.9, 67.0, 202.7);
  ctx.bezierCurveTo(67.6, 202.5, 68.3, 202.4, 69.1, 202.4);
  ctx.bezierCurveTo(70.2, 202.4, 71.2, 202.5, 72.1, 202.8);
  ctx.bezierCurveTo(73.0, 203.0, 73.7, 203.4, 74.4, 204.0);
  ctx.lineTo(72.5, 206.6);
  ctx.bezierCurveTo(71.9, 206.2, 71.3, 205.9, 70.7, 205.7);
  ctx.bezierCurveTo(70.1, 205.6, 69.5, 205.5, 69.0, 205.5);
  ctx.bezierCurveTo(68.7, 205.5, 68.5, 205.5, 68.3, 205.6);
  ctx.bezierCurveTo(68.2, 205.7, 68.1, 205.8, 68.1, 206.0);
  ctx.lineTo(68.1, 206.0);
  ctx.bezierCurveTo(68.1, 206.1, 68.1, 206.1, 68.2, 206.2);
  ctx.bezierCurveTo(68.2, 206.3, 68.3, 206.3, 68.4, 206.4);
  ctx.bezierCurveTo(68.6, 206.5, 68.7, 206.5, 68.9, 206.6);
  ctx.bezierCurveTo(69.1, 206.6, 69.4, 206.7, 69.7, 206.7);
  ctx.bezierCurveTo(70.4, 206.9, 71.1, 207.0, 71.7, 207.2);
  ctx.bezierCurveTo(72.3, 207.4, 72.9, 207.7, 73.3, 208.0);
  ctx.bezierCurveTo(73.7, 208.3, 74.1, 208.6, 74.3, 209.0);
  ctx.bezierCurveTo(74.6, 209.4, 74.7, 209.9, 74.7, 210.5);
  ctx.lineTo(74.7, 210.6);
  ctx.bezierCurveTo(74.7, 211.2, 74.6, 211.7, 74.3, 212.2);
  ctx.bezierCurveTo(74.1, 212.7, 73.7, 213.1, 73.3, 213.5);
  ctx.bezierCurveTo(72.8, 213.8, 72.3, 214.1, 71.6, 214.2);
  ctx.bezierCurveTo(71.0, 214.4, 70.3, 214.5, 69.5, 214.5);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(75.6, 202.6);
  ctx.lineTo(85.6, 202.6);
  ctx.lineTo(85.6, 205.8);
  ctx.lineTo(79.4, 205.8);
  ctx.lineTo(79.4, 207.0);
  ctx.lineTo(85.2, 207.0);
  ctx.lineTo(85.2, 209.8);
  ctx.lineTo(79.4, 209.8);
  ctx.lineTo(79.4, 211.1);
  ctx.lineTo(85.7, 211.1);
  ctx.lineTo(85.7, 214.3);
  ctx.lineTo(75.6, 214.3);
  ctx.lineTo(75.6, 202.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(86.7, 202.6);
  ctx.lineTo(90.6, 202.6);
  ctx.lineTo(90.6, 211.0);
  ctx.lineTo(96.1, 211.0);
  ctx.lineTo(96.1, 214.3);
  ctx.lineTo(86.7, 214.3);
  ctx.lineTo(86.7, 202.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(97.0, 202.6);
  ctx.lineTo(106.8, 202.6);
  ctx.lineTo(106.8, 205.9);
  ctx.lineTo(100.9, 205.9);
  ctx.lineTo(100.9, 207.4);
  ctx.lineTo(106.4, 207.4);
  ctx.lineTo(106.4, 210.5);
  ctx.lineTo(100.9, 210.5);
  ctx.lineTo(100.9, 214.3);
  ctx.lineTo(97.0, 214.3);
  ctx.lineTo(97.0, 202.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(116.0, 202.5);
  ctx.lineTo(119.9, 202.5);
  ctx.lineTo(124.9, 214.3);
  ctx.lineTo(120.6, 214.3);
  ctx.lineTo(120.0, 212.7);
  ctx.lineTo(115.9, 212.7);
  ctx.lineTo(115.3, 214.3);
  ctx.lineTo(111.1, 214.3);
  ctx.lineTo(116.0, 202.5);
  ctx.closePath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(119.0, 210.0);
  ctx.lineTo(117.9, 207.1);
  ctx.lineTo(116.9, 210.0);
  ctx.lineTo(119.0, 210.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(124.7, 202.6);
  ctx.lineTo(128.8, 202.6);
  ctx.lineTo(130.4, 208.2);
  ctx.lineTo(132.3, 202.6);
  ctx.lineTo(135.7, 202.6);
  ctx.lineTo(137.6, 208.2);
  ctx.lineTo(139.2, 202.6);
  ctx.lineTo(143.3, 202.6);
  ctx.lineTo(139.4, 214.4);
  ctx.lineTo(136.0, 214.4);
  ctx.lineTo(134.0, 208.6);
  ctx.lineTo(131.9, 214.4);
  ctx.lineTo(128.5, 214.4);
  ctx.lineTo(124.7, 202.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(148.0, 202.5);
  ctx.lineTo(151.9, 202.5);
  ctx.lineTo(156.8, 214.3);
  ctx.lineTo(152.6, 214.3);
  ctx.lineTo(152.0, 212.7);
  ctx.lineTo(147.9, 212.7);
  ctx.lineTo(147.3, 214.3);
  ctx.lineTo(143.1, 214.3);
  ctx.lineTo(148.0, 202.5);
  ctx.closePath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(151.0, 210.0);
  ctx.lineTo(149.9, 207.1);
  ctx.lineTo(148.9, 210.0);
  ctx.lineTo(151.0, 210.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(157.3, 202.6);
  ctx.lineTo(163.0, 202.6);
  ctx.bezierCurveTo(164.1, 202.6, 165.0, 202.7, 165.6, 203.0);
  ctx.bezierCurveTo(166.3, 203.2, 166.9, 203.5, 167.3, 203.9);
  ctx.bezierCurveTo(167.6, 204.3, 167.9, 204.7, 168.1, 205.1);
  ctx.bezierCurveTo(168.2, 205.6, 168.3, 206.1, 168.3, 206.7);
  ctx.lineTo(168.3, 206.7);
  ctx.bezierCurveTo(168.3, 207.6, 168.1, 208.3, 167.7, 208.9);
  ctx.bezierCurveTo(167.3, 209.5, 166.7, 210.0, 166.0, 210.3);
  ctx.lineTo(168.8, 214.3);
  ctx.lineTo(164.3, 214.3);
  ctx.lineTo(162.1, 211.0);
  ctx.lineTo(162.0, 211.0);
  ctx.lineTo(161.2, 211.0);
  ctx.lineTo(161.2, 214.3);
  ctx.lineTo(157.3, 214.3);
  ctx.lineTo(157.3, 202.6);
  ctx.closePath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(162.9, 208.2);
  ctx.bezierCurveTo(163.4, 208.2, 163.8, 208.1, 164.0, 207.9);
  ctx.bezierCurveTo(164.3, 207.7, 164.4, 207.4, 164.4, 207.0);
  ctx.lineTo(164.4, 207.0);
  ctx.bezierCurveTo(164.4, 206.6, 164.3, 206.3, 164.0, 206.2);
  ctx.bezierCurveTo(163.8, 206.0, 163.4, 205.9, 162.9, 205.9);
  ctx.lineTo(161.2, 205.9);
  ctx.lineTo(161.2, 208.2);
  ctx.lineTo(162.9, 208.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Self Aware/SA Text/Compound Path
  ctx.beginPath();

  // layer1/Self Aware/SA Text/Compound Path/Path
  ctx.moveTo(169.3, 202.6);
  ctx.lineTo(179.3, 202.6);
  ctx.lineTo(179.3, 205.8);
  ctx.lineTo(173.1, 205.8);
  ctx.lineTo(173.1, 207.0);
  ctx.lineTo(178.9, 207.0);
  ctx.lineTo(178.9, 209.8);
  ctx.lineTo(173.1, 209.8);
  ctx.lineTo(173.1, 211.1);
  ctx.lineTo(179.4, 211.1);
  ctx.lineTo(179.4, 214.3);
  ctx.lineTo(169.3, 214.3);
  ctx.lineTo(169.3, 202.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others
  ctx.restore();
  ctx.restore();

  // layer1/Empowering Others/EO Outline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(70.5, 111.5);
  ctx.bezierCurveTo(70.5, 110.4, 71.1, 109.4, 72.0, 108.9);
  ctx.lineTo(118.3, 82.1);
  ctx.lineTo(118.3, 0.1);
  ctx.lineTo(0.0, 68.5);
  ctx.lineTo(0.0, 68.6);
  ctx.lineTo(0.0, 205.8);
  ctx.lineTo(70.5, 165.2);
  ctx.lineTo(70.5, 111.5);
  ctx.closePath();
  ctx.fillStyle = "rgb(241, 91, 66)";
  ctx.fill();
  ctx.addHitRegion({id: 'EO'})

  // layer1/Empowering Others/EO Picture

  // layer1/Empowering Others/EO Picture/Path
  ctx.save();
  ctx.globalAlpha = alpha * 0.75;
  ctx.beginPath();
  ctx.moveTo(21.6, 56.0);
  ctx.bezierCurveTo(21.0, 56.1, 20.5, 56.3, 20.0, 56.4);
  ctx.bezierCurveTo(20.1, 56.5, 20.1, 56.7, 20.2, 56.8);
  ctx.lineTo(21.6, 56.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(244, 208, 62)";
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.50;
  ctx.beginPath();
  ctx.moveTo(20.0, 109.3);
  ctx.bezierCurveTo(21.5, 109.7, 22.9, 110.1, 24.4, 110.4);
  ctx.bezierCurveTo(25.9, 107.9, 27.3, 105.2, 28.6, 102.5);
  ctx.bezierCurveTo(26.5, 103.6, 24.3, 104.6, 22.1, 105.6);
  ctx.bezierCurveTo(21.4, 106.8, 20.7, 108.1, 20.0, 109.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(17.6, 113.2);
  ctx.bezierCurveTo(14.8, 117.6, 11.9, 121.5, 9.0, 124.8);
  ctx.bezierCurveTo(10.0, 126.0, 11.0, 127.0, 11.9, 128.0);
  ctx.bezierCurveTo(15.4, 124.1, 18.8, 119.5, 22.0, 114.4);
  ctx.bezierCurveTo(20.6, 114.0, 19.1, 113.6, 17.6, 113.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(38.8, 48.8);
  ctx.bezierCurveTo(40.3, 48.7, 41.8, 48.7, 43.2, 48.7);
  ctx.bezierCurveTo(43.2, 46.9, 43.1, 45.3, 42.9, 43.7);
  ctx.lineTo(38.8, 46.1);
  ctx.bezierCurveTo(38.8, 47.0, 38.8, 47.9, 38.8, 48.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(34.3, 76.1);
  ctx.bezierCurveTo(35.2, 78.4, 36.0, 80.6, 36.8, 82.9);
  ctx.bezierCurveTo(37.8, 79.9, 38.6, 77.1, 39.4, 74.3);
  ctx.bezierCurveTo(38.1, 73.5, 36.9, 72.7, 35.5, 71.9);
  ctx.bezierCurveTo(35.2, 73.3, 34.8, 74.7, 34.3, 76.1);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(6.1, 128.0);
  ctx.bezierCurveTo(4.0, 130.1, 2.0, 131.9, 0.0, 133.3);
  ctx.lineTo(0.0, 138.4);
  ctx.bezierCurveTo(2.9, 136.6, 6.0, 134.2, 9.0, 131.1);
  ctx.bezierCurveTo(8.0, 130.1, 7.0, 129.1, 6.1, 128.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(40.5, 69.8);
  ctx.bezierCurveTo(41.9, 63.9, 42.7, 58.2, 43.0, 53.1);
  ctx.bezierCurveTo(41.6, 53.1, 40.2, 53.1, 38.7, 53.2);
  ctx.bezierCurveTo(38.4, 57.5, 37.7, 62.3, 36.6, 67.5);
  ctx.bezierCurveTo(37.9, 68.2, 39.2, 69.0, 40.5, 69.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(25.4, 99.3);
  ctx.bezierCurveTo(27.5, 98.2, 29.6, 97.1, 31.7, 96.0);
  ctx.bezierCurveTo(32.1, 94.9, 32.6, 93.9, 33.0, 92.8);
  ctx.bezierCurveTo(33.5, 91.8, 33.9, 90.7, 34.3, 89.6);
  ctx.bezierCurveTo(33.7, 87.4, 33.0, 85.1, 32.2, 82.9);
  ctx.bezierCurveTo(31.2, 85.6, 30.2, 88.3, 29.0, 91.2);
  ctx.bezierCurveTo(27.9, 93.9, 26.6, 96.6, 25.4, 99.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(54.2, 85.8);
  ctx.bezierCurveTo(61.8, 93.4, 65.0, 100.5, 63.0, 105.2);
  ctx.bezierCurveTo(61.1, 110.0, 53.9, 112.7, 43.4, 112.7);
  ctx.bezierCurveTo(43.3, 112.7, 43.1, 112.7, 43.0, 112.7);
  ctx.bezierCurveTo(43.1, 113.8, 43.2, 114.9, 43.2, 116.0);
  ctx.bezierCurveTo(43.2, 116.3, 43.2, 116.7, 43.2, 117.0);
  ctx.bezierCurveTo(43.2, 117.0, 43.3, 117.0, 43.4, 117.0);
  ctx.bezierCurveTo(55.9, 117.0, 64.3, 113.4, 67.1, 106.9);
  ctx.bezierCurveTo(69.8, 100.2, 66.0, 91.5, 57.3, 82.9);
  ctx.bezierCurveTo(57.1, 83.1, 56.8, 83.4, 56.6, 83.6);
  ctx.bezierCurveTo(55.8, 84.3, 55.0, 85.1, 54.2, 85.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(17.6, 58.3);
  ctx.lineTo(12.8, 61.1);
  ctx.bezierCurveTo(14.3, 61.6, 15.8, 62.2, 17.3, 62.9);
  ctx.bezierCurveTo(20.1, 64.0, 22.8, 65.2, 25.4, 66.5);
  ctx.bezierCurveTo(24.3, 64.3, 23.2, 62.2, 22.1, 60.2);
  ctx.bezierCurveTo(21.1, 59.7, 20.0, 59.3, 19.0, 58.8);
  ctx.bezierCurveTo(18.5, 58.6, 18.1, 58.5, 17.6, 58.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(39.4, 74.3);
  ctx.bezierCurveTo(43.8, 77.1, 47.7, 80.0, 50.9, 82.8);
  ctx.bezierCurveTo(51.9, 82.0, 52.7, 81.3, 53.6, 80.5);
  ctx.bezierCurveTo(53.8, 80.3, 53.9, 80.1, 54.1, 79.9);
  ctx.bezierCurveTo(50.3, 76.5, 45.7, 73.1, 40.5, 69.8);
  ctx.bezierCurveTo(40.2, 71.3, 39.8, 72.8, 39.4, 74.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(0.7, 102.9);
  ctx.bezierCurveTo(0.5, 102.8, 0.2, 102.7, 0.0, 102.6);
  ctx.lineTo(0.0, 107.3);
  ctx.bezierCurveTo(0.7, 107.6, 1.5, 107.9, 2.2, 108.2);
  ctx.bezierCurveTo(4.5, 107.5, 6.7, 106.8, 9.0, 106.0);
  ctx.bezierCurveTo(6.2, 105.1, 3.5, 104.0, 0.7, 102.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(15.8, 108.2);
  ctx.bezierCurveTo(13.5, 109.1, 11.3, 109.9, 9.0, 110.6);
  ctx.bezierCurveTo(11.9, 111.6, 14.8, 112.5, 17.6, 113.2);
  ctx.bezierCurveTo(18.4, 112.0, 19.2, 110.7, 20.0, 109.3);
  ctx.bezierCurveTo(18.6, 109.0, 17.2, 108.6, 15.8, 108.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(22.0, 114.4);
  ctx.bezierCurveTo(27.9, 115.7, 33.6, 116.6, 38.8, 116.9);
  ctx.bezierCurveTo(38.8, 116.6, 38.8, 116.4, 38.8, 116.1);
  ctx.bezierCurveTo(38.8, 114.9, 38.7, 113.7, 38.6, 112.5);
  ctx.bezierCurveTo(34.2, 112.2, 29.4, 111.5, 24.4, 110.4);
  ctx.bezierCurveTo(23.6, 111.7, 22.8, 113.1, 22.0, 114.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(35.5, 71.9);
  ctx.bezierCurveTo(35.9, 70.4, 36.3, 68.9, 36.6, 67.5);
  ctx.bezierCurveTo(34.0, 66.0, 31.4, 64.6, 28.6, 63.2);
  ctx.bezierCurveTo(29.7, 65.3, 30.7, 67.5, 31.7, 69.7);
  ctx.bezierCurveTo(33.0, 70.4, 34.3, 71.1, 35.5, 71.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.75;
  ctx.beginPath();
  ctx.moveTo(39.4, 74.3);
  ctx.bezierCurveTo(39.8, 72.8, 40.2, 71.3, 40.5, 69.8);
  ctx.bezierCurveTo(39.2, 69.0, 37.9, 68.2, 36.6, 67.5);
  ctx.bezierCurveTo(36.3, 68.9, 35.9, 70.4, 35.5, 71.9);
  ctx.bezierCurveTo(36.9, 72.7, 38.1, 73.5, 39.4, 74.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(17.6, 113.2);
  ctx.bezierCurveTo(19.1, 113.6, 20.6, 114.0, 22.0, 114.4);
  ctx.bezierCurveTo(22.8, 113.1, 23.6, 111.7, 24.4, 110.4);
  ctx.bezierCurveTo(22.9, 110.1, 21.5, 109.7, 20.0, 109.3);
  ctx.bezierCurveTo(19.2, 110.7, 18.4, 112.0, 17.6, 113.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.50;
  ctx.beginPath();
  ctx.moveTo(32.2, 82.9);
  ctx.bezierCurveTo(33.0, 80.6, 33.7, 78.3, 34.3, 76.1);
  ctx.bezierCurveTo(33.9, 75.1, 33.5, 74.0, 33.0, 72.9);
  ctx.bezierCurveTo(32.6, 71.8, 32.1, 70.8, 31.7, 69.7);
  ctx.bezierCurveTo(29.7, 68.6, 27.6, 67.5, 25.4, 66.5);
  ctx.bezierCurveTo(26.6, 69.1, 27.9, 71.8, 29.0, 74.6);
  ctx.bezierCurveTo(30.2, 77.3, 31.2, 80.1, 32.2, 82.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(20.2, 56.8);
  ctx.bezierCurveTo(20.9, 57.9, 21.5, 59.0, 22.1, 60.2);
  ctx.bezierCurveTo(24.4, 61.1, 26.5, 62.2, 28.6, 63.2);
  ctx.bezierCurveTo(27.3, 60.5, 25.9, 57.9, 24.4, 55.3);
  ctx.bezierCurveTo(23.5, 55.5, 22.5, 55.8, 21.6, 56.0);
  ctx.lineTo(20.2, 56.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(36.5, 98.3);
  ctx.bezierCurveTo(37.6, 103.2, 38.3, 108.0, 38.6, 112.5);
  ctx.bezierCurveTo(40.2, 112.6, 41.6, 112.7, 43.0, 112.7);
  ctx.bezierCurveTo(42.7, 107.4, 41.8, 101.8, 40.5, 95.9);
  ctx.bezierCurveTo(39.2, 96.7, 37.9, 97.5, 36.5, 98.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(35.5, 93.8);
  ctx.bezierCurveTo(36.8, 93.1, 38.1, 92.3, 39.4, 91.4);
  ctx.bezierCurveTo(38.6, 88.6, 37.8, 85.8, 36.8, 82.9);
  ctx.bezierCurveTo(36.0, 85.1, 35.2, 87.4, 34.3, 89.6);
  ctx.bezierCurveTo(34.7, 91.0, 35.1, 92.4, 35.5, 93.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(0.4, 113.2);
  ctx.bezierCurveTo(0.3, 113.3, 0.1, 113.3, 0.0, 113.4);
  ctx.lineTo(0.0, 120.3);
  ctx.bezierCurveTo(2.0, 123.1, 4.0, 125.7, 6.1, 128.0);
  ctx.bezierCurveTo(7.0, 127.0, 8.0, 126.0, 9.0, 124.8);
  ctx.bezierCurveTo(6.1, 121.5, 3.2, 117.6, 0.4, 113.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(31.4, 136.9);
  ctx.bezierCurveTo(30.4, 137.3, 29.4, 137.5, 28.3, 137.5);
  ctx.bezierCurveTo(23.5, 137.5, 17.8, 134.0, 11.9, 128.0);
  ctx.bezierCurveTo(11.0, 129.1, 10.0, 130.1, 9.0, 131.1);
  ctx.bezierCurveTo(15.7, 137.9, 22.5, 141.8, 28.3, 141.8);
  ctx.bezierCurveTo(30.0, 141.8, 31.6, 141.5, 33.0, 140.9);
  ctx.bezierCurveTo(39.6, 138.2, 43.2, 129.7, 43.2, 117.0);
  ctx.bezierCurveTo(41.8, 117.0, 40.3, 117.0, 38.8, 116.9);
  ctx.bezierCurveTo(38.9, 127.6, 36.2, 134.9, 31.4, 136.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.75;
  ctx.beginPath();
  ctx.moveTo(11.9, 128.0);
  ctx.bezierCurveTo(11.0, 127.0, 10.0, 126.0, 9.0, 124.8);
  ctx.bezierCurveTo(8.0, 126.0, 7.0, 127.0, 6.1, 128.0);
  ctx.bezierCurveTo(7.0, 129.1, 8.0, 130.1, 9.0, 131.1);
  ctx.bezierCurveTo(10.0, 130.1, 11.0, 129.1, 11.9, 128.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(32.2, 82.9);
  ctx.bezierCurveTo(33.0, 85.1, 33.7, 87.4, 34.3, 89.6);
  ctx.bezierCurveTo(35.2, 87.4, 36.0, 85.1, 36.8, 82.9);
  ctx.bezierCurveTo(36.0, 80.6, 35.2, 78.4, 34.3, 76.1);
  ctx.bezierCurveTo(33.7, 78.3, 33.0, 80.6, 32.2, 82.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(43.0, 112.7);
  ctx.bezierCurveTo(41.6, 112.7, 40.2, 112.6, 38.6, 112.5);
  ctx.bezierCurveTo(38.7, 113.7, 38.8, 114.9, 38.8, 116.1);
  ctx.bezierCurveTo(38.8, 116.4, 38.8, 116.6, 38.8, 116.9);
  ctx.bezierCurveTo(40.3, 117.0, 41.8, 117.0, 43.2, 117.0);
  ctx.bezierCurveTo(43.2, 116.7, 43.2, 116.3, 43.2, 116.0);
  ctx.bezierCurveTo(43.2, 114.9, 43.1, 113.8, 43.0, 112.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(25.4, 66.5);
  ctx.bezierCurveTo(27.6, 67.5, 29.7, 68.6, 31.7, 69.7);
  ctx.bezierCurveTo(30.7, 67.5, 29.7, 65.3, 28.6, 63.2);
  ctx.bezierCurveTo(26.5, 62.2, 24.4, 61.1, 22.1, 60.2);
  ctx.bezierCurveTo(23.2, 62.2, 24.3, 64.3, 25.4, 66.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.50;
  ctx.beginPath();
  ctx.moveTo(40.5, 95.9);
  ctx.bezierCurveTo(45.6, 92.7, 50.2, 89.3, 54.2, 85.8);
  ctx.bezierCurveTo(53.2, 84.8, 52.1, 83.8, 50.9, 82.8);
  ctx.bezierCurveTo(47.6, 85.8, 43.7, 88.7, 39.4, 91.4);
  ctx.bezierCurveTo(39.8, 92.9, 40.2, 94.4, 40.5, 95.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(24.0, 54.6);
  ctx.bezierCurveTo(24.1, 54.9, 24.3, 55.1, 24.4, 55.3);
  ctx.bezierCurveTo(29.4, 54.2, 34.2, 53.5, 38.7, 53.2);
  ctx.bezierCurveTo(38.8, 51.7, 38.8, 50.2, 38.8, 48.8);
  ctx.bezierCurveTo(37.0, 48.9, 35.0, 49.1, 33.0, 49.4);
  ctx.lineTo(24.0, 54.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(9.0, 106.0);
  ctx.bezierCurveTo(11.3, 106.8, 13.5, 107.5, 15.8, 108.2);
  ctx.bezierCurveTo(16.8, 107.8, 17.9, 107.3, 19.0, 106.9);
  ctx.bezierCurveTo(20.0, 106.5, 21.1, 106.0, 22.1, 105.6);
  ctx.bezierCurveTo(23.2, 103.5, 24.3, 101.4, 25.4, 99.3);
  ctx.bezierCurveTo(22.8, 100.5, 20.1, 101.7, 17.3, 102.9);
  ctx.bezierCurveTo(14.5, 104.0, 11.8, 105.1, 9.0, 106.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(31.7, 96.0);
  ctx.bezierCurveTo(30.7, 98.2, 29.7, 100.4, 28.6, 102.5);
  ctx.bezierCurveTo(31.4, 101.1, 34.0, 99.7, 36.5, 98.3);
  ctx.bezierCurveTo(36.2, 96.8, 35.9, 95.3, 35.5, 93.8);
  ctx.bezierCurveTo(34.3, 94.6, 33.0, 95.3, 31.7, 96.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(43.0, 53.1);
  ctx.bezierCurveTo(43.1, 53.1, 43.3, 53.0, 43.4, 53.0);
  ctx.bezierCurveTo(53.9, 53.0, 61.1, 55.8, 63.0, 60.5);
  ctx.bezierCurveTo(65.0, 65.3, 61.8, 72.3, 54.1, 79.9);
  ctx.bezierCurveTo(55.3, 80.9, 56.3, 81.9, 57.3, 82.9);
  ctx.bezierCurveTo(66.3, 73.9, 69.8, 65.4, 67.1, 58.8);
  ctx.bezierCurveTo(64.3, 52.3, 55.9, 48.7, 43.4, 48.7);
  ctx.bezierCurveTo(43.3, 48.7, 43.2, 48.7, 43.2, 48.7);
  ctx.bezierCurveTo(43.2, 50.1, 43.1, 51.6, 43.0, 53.1);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(2.2, 108.2);
  ctx.bezierCurveTo(1.5, 108.4, 0.7, 108.6, 0.0, 108.8);
  ctx.lineTo(0.0, 112.6);
  ctx.bezierCurveTo(0.1, 112.8, 0.3, 113.0, 0.4, 113.2);
  ctx.bezierCurveTo(3.3, 112.5, 6.1, 111.6, 9.0, 110.6);
  ctx.bezierCurveTo(6.7, 109.9, 4.5, 109.1, 2.2, 108.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 0.75;
  ctx.beginPath();
  ctx.moveTo(25.4, 99.3);
  ctx.bezierCurveTo(24.3, 101.4, 23.2, 103.5, 22.1, 105.6);
  ctx.bezierCurveTo(24.3, 104.6, 26.5, 103.6, 28.6, 102.5);
  ctx.bezierCurveTo(29.7, 100.4, 30.7, 98.2, 31.7, 96.0);
  ctx.bezierCurveTo(29.6, 97.1, 27.5, 98.2, 25.4, 99.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(38.7, 53.2);
  ctx.bezierCurveTo(40.2, 53.1, 41.6, 53.1, 43.0, 53.1);
  ctx.bezierCurveTo(43.1, 51.6, 43.2, 50.1, 43.2, 48.7);
  ctx.bezierCurveTo(41.8, 48.7, 40.3, 48.7, 38.8, 48.8);
  ctx.bezierCurveTo(38.8, 50.2, 38.8, 51.7, 38.7, 53.2);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(9.0, 106.0);
  ctx.bezierCurveTo(6.7, 106.8, 4.5, 107.5, 2.2, 108.2);
  ctx.bezierCurveTo(4.5, 109.1, 6.7, 109.9, 9.0, 110.6);
  ctx.bezierCurveTo(11.3, 109.9, 13.5, 109.1, 15.8, 108.2);
  ctx.bezierCurveTo(13.5, 107.5, 11.3, 106.8, 9.0, 106.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(54.1, 79.9);
  ctx.bezierCurveTo(53.9, 80.1, 53.8, 80.3, 53.6, 80.5);
  ctx.bezierCurveTo(52.7, 81.3, 51.9, 82.0, 50.9, 82.8);
  ctx.bezierCurveTo(52.1, 83.8, 53.2, 84.8, 54.2, 85.8);
  ctx.bezierCurveTo(55.0, 85.1, 55.8, 84.3, 56.6, 83.6);
  ctx.bezierCurveTo(56.8, 83.4, 57.1, 83.1, 57.3, 82.9);
  ctx.bezierCurveTo(56.3, 81.9, 55.3, 80.9, 54.1, 79.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(0.0, 113.4);
  ctx.bezierCurveTo(0.1, 113.3, 0.3, 113.3, 0.4, 113.2);
  ctx.bezierCurveTo(0.3, 113.0, 0.1, 112.8, 0.0, 112.6);
  ctx.lineTo(0.0, 113.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(24.4, 55.3);
  ctx.bezierCurveTo(24.3, 55.1, 24.1, 54.9, 24.0, 54.6);
  ctx.lineTo(21.6, 56.0);
  ctx.bezierCurveTo(22.5, 55.8, 23.5, 55.5, 24.4, 55.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(36.5, 98.3);
  ctx.bezierCurveTo(37.9, 97.5, 39.2, 96.7, 40.5, 95.9);
  ctx.bezierCurveTo(40.2, 94.4, 39.8, 92.9, 39.4, 91.4);
  ctx.bezierCurveTo(38.1, 92.3, 36.8, 93.1, 35.5, 93.8);
  ctx.bezierCurveTo(35.9, 95.3, 36.2, 96.8, 36.5, 98.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.globalAlpha = alpha * 1.00;
  ctx.beginPath();
  ctx.moveTo(9.0, 66.3);
  ctx.bezierCurveTo(8.1, 66.3, 7.4, 67.1, 7.4, 68.0);
  ctx.lineTo(7.4, 78.3);
  ctx.bezierCurveTo(7.4, 79.2, 8.1, 79.9, 9.0, 79.9);
  ctx.bezierCurveTo(9.9, 79.9, 10.6, 79.2, 10.6, 78.3);
  ctx.lineTo(10.6, 68.0);
  ctx.bezierCurveTo(10.6, 67.1, 9.9, 66.3, 9.0, 66.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(4.4, 74.3);
  ctx.bezierCurveTo(5.2, 73.8, 5.5, 72.8, 5.1, 72.1);
  ctx.bezierCurveTo(4.6, 71.3, 3.7, 71.0, 2.9, 71.4);
  ctx.bezierCurveTo(1.8, 71.9, 0.8, 72.6, 0.0, 73.5);
  ctx.lineTo(0.0, 79.1);
  ctx.bezierCurveTo(0.8, 77.1, 2.4, 75.4, 4.4, 74.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Picture/Path
  ctx.beginPath();
  ctx.moveTo(22.0, 82.9);
  ctx.bezierCurveTo(22.0, 78.1, 19.4, 73.7, 15.1, 71.4);
  ctx.bezierCurveTo(14.3, 71.0, 13.4, 71.3, 12.9, 72.1);
  ctx.bezierCurveTo(12.5, 72.8, 12.8, 73.8, 13.6, 74.3);
  ctx.bezierCurveTo(16.8, 76.0, 18.7, 79.3, 18.7, 82.9);
  ctx.bezierCurveTo(18.7, 88.2, 14.4, 92.6, 9.0, 92.6);
  ctx.bezierCurveTo(4.9, 92.6, 1.5, 90.1, 0.0, 86.6);
  ctx.lineTo(0.0, 92.2);
  ctx.bezierCurveTo(2.3, 94.5, 5.5, 95.9, 9.0, 95.9);
  ctx.bezierCurveTo(16.2, 95.9, 22.0, 90.0, 22.0, 82.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text
  ctx.restore();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.save();
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(5.6, 94.6);
  ctx.lineTo(14.3, 89.6);
  ctx.lineTo(15.9, 92.4);
  ctx.lineTo(10.6, 95.5);
  ctx.lineTo(11.2, 96.5);
  ctx.lineTo(16.1, 93.7);
  ctx.lineTo(17.5, 96.1);
  ctx.lineTo(12.6, 99.0);
  ctx.lineTo(13.2, 100.1);
  ctx.lineTo(18.6, 97.0);
  ctx.lineTo(20.2, 99.7);
  ctx.lineTo(11.5, 104.8);
  ctx.lineTo(5.6, 94.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(15.3, 89.1);
  ctx.lineTo(18.8, 87.0);
  ctx.lineTo(23.0, 89.3);
  ctx.lineTo(23.2, 84.5);
  ctx.lineTo(26.7, 82.5);
  ctx.lineTo(32.5, 92.6);
  ctx.lineTo(29.2, 94.6);
  ctx.lineTo(26.3, 89.5);
  ctx.lineTo(26.0, 94.5);
  ctx.lineTo(26.0, 94.5);
  ctx.lineTo(21.5, 92.3);
  ctx.lineTo(24.4, 97.3);
  ctx.lineTo(21.1, 99.2);
  ctx.lineTo(15.3, 89.1);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(27.9, 81.8);
  ctx.lineTo(32.4, 79.2);
  ctx.bezierCurveTo(33.1, 78.8, 33.8, 78.5, 34.4, 78.3);
  ctx.bezierCurveTo(35.0, 78.2, 35.6, 78.1, 36.2, 78.2);
  ctx.bezierCurveTo(36.8, 78.3, 37.3, 78.5, 37.8, 78.8);
  ctx.bezierCurveTo(38.3, 79.1, 38.7, 79.6, 39.0, 80.2);
  ctx.lineTo(39.0, 80.2);
  ctx.bezierCurveTo(39.4, 80.8, 39.6, 81.4, 39.6, 82.0);
  ctx.bezierCurveTo(39.7, 82.6, 39.6, 83.2, 39.4, 83.7);
  ctx.bezierCurveTo(39.2, 84.3, 38.8, 84.8, 38.3, 85.3);
  ctx.bezierCurveTo(37.9, 85.8, 37.3, 86.2, 36.6, 86.6);
  ctx.lineTo(35.5, 87.2);
  ctx.lineTo(37.1, 90.0);
  ctx.lineTo(33.7, 92.0);
  ctx.lineTo(27.9, 81.8);
  ctx.closePath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(35.0, 84.3);
  ctx.bezierCurveTo(35.5, 84.0, 35.8, 83.8, 35.9, 83.4);
  ctx.bezierCurveTo(36.1, 83.1, 36.0, 82.7, 35.8, 82.3);
  ctx.lineTo(35.8, 82.3);
  ctx.bezierCurveTo(35.6, 82.0, 35.3, 81.7, 35.0, 81.7);
  ctx.bezierCurveTo(34.6, 81.7, 34.2, 81.8, 33.7, 82.0);
  ctx.lineTo(32.8, 82.6);
  ctx.lineTo(34.1, 84.8);
  ctx.lineTo(35.0, 84.3);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(48.9, 83.4);
  ctx.bezierCurveTo(48.2, 83.9, 47.4, 84.2, 46.5, 84.3);
  ctx.bezierCurveTo(45.7, 84.4, 44.9, 84.4, 44.1, 84.2);
  ctx.bezierCurveTo(43.4, 84.0, 42.6, 83.7, 42.0, 83.2);
  ctx.bezierCurveTo(41.3, 82.7, 40.8, 82.1, 40.4, 81.4);
  ctx.lineTo(40.4, 81.3);
  ctx.bezierCurveTo(39.9, 80.6, 39.7, 79.8, 39.6, 79.0);
  ctx.bezierCurveTo(39.5, 78.2, 39.6, 77.4, 39.8, 76.7);
  ctx.bezierCurveTo(40.0, 75.9, 40.4, 75.2, 40.9, 74.5);
  ctx.bezierCurveTo(41.4, 73.9, 42.1, 73.3, 42.9, 72.9);
  ctx.bezierCurveTo(43.6, 72.4, 44.5, 72.1, 45.3, 72.0);
  ctx.bezierCurveTo(46.1, 71.9, 46.9, 71.9, 47.7, 72.1);
  ctx.bezierCurveTo(48.4, 72.3, 49.2, 72.6, 49.8, 73.1);
  ctx.bezierCurveTo(50.5, 73.6, 51.0, 74.2, 51.4, 74.9);
  ctx.lineTo(51.4, 75.0);
  ctx.bezierCurveTo(51.9, 75.7, 52.1, 76.5, 52.2, 77.3);
  ctx.bezierCurveTo(52.3, 78.1, 52.2, 78.9, 52.0, 79.6);
  ctx.bezierCurveTo(51.8, 80.4, 51.4, 81.1, 50.9, 81.8);
  ctx.bezierCurveTo(50.4, 82.4, 49.7, 83.0, 48.9, 83.4);
  ctx.closePath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(47.2, 80.4);
  ctx.bezierCurveTo(47.6, 80.2, 47.8, 80.0, 48.0, 79.7);
  ctx.bezierCurveTo(48.2, 79.5, 48.3, 79.2, 48.4, 78.9);
  ctx.bezierCurveTo(48.4, 78.5, 48.4, 78.2, 48.4, 77.9);
  ctx.bezierCurveTo(48.3, 77.6, 48.2, 77.3, 48.0, 77.0);
  ctx.lineTo(48.0, 76.9);
  ctx.bezierCurveTo(47.8, 76.6, 47.6, 76.4, 47.4, 76.2);
  ctx.bezierCurveTo(47.1, 75.9, 46.8, 75.8, 46.5, 75.7);
  ctx.bezierCurveTo(46.2, 75.6, 45.9, 75.5, 45.6, 75.6);
  ctx.bezierCurveTo(45.2, 75.6, 44.9, 75.7, 44.6, 75.9);
  ctx.bezierCurveTo(44.2, 76.1, 44.0, 76.3, 43.8, 76.6);
  ctx.bezierCurveTo(43.6, 76.8, 43.5, 77.1, 43.4, 77.4);
  ctx.bezierCurveTo(43.4, 77.8, 43.4, 78.1, 43.4, 78.4);
  ctx.bezierCurveTo(43.5, 78.7, 43.6, 79.0, 43.8, 79.3);
  ctx.lineTo(43.8, 79.4);
  ctx.bezierCurveTo(44.0, 79.7, 44.2, 79.9, 44.4, 80.1);
  ctx.bezierCurveTo(44.7, 80.4, 45.0, 80.5, 45.3, 80.6);
  ctx.bezierCurveTo(45.6, 80.7, 45.9, 80.8, 46.2, 80.8);
  ctx.bezierCurveTo(46.6, 80.7, 46.9, 80.6, 47.2, 80.4);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(48.9, 69.7);
  ctx.lineTo(52.4, 67.6);
  ctx.lineTo(56.7, 71.7);
  ctx.lineTo(55.5, 65.8);
  ctx.lineTo(58.4, 64.1);
  ctx.lineTo(62.9, 68.1);
  ctx.lineTo(61.5, 62.4);
  ctx.lineTo(65.0, 60.4);
  ctx.lineTo(67.5, 72.5);
  ctx.lineTo(64.6, 74.2);
  ctx.lineTo(59.9, 70.2);
  ctx.lineTo(61.0, 76.3);
  ctx.lineTo(58.1, 78.0);
  ctx.lineTo(48.9, 69.7);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(65.5, 60.0);
  ctx.lineTo(74.2, 55.1);
  ctx.lineTo(75.8, 57.8);
  ctx.lineTo(70.5, 60.9);
  ctx.lineTo(71.1, 61.9);
  ctx.lineTo(76.0, 59.1);
  ctx.lineTo(77.5, 61.5);
  ctx.lineTo(72.5, 64.4);
  ctx.lineTo(73.1, 65.5);
  ctx.lineTo(78.5, 62.4);
  ctx.lineTo(80.1, 65.2);
  ctx.lineTo(71.4, 70.2);
  ctx.lineTo(65.5, 60.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(75.2, 54.5);
  ctx.lineTo(80.1, 51.6);
  ctx.bezierCurveTo(81.0, 51.1, 81.9, 50.8, 82.6, 50.6);
  ctx.bezierCurveTo(83.3, 50.5, 83.9, 50.5, 84.5, 50.7);
  ctx.bezierCurveTo(84.9, 50.8, 85.4, 51.0, 85.8, 51.3);
  ctx.bezierCurveTo(86.1, 51.6, 86.5, 52.0, 86.8, 52.5);
  ctx.lineTo(86.8, 52.6);
  ctx.bezierCurveTo(87.2, 53.3, 87.4, 54.1, 87.3, 54.8);
  ctx.bezierCurveTo(87.3, 55.5, 87.0, 56.2, 86.6, 56.8);
  ctx.lineTo(90.9, 58.9);
  ctx.lineTo(87.1, 61.1);
  ctx.lineTo(83.5, 59.4);
  ctx.lineTo(83.5, 59.4);
  ctx.lineTo(82.8, 59.8);
  ctx.lineTo(84.4, 62.7);
  ctx.lineTo(81.0, 64.6);
  ctx.lineTo(75.2, 54.5);
  ctx.closePath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(82.8, 56.5);
  ctx.bezierCurveTo(83.2, 56.3, 83.5, 56.0, 83.6, 55.7);
  ctx.bezierCurveTo(83.8, 55.4, 83.7, 55.1, 83.6, 54.8);
  ctx.lineTo(83.5, 54.7);
  ctx.bezierCurveTo(83.4, 54.4, 83.1, 54.2, 82.8, 54.2);
  ctx.bezierCurveTo(82.4, 54.2, 82.1, 54.3, 81.7, 54.5);
  ctx.lineTo(80.2, 55.4);
  ctx.lineTo(81.4, 57.4);
  ctx.lineTo(82.8, 56.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(85.6, 48.5);
  ctx.lineTo(89.0, 46.5);
  ctx.lineTo(94.8, 56.7);
  ctx.lineTo(91.4, 58.6);
  ctx.lineTo(85.6, 48.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(90.2, 45.8);
  ctx.lineTo(93.3, 44.0);
  ctx.lineTo(99.5, 46.4);
  ctx.lineTo(96.9, 41.9);
  ctx.lineTo(100.3, 40.0);
  ctx.lineTo(106.1, 50.1);
  ctx.lineTo(103.1, 51.9);
  ctx.lineTo(96.7, 49.4);
  ctx.lineTo(99.4, 54.0);
  ctx.lineTo(96.0, 56.0);
  ctx.lineTo(90.2, 45.8);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(112.9, 46.5);
  ctx.bezierCurveTo(112.1, 47.0, 111.3, 47.3, 110.5, 47.4);
  ctx.bezierCurveTo(109.6, 47.6, 108.8, 47.6, 108.0, 47.4);
  ctx.bezierCurveTo(107.2, 47.2, 106.5, 46.9, 105.8, 46.4);
  ctx.bezierCurveTo(105.2, 46.0, 104.6, 45.3, 104.2, 44.6);
  ctx.lineTo(104.1, 44.5);
  ctx.bezierCurveTo(103.7, 43.8, 103.4, 43.0, 103.4, 42.2);
  ctx.bezierCurveTo(103.3, 41.4, 103.3, 40.6, 103.6, 39.8);
  ctx.bezierCurveTo(103.8, 39.1, 104.2, 38.4, 104.7, 37.7);
  ctx.bezierCurveTo(105.2, 37.0, 105.9, 36.5, 106.7, 36.0);
  ctx.bezierCurveTo(107.6, 35.5, 108.4, 35.2, 109.3, 35.0);
  ctx.bezierCurveTo(110.1, 34.9, 111.0, 34.9, 111.8, 35.1);
  ctx.lineTo(111.2, 38.5);
  ctx.bezierCurveTo(110.7, 38.4, 110.3, 38.4, 109.8, 38.4);
  ctx.bezierCurveTo(109.4, 38.5, 108.9, 38.6, 108.5, 38.9);
  ctx.bezierCurveTo(108.2, 39.1, 107.9, 39.3, 107.7, 39.6);
  ctx.bezierCurveTo(107.5, 39.9, 107.3, 40.2, 107.2, 40.5);
  ctx.bezierCurveTo(107.2, 40.8, 107.2, 41.2, 107.2, 41.5);
  ctx.bezierCurveTo(107.3, 41.9, 107.4, 42.2, 107.6, 42.6);
  ctx.lineTo(107.6, 42.6);
  ctx.bezierCurveTo(107.8, 43.0, 108.1, 43.3, 108.4, 43.5);
  ctx.bezierCurveTo(108.7, 43.7, 109.0, 43.9, 109.3, 44.0);
  ctx.bezierCurveTo(109.6, 44.1, 110.0, 44.1, 110.3, 44.0);
  ctx.bezierCurveTo(110.7, 44.0, 111.1, 43.9, 111.4, 43.6);
  ctx.bezierCurveTo(111.7, 43.5, 111.9, 43.3, 112.1, 43.2);
  ctx.bezierCurveTo(112.2, 43.0, 112.4, 42.9, 112.5, 42.7);
  ctx.lineTo(111.9, 41.7);
  ctx.lineTo(110.1, 42.7);
  ctx.lineTo(108.9, 40.6);
  ctx.lineTo(113.8, 37.7);
  ctx.lineTo(116.5, 42.4);
  ctx.bezierCurveTo(116.2, 43.2, 115.8, 43.9, 115.2, 44.7);
  ctx.bezierCurveTo(114.6, 45.4, 113.8, 46.0, 112.9, 46.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(24.2, 114.6);
  ctx.bezierCurveTo(23.4, 115.1, 22.6, 115.4, 21.8, 115.5);
  ctx.bezierCurveTo(21.0, 115.6, 20.2, 115.6, 19.4, 115.4);
  ctx.bezierCurveTo(18.6, 115.2, 17.9, 114.9, 17.3, 114.4);
  ctx.bezierCurveTo(16.6, 113.9, 16.1, 113.3, 15.7, 112.5);
  ctx.lineTo(15.7, 112.5);
  ctx.bezierCurveTo(15.2, 111.8, 15.0, 111.0, 14.9, 110.2);
  ctx.bezierCurveTo(14.8, 109.4, 14.9, 108.6, 15.1, 107.9);
  ctx.bezierCurveTo(15.3, 107.1, 15.7, 106.4, 16.2, 105.7);
  ctx.bezierCurveTo(16.7, 105.0, 17.4, 104.5, 18.2, 104.0);
  ctx.bezierCurveTo(18.9, 103.6, 19.7, 103.3, 20.6, 103.2);
  ctx.bezierCurveTo(21.4, 103.1, 22.2, 103.1, 23.0, 103.3);
  ctx.bezierCurveTo(23.7, 103.5, 24.4, 103.8, 25.1, 104.3);
  ctx.bezierCurveTo(25.7, 104.8, 26.3, 105.4, 26.7, 106.1);
  ctx.lineTo(26.7, 106.1);
  ctx.bezierCurveTo(27.1, 106.9, 27.4, 107.6, 27.5, 108.4);
  ctx.bezierCurveTo(27.6, 109.2, 27.5, 110.0, 27.3, 110.8);
  ctx.bezierCurveTo(27.1, 111.6, 26.7, 112.3, 26.2, 112.9);
  ctx.bezierCurveTo(25.7, 113.6, 25.0, 114.2, 24.2, 114.6);
  ctx.closePath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(22.5, 111.6);
  ctx.bezierCurveTo(22.8, 111.4, 23.1, 111.2, 23.3, 110.9);
  ctx.bezierCurveTo(23.5, 110.6, 23.6, 110.3, 23.7, 110.0);
  ctx.bezierCurveTo(23.7, 109.7, 23.7, 109.4, 23.7, 109.1);
  ctx.bezierCurveTo(23.6, 108.7, 23.5, 108.4, 23.3, 108.1);
  ctx.lineTo(23.3, 108.1);
  ctx.bezierCurveTo(23.1, 107.8, 22.9, 107.5, 22.7, 107.3);
  ctx.bezierCurveTo(22.4, 107.1, 22.1, 107.0, 21.8, 106.8);
  ctx.bezierCurveTo(21.5, 106.7, 21.2, 106.7, 20.8, 106.7);
  ctx.bezierCurveTo(20.5, 106.7, 20.2, 106.9, 19.9, 107.0);
  ctx.bezierCurveTo(19.5, 107.2, 19.3, 107.5, 19.1, 107.7);
  ctx.bezierCurveTo(18.9, 108.0, 18.8, 108.3, 18.7, 108.6);
  ctx.bezierCurveTo(18.7, 108.9, 18.7, 109.3, 18.7, 109.6);
  ctx.bezierCurveTo(18.8, 109.9, 18.9, 110.2, 19.1, 110.5);
  ctx.lineTo(19.1, 110.5);
  ctx.bezierCurveTo(19.2, 110.8, 19.5, 111.1, 19.7, 111.3);
  ctx.bezierCurveTo(20.0, 111.5, 20.3, 111.7, 20.6, 111.8);
  ctx.bezierCurveTo(20.9, 111.9, 21.2, 112.0, 21.5, 111.9);
  ctx.bezierCurveTo(21.9, 111.9, 22.2, 111.8, 22.5, 111.6);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(29.0, 101.9);
  ctx.lineTo(26.0, 103.6);
  ctx.lineTo(24.3, 100.7);
  ctx.lineTo(33.7, 95.3);
  ctx.lineTo(35.3, 98.2);
  ctx.lineTo(32.4, 99.9);
  ctx.lineTo(36.6, 107.2);
  ctx.lineTo(33.2, 109.2);
  ctx.lineTo(29.0, 101.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(34.5, 94.9);
  ctx.lineTo(37.9, 92.9);
  ctx.lineTo(39.9, 96.5);
  ctx.lineTo(43.0, 94.7);
  ctx.lineTo(41.0, 91.2);
  ctx.lineTo(44.3, 89.2);
  ctx.lineTo(50.2, 99.3);
  ctx.lineTo(46.8, 101.3);
  ctx.lineTo(44.7, 97.7);
  ctx.lineTo(41.6, 99.4);
  ctx.lineTo(43.7, 103.1);
  ctx.lineTo(40.3, 105.0);
  ctx.lineTo(34.5, 94.9);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(45.5, 88.5);
  ctx.lineTo(54.2, 83.5);
  ctx.lineTo(55.8, 86.3);
  ctx.lineTo(50.4, 89.4);
  ctx.lineTo(51.0, 90.4);
  ctx.lineTo(56.0, 87.6);
  ctx.lineTo(57.4, 90.0);
  ctx.lineTo(52.4, 92.9);
  ctx.lineTo(53.1, 94.0);
  ctx.lineTo(58.5, 90.9);
  ctx.lineTo(60.1, 93.6);
  ctx.lineTo(51.4, 98.7);
  ctx.lineTo(45.5, 88.5);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(55.1, 83.0);
  ctx.lineTo(60.1, 80.1);
  ctx.bezierCurveTo(61.0, 79.6, 61.8, 79.3, 62.5, 79.1);
  ctx.bezierCurveTo(63.2, 79.0, 63.8, 79.0, 64.4, 79.2);
  ctx.bezierCurveTo(64.9, 79.3, 65.3, 79.5, 65.7, 79.8);
  ctx.bezierCurveTo(66.1, 80.1, 66.4, 80.5, 66.7, 81.0);
  ctx.lineTo(66.7, 81.1);
  ctx.bezierCurveTo(67.2, 81.8, 67.4, 82.5, 67.3, 83.2);
  ctx.bezierCurveTo(67.2, 84.0, 67.0, 84.7, 66.5, 85.3);
  ctx.lineTo(70.9, 87.4);
  ctx.lineTo(67.0, 89.6);
  ctx.lineTo(63.4, 87.8);
  ctx.lineTo(63.4, 87.9);
  ctx.lineTo(62.7, 88.3);
  ctx.lineTo(64.4, 91.1);
  ctx.lineTo(61.0, 93.1);
  ctx.lineTo(55.1, 83.0);
  ctx.closePath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(62.8, 85.0);
  ctx.bezierCurveTo(63.2, 84.8, 63.4, 84.5, 63.6, 84.2);
  ctx.bezierCurveTo(63.7, 83.9, 63.7, 83.6, 63.5, 83.2);
  ctx.lineTo(63.5, 83.2);
  ctx.bezierCurveTo(63.3, 82.9, 63.0, 82.7, 62.7, 82.7);
  ctx.bezierCurveTo(62.4, 82.7, 62.0, 82.8, 61.6, 83.0);
  ctx.lineTo(60.2, 83.8);
  ctx.lineTo(61.3, 85.8);
  ctx.lineTo(62.8, 85.0);
  ctx.closePath();
  ctx.fill();

  // layer1/Empowering Others/EO Text/Compound Path
  ctx.beginPath();

  // layer1/Empowering Others/EO Text/Compound Path/Path
  ctx.moveTo(75.8, 84.8);
  ctx.bezierCurveTo(74.8, 85.4, 73.7, 85.8, 72.7, 86.0);
  ctx.bezierCurveTo(71.6, 86.3, 70.6, 86.3, 69.6, 86.1);
  ctx.lineTo(70.2, 82.9);
  ctx.bezierCurveTo(71.0, 83.0, 71.7, 83.0, 72.5, 82.8);
  ctx.bezierCurveTo(73.2, 82.6, 73.8, 82.4, 74.4, 82.0);
  ctx.bezierCurveTo(74.7, 81.8, 74.9, 81.7, 75.0, 81.5);
  ctx.bezierCurveTo(75.1, 81.4, 75.1, 81.2, 75.0, 81.1);
  ctx.lineTo(75.0, 81.1);
  ctx.bezierCurveTo(74.9, 80.9, 74.8, 80.9, 74.5, 80.9);
  ctx.bezierCurveTo(74.3, 80.9, 73.8, 81.0, 73.2, 81.2);
  ctx.bezierCurveTo(72.6, 81.4, 72.0, 81.6, 71.4, 81.7);
  ctx.bezierCurveTo(70.8, 81.9, 70.2, 81.9, 69.7, 81.9);
  ctx.bezierCurveTo(69.1, 81.9, 68.7, 81.8, 68.2, 81.6);
  ctx.bezierCurveTo(67.8, 81.3, 67.4, 81.0, 67.1, 80.4);
  ctx.lineTo(67.1, 80.4);
  ctx.bezierCurveTo(66.8, 79.9, 66.6, 79.4, 66.6, 78.9);
  ctx.bezierCurveTo(66.5, 78.3, 66.6, 77.8, 66.8, 77.3);
  ctx.bezierCurveTo(67.0, 76.8, 67.3, 76.3, 67.7, 75.8);
  ctx.bezierCurveTo(68.1, 75.3, 68.7, 74.9, 69.4, 74.5);
  ctx.bezierCurveTo(70.4, 73.9, 71.3, 73.5, 72.2, 73.3);
  ctx.bezierCurveTo(73.1, 73.1, 73.9, 73.1, 74.8, 73.2);
  ctx.lineTo(74.5, 76.5);
  ctx.bezierCurveTo(73.8, 76.4, 73.1, 76.4, 72.5, 76.6);
  ctx.bezierCurveTo(71.9, 76.7, 71.3, 77.0, 70.8, 77.2);
  ctx.bezierCurveTo(70.6, 77.4, 70.4, 77.5, 70.3, 77.7);
  ctx.bezierCurveTo(70.3, 77.8, 70.3, 77.9, 70.3, 78.1);
  ctx.lineTo(70.4, 78.1);
  ctx.bezierCurveTo(70.4, 78.2, 70.4, 78.2, 70.5, 78.3);
  ctx.bezierCurveTo(70.6, 78.3, 70.7, 78.3, 70.8, 78.3);
  ctx.bezierCurveTo(71.0, 78.3, 71.1, 78.3, 71.3, 78.2);
  ctx.bezierCurveTo(71.5, 78.2, 71.8, 78.1, 72.1, 78.0);
  ctx.bezierCurveTo(72.8, 77.7, 73.5, 77.5, 74.1, 77.4);
  ctx.bezierCurveTo(74.7, 77.2, 75.3, 77.2, 75.8, 77.2);
  ctx.bezierCurveTo(76.3, 77.3, 76.8, 77.4, 77.2, 77.6);
  ctx.bezierCurveTo(77.6, 77.9, 78.0, 78.2, 78.3, 78.7);
  ctx.lineTo(78.3, 78.8);
  ctx.bezierCurveTo(78.6, 79.3, 78.8, 79.8, 78.8, 80.4);
  ctx.bezierCurveTo(78.9, 80.9, 78.8, 81.5, 78.5, 82.0);
  ctx.bezierCurveTo(78.3, 82.5, 78.0, 83.0, 77.5, 83.5);
  ctx.bezierCurveTo(77.1, 84.0, 76.5, 84.4, 75.8, 84.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen
  ctx.restore();
  ctx.restore();

  // layer1/World Citizen/WC Outline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(121.6, 87.1);
  ctx.lineTo(121.1, 87.4);
  ctx.lineTo(76.5, 113.2);
  ctx.lineTo(76.5, 164.3);
  ctx.lineTo(76.5, 165.4);
  ctx.lineTo(121.6, 191.4);
  ctx.lineTo(166.8, 165.3);
  ctx.lineTo(166.8, 165.0);
  ctx.lineTo(166.8, 113.2);
  ctx.lineTo(121.6, 87.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(38, 184, 153)";
  ctx.fill();
  ctx.addHitRegion({id: 'WC'})

  // layer1/World Citizen/WC Picture

  // layer1/World Citizen/WC Picture/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(121.1, 87.4);
  ctx.lineTo(76.5, 113.2);
  ctx.lineTo(76.5, 164.3);
  ctx.lineTo(76.5, 165.4);
  ctx.lineTo(96.1, 176.7);
  ctx.lineTo(96.1, 153.0);
  ctx.bezierCurveTo(96.1, 152.4, 96.2, 151.8, 96.3, 151.2);
  ctx.bezierCurveTo(96.6, 149.4, 98.1, 148.0, 99.9, 147.7);
  ctx.bezierCurveTo(100.5, 147.5, 101.0, 147.4, 101.6, 147.4);
  ctx.lineTo(104.7, 147.4);
  ctx.lineTo(143.5, 145.4);
  ctx.bezierCurveTo(145.8, 145.2, 147.7, 147.0, 147.7, 149.4);
  ctx.lineTo(147.7, 150.2);
  ctx.lineTo(147.7, 151.6);
  ctx.bezierCurveTo(147.8, 152.1, 147.9, 152.5, 147.9, 153.0);
  ctx.lineTo(147.9, 176.3);
  ctx.lineTo(166.8, 165.3);
  ctx.lineTo(166.8, 165.0);
  ctx.lineTo(166.8, 113.2);
  ctx.lineTo(121.6, 87.1);
  ctx.lineTo(121.1, 87.4);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 158.6);
  ctx.bezierCurveTo(110.9, 158.6, 101.9, 167.6, 101.9, 178.7);
  ctx.bezierCurveTo(101.9, 178.7, 101.9, 178.8, 101.9, 178.8);
  ctx.bezierCurveTo(102.0, 168.2, 110.9, 159.6, 121.9, 159.6);
  ctx.bezierCurveTo(132.9, 159.6, 141.9, 168.2, 141.9, 178.9);
  ctx.bezierCurveTo(141.9, 179.2, 141.9, 179.5, 141.9, 179.8);
  ctx.lineTo(142.1, 179.6);
  ctx.bezierCurveTo(142.1, 179.3, 142.1, 179.0, 142.1, 178.7);
  ctx.bezierCurveTo(142.1, 167.6, 133.1, 158.6, 122.0, 158.6);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(103.8, 178.9);
  ctx.bezierCurveTo(103.8, 179.7, 103.8, 180.5, 104.0, 181.2);
  ctx.lineTo(104.0, 181.2);
  ctx.bezierCurveTo(103.9, 180.4, 103.8, 179.6, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.8, 103.8, 178.8, 103.8, 178.9);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(121.4, 84.0);
  ctx.lineTo(121.3, 83.9);
  ctx.lineTo(121.3, 83.9);
  ctx.lineTo(121.4, 84.0);
  ctx.lineTo(121.4, 84.0);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(169.6, 167.1);
  ctx.lineTo(169.6, 167.2);
  ctx.lineTo(169.6, 167.2);
  ctx.lineTo(169.6, 167.1);
  ctx.lineTo(169.6, 167.1);
  ctx.closePath();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(143.5, 146.1);
  ctx.bezierCurveTo(145.8, 146.0, 147.7, 147.9, 147.7, 150.2);
  ctx.lineTo(147.7, 149.4);
  ctx.bezierCurveTo(147.7, 147.0, 145.8, 145.2, 143.5, 145.4);
  ctx.lineTo(104.7, 147.4);
  ctx.lineTo(106.9, 147.4);
  ctx.lineTo(143.5, 146.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(52, 73, 93)";
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(143.5, 146.1);
  ctx.lineTo(106.9, 147.4);
  ctx.lineTo(113.3, 147.4);
  ctx.lineTo(143.4, 146.9);
  ctx.bezierCurveTo(145.7, 146.8, 147.6, 148.7, 147.6, 151.0);
  ctx.lineTo(147.6, 151.4);
  ctx.bezierCurveTo(147.6, 151.5, 147.7, 151.6, 147.7, 151.6);
  ctx.lineTo(147.7, 150.2);
  ctx.bezierCurveTo(147.7, 147.9, 145.8, 146.0, 143.5, 146.1);
  ctx.closePath();
  ctx.fillStyle = "rgb(229, 229, 229)";
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(99.8, 147.7);
  ctx.bezierCurveTo(99.8, 147.7, 99.9, 147.7, 99.9, 147.7);
  ctx.bezierCurveTo(98.1, 148.0, 96.6, 149.4, 96.3, 151.2);
  ctx.bezierCurveTo(96.4, 151.1, 96.4, 150.9, 96.5, 150.8);
  ctx.bezierCurveTo(97.0, 149.3, 98.2, 148.1, 99.8, 147.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.5, 150.8);
  ctx.bezierCurveTo(96.5, 150.8, 96.6, 150.7, 96.6, 150.7);
  ctx.bezierCurveTo(97.1, 149.2, 98.3, 148.1, 99.7, 147.7);
  ctx.bezierCurveTo(99.8, 147.7, 99.8, 147.7, 99.8, 147.7);
  ctx.bezierCurveTo(98.2, 148.1, 97.0, 149.3, 96.5, 150.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.6, 150.7);
  ctx.bezierCurveTo(97.2, 149.3, 98.3, 148.2, 99.7, 147.7);
  ctx.bezierCurveTo(98.3, 148.1, 97.1, 149.2, 96.6, 150.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(143.4, 146.9);
  ctx.lineTo(113.3, 147.4);
  ctx.lineTo(142.3, 147.4);
  ctx.bezierCurveTo(144.8, 147.4, 147.0, 149.1, 147.6, 151.4);
  ctx.lineTo(147.6, 151.0);
  ctx.bezierCurveTo(147.6, 148.7, 145.7, 146.8, 143.4, 146.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.3, 151.9);
  ctx.bezierCurveTo(96.3, 151.7, 96.3, 151.5, 96.3, 151.2);
  ctx.bezierCurveTo(96.2, 151.8, 96.1, 152.4, 96.1, 153.0);
  ctx.lineTo(96.1, 176.7);
  ctx.lineTo(96.3, 176.8);
  ctx.lineTo(96.3, 151.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(52, 73, 93)";
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.5, 147.6, 100.6, 147.6);
  ctx.lineTo(104.7, 147.4);
  ctx.lineTo(101.6, 147.4);
  ctx.bezierCurveTo(101.0, 147.4, 100.5, 147.5, 99.9, 147.7);
  ctx.bezierCurveTo(100.1, 147.6, 100.3, 147.6, 100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(147.7, 151.6);
  ctx.lineTo(147.7, 176.4);
  ctx.lineTo(147.9, 176.3);
  ctx.lineTo(147.9, 153.0);
  ctx.bezierCurveTo(147.9, 152.5, 147.8, 152.1, 147.7, 151.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.5, 147.6, 100.6, 147.6);
  ctx.lineTo(106.9, 147.4);
  ctx.lineTo(104.7, 147.4);
  ctx.lineTo(100.6, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.5, 147.6, 100.5, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.6, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.5, 147.6, 100.5, 147.6);
  ctx.lineTo(113.3, 147.4);
  ctx.lineTo(106.9, 147.4);
  ctx.lineTo(100.6, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(147.6, 176.4);
  ctx.lineTo(147.7, 176.4);
  ctx.lineTo(147.7, 151.6);
  ctx.bezierCurveTo(147.7, 151.6, 147.6, 151.5, 147.6, 151.4);
  ctx.lineTo(147.6, 176.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.4, 147.6);
  ctx.bezierCurveTo(100.4, 147.6, 100.5, 147.6, 100.5, 147.6);
  ctx.bezierCurveTo(100.3, 147.6, 100.1, 147.6, 99.9, 147.7);
  ctx.bezierCurveTo(99.9, 147.7, 99.8, 147.7, 99.8, 147.7);
  ctx.bezierCurveTo(100.0, 147.7, 100.2, 147.6, 100.4, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.3, 176.8);
  ctx.lineTo(96.3, 176.8);
  ctx.lineTo(96.3, 152.1);
  ctx.lineTo(96.3, 152.0);
  ctx.bezierCurveTo(96.3, 151.6, 96.4, 151.2, 96.5, 150.8);
  ctx.bezierCurveTo(96.4, 150.9, 96.4, 151.1, 96.3, 151.2);
  ctx.bezierCurveTo(96.3, 151.5, 96.3, 151.7, 96.3, 151.9);
  ctx.lineTo(96.3, 176.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(100.5, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.4, 147.6, 100.4, 147.6);
  ctx.bezierCurveTo(100.4, 147.6, 100.5, 147.6, 100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.lineTo(100.5, 147.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(99.7, 147.7);
  ctx.bezierCurveTo(100.0, 147.7, 100.2, 147.7, 100.4, 147.6);
  ctx.bezierCurveTo(100.2, 147.6, 100.0, 147.7, 99.8, 147.7);
  ctx.bezierCurveTo(99.8, 147.7, 99.8, 147.7, 99.7, 147.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(96.3, 152.0);
  ctx.lineTo(96.3, 152.1);
  ctx.bezierCurveTo(96.3, 151.6, 96.4, 151.1, 96.6, 150.7);
  ctx.bezierCurveTo(96.6, 150.7, 96.5, 150.8, 96.5, 150.8);
  ctx.bezierCurveTo(96.4, 151.2, 96.3, 151.6, 96.3, 152.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(147.6, 151.4);
  ctx.bezierCurveTo(147.0, 149.1, 144.8, 147.4, 142.3, 147.4);
  ctx.lineTo(113.3, 147.4);
  ctx.lineTo(100.5, 147.6);
  ctx.bezierCurveTo(100.5, 147.6, 100.4, 147.6, 100.4, 147.6);
  ctx.bezierCurveTo(100.2, 147.7, 100.0, 147.7, 99.7, 147.7);
  ctx.bezierCurveTo(98.3, 148.2, 97.2, 149.3, 96.6, 150.7);
  ctx.bezierCurveTo(96.4, 151.1, 96.3, 151.6, 96.3, 152.1);
  ctx.lineTo(96.3, 176.8);
  ctx.lineTo(102.0, 180.1);
  ctx.bezierCurveTo(101.9, 179.7, 101.9, 179.3, 101.9, 178.9);
  ctx.bezierCurveTo(101.9, 178.9, 101.9, 178.9, 101.9, 178.8);
  ctx.bezierCurveTo(101.9, 178.8, 101.9, 178.7, 101.9, 178.7);
  ctx.bezierCurveTo(101.9, 167.6, 110.9, 158.6, 122.0, 158.6);
  ctx.bezierCurveTo(133.1, 158.6, 142.1, 167.6, 142.1, 178.7);
  ctx.bezierCurveTo(142.1, 179.0, 142.1, 179.3, 142.1, 179.6);
  ctx.lineTo(147.6, 176.4);
  ctx.lineTo(147.6, 151.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(118.4, 168.9);
  ctx.bezierCurveTo(119.6, 168.8, 120.8, 168.8, 122.0, 168.8);
  ctx.bezierCurveTo(123.2, 168.8, 124.4, 168.8, 125.6, 168.9);
  ctx.bezierCurveTo(124.9, 164.7, 123.6, 161.9, 122.4, 161.4);
  ctx.bezierCurveTo(122.2, 161.4, 122.1, 161.4, 121.9, 161.4);
  ctx.bezierCurveTo(121.8, 161.4, 121.7, 161.4, 121.6, 161.4);
  ctx.bezierCurveTo(120.4, 161.9, 119.2, 164.6, 118.4, 168.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(103, 123, 140)";
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(121.9, 159.6);
  ctx.bezierCurveTo(110.9, 159.6, 102.0, 168.2, 101.9, 178.8);
  ctx.bezierCurveTo(101.9, 179.2, 101.9, 179.7, 102.0, 180.1);
  ctx.lineTo(104.0, 181.2);
  ctx.bezierCurveTo(103.8, 180.5, 103.8, 179.7, 103.8, 178.9);
  ctx.bezierCurveTo(103.8, 178.8, 103.8, 178.8, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 168.6, 112.0, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(132.1, 160.5, 140.2, 168.6, 140.2, 178.7);
  ctx.bezierCurveTo(140.2, 179.4, 140.2, 180.1, 140.1, 180.8);
  ctx.lineTo(141.9, 179.8);
  ctx.bezierCurveTo(141.9, 179.5, 141.9, 179.2, 141.9, 178.9);
  ctx.bezierCurveTo(141.9, 168.2, 132.9, 159.6, 121.9, 159.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(101.9, 178.8);
  ctx.bezierCurveTo(101.9, 178.9, 101.9, 178.9, 101.9, 178.9);
  ctx.bezierCurveTo(101.9, 179.3, 101.9, 179.7, 102.0, 180.1);
  ctx.lineTo(102.0, 180.1);
  ctx.bezierCurveTo(101.9, 179.7, 101.9, 179.2, 101.9, 178.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(121.9, 161.4);
  ctx.bezierCurveTo(122.1, 161.4, 122.2, 161.4, 122.4, 161.4);
  ctx.bezierCurveTo(122.3, 161.3, 122.1, 161.3, 122.0, 161.3);
  ctx.bezierCurveTo(121.9, 161.3, 121.8, 161.3, 121.6, 161.4);
  ctx.bezierCurveTo(121.7, 161.4, 121.8, 161.4, 121.9, 161.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(118.2, 187.6);
  ctx.bezierCurveTo(119.5, 187.7, 120.7, 187.8, 122.0, 187.8);
  ctx.bezierCurveTo(123.3, 187.8, 124.6, 187.7, 125.8, 187.6);
  ctx.bezierCurveTo(126.2, 185.1, 126.4, 182.3, 126.4, 179.1);
  ctx.lineTo(117.6, 179.1);
  ctx.bezierCurveTo(117.6, 182.3, 117.9, 185.1, 118.2, 187.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(105.0, 175.1);
  ctx.bezierCurveTo(105.9, 173.8, 107.4, 172.6, 109.2, 171.6);
  ctx.bezierCurveTo(109.8, 171.3, 110.3, 171.0, 110.9, 170.8);
  ctx.bezierCurveTo(112.2, 166.9, 114.4, 163.8, 117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.bezierCurveTo(111.0, 163.9, 106.3, 168.9, 105.0, 175.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 169.6);
  ctx.bezierCurveTo(120.7, 169.6, 119.5, 169.7, 118.2, 169.8);
  ctx.bezierCurveTo(117.9, 172.2, 117.6, 175.1, 117.6, 178.3);
  ctx.lineTo(126.4, 178.3);
  ctx.bezierCurveTo(126.4, 175.1, 126.2, 172.2, 125.8, 169.8);
  ctx.bezierCurveTo(124.6, 169.7, 123.3, 169.6, 122.0, 169.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(116.7, 178.3);
  ctx.bezierCurveTo(116.8, 175.4, 117.0, 172.5, 117.4, 169.9);
  ctx.bezierCurveTo(115.3, 170.2, 113.3, 170.7, 111.6, 171.4);
  ctx.bezierCurveTo(111.0, 173.5, 110.6, 175.8, 110.6, 178.3);
  ctx.lineTo(116.7, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.1, 161.6);
  ctx.bezierCurveTo(116.6, 162.4, 113.6, 165.8, 112.0, 170.4);
  ctx.bezierCurveTo(113.7, 169.8, 115.5, 169.3, 117.5, 169.1);
  ctx.bezierCurveTo(118.1, 165.7, 119.0, 163.0, 120.1, 161.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(133.1, 170.8);
  ctx.bezierCurveTo(133.7, 171.0, 134.2, 171.3, 134.8, 171.6);
  ctx.bezierCurveTo(136.7, 172.6, 138.1, 173.8, 139.0, 175.1);
  ctx.bezierCurveTo(137.9, 169.6, 134.1, 165.1, 129.2, 162.9);
  ctx.bezierCurveTo(129.2, 162.9, 129.2, 162.9, 129.2, 162.9);
  ctx.bezierCurveTo(129.0, 162.8, 128.9, 162.8, 128.8, 162.7);
  ctx.bezierCurveTo(128.2, 162.5, 127.7, 162.3, 127.1, 162.1);
  ctx.bezierCurveTo(129.7, 163.9, 131.8, 167.0, 133.1, 170.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(128.8, 162.7);
  ctx.bezierCurveTo(128.2, 162.4, 127.6, 162.2, 127.0, 162.0);
  ctx.bezierCurveTo(127.0, 162.1, 127.1, 162.1, 127.1, 162.1);
  ctx.bezierCurveTo(127.7, 162.3, 128.2, 162.5, 128.8, 162.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(129.2, 162.9);
  ctx.bezierCurveTo(129.2, 162.9, 129.2, 162.9, 129.2, 162.9);
  ctx.bezierCurveTo(129.2, 162.9, 129.2, 162.9, 129.2, 162.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(109.7, 179.1);
  ctx.lineTo(104.7, 179.1);
  ctx.bezierCurveTo(104.8, 180.3, 105.4, 181.5, 106.3, 182.6);
  ctx.lineTo(110.5, 185.0);
  ctx.bezierCurveTo(110.0, 183.1, 109.8, 181.2, 109.7, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(133.4, 179.1);
  ctx.lineTo(127.3, 179.1);
  ctx.bezierCurveTo(127.3, 182.0, 127.0, 184.8, 126.7, 187.4);
  ctx.bezierCurveTo(127.7, 187.3, 128.6, 187.1, 129.5, 186.9);
  ctx.lineTo(132.6, 185.1);
  ctx.bezierCurveTo(133.1, 183.2, 133.4, 181.2, 133.4, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(126.4, 188.7);
  ctx.lineTo(127.2, 188.2);
  ctx.bezierCurveTo(127.0, 188.2, 126.8, 188.3, 126.5, 188.3);
  ctx.bezierCurveTo(126.5, 188.4, 126.5, 188.5, 126.4, 188.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.6, 171.8);
  ctx.bezierCurveTo(107.1, 173.4, 104.9, 175.7, 104.7, 178.3);
  ctx.lineTo(109.7, 178.3);
  ctx.bezierCurveTo(109.8, 176.0, 110.1, 173.8, 110.6, 171.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(123.9, 161.6);
  ctx.bezierCurveTo(125.1, 163.0, 125.9, 165.7, 126.5, 169.1);
  ctx.bezierCurveTo(128.5, 169.3, 130.4, 169.8, 132.1, 170.4);
  ctx.bezierCurveTo(130.4, 165.8, 127.4, 162.4, 123.9, 161.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.6, 179.1);
  ctx.bezierCurveTo(110.6, 181.4, 111.0, 183.6, 111.5, 185.6);
  ctx.lineTo(113.1, 186.5);
  ctx.bezierCurveTo(114.4, 186.9, 115.8, 187.2, 117.4, 187.4);
  ctx.bezierCurveTo(117.0, 184.8, 116.8, 182.0, 116.7, 179.1);
  ctx.lineTo(110.6, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 188.6);
  ctx.bezierCurveTo(120.8, 188.6, 119.6, 188.6, 118.4, 188.4);
  ctx.bezierCurveTo(118.5, 188.9, 118.6, 189.3, 118.6, 189.7);
  ctx.lineTo(121.6, 191.4);
  ctx.lineTo(125.5, 189.2);
  ctx.bezierCurveTo(125.5, 189.0, 125.6, 188.7, 125.6, 188.4);
  ctx.bezierCurveTo(124.4, 188.6, 123.2, 188.6, 122.0, 188.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(134.3, 179.1);
  ctx.bezierCurveTo(134.3, 181.0, 134.0, 182.8, 133.6, 184.5);
  ctx.lineTo(138.3, 181.8);
  ctx.bezierCurveTo(138.9, 181.0, 139.3, 180.0, 139.4, 179.1);
  ctx.lineTo(134.3, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.4, 178.3);
  ctx.bezierCurveTo(139.1, 175.7, 136.9, 173.4, 133.4, 171.8);
  ctx.bezierCurveTo(133.9, 173.8, 134.3, 176.0, 134.3, 178.3);
  ctx.lineTo(139.4, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(127.3, 178.3);
  ctx.lineTo(133.4, 178.3);
  ctx.bezierCurveTo(133.4, 175.8, 133.0, 173.5, 132.4, 171.4);
  ctx.bezierCurveTo(130.7, 170.7, 128.8, 170.2, 126.7, 169.9);
  ctx.bezierCurveTo(127.0, 172.5, 127.3, 175.4, 127.3, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(115.7, 188.0);
  ctx.lineTo(117.7, 189.1);
  ctx.bezierCurveTo(117.6, 188.9, 117.6, 188.6, 117.5, 188.3);
  ctx.bezierCurveTo(116.9, 188.2, 116.3, 188.1, 115.7, 188.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 179.6, 103.9, 180.4, 104.0, 181.2);
  ctx.lineTo(104.6, 181.6);
  ctx.bezierCurveTo(104.1, 180.6, 103.8, 179.7, 103.8, 178.7);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.7, 181.0);
  ctx.lineTo(139.9, 180.9);
  ctx.bezierCurveTo(139.9, 180.7, 140.0, 180.5, 140.0, 180.3);
  ctx.bezierCurveTo(139.9, 180.6, 139.8, 180.8, 139.7, 181.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.9, 180.9);
  ctx.lineTo(140.1, 180.8);
  ctx.bezierCurveTo(140.2, 180.1, 140.2, 179.4, 140.2, 178.7);
  ctx.bezierCurveTo(140.2, 179.2, 140.1, 179.8, 140.0, 180.3);
  ctx.bezierCurveTo(140.0, 180.5, 139.9, 180.7, 139.9, 180.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.0, 162.0);
  ctx.bezierCurveTo(109.5, 164.1, 103.9, 170.7, 103.8, 178.6);
  ctx.bezierCurveTo(103.8, 177.4, 104.2, 176.2, 105.0, 175.1);
  ctx.bezierCurveTo(106.3, 168.9, 111.0, 163.9, 117.0, 162.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.bezierCurveTo(118.5, 161.0, 120.2, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(112.0, 160.5, 103.8, 168.6, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.6, 103.8, 178.6);
  ctx.bezierCurveTo(103.9, 170.7, 109.5, 164.1, 117.0, 162.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.0, 175.1);
  ctx.bezierCurveTo(139.4, 175.6, 139.7, 176.2, 139.9, 176.7);
  ctx.bezierCurveTo(139.1, 170.5, 134.9, 165.3, 129.2, 162.9);
  ctx.bezierCurveTo(134.1, 165.1, 137.9, 169.6, 139.0, 175.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(128.8, 162.7);
  ctx.bezierCurveTo(128.9, 162.8, 129.0, 162.8, 129.2, 162.9);
  ctx.bezierCurveTo(129.0, 162.8, 128.9, 162.7, 128.8, 162.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(128.8, 162.7);
  ctx.bezierCurveTo(128.9, 162.7, 129.0, 162.8, 129.2, 162.9);
  ctx.bezierCurveTo(129.2, 162.9, 129.2, 162.9, 129.2, 162.9);
  ctx.bezierCurveTo(134.9, 165.3, 139.1, 170.5, 139.9, 176.7);
  ctx.bezierCurveTo(140.1, 177.4, 140.2, 178.0, 140.2, 178.7);
  ctx.bezierCurveTo(140.2, 168.6, 132.1, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(123.8, 160.5, 125.5, 161.0, 127.0, 162.0);
  ctx.bezierCurveTo(127.6, 162.2, 128.2, 162.4, 128.8, 162.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.5, 185.0);
  ctx.lineTo(111.5, 185.6);
  ctx.bezierCurveTo(111.0, 183.6, 110.6, 181.4, 110.6, 179.1);
  ctx.lineTo(109.7, 179.1);
  ctx.bezierCurveTo(109.8, 181.2, 110.0, 183.1, 110.5, 185.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(132.1, 170.4);
  ctx.bezierCurveTo(132.4, 170.5, 132.7, 170.6, 133.1, 170.8);
  ctx.bezierCurveTo(131.8, 167.0, 129.7, 163.9, 127.1, 162.1);
  ctx.bezierCurveTo(126.1, 161.8, 125.0, 161.6, 123.8, 161.5);
  ctx.bezierCurveTo(123.9, 161.5, 123.9, 161.5, 123.9, 161.6);
  ctx.bezierCurveTo(127.4, 162.4, 130.4, 165.8, 132.1, 170.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(127.1, 162.1);
  ctx.bezierCurveTo(127.1, 162.1, 127.0, 162.1, 127.0, 162.0);
  ctx.bezierCurveTo(126.0, 161.7, 124.9, 161.5, 123.8, 161.4);
  ctx.bezierCurveTo(123.8, 161.4, 123.8, 161.5, 123.8, 161.5);
  ctx.bezierCurveTo(125.0, 161.6, 126.1, 161.8, 127.1, 162.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.6, 178.3);
  ctx.bezierCurveTo(110.6, 175.8, 111.0, 173.5, 111.6, 171.4);
  ctx.bezierCurveTo(111.3, 171.5, 111.0, 171.7, 110.6, 171.8);
  ctx.bezierCurveTo(110.1, 173.8, 109.8, 176.0, 109.7, 178.3);
  ctx.lineTo(110.6, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(132.6, 185.1);
  ctx.lineTo(133.6, 184.5);
  ctx.bezierCurveTo(134.0, 182.8, 134.3, 181.0, 134.3, 179.1);
  ctx.lineTo(133.4, 179.1);
  ctx.bezierCurveTo(133.4, 181.2, 133.1, 183.2, 132.6, 185.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(133.4, 178.3);
  ctx.lineTo(134.3, 178.3);
  ctx.bezierCurveTo(134.3, 176.0, 133.9, 173.8, 133.4, 171.8);
  ctx.bezierCurveTo(133.1, 171.7, 132.7, 171.5, 132.4, 171.4);
  ctx.bezierCurveTo(133.0, 173.5, 133.4, 175.8, 133.4, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.1, 161.6);
  ctx.bezierCurveTo(120.1, 161.5, 120.2, 161.5, 120.2, 161.5);
  ctx.bezierCurveTo(119.1, 161.6, 118.0, 161.8, 117.0, 162.0);
  ctx.bezierCurveTo(114.4, 163.8, 112.2, 166.9, 110.9, 170.8);
  ctx.bezierCurveTo(111.3, 170.6, 111.6, 170.5, 112.0, 170.4);
  ctx.bezierCurveTo(113.6, 165.8, 116.6, 162.4, 120.1, 161.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.2, 161.5);
  ctx.bezierCurveTo(120.2, 161.4, 120.2, 161.4, 120.2, 161.4);
  ctx.bezierCurveTo(119.1, 161.5, 118.1, 161.7, 117.0, 162.0);
  ctx.bezierCurveTo(117.0, 162.0, 117.0, 162.0, 117.0, 162.0);
  ctx.bezierCurveTo(118.0, 161.8, 119.1, 161.6, 120.2, 161.5);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.2, 161.4);
  ctx.bezierCurveTo(120.8, 160.8, 121.4, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(120.2, 160.5, 118.5, 161.0, 117.0, 162.0);
  ctx.bezierCurveTo(118.1, 161.7, 119.1, 161.5, 120.2, 161.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(127.0, 162.0);
  ctx.bezierCurveTo(125.5, 161.0, 123.8, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(122.7, 160.5, 123.2, 160.8, 123.8, 161.4);
  ctx.bezierCurveTo(124.9, 161.5, 126.0, 161.7, 127.0, 162.0);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.5, 169.1);
  ctx.bezierCurveTo(117.8, 169.0, 118.1, 169.0, 118.4, 168.9);
  ctx.bezierCurveTo(119.2, 164.6, 120.4, 161.9, 121.6, 161.4);
  ctx.bezierCurveTo(121.3, 161.4, 121.0, 161.4, 120.7, 161.4);
  ctx.bezierCurveTo(120.5, 161.5, 120.3, 161.5, 120.1, 161.6);
  ctx.bezierCurveTo(119.0, 163.0, 118.1, 165.7, 117.5, 169.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(121.6, 161.4);
  ctx.bezierCurveTo(121.8, 161.3, 121.9, 161.3, 122.0, 161.3);
  ctx.bezierCurveTo(121.6, 161.3, 121.1, 161.4, 120.7, 161.4);
  ctx.bezierCurveTo(121.0, 161.4, 121.3, 161.4, 121.6, 161.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(125.6, 188.4);
  ctx.bezierCurveTo(125.6, 188.7, 125.5, 189.0, 125.5, 189.2);
  ctx.lineTo(126.4, 188.7);
  ctx.bezierCurveTo(126.5, 188.5, 126.5, 188.4, 126.5, 188.3);
  ctx.bezierCurveTo(126.2, 188.4, 125.9, 188.4, 125.6, 188.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.4, 169.9);
  ctx.bezierCurveTo(117.0, 172.5, 116.8, 175.4, 116.7, 178.3);
  ctx.lineTo(117.6, 178.3);
  ctx.bezierCurveTo(117.6, 175.1, 117.9, 172.2, 118.2, 169.8);
  ctx.bezierCurveTo(117.9, 169.8, 117.7, 169.9, 117.4, 169.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(125.6, 168.9);
  ctx.bezierCurveTo(125.9, 169.0, 126.2, 169.0, 126.5, 169.1);
  ctx.bezierCurveTo(125.9, 165.7, 125.1, 163.0, 123.9, 161.6);
  ctx.bezierCurveTo(123.7, 161.5, 123.5, 161.5, 123.4, 161.5);
  ctx.bezierCurveTo(123.1, 161.4, 122.7, 161.4, 122.4, 161.4);
  ctx.bezierCurveTo(123.6, 161.9, 124.9, 164.7, 125.6, 168.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(123.4, 161.5);
  ctx.bezierCurveTo(122.9, 161.4, 122.5, 161.3, 122.0, 161.3);
  ctx.bezierCurveTo(122.1, 161.3, 122.3, 161.3, 122.4, 161.4);
  ctx.bezierCurveTo(122.7, 161.4, 123.1, 161.4, 123.4, 161.5);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.6, 179.1);
  ctx.lineTo(116.7, 179.1);
  ctx.bezierCurveTo(116.8, 182.0, 117.0, 184.8, 117.4, 187.4);
  ctx.bezierCurveTo(117.7, 187.5, 117.9, 187.5, 118.2, 187.6);
  ctx.bezierCurveTo(117.9, 185.1, 117.6, 182.3, 117.6, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(125.8, 169.8);
  ctx.bezierCurveTo(126.2, 172.2, 126.4, 175.1, 126.4, 178.3);
  ctx.lineTo(127.3, 178.3);
  ctx.bezierCurveTo(127.3, 175.4, 127.0, 172.5, 126.7, 169.9);
  ctx.bezierCurveTo(126.4, 169.9, 126.1, 169.8, 125.8, 169.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(126.4, 179.1);
  ctx.bezierCurveTo(126.4, 182.3, 126.2, 185.1, 125.8, 187.6);
  ctx.bezierCurveTo(126.1, 187.5, 126.4, 187.5, 126.7, 187.4);
  ctx.bezierCurveTo(127.0, 184.8, 127.3, 182.0, 127.3, 179.1);
  ctx.lineTo(126.4, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.5, 188.3);
  ctx.bezierCurveTo(117.6, 188.6, 117.6, 188.9, 117.7, 189.1);
  ctx.lineTo(118.6, 189.7);
  ctx.bezierCurveTo(118.6, 189.3, 118.5, 188.9, 118.4, 188.4);
  ctx.bezierCurveTo(118.1, 188.4, 117.8, 188.4, 117.5, 188.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.7, 161.4);
  ctx.bezierCurveTo(120.5, 161.4, 120.4, 161.4, 120.2, 161.5);
  ctx.bezierCurveTo(120.2, 161.5, 120.1, 161.5, 120.1, 161.6);
  ctx.bezierCurveTo(120.3, 161.5, 120.5, 161.5, 120.7, 161.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(120.7, 161.4);
  ctx.bezierCurveTo(121.1, 161.4, 121.6, 161.3, 122.0, 161.3);
  ctx.bezierCurveTo(121.4, 161.3, 120.8, 161.3, 120.2, 161.4);
  ctx.bezierCurveTo(120.2, 161.4, 120.2, 161.4, 120.2, 161.5);
  ctx.bezierCurveTo(120.4, 161.4, 120.5, 161.4, 120.7, 161.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(123.8, 161.5);
  ctx.bezierCurveTo(123.7, 161.5, 123.5, 161.5, 123.4, 161.5);
  ctx.bezierCurveTo(123.5, 161.5, 123.7, 161.5, 123.9, 161.6);
  ctx.bezierCurveTo(123.9, 161.5, 123.9, 161.5, 123.8, 161.5);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(123.8, 161.5);
  ctx.bezierCurveTo(123.8, 161.5, 123.8, 161.4, 123.8, 161.4);
  ctx.bezierCurveTo(123.2, 161.3, 122.6, 161.3, 122.0, 161.3);
  ctx.bezierCurveTo(122.5, 161.3, 122.9, 161.4, 123.4, 161.5);
  ctx.bezierCurveTo(123.5, 161.5, 123.7, 161.5, 123.8, 161.5);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 161.3);
  ctx.bezierCurveTo(122.6, 161.3, 123.2, 161.3, 123.8, 161.4);
  ctx.bezierCurveTo(123.2, 160.8, 122.7, 160.5, 122.0, 160.5);
  ctx.bezierCurveTo(121.4, 160.5, 120.8, 160.8, 120.2, 161.4);
  ctx.bezierCurveTo(120.8, 161.3, 121.4, 161.3, 122.0, 161.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(134.8, 171.6);
  ctx.bezierCurveTo(134.2, 171.3, 133.7, 171.0, 133.1, 170.8);
  ctx.bezierCurveTo(133.2, 171.1, 133.3, 171.5, 133.4, 171.8);
  ctx.bezierCurveTo(136.9, 173.4, 139.1, 175.7, 139.4, 178.3);
  ctx.lineTo(139.4, 178.3);
  ctx.bezierCurveTo(139.3, 177.2, 139.2, 176.1, 139.0, 175.1);
  ctx.bezierCurveTo(138.1, 173.8, 136.7, 172.6, 134.8, 171.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.6, 171.8);
  ctx.bezierCurveTo(110.7, 171.5, 110.8, 171.1, 110.9, 170.8);
  ctx.bezierCurveTo(110.3, 171.0, 109.8, 171.3, 109.2, 171.6);
  ctx.bezierCurveTo(107.4, 172.6, 105.9, 173.8, 105.0, 175.1);
  ctx.bezierCurveTo(104.8, 176.1, 104.7, 177.2, 104.6, 178.3);
  ctx.lineTo(104.7, 178.3);
  ctx.bezierCurveTo(104.9, 175.7, 107.1, 173.4, 110.6, 171.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(126.7, 187.4);
  ctx.bezierCurveTo(126.6, 187.7, 126.6, 188.0, 126.5, 188.3);
  ctx.bezierCurveTo(126.8, 188.3, 127.0, 188.2, 127.2, 188.2);
  ctx.lineTo(129.5, 186.9);
  ctx.bezierCurveTo(128.6, 187.1, 127.7, 187.3, 126.7, 187.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 187.8);
  ctx.bezierCurveTo(120.7, 187.8, 119.5, 187.7, 118.2, 187.6);
  ctx.bezierCurveTo(118.3, 187.9, 118.3, 188.1, 118.4, 188.4);
  ctx.bezierCurveTo(119.6, 188.6, 120.8, 188.6, 122.0, 188.6);
  ctx.bezierCurveTo(123.2, 188.6, 124.4, 188.6, 125.6, 188.4);
  ctx.bezierCurveTo(125.7, 188.1, 125.7, 187.9, 125.8, 187.6);
  ctx.bezierCurveTo(124.6, 187.7, 123.3, 187.8, 122.0, 187.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(138.3, 181.8);
  ctx.lineTo(139.2, 181.3);
  ctx.bezierCurveTo(139.3, 180.6, 139.4, 179.9, 139.4, 179.1);
  ctx.lineTo(139.4, 179.1);
  ctx.bezierCurveTo(139.3, 180.0, 138.9, 181.0, 138.3, 181.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(104.6, 179.1);
  ctx.bezierCurveTo(104.7, 180.0, 104.8, 180.9, 104.9, 181.8);
  ctx.lineTo(106.3, 182.6);
  ctx.bezierCurveTo(105.4, 181.5, 104.8, 180.3, 104.7, 179.1);
  ctx.lineTo(104.6, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(122.0, 169.6);
  ctx.bezierCurveTo(123.3, 169.6, 124.6, 169.7, 125.8, 169.8);
  ctx.bezierCurveTo(125.7, 169.5, 125.7, 169.2, 125.6, 168.9);
  ctx.bezierCurveTo(124.4, 168.8, 123.2, 168.8, 122.0, 168.8);
  ctx.bezierCurveTo(120.8, 168.8, 119.6, 168.8, 118.4, 168.9);
  ctx.bezierCurveTo(118.3, 169.2, 118.3, 169.5, 118.2, 169.8);
  ctx.bezierCurveTo(119.5, 169.7, 120.7, 169.6, 122.0, 169.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(132.4, 171.4);
  ctx.bezierCurveTo(132.3, 171.1, 132.2, 170.7, 132.1, 170.4);
  ctx.bezierCurveTo(130.4, 169.8, 128.5, 169.3, 126.5, 169.1);
  ctx.bezierCurveTo(126.6, 169.3, 126.6, 169.6, 126.7, 169.9);
  ctx.bezierCurveTo(128.8, 170.2, 130.7, 170.7, 132.4, 171.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.4, 187.4);
  ctx.bezierCurveTo(115.8, 187.2, 114.4, 186.9, 113.1, 186.5);
  ctx.lineTo(115.7, 188.0);
  ctx.bezierCurveTo(116.3, 188.1, 116.9, 188.2, 117.5, 188.3);
  ctx.bezierCurveTo(117.5, 188.0, 117.4, 187.7, 117.4, 187.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.5, 169.1);
  ctx.bezierCurveTo(115.5, 169.3, 113.7, 169.8, 112.0, 170.4);
  ctx.bezierCurveTo(111.8, 170.7, 111.7, 171.1, 111.6, 171.4);
  ctx.bezierCurveTo(113.3, 170.7, 115.3, 170.2, 117.4, 169.9);
  ctx.bezierCurveTo(117.4, 169.6, 117.5, 169.3, 117.5, 169.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(140.0, 178.9);
  ctx.bezierCurveTo(140.0, 178.2, 140.0, 177.5, 139.9, 176.7);
  ctx.bezierCurveTo(139.7, 176.2, 139.4, 175.6, 139.0, 175.1);
  ctx.bezierCurveTo(139.2, 176.1, 139.3, 177.2, 139.4, 178.3);
  ctx.lineTo(139.7, 178.3);
  ctx.lineTo(139.7, 179.1);
  ctx.lineTo(139.4, 179.1);
  ctx.bezierCurveTo(139.4, 179.9, 139.3, 180.6, 139.2, 181.3);
  ctx.lineTo(139.7, 181.0);
  ctx.bezierCurveTo(139.8, 180.8, 139.9, 180.6, 140.0, 180.3);
  ctx.bezierCurveTo(140.0, 179.9, 140.0, 179.4, 140.0, 178.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(140.0, 178.9);
  ctx.bezierCurveTo(140.0, 179.4, 140.0, 179.9, 140.0, 180.3);
  ctx.bezierCurveTo(140.1, 179.8, 140.2, 179.2, 140.2, 178.7);
  ctx.bezierCurveTo(140.2, 178.0, 140.1, 177.4, 139.9, 176.7);
  ctx.bezierCurveTo(140.0, 177.5, 140.0, 178.2, 140.0, 178.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(104.6, 179.1);
  ctx.lineTo(104.2, 179.1);
  ctx.lineTo(104.2, 178.3);
  ctx.lineTo(104.6, 178.3);
  ctx.bezierCurveTo(104.7, 177.2, 104.8, 176.1, 105.0, 175.1);
  ctx.bezierCurveTo(104.2, 176.2, 103.8, 177.4, 103.8, 178.6);
  ctx.bezierCurveTo(103.8, 178.6, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 179.7, 104.1, 180.6, 104.6, 181.6);
  ctx.lineTo(104.9, 181.8);
  ctx.bezierCurveTo(104.8, 180.9, 104.7, 180.0, 104.6, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(103.8, 178.6);
  ctx.bezierCurveTo(103.8, 178.6, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.7, 103.8, 178.7);
  ctx.bezierCurveTo(103.8, 178.7, 103.8, 178.6, 103.8, 178.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(132.4, 171.4);
  ctx.bezierCurveTo(132.7, 171.5, 133.1, 171.7, 133.4, 171.8);
  ctx.bezierCurveTo(133.3, 171.5, 133.2, 171.1, 133.1, 170.8);
  ctx.bezierCurveTo(132.7, 170.6, 132.4, 170.5, 132.1, 170.4);
  ctx.bezierCurveTo(132.2, 170.7, 132.3, 171.1, 132.4, 171.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(111.6, 171.4);
  ctx.bezierCurveTo(111.7, 171.1, 111.8, 170.7, 112.0, 170.4);
  ctx.bezierCurveTo(111.6, 170.5, 111.3, 170.6, 110.9, 170.8);
  ctx.bezierCurveTo(110.8, 171.1, 110.7, 171.5, 110.6, 171.8);
  ctx.bezierCurveTo(111.0, 171.7, 111.3, 171.5, 111.6, 171.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(125.6, 188.4);
  ctx.bezierCurveTo(125.9, 188.4, 126.2, 188.4, 126.5, 188.3);
  ctx.bezierCurveTo(126.6, 188.0, 126.6, 187.7, 126.7, 187.4);
  ctx.bezierCurveTo(126.4, 187.5, 126.1, 187.5, 125.8, 187.6);
  ctx.bezierCurveTo(125.7, 187.9, 125.7, 188.1, 125.6, 188.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(126.7, 169.9);
  ctx.bezierCurveTo(126.6, 169.6, 126.6, 169.3, 126.5, 169.1);
  ctx.bezierCurveTo(126.2, 169.0, 125.9, 169.0, 125.6, 168.9);
  ctx.bezierCurveTo(125.7, 169.2, 125.7, 169.5, 125.8, 169.8);
  ctx.bezierCurveTo(126.1, 169.8, 126.4, 169.9, 126.7, 169.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.4, 187.4);
  ctx.bezierCurveTo(117.4, 187.7, 117.5, 188.0, 117.5, 188.3);
  ctx.bezierCurveTo(117.8, 188.4, 118.1, 188.4, 118.4, 188.4);
  ctx.bezierCurveTo(118.3, 188.1, 118.3, 187.9, 118.2, 187.6);
  ctx.bezierCurveTo(117.9, 187.5, 117.7, 187.5, 117.4, 187.4);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(118.2, 169.8);
  ctx.bezierCurveTo(118.3, 169.5, 118.3, 169.2, 118.4, 168.9);
  ctx.bezierCurveTo(118.1, 169.0, 117.8, 169.0, 117.5, 169.1);
  ctx.bezierCurveTo(117.5, 169.3, 117.4, 169.6, 117.4, 169.9);
  ctx.bezierCurveTo(117.7, 169.9, 117.9, 169.8, 118.2, 169.8);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(134.3, 178.7);
  ctx.bezierCurveTo(134.3, 178.8, 134.3, 179.0, 134.3, 179.1);
  ctx.lineTo(139.4, 179.1);
  ctx.bezierCurveTo(139.4, 179.0, 139.4, 178.8, 139.4, 178.7);
  ctx.bezierCurveTo(139.4, 178.5, 139.4, 178.4, 139.4, 178.3);
  ctx.lineTo(134.3, 178.3);
  ctx.bezierCurveTo(134.3, 178.4, 134.3, 178.5, 134.3, 178.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(116.7, 178.3);
  ctx.lineTo(110.6, 178.3);
  ctx.bezierCurveTo(110.6, 178.4, 110.6, 178.5, 110.6, 178.7);
  ctx.bezierCurveTo(110.6, 178.8, 110.6, 179.0, 110.6, 179.1);
  ctx.lineTo(116.7, 179.1);
  ctx.bezierCurveTo(116.7, 179.0, 116.7, 178.8, 116.7, 178.7);
  ctx.bezierCurveTo(116.7, 178.5, 116.7, 178.4, 116.7, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(109.7, 178.3);
  ctx.lineTo(104.7, 178.3);
  ctx.bezierCurveTo(104.6, 178.4, 104.6, 178.5, 104.6, 178.7);
  ctx.bezierCurveTo(104.6, 178.8, 104.6, 179.0, 104.7, 179.1);
  ctx.lineTo(109.7, 179.1);
  ctx.bezierCurveTo(109.7, 179.0, 109.7, 178.8, 109.7, 178.7);
  ctx.bezierCurveTo(109.7, 178.5, 109.7, 178.4, 109.7, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(126.4, 178.3);
  ctx.lineTo(117.6, 178.3);
  ctx.bezierCurveTo(117.6, 178.4, 117.6, 178.5, 117.6, 178.7);
  ctx.bezierCurveTo(117.6, 178.8, 117.6, 179.0, 117.6, 179.1);
  ctx.lineTo(126.4, 179.1);
  ctx.bezierCurveTo(126.4, 179.0, 126.4, 178.8, 126.4, 178.7);
  ctx.bezierCurveTo(126.4, 178.5, 126.4, 178.4, 126.4, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(133.4, 178.3);
  ctx.lineTo(127.3, 178.3);
  ctx.bezierCurveTo(127.3, 178.4, 127.3, 178.5, 127.3, 178.7);
  ctx.bezierCurveTo(127.3, 178.8, 127.3, 179.0, 127.3, 179.1);
  ctx.lineTo(133.4, 179.1);
  ctx.bezierCurveTo(133.4, 179.0, 133.4, 178.8, 133.4, 178.7);
  ctx.bezierCurveTo(133.4, 178.5, 133.4, 178.4, 133.4, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(134.3, 178.3);
  ctx.lineTo(133.4, 178.3);
  ctx.bezierCurveTo(133.4, 178.4, 133.4, 178.5, 133.4, 178.7);
  ctx.bezierCurveTo(133.4, 178.8, 133.4, 179.0, 133.4, 179.1);
  ctx.lineTo(134.3, 179.1);
  ctx.bezierCurveTo(134.3, 179.0, 134.3, 178.8, 134.3, 178.7);
  ctx.bezierCurveTo(134.3, 178.5, 134.3, 178.4, 134.3, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(110.6, 178.3);
  ctx.lineTo(109.7, 178.3);
  ctx.bezierCurveTo(109.7, 178.4, 109.7, 178.5, 109.7, 178.7);
  ctx.bezierCurveTo(109.7, 178.8, 109.7, 179.0, 109.7, 179.1);
  ctx.lineTo(110.6, 179.1);
  ctx.bezierCurveTo(110.6, 179.0, 110.6, 178.8, 110.6, 178.7);
  ctx.bezierCurveTo(110.6, 178.5, 110.6, 178.4, 110.6, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(127.3, 178.3);
  ctx.lineTo(126.4, 178.3);
  ctx.bezierCurveTo(126.4, 178.4, 126.4, 178.5, 126.4, 178.7);
  ctx.bezierCurveTo(126.4, 178.8, 126.4, 179.0, 126.4, 179.1);
  ctx.lineTo(127.3, 179.1);
  ctx.bezierCurveTo(127.3, 179.0, 127.3, 178.8, 127.3, 178.7);
  ctx.bezierCurveTo(127.3, 178.5, 127.3, 178.4, 127.3, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(117.6, 178.3);
  ctx.lineTo(116.7, 178.3);
  ctx.bezierCurveTo(116.7, 178.4, 116.7, 178.5, 116.7, 178.7);
  ctx.bezierCurveTo(116.7, 178.8, 116.7, 179.0, 116.7, 179.1);
  ctx.lineTo(117.6, 179.1);
  ctx.bezierCurveTo(117.6, 179.0, 117.6, 178.8, 117.6, 178.7);
  ctx.bezierCurveTo(117.6, 178.5, 117.6, 178.4, 117.6, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(104.7, 178.3);
  ctx.lineTo(104.6, 178.3);
  ctx.bezierCurveTo(104.6, 178.4, 104.6, 178.5, 104.6, 178.7);
  ctx.bezierCurveTo(104.6, 178.5, 104.6, 178.4, 104.7, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(104.6, 178.7);
  ctx.bezierCurveTo(104.6, 178.8, 104.6, 179.0, 104.6, 179.1);
  ctx.lineTo(104.7, 179.1);
  ctx.bezierCurveTo(104.6, 179.0, 104.6, 178.8, 104.6, 178.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.4, 179.1);
  ctx.lineTo(139.4, 179.1);
  ctx.bezierCurveTo(139.4, 179.0, 139.4, 178.8, 139.4, 178.7);
  ctx.bezierCurveTo(139.4, 178.8, 139.4, 179.0, 139.4, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.4, 178.7);
  ctx.bezierCurveTo(139.4, 178.5, 139.4, 178.4, 139.4, 178.3);
  ctx.lineTo(139.4, 178.3);
  ctx.bezierCurveTo(139.4, 178.4, 139.4, 178.5, 139.4, 178.7);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(139.4, 179.1);
  ctx.lineTo(139.7, 179.1);
  ctx.lineTo(139.7, 178.3);
  ctx.lineTo(139.4, 178.3);
  ctx.bezierCurveTo(139.4, 178.4, 139.4, 178.5, 139.4, 178.7);
  ctx.bezierCurveTo(139.4, 178.8, 139.4, 179.0, 139.4, 179.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Picture/Path
  ctx.beginPath();
  ctx.moveTo(104.6, 178.3);
  ctx.lineTo(104.2, 178.3);
  ctx.lineTo(104.2, 179.1);
  ctx.lineTo(104.6, 179.1);
  ctx.bezierCurveTo(104.6, 179.0, 104.6, 178.8, 104.6, 178.7);
  ctx.bezierCurveTo(104.6, 178.5, 104.6, 178.4, 104.6, 178.3);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text
  ctx.restore();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.save();
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(87.4, 108.6);
  ctx.lineTo(91.5, 108.6);
  ctx.lineTo(93.2, 114.2);
  ctx.lineTo(95.1, 108.6);
  ctx.lineTo(98.5, 108.6);
  ctx.lineTo(100.3, 114.2);
  ctx.lineTo(102.0, 108.6);
  ctx.lineTo(106.0, 108.6);
  ctx.lineTo(102.2, 120.4);
  ctx.lineTo(98.8, 120.4);
  ctx.lineTo(96.7, 114.6);
  ctx.lineTo(94.7, 120.4);
  ctx.lineTo(91.3, 120.4);
  ctx.lineTo(87.4, 108.6);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(112.8, 120.6);
  ctx.bezierCurveTo(111.9, 120.6, 111.1, 120.4, 110.3, 120.1);
  ctx.bezierCurveTo(109.5, 119.8, 108.8, 119.4, 108.3, 118.8);
  ctx.bezierCurveTo(107.7, 118.3, 107.2, 117.6, 106.9, 116.9);
  ctx.bezierCurveTo(106.6, 116.1, 106.4, 115.3, 106.4, 114.5);
  ctx.lineTo(106.4, 114.5);
  ctx.bezierCurveTo(106.4, 113.6, 106.6, 112.8, 106.9, 112.1);
  ctx.bezierCurveTo(107.3, 111.3, 107.7, 110.7, 108.3, 110.1);
  ctx.bezierCurveTo(108.9, 109.6, 109.5, 109.1, 110.3, 108.8);
  ctx.bezierCurveTo(111.1, 108.5, 111.9, 108.3, 112.8, 108.3);
  ctx.bezierCurveTo(113.7, 108.3, 114.6, 108.5, 115.4, 108.8);
  ctx.bezierCurveTo(116.1, 109.1, 116.8, 109.6, 117.4, 110.1);
  ctx.bezierCurveTo(118.0, 110.7, 118.4, 111.3, 118.7, 112.0);
  ctx.bezierCurveTo(119.1, 112.8, 119.2, 113.6, 119.2, 114.4);
  ctx.lineTo(119.2, 114.5);
  ctx.bezierCurveTo(119.2, 115.3, 119.1, 116.1, 118.7, 116.8);
  ctx.bezierCurveTo(118.4, 117.6, 117.9, 118.2, 117.4, 118.8);
  ctx.bezierCurveTo(116.8, 119.3, 116.1, 119.8, 115.3, 120.1);
  ctx.bezierCurveTo(114.6, 120.4, 113.7, 120.6, 112.8, 120.6);
  ctx.closePath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(112.8, 117.1);
  ctx.bezierCurveTo(113.2, 117.1, 113.5, 117.0, 113.8, 116.9);
  ctx.bezierCurveTo(114.1, 116.7, 114.4, 116.5, 114.6, 116.3);
  ctx.bezierCurveTo(114.8, 116.1, 115.0, 115.8, 115.1, 115.5);
  ctx.bezierCurveTo(115.2, 115.2, 115.3, 114.8, 115.3, 114.5);
  ctx.lineTo(115.3, 114.5);
  ctx.bezierCurveTo(115.3, 114.1, 115.2, 113.8, 115.1, 113.5);
  ctx.bezierCurveTo(115.0, 113.1, 114.8, 112.9, 114.6, 112.6);
  ctx.bezierCurveTo(114.4, 112.4, 114.1, 112.2, 113.8, 112.0);
  ctx.bezierCurveTo(113.5, 111.9, 113.2, 111.8, 112.8, 111.8);
  ctx.bezierCurveTo(112.4, 111.8, 112.1, 111.9, 111.8, 112.0);
  ctx.bezierCurveTo(111.5, 112.2, 111.2, 112.4, 111.0, 112.6);
  ctx.bezierCurveTo(110.8, 112.8, 110.7, 113.1, 110.6, 113.4);
  ctx.bezierCurveTo(110.4, 113.7, 110.4, 114.1, 110.4, 114.4);
  ctx.lineTo(110.4, 114.5);
  ctx.bezierCurveTo(110.4, 114.8, 110.4, 115.1, 110.6, 115.5);
  ctx.bezierCurveTo(110.7, 115.8, 110.8, 116.1, 111.1, 116.3);
  ctx.bezierCurveTo(111.3, 116.5, 111.5, 116.7, 111.8, 116.9);
  ctx.bezierCurveTo(112.1, 117.0, 112.5, 117.1, 112.8, 117.1);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(120.3, 108.6);
  ctx.lineTo(126.0, 108.6);
  ctx.bezierCurveTo(127.1, 108.6, 127.9, 108.7, 128.6, 109.0);
  ctx.bezierCurveTo(129.3, 109.2, 129.8, 109.5, 130.2, 109.9);
  ctx.bezierCurveTo(130.6, 110.3, 130.9, 110.7, 131.0, 111.1);
  ctx.bezierCurveTo(131.2, 111.6, 131.3, 112.1, 131.3, 112.7);
  ctx.lineTo(131.3, 112.7);
  ctx.bezierCurveTo(131.3, 113.6, 131.1, 114.3, 130.7, 114.9);
  ctx.bezierCurveTo(130.3, 115.5, 129.7, 116.0, 129.0, 116.3);
  ctx.lineTo(131.7, 120.3);
  ctx.lineTo(127.2, 120.3);
  ctx.lineTo(125.0, 117.0);
  ctx.lineTo(125.0, 117.0);
  ctx.lineTo(124.2, 117.0);
  ctx.lineTo(124.2, 120.3);
  ctx.lineTo(120.3, 120.3);
  ctx.lineTo(120.3, 108.6);
  ctx.closePath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(125.9, 114.2);
  ctx.bezierCurveTo(126.4, 114.2, 126.7, 114.1, 127.0, 113.9);
  ctx.bezierCurveTo(127.3, 113.7, 127.4, 113.4, 127.4, 113.0);
  ctx.lineTo(127.4, 113.0);
  ctx.bezierCurveTo(127.4, 112.6, 127.3, 112.3, 127.0, 112.2);
  ctx.bezierCurveTo(126.7, 112.0, 126.4, 111.9, 125.9, 111.9);
  ctx.lineTo(124.2, 111.9);
  ctx.lineTo(124.2, 114.2);
  ctx.lineTo(125.9, 114.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(132.2, 108.6);
  ctx.lineTo(136.2, 108.6);
  ctx.lineTo(136.2, 117.0);
  ctx.lineTo(141.7, 117.0);
  ctx.lineTo(141.7, 120.3);
  ctx.lineTo(132.2, 120.3);
  ctx.lineTo(132.2, 108.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(142.5, 108.6);
  ctx.lineTo(147.0, 108.6);
  ctx.bezierCurveTo(148.2, 108.6, 149.2, 108.7, 150.1, 109.0);
  ctx.bezierCurveTo(150.9, 109.3, 151.7, 109.7, 152.2, 110.2);
  ctx.bezierCurveTo(152.8, 110.7, 153.3, 111.3, 153.5, 112.0);
  ctx.bezierCurveTo(153.8, 112.7, 154.0, 113.5, 154.0, 114.4);
  ctx.lineTo(154.0, 114.4);
  ctx.bezierCurveTo(154.0, 115.3, 153.8, 116.1, 153.5, 116.8);
  ctx.bezierCurveTo(153.2, 117.5, 152.8, 118.1, 152.2, 118.7);
  ctx.bezierCurveTo(151.6, 119.2, 150.9, 119.6, 150.0, 119.9);
  ctx.bezierCurveTo(149.1, 120.2, 148.1, 120.3, 146.9, 120.3);
  ctx.lineTo(142.5, 120.3);
  ctx.lineTo(142.5, 108.6);
  ctx.closePath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(147.1, 116.9);
  ctx.bezierCurveTo(148.0, 116.9, 148.7, 116.7, 149.2, 116.3);
  ctx.bezierCurveTo(149.8, 115.9, 150.0, 115.3, 150.0, 114.5);
  ctx.lineTo(150.0, 114.4);
  ctx.bezierCurveTo(150.0, 113.6, 149.8, 113.0, 149.2, 112.6);
  ctx.bezierCurveTo(148.7, 112.2, 148.0, 112.0, 147.1, 112.0);
  ctx.lineTo(146.4, 112.0);
  ctx.lineTo(146.4, 116.9);
  ctx.lineTo(147.1, 116.9);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(92.6, 135.2);
  ctx.bezierCurveTo(91.7, 135.2, 91.0, 135.1, 90.2, 134.8);
  ctx.bezierCurveTo(89.5, 134.5, 88.9, 134.1, 88.3, 133.5);
  ctx.bezierCurveTo(87.7, 133.0, 87.3, 132.4, 87.0, 131.6);
  ctx.bezierCurveTo(86.6, 130.9, 86.5, 130.0, 86.5, 129.1);
  ctx.lineTo(86.5, 129.1);
  ctx.bezierCurveTo(86.5, 128.2, 86.6, 127.4, 87.0, 126.7);
  ctx.bezierCurveTo(87.3, 125.9, 87.7, 125.3, 88.3, 124.7);
  ctx.bezierCurveTo(88.8, 124.2, 89.5, 123.8, 90.3, 123.4);
  ctx.bezierCurveTo(91.0, 123.1, 91.8, 123.0, 92.7, 123.0);
  ctx.bezierCurveTo(93.3, 123.0, 93.9, 123.1, 94.5, 123.2);
  ctx.bezierCurveTo(95.0, 123.4, 95.5, 123.6, 96.0, 123.8);
  ctx.bezierCurveTo(96.4, 124.1, 96.8, 124.4, 97.1, 124.8);
  ctx.bezierCurveTo(97.5, 125.2, 97.8, 125.6, 98.0, 126.0);
  ctx.lineTo(94.8, 127.9);
  ctx.bezierCurveTo(94.6, 127.5, 94.3, 127.2, 93.9, 126.9);
  ctx.bezierCurveTo(93.6, 126.6, 93.2, 126.5, 92.7, 126.5);
  ctx.bezierCurveTo(92.3, 126.5, 92.0, 126.6, 91.7, 126.7);
  ctx.bezierCurveTo(91.5, 126.8, 91.3, 127.0, 91.1, 127.3);
  ctx.bezierCurveTo(90.9, 127.5, 90.7, 127.8, 90.6, 128.1);
  ctx.bezierCurveTo(90.5, 128.4, 90.5, 128.7, 90.5, 129.1);
  ctx.lineTo(90.5, 129.1);
  ctx.bezierCurveTo(90.5, 129.5, 90.5, 129.8, 90.6, 130.1);
  ctx.bezierCurveTo(90.7, 130.5, 90.9, 130.7, 91.1, 131.0);
  ctx.bezierCurveTo(91.3, 131.2, 91.5, 131.4, 91.8, 131.5);
  ctx.bezierCurveTo(92.0, 131.6, 92.3, 131.7, 92.7, 131.7);
  ctx.bezierCurveTo(93.2, 131.7, 93.7, 131.6, 94.0, 131.3);
  ctx.bezierCurveTo(94.3, 131.0, 94.6, 130.7, 94.9, 130.2);
  ctx.lineTo(98.1, 132.0);
  ctx.bezierCurveTo(97.8, 132.5, 97.6, 132.9, 97.2, 133.3);
  ctx.bezierCurveTo(96.9, 133.7, 96.5, 134.0, 96.0, 134.3);
  ctx.bezierCurveTo(95.6, 134.6, 95.1, 134.8, 94.5, 134.9);
  ctx.bezierCurveTo(93.9, 135.1, 93.3, 135.2, 92.6, 135.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(98.9, 123.2);
  ctx.lineTo(102.8, 123.2);
  ctx.lineTo(102.8, 134.9);
  ctx.lineTo(98.9, 134.9);
  ctx.lineTo(98.9, 123.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(107.2, 126.6);
  ctx.lineTo(103.7, 126.6);
  ctx.lineTo(103.7, 123.2);
  ctx.lineTo(114.5, 123.2);
  ctx.lineTo(114.5, 126.6);
  ctx.lineTo(111.1, 126.6);
  ctx.lineTo(111.1, 134.9);
  ctx.lineTo(107.2, 134.9);
  ctx.lineTo(107.2, 126.6);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(115.4, 123.2);
  ctx.lineTo(119.4, 123.2);
  ctx.lineTo(119.4, 134.9);
  ctx.lineTo(115.4, 134.9);
  ctx.lineTo(115.4, 123.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(120.4, 132.2);
  ctx.lineTo(125.7, 126.5);
  ctx.lineTo(120.6, 126.5);
  ctx.lineTo(120.6, 123.2);
  ctx.lineTo(131.3, 123.2);
  ctx.lineTo(131.3, 126.0);
  ctx.lineTo(126.0, 131.7);
  ctx.lineTo(131.3, 131.7);
  ctx.lineTo(131.3, 134.9);
  ctx.lineTo(120.4, 134.9);
  ctx.lineTo(120.4, 132.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(132.2, 123.2);
  ctx.lineTo(142.2, 123.2);
  ctx.lineTo(142.2, 126.5);
  ctx.lineTo(136.1, 126.5);
  ctx.lineTo(136.1, 127.6);
  ctx.lineTo(141.8, 127.6);
  ctx.lineTo(141.8, 130.5);
  ctx.lineTo(136.1, 130.5);
  ctx.lineTo(136.1, 131.7);
  ctx.lineTo(142.3, 131.7);
  ctx.lineTo(142.3, 134.9);
  ctx.lineTo(132.2, 134.9);
  ctx.lineTo(132.2, 123.2);
  ctx.closePath();
  ctx.fill();

  // layer1/World Citizen/WC Text/Compound Path
  ctx.beginPath();

  // layer1/World Citizen/WC Text/Compound Path/Path
  ctx.moveTo(143.4, 123.2);
  ctx.lineTo(147.0, 123.2);
  ctx.lineTo(151.2, 128.4);
  ctx.lineTo(151.2, 123.2);
  ctx.lineTo(155.1, 123.2);
  ctx.lineTo(155.1, 134.9);
  ctx.lineTo(151.6, 134.9);
  ctx.lineTo(147.2, 129.5);
  ctx.lineTo(147.2, 134.9);
  ctx.lineTo(143.4, 134.9);
  ctx.lineTo(143.4, 123.2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.restore();
  ctx.restore();
}
