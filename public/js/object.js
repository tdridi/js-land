
var myObject = function(){
    this.calimera =  function(){
        var elem = 'Calimera';
        return elem;
    };
    this.watsup =  'Tekanis';
};

var demoObject = document.getElementById("demoObject");
(function(){

    var comma = new myObject();



    var demoObject = document.getElementById("demoComma");
})();

try{
    demoObject.innerHTML = myObject.calimera() + ',' + myObject.watsup;
} catch (e){
    console.log(e.stack);
}
