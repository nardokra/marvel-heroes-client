## Marvel heroes SPA (Coding Challenge)
A SPA that loads in a list of Marvel Super Heroes via an API.
Can be used to search, sort, add, edit, and remove Super Heroes.

### Deliverables
* The list is editable (add-, edit-, remove heroes).
* The list editing is done by a form which has form validation.
* The form validation styling is done via the @material-ui/core Npm package.
* The list is sortable a searchable via the menu/navigation.
* The app is spiced up with shadows, transitions, hover-states.
* The API is set up with Node and Express.
* The app is fully responsive till a min-width of 320px.
* [API repository](https://github.com/nardokra/marvel-heroes-api).

### Technologies used client-side
* ReactJS, as JS framework via [Create React App](https://github.com/facebook/create-react-app).
* Webpack, via Create React App. It configures a "black box" Webpack setup.
* Axios, for the API request.
* Qs, to parse nested structures.
* Material-ui, for styling the form validation.

### Technologies used server-side
* NodeJS
* ExpressJS
* MongoDB
* Mongoose

### Languages
* Javascript
* HTML
* CSS

### Live version
* Hosted via Netlify & Heroku
* Url: [https://marvel-heroes-spa.netlify.app/](https://marvel-heroes-spa.netlify.app/)
* API: [https://marvel-heroes-spa.herokuapp.com/](https://marvel-heroes-spa.herokuapp.com/)

### Setup
To run the application: npm start after installing node modules (npm i). This is the client-side of the application.

`npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### General summary
Decided to go for a SPA with data from Marvel Heroes. 
I really like the X-men series and there was enough data available.
Wanted to create the API myself to showcase that I am able to set up a server to make use of as well React, Node and Express. 
I invested the least amount of time in setting up the API since this was not directly part of the challenge.
I tried to separate the concerns as much as possible. I did this by making use of components
for different website sections and tried to keep the functionalities that are applicable
for these components in the same file. 

I made components for:
* Menu / nav
* Document list
* Form to add and edit
* Home / fallback page

I made use of a separate utility folder for the API request so they would be easy to
reuse in other files and in this way I kept it cleaner.
Finally, I made the SPA responsive and added some animations and hover states.

Really enjoyed working on it!


### Time spend:
1) First drafts of design: 40 min (commits 23 sept)
2) React setup + Npm packs: 10 min (commits 23 sept)
3) Creating logo, searching icons: 10min (commits 24 sept)
4) Styling nav bar with HTML / CSS: 30 min (commits 24 sept)
5) Further designing the list + Styling the list with HTML / CSS: 60 min (commits 25 sept)
6) Creating data JSON to start with, research for API (later replaced by API): 30 min (commits 25 sept)
7) Logic loading in the data in list component: 40 min (commits 25 sept)
8) Installation and setup react-dom-router for mute functionality: 50 min (commits 25 sept)
9) Designed and styled form for adding and editing the documents in the list with HTML / CSS: 60 min (commits 25 sept)
10) Logic for adding, removing documents: 60 min (commits 25 sept)
11) Changed mute functionality to toggle classes instead of loading in components: 30 min (commits 25 sept)
12) First logic for search: 30 min (commits 25 sept)
13) Edit document logic: 20 min (commits 27 sept)
14) Making the form conditional so it would fit both editing and adding documents: 20 min (commits 27 sept)
15) Npm material-ui/core install and reading documentation: 60 min (commits 27 sept)
16) Validation logic: 40 min (commits 27 sept)
17) Search and sorting functionality: 60min (commits 28 sept)
18) Made a small API with Node and Express setup: 15 min. (commits 28 sept)
19) MongoDB databases setup: 30 min (commits 28 sept)
20) Created a data model and create the endpoints for the API requests NodeJS: 75 min (commits 28 sept)
20) Refactoring to have all the functionalities for list in the document list file, to separate concerns: 30min (commits 29 sept)
21) Created the API calls and separated them and tested them: 30min (commits 29 sept)
22) Created deployment environments Heroku + Netlify: 30min (commits 29 sept)
23) Fixed errors occurring in the Dev Tools because of React restrictions: 20min (commits 29 sept)
24) Added en restructured the notes, not everything was correct anymore: 10min (commits 29 sept)
25) Made all styling responsive: 90 min (commits 29 sept)
26) Spicing up and finalizing: 60 min (commits 30 sept)

Total: +/- 16 hours

### Created by
Nardo Kraaijeveld