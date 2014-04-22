function quyenCaroInit () {
  var quyenCr = {};
  quyenCr.lineXYSize = 23;
  quyenCr.totalLine = 27;
  var xoSize = quyenCr.lineXYSize - 3;
  var RectSize = quyenCr.lineXYSize - 2;
  quyenCr.canvasWidth = quyenCr.totalLine * quyenCr.lineXYSize;
  quyenCr.canvasHeight = quyenCr.canvasWidth;
  quyenCr.createObject = function () {
    quyenCr.stage = new Kinetic.Stage({
      container: 'container',
      width: quyenCr.canvasWidth,
      height: quyenCr.canvasHeight
    });
    quyenCr.layer = new Kinetic.Layer();
  };

  quyenCr.createObject();

  quyenCr.FillBackground = function () {
    var rect = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: quyenCr.canvasWidth,
      height: quyenCr.canvasHeight,
      fill: '#E0E0E0'
    });
    quyenCr.layer.add(rect);
  };

  quyenCr.XOFill = function (isX, x, y) {
    var imageObj = new Image();
    imageObj.src = isX ? 'images/Caro_X.jpg' : 'images/Caro_O.jpg';
    imageObj.onload = function () {
      var XO = new Kinetic.Image({
        x: x,
        y: y,
        image: imageObj,
        width: xoSize,
        height: xoSize
      });
      // add the shape to the layer
      quyenCr.layer.add(XO);
      quyenCr.stage.add(quyenCr.layer);
    };
  };

  quyenCr.RectFill = function () {
    var beginY = 0, beginX = 0;
    for (var i = 1; i <= quyenCr.totalLine; i++) {
      beginX = 0;
      for (var j = 1; j <= quyenCr.totalLine; j++) {
        var rect = new Kinetic.Rect({
          x: beginX,
          y: beginY,
          width: RectSize,
          height: RectSize,
          fill: '#FCFCFC',
          clicked: false
        });
        // Listener click event
        rect.on('click', function () {
          if (!this.attrs.clicked) {
            quyenCr.XOFill(false, this.getX(), this.getY());
          }
          this.attrs.clicked = true;
        });
        // add the shape to the layer
        quyenCr.layer.add(rect);
        beginX += quyenCr.lineXYSize;
      }
      beginY += quyenCr.lineXYSize;
    }
  };

  quyenCr.FillBackground();
  quyenCr.RectFill();
  quyenCr.stage.add(quyenCr.layer);
}

$(document).ready(function () {
  quyenCaroInit();
});
