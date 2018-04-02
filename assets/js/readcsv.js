$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://dl.dropbox.com/s/w297jnbjtkjmq0c/COMID.csv?dl=0",
        dataType: "text",
        success: function(data) {processData(data);}
     });
     console.log('got data successfully')
});

function processData(allText) {
    var $select = $(".substations");
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
         var data = allTextLines[i].split(',');
         // console.log(data)
         // console.log(headers.length)
         // console.log(data[1])
         if (data.length == headers.length) {
             $select.append($('<option></option>').val(data[1]).html(data[1]))
         }
     }

    //var sub = 'test'
    //for (var i=1; i<allTextLines.length; i++) {
    //    var data = allTextLines[i].split(',');
    //    if (sub != data[0]) {
    //        $select.append($('<option></option>').val(data[0]).html(data[0]))
    //    }
    //    sub = data[0]
  //  }
//    console.log('got data successfully' + lines)
    // alert(lines);
}
