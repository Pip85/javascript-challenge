# javascript-challenge
Build web page that includes a dynamic table of UFO sightings

This code includes HTML and CSS files producing a webpage
of UFO Sightings.  Formatting of the page includes the CSS, as well
as, two images, one for the Earth picture displayed on the site and one
for the UFO icon in the top left corner.

The assignment challenge was to add a table to the site, listing 
date, location, shape and duration for several sightings within the
first half of January 2010.  Comments related to each sighting are
also included in the table.

JavaScript was used to pull in table data on the site.  Rows were added
to the table to hold the data and the data was then appended into
the table data section.

The table is interactive by entering a date into the filter search
form and either clicking the form button or hitting enter.  JavaScript
code includes an event listener triggered by the form button click or
click of enter button.  The code then pulls the user input and runs
a function.

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

