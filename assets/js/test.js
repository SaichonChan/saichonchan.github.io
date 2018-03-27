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

//ทางลัด
// function update_data(id,number) {
//     $("#"+String(id)).text(String(number));
// }


//จะรันก่อนเมื่อเปิดหน้า index
$( document ).ready(function() {
    console.log("starting document!!!!");

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
            }
            else {
              console.log("need to parse this key " + data.key)
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
