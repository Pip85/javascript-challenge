# **javascript-challenge**

Build web page that includes a dynamic table of UFO sightings.<br>

## **software/tools used**

* HTML 5<br>
* Bootstrap 5<br>
* CSS
* JavaScript

## **resources**
* Background and datasets provided as part of Georgia Tech Data Analytics Boot Camp:<br>
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.<br>
* https://github.com/Pip85/javascript-challenge/blob/main/UFO-level-1/static/js/data.js

## **project background**

* The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
* There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.
* That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide, (StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.
* You can handle this... right? The planet Earth needs to know what we have found!
* This code includes HTML and CSS files producing a webpage
of UFO Sightings.  Formatting of the page includes the CSS, as well
as, two images, one for the Earth picture displayed on the site and one
for the UFO icon in the top left corner.

## **acknowledgement**

* Background and datasets provided as part of Georgia Tech Data Analytics Boot Camp:<br>
* https://github.com/Pip85/javascript-challenge/blob/main/UFO-level-1/static/js/data.js<br>
* © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

* Project Author:  Valerie Pippenger - https://github.com/Pip85

## **process**

*The assignment was to add a table to the existing website, listing 
date, location, shape and duration for several UFO sightings within the
first half of January 2010.  Comments related to each sighting are
also included in the table.
* JavaScript was used to pull in table data on the site.  Rows were added
to the table to hold the data and the data was then appended into
the table data section.
* The table is interactive by entering a date into the filter search
form and either clicking the form button or hitting enter.  
* JavaScript code includes an event listener triggered by the form button click or
click of enter button.  The code then pulls the user input and runs
a function then displaying the table.

![header](https://github.com/Pip85/javascript-challenge/blob/main/UFO-level-1/static/Images/nasa.jpg)

![table]()


The Javascript function, findSightings, is run upon the event trigger.
This function prevents page refresh, and gathers the value of user
input.  The next step in the function is a conditional that 
determines whether the event trigger included properly formatted
date input or no input. 

If user input includes a valid date, the code filters the table
data to show information for that date only.  The table is first
cleared of input, data is filtered for the user input and the 
filtered table is displayed.  

If the user inputs a date in the wrong format, no table data is 
shown.  If the user clicks the filter table or hits enter without 
entering a date, the entire table is shown.

