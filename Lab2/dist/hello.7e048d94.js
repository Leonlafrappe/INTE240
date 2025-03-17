var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
document.write(greeting);
document.write("<br>");
document.write("Current time is " + hourNow + ":" + minutesNow);

//# sourceMappingURL=hello.7e048d94.js.map
