# Rock Paper Scissors
### Table of Contents
- [Overview](#overview-and-project-goals)
- [Features](#features)
- [How does this work?](#how-to-pl
- [Project Reflection](#project-reflection)
- [Instructions for Running Project](#Instructions-for-running-project)
- [Authors and Contributors](#credits)

## Overview and Project Goals
The [goal](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html) of this final project for Mod 1 at [Turing School of Software and Design](https://turing.io/) is to build a Rock, Paper, Scissors game from scratch using HTML, CSS, and Vanilla Javascript. Essentially, using all those foundations to build out a fully functioning frontend application! You may view this project [here](https://emorendorff.github.io/rock-paper-scissors/).

## Why was this project created?
This project created to demonstrate our understanding of:
1. Writing DRY JS, HTML and CSS
2. Break down big problems into step by step problems and not rely on outside solutions
3. Understand and really think about separation of the data model and DOM manipulation
4. Utilize event listeners and event delegation

## Features
- A web application that lets users play against a computer for a classic game of rock, paper, scissors, in addition to an option for a "difficult" game variance that applies similar logic with 5 different choices rather than 3.
- User and computer wins are tallied and stored in local storage and displayed in their respective sections.
- User can toggle between classic and difficult modes after any game and their wins will still be carried over.

**[Back to top](#table-of-contents)**

## How to play
- When the game loads, the user will see a left section displaying their emoji 🧑🏼‍🎤, display name (Human) and wins and a right section displaying the computer emoji 🖥 and wins. The main section directs the user to **Choose Your Game** and displays a *Classic* version and a *Difficult* version. The rules of the game are laid out in these displays and have a hover feature to indicate they are features to be clicked.
![Landing Page]()
- Based on the user's game choice, 3 or 5 icons will appear on the screen for classic and difficult modes, respectively. Rock, Paper, Scissors for Classic. Chompy, Boo, Koopa, Mario and Piranha Plant for Difficult (a Super Mario Bros. theme!)
![Choose Fighter]()
- The user may hover over their selection and click to choose their fighter. The computer will then make it's choice based on a randomized index and both fighters will be displayed.  The game will result in either a Human win, Computer win, or draw. Wins will be displayed and incremented by one, draws will simply result in playing again, with neither side adding to their wins.
![Wins Displayed]()
- User has the option to refresh the page and have their wins kept in local storage. They will also keep their wins stored if the user clicks the "Change Game?" button to switch between the Classic and Difficult Versions.
![Upon Refresh]()

**[Back to top](#table-of-contents)**

## Instructions for Running Project Locally
1. Clone this [repository.](https://github.com/emorendorff/rock-paper-scissors)
2. `cd` into the repository in your terminal.
3. Then `open index.html` in your terminal to view it on your browser.

## Technologies Used
<p align="left">
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="html5"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</p>

## Project Reflection

##### Wins
- We got to iteration 5 and were able to experiment with local storage.
- Our CSS styling improved.
- Better understanding of Data Model and the DOM and manipulating HTML elements.

##### Challenges
- I ran into a few bugs around target ids, where clicks needed to be very specifically placed on the page or else they wouldn't work or would show up as broken links. With some help, I did a workaround where I used ids
- Another bug was happening as an edge case where you could go through and play and then refresh and every so often upon refresh and then selecting the classic game, the classic fighter options were no longer displaying. My displayChooseFighter function was outside of the if blocks in the newGame function to limit repetitive code, but that is where the bug was happening, so I invoked the function in if blocks and the bug no longer is happening. Longer code, sure, but I chose to prioritize functionality above all else.
- Getting started! This was our first project without specific iterations to work off of and it was one where all HTML, CSS, assets, and JS files were on us to build out alone. I broke down each step loosely on paper and did a bit of wireframing to really try to approach this step by step so it seemed less daunting.

##### Overall Impressions and Wins
- I DID IT!! IT WORKS!!
- I improved my semantic HTML and got rid of unnecessary <div> elements per feedback from our last group project.
- I learned how to really break down my thinking, even if it was hard to approach at first and seemed overwhelming.
- I cleaned up some code, utilized the debugger feature and tracked down some issues, even if finding solutions to bug fixes wasn't always pretty.

#### Future Features
- Could utilize the Player class to have users instantiate their own player rather that the given instantiation, i.e. type in your name, choose your own token etc.
- Advanced CSS and animations for the fighter icons
- A full clear of the game which could delete wins from storage and start completely fresh

## Credits
#### Authors
@emorendorff

#### Project Manager
@kaylaewood

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/04/27
**[Back to top](#table-of-contents)**
