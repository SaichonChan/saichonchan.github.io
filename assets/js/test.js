//current energy consumption update picture
 function update_member_profit(status) {
    $("#member_profit").text(String(status));
  }
  function update_Orders(status) {
    $("#Orders").text(String(status));
 }
  function update_order(status) {
     $("#order").text(String(status));
}
  function update_Issue_Reports(status) {
      $("#Issue_Reports").text(String(status));
   }
  function update_Logistics(status) {
       $("#Logistics").text(String(status));
    }

  function update_Payments(status) {
         $("#Payments").text(String(status));
      }
  function update_Revenue(status) {
          $("#Revenue").text(String(status));
       }
  function update_Transactions(status) {
           $("#Transactions").text(String(status));
        }
  function update_IPO_Margin(status) {
          $("#IPO_Margin").text(String(status));
        }
  function update_data(status) {
          $("#node1").text(String(status));
        }

//ทางลัด
// function update_data(id,number) {
//     $("#"+String(id)).text(String(number));
// }




console.log(cause_detail);
//var DateRestore1 = $("#DateRestore1").Date();
function writeUserData(DateOutage,DateRestore1,EquipWork,wheather,status,cause,cause_detail)//,x_coord,y_coord){//, EquipWork, EventID,cause,cause_detail,status,wheather,x_coord,y_coord) {
  firebase.database().ref('OutageCause/' + String(Math.floor(Math.random()*10))).set({
    cause_detail: cause_detail,
    DateRestore1: DateRestore1,
    DateOutage: DateOutage,
    EquipWork: EquipWork,
    EventID:EventID,
    cause:cause,
    cause_detail:cause_detail,
    status:status,
    wheather:wheather,
//    x_coord:x_coord,
//    y_coord:y_coord,

  });
}

//จะรันก่อนเมื่อเปิดหน้า index
$( document ).ready(function() {
    console.log("starting document!!!!");


//สั่งงานปุ่มเมื่อคลิก
$(function ($) {

         $("#firebasebutton").click(function (evt) {
           var cause_detail = document.getElementById("cause_detail").value;
           var DateRestore1 = document.getElementById("DateRestore1").value;
           var DateOutage = document.getElementById("DateOutage").value;
           var EquipWork = document.getElementById("EquipWork").value;
           var wheather = document.getElementById("wheather").value;
           var status = document.getElementById("status").value;
           var cause = document.getElementById("cause").value;
           //var x_coord = document.getElementById("x_coord").value;
           //var y_coord = document.getElementById("y_coord").value;

           console.log(cause_detail,DateRestore1,DateOutage);

           console.log("firebasebutton was clicked")
           writeUserData(DateOutage,DateRestore1,EquipWork,wheather,status,cause,cause_detail)//,x_coord,y_coord)//#DateRestore1, EquipWork, EventID,cause,cause_detail,status,wheather,x_coord,y_coord)
         })
     });

//การส่งจากหน้า html
        // function myFunction() {
      //       var x = document.getElementById("myText").value;
    //         document.getElementById("demo").innerHTML = x;
    //         console.log(x);
    //     }




    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyDQHltyyqYBqgPtA9SMKDbpgAp28RoWvUY",
      authDomain: "stdn3test.firebaseapp.com",
      databaseURL: "https://stdn3test.firebaseio.com",
      projectId: "stdn3test",
      storageBucket: "stdn3test.appspot.com",
      messagingSenderId: "330639168130"
  };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

  //  total_load_activePower = 0;
  // ให้ไปฟังการเปลี่ยนแปลงของ firebase
    var member_profitRef= firebase.database().ref("member");
    var testRef= firebase.database().ref();
member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        // update_data
        // if(data.key == "1PV221445K1200100") {
        //       total_load_activePower  = data.val().load_activePower;
        //   } else
          if (data.key=='member_profit' ){// || data.key==Issue_Reports || data.key==Logistics || data.key==Orders || data.key==Order || data.key==Payments || // Payments,Revenue,Transactions,member_pro}) {
              update_member_profit(parseInt(data.val()));
            }
            else if(data.key=='Orders'){
              update_Orders(parseInt(data.val()));
            }
            else if(data.key=='Issue_Reports'){
              update_Issue_Reports(parseInt(data.val()));
            }
            else if(data.key=='Logistics'){
              update_Logistics(parseInt(data.val()));
            }
            else if(data.key=='order'){
              update_order(parseInt(data.val()));
            }
            else if(data.key=='Payments'){
              update_Payments(parseInt(data.val()));
            }
            else if(data.key=='Revenue'){
              update_Revenue(parseInt(data.val()));
            }
            else if(data.key=='Transactions'){
              update_Transactions(parseInt(data.val()));
            }
            else if(data.key=='IPO_Margin'){
              update_IPO_Margin(parseInt(data.val()));
              // writeUserData('saichon', 'saichon88', 'saichon1067@gmail.com', 'http://www.smeleader.com/wp-content/uploads/2017/02/ธุรกิจฟาร์มสุนัข-“Golden-Amy”-สร้างสุนัขนักล่ารางวัล-ทำรายได้หลักแสนต่อตัว-3.jpg')
            }
            else {
              console.log("need to parse this key " + data.key)
              update_data(parseInt(data.val()));
              // writeUserData(saichon, saichon09, saichon1067@gmail.com, http://www.smeleader.com/wp-content/uploads/2017/02/ธุรกิจฟาร์มสุนัข-“Golden-Amy”-สร้างสุนัขนักล่ารางวัล-ทำรายได้หลักแสนต่อตัว-3.jpg)
            }
    });

  //   var orderRef= firebase.database().ref("job");
  //
  // orderRef.on("child_changed", function(data) {
  //       console.log(data.key);
  //       console.log(data.val());
  //       // if(data.key == "1PV221445K1200100") {
  //       //       total_load_activePower  = data.val().load_activePower;
  //       //   } else
  //         if (data.key == 'Low') {
  //             update_order(parseInt(data.val()));
  //           } else
  //           {
  //             console.log("need to parse this key " + data.key)
  //           }
  //   });





});
