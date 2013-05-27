$(function() {
  var printArea = window.frames.printArea;

  $('#load').click(function() {
    var $iframe = $(printArea.document);
    $iframe.find('#name').text('矿井');
  });

  $('#print').click(function() {
    printArea.focus();
    printArea.print();
  });
});
