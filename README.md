# Gateway-SMS-app
This app makes your smartphone a gateway for sending SMS.

## Images project
![](img_project.png)

### Download apk
* [Download apk](app.apk) and test in your device.

## Getting Started
```
git clone https://github.com/DekoAlencar/Gateway-SMS-app.git
```

### Installing
This project is made with ionic framework and cordova.
Install the dependencies for the project to work.
```
npm install -g ionic cordova
```

## Deployment

Project is run for API's android level 19+.

* **Suggestion** - Use the app [PostMan](https://www.getpostman.com/downloads/) to test requests

### Permission
If you run the app and your device is not allowed to send an sms, add it to AndroidMainfest.xml
```
<uses-permission android:name="android.permission.SEND_SMS" />
```

