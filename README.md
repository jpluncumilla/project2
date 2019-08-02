# Disaster Relief App

### Why did we create The Disaster Relief App?

The Disaster Relief App was created to help the rescuers locate and give the help everyone one needs more efficient.

### What does Disaster Relief App? 

In the users side the App offer the option to register. Everyone who register might provide important information about themselves and their family members.
The user can add their address and then they will take to another page where can provide **Name**, **Age**, **if they have pets**,  **Disability or Special Condition** also they can add ("optional")  **picture**. Once the user finish to complete the registration the app store the information in a database that just would have acces the rescue team. Why is important to give this information? In case of disaster it will helpful if the rescuers know the information about each address this way they can check who needs immediately help based in this information. Also the rescuers would know how many people they are looking for in certain address, if is there a pet, if somebody requires special help or assistance. 

In the rescuers side the App give them a kind of beacon through their cellphones camera or another device. The App will show a marker in each address with information about that address.

### What is the Disaster Relief App? 

The Disaster Relief App is designed to aid rescuers in locating and accessing the need of civilians in during or after a Disaster.

#### Starting Steps: 
1. On the homepage got to "Find me" 
2. First type in your address. **This is required** 
3. Add the information for each person living in that address: 
    * Name 
    * Age
    * Any pet in that address?
    * Disability or Special Condition
4. Then press **submit**!

#### Rescuer Usage instructions:
1. On the homepage got to "QR Login"
2. Scan the designated login QR Code.
3. proceed to a red marker(Downward pointing arrow).
4. once you are close proximity tap the marker a popup will appear with the residents':
    * Name 
    * Age
    * Any pet in that address?
    * Disability or Special Condition
0. (Additional details.)    
When tapped the marker will turn green to confirm it has been viewed.
<br />To close the popup tap anywhere outside of the popup.

### The QR
* With the current iteration of authentication, once the QR is scanned the express server checks the packet header for the request for the "referrer" to confirm the QR is being scanned from the Disaster Relief App provided QR code scanner. If the referrer matches Disaster Relief App provided QR code scanner will got to the rescuer augment reality navigator, if not the page is redirected to the google homepage, This is to protect the privacy of any participants using this app.

* once on the rescuer augment reality navigator the page url is generated dynamically and is not stored after load to ensure so the url cannot be saved to and distributed for malicious use, if the page is refreshed  the user will be directed to the QR scanner to rescan and as such re-authenticate.

![alt QR Login](../media/images/QR.png?raw=true)

## Built With

* CSS 
* HTML 
* [BOOTSTRAP](https://getbootstrap.com/)
* JAVASCRIPT
* [JQUERY](https://jquery.com/)
* [A-Frame](https://aframe.io/)
* NODE.JS
* EXPRESS.JS
* EXPRESS-HANDLEBARS
* SEQUELIZE 
* MySQL
* [CLOUDINARY](https://cloudinary.com/)
* [MAP QUEST API](https://developer.mapquest.com/documentation/)

## Developers

* [RAFAEL UZCATEGUI](https://github.com/Rafaelias86)
* [JORDAN MILLER](https://github.com/nanofuxion)
* [JUAN PABLO LUNCUMILLA](https://github.com/iamjpyo)
* [FERNANDO VALLE](https://github.com/sodastereo87)
* [YUBEL RIBOT](https://github.com/yubel26)
