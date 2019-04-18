/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const KabalocatorViewModel = require("./kabalocator-model");
const config = require("./config");
const httpModule = require("http");
var SlidesModule = require("nativescript-slides");
var geolocation = require("nativescript-geolocation");
let abcd = require( "nativescript-localstorage" );
const view = require("tns-core-modules/ui/core/view");
var accelerometer = require("nativescript-accelerometer-advanced");



var orientation = require('nativescript-orientation');



const Observable = require("tns-core-modules/data/observable").Observable;

var nm = 0, t=0,view_new=null;




function onPageLoadedOut(args,res) {
    orientation.enableRotation();
    accelerometer.stopAccelerometerUpdates();
}
exports.onPageLoadedOut = onPageLoadedOut;



function onPageLoadedIn(args,res) {
    orientation.disableRotation();

}
exports.onPageLoadedIn = onPageLoadedIn;








function onPageLoaded1(args,res) {
    var a = abcd.getItem("login");
    a = JSON.parse(a);
    if(a.user_details.language == "Melayu") {
        lang = languages.languages.Melayu[0];
    }
    else {
        lang = languages.languages.English[0];
    }
    var page = args.object;
    // slideContainer = page.getViewById('homepageslider');
    //sliderlable5
    var ind = res.index;
    var prayer_name = res.name;
    // slideContainer.goToSlide(ind);
    var ind1 = ind + 1;
    //console.log("sliderlable"+ind);
    var randNumber = res.counter;
    var prayer_time = res.prayer_time;
    var totalSeconds= '';
    var timermoduldid = setInterval(() => {
                                    //
                                    if(randNumber != 0)
                                    {
                                        randNumber--;
                                        var totalSeconds = randNumber;
                                        var hours   = Math.floor(totalSeconds / 3600 );
                                        var minutes = Math.floor(totalSeconds % 3600 / 60);
                                        var seconds = totalSeconds % 60;
                                        if(hours < 10)
                                        {
                                            hours = "0"+hours;
                                        }
                                        if(minutes < 10)
                                        {
                                            minutes = "0"+minutes;
                                        }
                                        if(seconds < 10)
                                        {
                                            seconds = "0"+seconds;
                                        }
                                        var result = [hours, minutes, seconds].join(':');
                                        var tx1 = '';
                                        var tx = prayer_time;
                                        tx1 = lang.Time_Remaining+' : '+result;
                                    }
                                    else
                                    {
                                        clearInterval(timermoduldid);
                                        var tx = prayer_time;
                                    }
                                    // view.getViewById(page,"sliderlable1").text = tx;
                                    // view.getViewById(page,"sliderlable11").text = lang.Next_Prayer+' : '+prayer_name;
                                    // view.getViewById(page,"sliderlable111").text = tx1;
                                    var h1css = "margin-top: 27%;width: 100%;text-align: center;color: #ffffff;font-size: 35;font-weight: 500;text-shadow: -2px 2px #000000; text-decoration:none; line-hight:15; height:100%; padding:0;"
                                    var h2css = h1css+"margin-top:0;font-size: 25; margin-bottom:0;";
                                    var ind1 = 1;
                                    view.getViewById(page,"sliderlable1").html = "<h1 style='"+h1css+"'>"+tx+"</h1>";
                                    view.getViewById(page,"sliderlable11").html = "<h1 style='"+h2css+"'>"+lang.Next_Prayer+' : '+prayer_name+"</h1>";
                                    if(tx1 != undefined) {
                                        view.getViewById(page,"sliderlable"+ind1+ind1+ind1).html = "<h1 style='"+h2css+"'>"+tx1+"</h1>";
                                    }}, 1000);
}






var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CLLocationManagerDelegateImpl = /** @class */ (function (_super) {
    __extends(CLLocationManagerDelegateImpl, _super); // native delegates mostly always extend NSObject
    function CLLocationManagerDelegateImpl() {
        console.log("test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1", "");
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CLLocationManagerDelegateImpl.new = function () {
        console.log("test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2", "");
        return _super.new.call(this); // calls new() on the NSObject
    };
    CLLocationManagerDelegateImpl.prototype.didUpdateHeading = function (data) {
        console.log("test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@3", "");
    };
    CLLocationManagerDelegateImpl.prototype.locationManagerDidUpdateHeading = function (data,a) {
        console.log("test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@4", data );
        console.log("test@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@5", a.toString().split(" ")[1] );
        onSensorChanged(a.toString().split(" ")[1]);
    };
    CLLocationManagerDelegateImpl.ObjCProtocols = [CLLocationManagerDelegate]; // define our native protocalls
    return CLLocationManagerDelegateImpl;
}(NSObject // native delegates mostly always extend NSObject
    ));




function onNavigatingTo(args) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!#################");
    const page = args.object;
    var a = abcd.getItem("login");
    a = JSON.parse(a);
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
         //   console.log("Current location is: ", loc);

         latitude = loc.latitude;
         longitude = loc.longitude;
         var link = config.ajaxurl+"?action=get_allprayertimes&latitude="+latitude+"&longitude="+longitude+"&user_id="+a.user_details.ID;;
         httpModule.getJSON(link).then(function(res){
             if(res) {

                 page.bindingContext = new KabalocatorViewModel(page, res);
             }
             else {
                        //onPageLoaded(args,res);
                    }
                },function(){

                });
     }
 }, function(e){
     console.log("Error: " + e.message);
 });

    var now     = new Date();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var crnttm = hour+":"+minute;

    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {


            var latitude = loc.latitude;
            var longitude = loc.longitude;


            t = getBearing( latitude , longitude , 32.6068 , 44.0104   );











            var link = config.ajaxurl+"?action=get_prayertime&latitude="+latitude+"&longitude="+longitude+"&current_time="+crnttm+"&user_id="+a.user_details.ID;
            httpModule.getJSON(link).then(function(res){
                    //alert(JSON.stringify(res));
                    onPageLoaded1(args,res);
                },function(){

                });
        }
    }, function(e){
        console.log("Error: " + e.message);
    });











    vm = new Observable();
    page.bindingContext = vm;

    view_new = page.getViewById("compassrotate");










//var tableViewController = new UIViewController(); // returns a wrapper around a UITableViewController instance
//Object.getPrototypeOf(tableViewController) === UITableViewController.prototype; // returns true

locationmanager = CLLocationManager.alloc().init();
//locationmanager.delegate = tableViewController;

locationmanager.delegate = new CLLocationManagerDelegateImpl();

console.log("@@@@@@@@@@@@@@@@1",locationmanager.stopUpdatingHeading(),CLLocationManager.headingAvailable()
    );
locationmanager.startUpdatingHeading();
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@2",CLLocationManager.headingAvailable() );

locationmanager.didUpdateHeading = function(a,b)
{
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@3",a,b ); 
}



















// accelerometer.startAccelerometerUpdates(function(data) {
//     console.log(" X: " + data.x + " Y: " + data.y + " Z: " + data.z );
// }, { sensorDelay: "ui" });



// var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
// then(function(loc) {
// if (loc) {

// latitude = loc.latitude;
// longitude = loc.longitude;
// //console.log("latitude1 , longitude1",latitude , longitude );
// t = getBearing( latitude , longitude , 32.6068 , 44.0104 );
// // alert(t);
// }
// }, function(e){
// //console.log("Error1: " , e);
// });







}

exports.onNavigatingTo = onNavigatingTo;






function onReturnPress(args) {
    const textField = args.object;
    config.Navigate("home/search",args, textField.text);
}
exports.onReturnPress = onReturnPress;











function onAccuracyChanged(sensor, accuracy) {
//console.log('onAccuracyChanged:', accuracy);
vm.set("x","alpha");
}

function onSensorChanged(alpha) {

//alert("#########################################################");
//var alpha = event.values[0], beta = event.values[1], gamma = event.values[2];
// vm.set("y",nm++);
let deg = t - alpha;
// vm.set("x",alpha );
// vm.set("y",beta );

if(view_new){
    if( deg > 360 )
    {
        deg = 360 - deg ;
    }else if(deg<0){
        deg = 360+deg;
    }
// vm.set("z",deg );
view_new.animate({
    duration: 10,
    rotate: deg
});
}
}


function radians(n) {
    return n * (Math.PI / 180);
}
function degrees(n) {
    return n * (180 / Math.PI);
}





function getBearing(startLat,startLong,endLat,endLong){
    startLat = radians(startLat);
    startLong = radians(startLong);
    endLat = radians(endLat);
    endLong = radians(endLong);

    var dLong = endLong - startLong;

    var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
    if (Math.abs(dLong) > Math.PI){
        if (dLong > 0.0)
            dLong = -(2.0 * Math.PI - dLong);
        else
            dLong = (2.0 * Math.PI + dLong);
    }

    return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
}

