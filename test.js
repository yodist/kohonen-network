// var app = angular.module('app', []);
//
// app.controller('mainCtrl', function($scope) {

  var vektor = [[1,1,0,0],
                [0,0,0,1],
                [1,0,0,0],
                [0,0,1,1]];

  var wei = [[0.2,0.6,0.5,0.9],
            [0.8,0.4,0.7,0.3]];


  var myMath = {};

  myMath.round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };


  var v = 0; // sampe 4
  var a,b;
  var temp = 0;
  var weitemp = 0;
  var res = []; // nampung hasil
  var lpa = 0.6;
  var cond = true;
  var condArr = [[]];
  for (let i=0; i<wei[0].length; i++) {
    condArr.push(true);
  }
  var totalIterasi = 0;
  // function ubahW(data) {
  //
  // }

  while (cond) {
    console.log("Iterasi " + (totalIterasi+1));
    while (v<4) { // iterasi vektor
      // console.log("Iterasi: "+v);
      // console.log(vektor[v]);
      for (let i=0; i<wei.length; i++) { // iterasi w
        // console.log("W"+i+": ");
        for (let j=0; j<vektor[v].length; j++) { // iterasi untuk wei[i] dan vektor[v]
          temp = myMath.round(temp + Math.pow(wei[i][j]-vektor[v][j], 2),4); // memasukkan nilai ke hasil
        }
        // console.log(temp);
        i==0 ? a=temp : b=temp;
        if(i==1) {
          if (a<b) {
            for (let j=0; j<vektor[v].length; j++) {
              weitemp = wei[0][j];
              wei[0][j] = myMath.round(wei[0][j] + lpa * (vektor[v][j]-wei[0][j]),4);
              let selisih=weitemp-wei[0][j];
              // if (selisih<=0.0001 && selisih>=(-0.0001)) {cond = false} else {cond=true};
            }
          } else {
            for (let j=0; j<vektor[v].length; j++) {
              weitemp = wei[1][j];
              wei[1][j] = myMath.round(wei[1][j] + lpa * (vektor[v][j]-wei[1][j]),4);
              let selisih=weitemp-wei[1][j];
              // if (selisih<=0.0001 && selisih>=(-0.0001)) {cond = false} else {cond=true};
            }
          }
        }

        // console.log(wei);
        temp = 0;
      }
      v++;
    }
    v = 0;
    lpa = 0.5 * lpa;
    totalIterasi += 1;
    totalIterasi == 100 ? cond = false : cond = true;
    // console.log("Iterasi " + totalIterasi);
    console.log(wei);
  }

// });
