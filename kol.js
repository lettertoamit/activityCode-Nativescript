// const LinearLayout = android.widget.LinearLayout;
// const LayoutParams = android.widget.LinearLayout.LayoutParams;
// const TextView = android.widget.TextView;
// const Button = android.widget.Button;
// const Gravity = android.view.Gravity;
  var Context = android.content.Context;
  var Sensor = android.hardware.Sensor;
  var SensorEvent =  android.hardware.SensorEvent;
  var SensorEventListener =  android.hardware.SensorEventListener;
  var SensorManager =  android.hardware.SensorManager;
// var Bundle =  android.os.Bundle;
  var AppCompatActivity =  android.support.v7.app.AppCompatActivity;
// var Menu =  android.view.Menu;
// var MenuItem =  android.view.MenuItem;
// var Animation =  android.view.animation.Animation;
// var RotateAnimation =  android.view.animation.RotateAnimation;
// var ImageView =  android.widget.ImageView; 
  var act  = android.app.Activity;
// const Observable = require("tns-core-modules/data/observable").Observable;
// const Page = require("tns-core-modules/ui/page").Page;
 var application = require('application');
const MainActivity = android.app.Activity.extend("com.tns.NativeScriptActivity", {
    interfaces:[SensorEventListener],
    onCreate: function (savedInstanceState) {
        this.super.onCreate(savedInstanceState);


  var sensorManager = this.getSystemService( 
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
    android.hardware.Sensor.TYPE_MAGNETIC_FIELD
  );
console.log("accelerometer = ",accelerometer); 
sensorManager.registerListener(
    sensorActivity,
    accelerometer,
    android.hardware.SensorManager.SENSOR_DELAY_NORMAL
  );
        //  sensorManager = SensorManager.getSystemService(Context.SENSOR_SERVICE);
        // compass = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
        // if(compass != null){
        //     sensorManager.registerListener(this, compass, SensorManager.SENSOR_DELAY_NORMAL);
        // } 
         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@working");
        // creating LinearLayout
        // let linLayout = new android.widget.LinearLayout(this);
        // // specifying vertical orientation
        // linLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
        // // creating LayoutParams - accessing static class LayoutParams of LinearLayout
        // let linLayoutParam = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT); 
        // // set LinearLayout as a root element of the screen 
        // this.setContentView(linLayout, linLayoutParam);

        // let lpView = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        // let tv = new android.widget.TextView(this);
        // tv.setText("TextView");
        // tv.setLayoutParams(lpView);
        // linLayout.addView(tv);

        // let btn = new android.widget.Button(this);
        // btn.setText("Button");
        // linLayout.addView(btn, lpView);


        // let leftMarginParams = new android.widget.LinearLayout.LayoutParams(
        //         android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        // leftMarginParams.leftMargin = 50;

        // let btn1 = new android.widget.Button(this);
        // btn1.setText("Button1");
        // linLayout.addView(btn1, leftMarginParams);


        // let rightGravityParams = new android.widget.LinearLayout.LayoutParams(
        //         android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        // rightGravityParams.gravity = android.view.Gravity.RIGHT;

        // let btn2 = new android.widget.Button(this);
        // btn2.setText("Button2");
        // linLayout.addView(btn2, rightGravityParams);
    }
});

 

// const MainActivity = AppCompatActivity.extend("com.tns.NativeScriptActivity",{ 
//      onCreate: function (savedInstanceState) {
 
//         _super.onCreate(savedInstanceState);         // creating LinearLayout
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@working");
//         // act.setContentView(android.R.layout.activity_compass);
//         // image = ImageView.findViewById(android.R.id.imageViewCompass);
//         // compassAngle = TextView.findViewById(android.R.id.angle);
//         // sensorManager = SensorManager.getSystemService(Context.SENSOR_SERVICE);
//         // compass = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
//         // if(compass != null){
//         //     sensorManager.registerListener(this, compass, SensorManager.SENSOR_DELAY_NORMAL);
//         // }
//     },onCreateOptionsMenu( menu) {
//         // Inflate the menu; this adds items to the action bar if it is present.
//         // getMenuInflater().inflate(R.menu.menu_compass, menu);
//         // return true;
//     },onOptionsItemSelected( item) {
//         // Handle action bar item clicks here. The action bar will
//         // automatically handle clicks on the Home/Up button, so long
//         // as you specify a parent activity in AndroidManifest.xml.
//         // var id = item.getItemId();
//         // //noinspection SimplifiableIfStatement
//         // if (id == R.id.action_settings) {
//         //     return true;
//         // }
//         // return super.onOptionsItemSelected(item);
//     },onResume() {
//         _super.onResume();
//         // sensorManager.registerListener(this, compass, SensorManager.SENSOR_DELAY_NORMAL);
//     },onPause() {
//         _super.onPause();
//         // sensorManager.unregisterListener(this);
//     },onSensorChanged(  event) {
//         // var degree = Math.round(event.values[0]);
//         // compassAngle.setText("Heading: " + Float.toString(degree) + " degrees");
//         // // create a rotation animation (reverse turn degree degrees)
//         // var ra = new RotateAnimation(currentDegree, -degree, Animation.RELATIVE_TO_SELF, "0.5f", Animation.RELATIVE_TO_SELF,"0.5f");
//         // // how long the animation will take place
//         // ra.setDuration(210);
//         // // set the animation after the end of the reservation status
//         // ra.setFillAfter(true);
//         // // Start the animation
//         // image.startAnimation(ra);
//         // currentDegree = -degree;
//     },onAccuracyChanged(  sensor,   accuracy) {
//     } 
// });

// var page; 
// var frame = require('ui/frame');

function onAccuracyChanged(sensor, accuracy) {
  console.log('onAccuracyChanged:', accuracy);
}

function onSensorChanged(event) { 
  // var myPage = frame.topmost().currentPage;
  //  const vm = new Observable();
  //   vm.set("x","this");
  //   page.bindingContext = vm;
   alert("#########################################################");

    var alpha = event.values[0], beta = event.values[1], gamma = event.values[2];
     alert('azimuth'+ alpha); //z axis rotation [0,360)
   // alert('pitch'+ beta);  //x axis rotation [-180, 180]
  //   alert('roll'+ gamma); //y axis rotation [-90, 90]

      
      var   heading = 360 - alpha; //heading = alpha; // 
     if (heading > 359 || heading < 1) {  
       alert("N");  
      }
      else if (heading > 179 && heading < 181){ 
       alert("S");  
      }  


 

}

function onPageLoaded(args) {
page = args.object;
alert("#########################################################");
}
exports.onPageLoaded = onPageLoaded; 




 
//  function radians_to_degrees(radians)
// {
//   var pi = Math.PI;
//   return radians * (180/pi);
// }
// var  angleFromCoordinate = function(lat1, long1, lat2, long2) {
//     var dLon = (long2 - long1); 
//     var y = Math.sin(dLon) * Math.cos(lat2); 
//     var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
//     var brng = Math.atan2(y, x);
//     brng = radians_to_degrees(brng); 
//     brng = (brng + 360) % 360;
//     brng = 360 - brng; // count degrees counter-clockwise - remove to make clockwise
//     return brng;
// }
