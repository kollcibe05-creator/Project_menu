
# FOODCORE
##### Welcome to Foodcore!!


# Description
The repo has six  files some nested inside the Flatad_folder ;
1. [`index.html`](./Menu_init/index.html) : It defines the structure of our page and is linked to external css and js files making the impressive features you see possible. 
Here, the user votes by clicking the `vote here` button below the image of the animal.

2. [`index.css`](./Menu_init/index.css) : This is the styling file where the liveliness of the page has been replenished. 
This is made possible by use of selectors and giving the elements a feature or outlook.

3. [`index.js`](./Menu_init/index.js) : Via the link to the html file, event listening and execution of callback functions has been rendered possible. 
Alerts and other back-end functionalities have been coded in this file.
4. `README.md` : It is a simply written .md file that descriptively explains what the code entails.
5. [`db.json`](./Menu_init/db.json) : It serves as our API (Application Programming interface).
It stores our data and loads our app page.
6. [`LICENSE.md`](./LICENSE.md)
# Project setup
### index.html
It defines the structure of our FoodCore app containing the default tags where the nodes fetched from the server are to be inserted dynamically via the javascript file. In it is linked a css and js files that defines some vital features and attributes to be included in the FoodCore app. 

### index.css
Styling of the `index.html file` has been done here.
There is use of selectors to identify the elements eg. *img{}*, *dispaly-section*.
Various styles have been applied to the respective elements as can be seen by the comments */**/*

 ### index.js
 It has incorporated many concepts and functionalities in our app as can be depicted via the comments.
 It fetches data from *db.json* file and converts it to a javascript object format by the *fetch* inbuilt command.
 The fetched data is then used to dynamically create a list element that displays the food details using *.innerHTML*.
 *PATCH* and *DELETE*  have been added to the eventListeners on the *cost* button to update the number of remaining serves and deleting a food type  upon completion of the food serves respectively.
 
 ### db.json
 It contains the data that has been  used to dynamically create our web page. For the data to be fetched and rendered follow the steps below:
 1. Install the JSON server globally on your machine if not yet;
 ```sh
 npm install -g json-server
```

 2. Navigate to the folder having the file then type the following in your terminal;
 ```sh
 json-server --watch db.json
 ```  
 You'll now see the contents of the web page rendered if you *go live*
  

## Technologies used
- Markdown
- Javascript
- Github
- JSON
- css
- html 

# Author & License
## Author
#### By *Collins Kibet*
#### Date, 2025/09/26
### License
The contents of this file are within the scope of the syntax provided by the CommonMark Community, 2025.
*All rights reserved.*





## Support and contact details
[`github account`](https://github.com/kollcibe05-creator)