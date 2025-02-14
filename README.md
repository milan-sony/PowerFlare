# 🔋 PowerFlare

A web app that monitors phone battery percentage and gives an alert when the battery reaches a certain limit

> Even though there are many applications, I just wanted to build one of my own

### ⚙ Tech stack:

- Frontend: HTML, CSS, JavaScript

- Battery Status API:navigator.getBattery()

### 🌟Key Features
Battery Status Display: Shows whether the device is charging, the battery percentage, expected charging time, and expected discharging time.
Notification System: Users can enable notifications, which will alert them when the battery reaches a certain level.

### ❗ Keep in mind

⚠ Battery API works only on secure contexts (HTTPS)

⚠ Some browsers don't support navigator.getBattery()

- Chrome, Edge, and some Android browsers support it. Safari (iOS) does not support it, so it won't work on iPhones
