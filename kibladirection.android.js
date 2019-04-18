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
var orientation = require('nativescript-orientation');



const Observable = require("tns-core-modules/data/observable").Observable;
var utils = require("utils/utils");
var context = utils.ad.getApplicationContext();
var nm = 0, t=0,view_new=null;




function onPageLoadedOut(args,res) {
  orientation.enableRotation();
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
                                    view.getViewById(page,"sliderlable1").text = tx;
                                    view.getViewById(page,"sliderlable11").text = lang.Next_Prayer+' : '+prayer_name;
                                    view.getViewById(page,"sliderlable111").text = tx1;
                                  }, 1000);
  }
  function onLoaded(args) {
   // alert(orientation.getOrientation());  
    // May be required for < Android 7.0
    const nativeView = args.object.android; 
    if (nativeView) {
      nativeView.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
        // nativeView.setGravity(android.view.Gravity.CENTER_VERTICAL);
        //nativeView.setTextColor(0xffffff);
        //console.log(android.view);
        //nativeView.setShadowLayer(1, 0, 0, Color.BLACK);
        //  nativeView.setTextColor(android.graphics.Color.parseColor(0xffffff) );

        //    const htmlView = this.htmlView.nativeElement.android;
        const LINK_MASK_NONE = 0;
              //   const parsedHtmlString = android.text.Html.fromHtml("12321");
              const textColor = android.graphics.Color.parseColor("#ffffff");
              const linkColor = android.graphics.Color.parseColor("#ffffff");
              const backgroundcolor = android.graphics.Color.parseColor("#000000");
               // const assets = androidApp.context.getAssets();
              //  const typeface = android.graphics.Typeface.createFromAsset(assets, this.fontLocation + fs.path.separator + this.font);
              nativeView.setAutoLinkMask(LINK_MASK_NONE);
             //   nativeView.setText(parsedHtmlString);
             nativeView.setTextColor(textColor);
             nativeView.setLinkTextColor(linkColor);
             nativeView.setShadowLayer(20,5, 0,backgroundcolor ); 
             nativeView.setTextSize(32);
                // nativeView.setTypeface( android.graphics.Typeface.DEFAULT_BOLD);
             //   nativeView.setTypeface(typeface);
           } 
         }
         function onLoaded2nd(args) {
    // May be required for < Android 7.0
    const nativeView = args.object.android; 
    if (nativeView) {
      nativeView.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
        //nativeView.setTextColor(0xffffff);
        //console.log(android.view);
        //nativeView.setShadowLayer(1, 0, 0, Color.BLACK);
        //  nativeView.setTextColor(android.graphics.Color.parseColor(0xffffff) );

        //    const htmlView = this.htmlView.nativeElement.android;
        const LINK_MASK_NONE = 0;
              //   const parsedHtmlString = android.text.Html.fromHtml("12321");
              const textColor = android.graphics.Color.parseColor("#ffffff");
              const linkColor = android.graphics.Color.parseColor("#ffffff");
              const backgroundcolor = android.graphics.Color.parseColor("#000000");
               // const assets = androidApp.context.getAssets();
              //  const typeface = android.graphics.Typeface.createFromAsset(assets, this.fontLocation + fs.path.separator + this.font);
              nativeView.setAutoLinkMask(LINK_MASK_NONE);
             //   nativeView.setText(parsedHtmlString);
             nativeView.setTextColor(textColor);
             nativeView.setLinkTextColor(linkColor);
             nativeView.setShadowLayer(20,5, 0,backgroundcolor ); 
             nativeView.setTextSize(22);
               // nativeView.setTypeface(Typeface.DEFAULT_BOLD);
             //   nativeView.setTypeface(typeface);
           } 
         }
         exports.onLoaded = onLoaded;
         exports.onLoaded2nd = onLoaded2nd;
         function onNavigatingTo(args) {
           const page = args.object;
           var a = abcd.getItem("login"); 
           a = JSON.parse(a);
           var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
           then(function(loc) {
             if (loc) {
               console.log("Current location is: ", loc);
               
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
           
           

           var sensorManager = context.getSystemService(
             android.content.Context.SENSOR_SERVICE
             ),
           accelerometer,
           sensorActivity;
           console.log("sensorManager = ",sensorManager); 
           
           sensorActivity = new android.hardware.SensorEventListener({
             onAccuracyChanged: onAccuracyChanged,
             onSensorChanged: onSensorChanged
           });

           console.log("sensorActivity = ", sensorActivity);
           
           accelerometer = sensorManager.getDefaultSensor(
             android.hardware.Sensor.TYPE_ORIENTATION
             );
           console.log("accelerometer = ",accelerometer); 
           sensorManager.registerListener(
             sensorActivity,
             accelerometer,
             android.hardware.SensorManager.SENSOR_DELAY_NORMAL
             );

           var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
           then(function(loc) {
             if (loc) {

               latitude = loc.latitude;
               longitude = loc.longitude;
               console.log("latitude1 , longitude1",latitude , longitude ); 
               t = getBearing( latitude , longitude , 32.6068 , 44.0104   );
              // alert(t); 
            }
          }, function(e){
            console.log("Error1: " , e);
          });

           
         }

         exports.onNavigatingTo = onNavigatingTo;

         function onReturnPress(args) {
           const textField = args.object;
           config.Navigate("home/search",args, textField.text);
         }
         exports.onReturnPress = onReturnPress;



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



         function onAccuracyChanged(sensor, accuracy) {
           console.log('onAccuracyChanged:', accuracy);
           vm.set("x","alpha");
         }

         function onSensorChanged(event) {
           
   //alert("#########################################################");
   var alpha = event.values[0], beta = event.values[1], gamma = event.values[2];
     // vm.set("y",nm++);
     let deg = t - alpha;
     // vm.set("x",alpha );
     // vm.set("y",beta );
     
     if(view_new){
       if( deg > 360 )
       {
         deg  = 360 - deg ;
       }else if(deg<0){
         deg = 360+deg;
       }
      // vm.set("z",deg ); 
      view_new.animate({
        duration: 10,
        rotate: deg  
      }); 
    }

     // if( alpha <  deg +5 && alpha >  deg - 5  )
     // {
     //   alert("karbala");
     // }
     
   }
