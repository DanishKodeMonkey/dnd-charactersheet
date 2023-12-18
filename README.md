### dnd-charactersheet
## A react project to manage a personal character sheet digitally when playing the tabletop RPG Dungeons and dragons

The idea came to me during a session of playing Dungeons and Dragons 3.5e with friends, growing increasingly tired
of writing and erasing, and writing on top of the same piece of paper, causing creases, and low readability.
That and after the 3rd cup of coffee to spill it got really tiresome to rewrite.

Searching around, most modern webapp solutions to handle characters in a mobile format either focuses around 5e, the newer editions.
So why not try my hand at creating a lightweight 3.5e character sheet?

### What is this?
DnD-character sheet uses a react-bootstrap solution for the front end presentation for the user, and management of character data
as well as a mongoDB backend database to store the characters data in a Json format

Initially i had a interest of diving into the world of frameworks after getting a solid handle on the 
root elements of web development, HTML, CSS, and Javascript. 
React-Bootstrap offered a interesting approach to modularising the project, offering a easy approach to structuring,
and managing individual parts of the projects, without nessecarily breaking everything else. This also allowed for easy
debugging, as each individual components fail statement would easily point towards the problematic module.

The decision to use a mongoDB backend solution for storing the persistence of character data came from the idea of 
storing a single characters data on a single file and storing it under a unique ID, creating a loading and saving
in much a similar way of writing and filling out a real life character sheet. 

Just without all the eraser rubber all over the place.


### WIP

The project is still in development, alot of the react-bootstrap work is done, as well as the data handling

What I still want to do is create a math component in the front end, using javascript to perform the maths of 
what attributes are linked to what skills and a abilities, and raise/lower associated attributes and stats automatically.
Like how strength adds to the fortification save rolls, constitution links to health points. ETC.

And in a more permanent persistence I also need to set up a module to format the data arrays currently saved, in a Json format.
And set up a mongo DB database to store the Jsons for later loading.
THis would also be where I just realised dockerising the project would be an ideal thing to do.
