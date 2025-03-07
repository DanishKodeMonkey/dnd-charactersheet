### DnD-CharacterSheet: Revolutionizing Your Dungeons and Dragons 3.5e Experience


## Overview
DnD-CharacterSheet is a React project designed to provide a seamless digital solution for managing personal character sheets when playing traditional tabletop Dungeons and Dragons 3.5e. 

The inspiration for this project arose from the frustration of traditional paper character sheets, with constant writing, erasing, and coffee spills during intense gaming sessions. 

Most existing web app solutions focus on newer editions, prompting the creation of a lightweight and efficient 3.5e character sheet.

### What sets it apart?

DnD-CharacterSheet leverages a React-Bootstrap solution for the front-end presentation and user interface. The management of character data is seamlessly integrated with a MongoDB backend database, storing information in JSON format.

The choice of React-Bootstrap emerged from a desire to explore frameworks after mastering the fundamental elements of web development—HTML, CSS, and JavaScript. React-Bootstrap provided an intriguing approach to modularizing the project, making it easy to structure and manage individual components without compromising the integrity of the entire system. This modular approach enhances debugging, as each component's failure points directly to the problematic module.

The decision to employ MongoDB for backend storage stems from the idea of treating each character's data as a unique file stored under a distinctive ID. This concept mimics the real-life process of writing and filling out a character sheet, minus the inconvenience of eraser rubbings.

## Dockerizing the Project

To ensure seamless deployment and maintain a clean, isolated environment, DnD-CharacterSheet is Dockerized, consisting of separate containers for the front end, back end, and command API component.

### Front-End Container

The front-end container encapsulates the React-Bootstrap solution, ensuring a self-contained and easily deployable unit. This container manages the user interface and presentation, providing a responsive and dynamic experience for players interacting with their digital character sheets.

### Back-End Container

The back-end container hosts the MongoDB database, handling the storage and retrieval of character data in JSON format. Dockerization of the backend ensures efficient management of data persistence while maintaining flexibility for future updates and improvements.

### Data handling API Component Container

A separate container for the command API component enhances scalability and maintainability. This container manages the communication between the front end and back end, facilitating a seamless and secure flow of data between the front-end and back-end services.

Dockerization enhances the project's portability, making it easy for users to deploy DnD-CharacterSheet across different environments without worrying about dependencies or configuration issues.

### Work in Progress (WIP)

While significant progress has been made on the React-Bootstrap front-end and data handling, there are exciting developments still in the pipeline.

1. Front-End Math Component

The project aims to introduce a math component in the front end, utilizing JavaScript to perform calculations based on attribute-skill and attribute-ability relationships. This feature will dynamically adjust associated attributes and stats, mirroring the intricacies of the game mechanics—such as strength contributing to fortification save rolls and constitution linking to health points.

2. Data Formatting and MongoDB Integration

To achieve permanent persistence, a module will be implemented to format the currently saved data arrays into a JSON format. Additionally, a MongoDB database will be set up to store these JSONs for convenient loading and retrieval. The realization of Dockerizing the project has also surfaced, providing an ideal solution for seamless deployment.

DnD-CharacterSheet is an ongoing project committed to enhancing your Dungeons and Dragons 3.5e gaming experience. Stay tuned for updates and features that will elevate your digital character sheet management to new heights. Thank you for joining us on this exciting journey!
