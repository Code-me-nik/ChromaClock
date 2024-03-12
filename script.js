
setInterval( newtime , 1000 );
var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

var week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY" ];


function newtime(){
  let time = new Date();

  //this is day
  document.getElementById("day").innerHTML = time.getDate();

  //this is weekdays
  document.getElementById("weekname").innerHTML = week[time.getDay()]

  // this is month 
  document.getElementById("month").innerHTML = month[time.getMonth()];

  // this is hour 
  document.getElementById("hour").innerHTML = time.getHours() ;

  // this is minute 
  document.getElementById("minute").innerHTML = time.getMinutes() ;

  // this is second 
  document.getElementById("second").innerHTML = time.getSeconds() ;
};
