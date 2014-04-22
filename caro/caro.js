function quyenCaroInit () {
  var quyenCr = {};
  quyenCr.lineXYSize = 23;
  quyenCr.totalLine = 27;
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

  quyenCr.DrawTable = function () {
    var LineBegin = 0;
    var draw = function (x, y, x1, y1) {
      var verticalLine = new Kinetic.Line({
        points: [x, y, x1, y1],
        stroke: '#BFAFAF',
        strokeWidth: 1,
        lineCap: 'round',
        lineJoin: 'round'
      });
      quyenCr.layer.add(verticalLine);
    };

    // Draw Line
    for (var i = 0; i <= quyenCr.totalLine; i++) {
      LineBegin += quyenCr.lineXYSize;
      draw(LineBegin, quyenCr.canvasHeight, LineBegin, 0);
      draw(quyenCr.canvasWidth, LineBegin, 0, LineBegin);
    }
  };

  quyenCr.DrawTable();

  quyenCr.stage.add(quyenCr.layer);
}

$(document).ready(function () {
  quyenCaroInit();
});
