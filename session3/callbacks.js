let hello = function (name, callback) {
  setTimeout(function () {
    console.log("hello " + name);
    callback();
  }, 2000);
};

hello("Naresh", function () {
  console.log("task completed");
});
let verifyAdhar = function (name, callback) {
  setTimeout(function () {
    if (adharDB.indexOf(name) > -1) {
      //-1 if not exists
      callback(name + " Congratilation your name is valid");
    } else {
      callback(name + " Please check ,your name not exists");
    }
  }, 2000);
};

verifyAdhar("Naresh",function(resp){
    console.log(resp);
})

verifyAdhar("Rohith",function(msg){
    console.log(msg);
})



currentBalance=1000;
withDraw(1500)//

CheckBlance()//
finalAmount();


///

