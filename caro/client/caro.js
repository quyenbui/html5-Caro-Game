function quyenCaroInit () {
  var quyenCr = {};
  // Global configuration and initialization library helper for canvas
  // The size of the cells include height and width
  quyenCr.lineXYSize = 23;
  // Total cells
  quyenCr.totalLine = 27;
  // The size of the XO
  var xoSize = quyenCr.lineXYSize - 3;
  var RectSize = quyenCr.lineXYSize - 2;
  // Width of chessboard
  quyenCr.canvasWidth = quyenCr.totalLine * quyenCr.lineXYSize;
  // Height of chessboard
  quyenCr.canvasHeight = quyenCr.canvasWidth;
  // Kinetic library
  quyenCr.stage = new Kinetic.Stage({
    container: 'container',
    width: quyenCr.canvasWidth,
    height: quyenCr.canvasHeight
  });
  quyenCr.layer = new Kinetic.Layer();

  /**
   * Fill Coloring for chessboard
   * @returns {undefined}
   */
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

  /**
   * Append the XO chessman into chessboard
   * 
   * @param {type} isX
   * @param {type} x
   * @param {type} y
   * @returns {undefined}
   */
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

  /**
   * The small square-shaped box containing the Chessmen
   * 
   * @returns {undefined}
   */
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

  // Fill background
  quyenCr.FillBackground();
  // Small box
  quyenCr.RectFill();
  // Show the layer
  quyenCr.stage.add(quyenCr.layer);
}

$(document).ready(function () {
  quyenCaroInit();
});
