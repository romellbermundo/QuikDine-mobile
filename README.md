&nbsp;

<div align="center">
<img src="https://github.com/jaredhud/QuikDine-mobile/blob/main/src/img/quik-dine.png?raw=true" alt="QuikDine logo" style="height:80px" />
<br>
Recipe made Easy! - Mobile Repo
</div>
&nbsp;
<div align="center">
<img src="https://badge.fury.io/js/npm.svg"> <img src="https://img.shields.io/badge/compatible-iOS%20%26%20android-blue" > 
<a href="https://spoonacular.com/food-api"> <img src="https://img.shields.io/badge/API-Spoonacular-orange"> </a>
<a href="https://cloud.google.com/vision/"> <img src="https://img.shields.io/badge/API-Google%20Vision-orange"> </a>
</div>

&nbsp;
<div align="center">
<img src="https://github.com/jaredhud/QuikDine-mobile/blob/main/src/img/architecture.jpg?raw=true" alt="QuikDine logo" style="width:100%">
</div>
<!-- <h1 align="center">QuikDine-mobile</h1> -->
&nbsp;
<div>
<a href="https://www.youtube.com/watch?v=kbyUfBJmxLE">
  <img src="https://img.shields.io/badge/DEMO%20-YOUTUBE VID%20%E2%86%92-gray.svg?colorA=5d5d5d&colorB=b30b00&style=for-the-badge" />
<a href="https://github.com/jaredhud/QuikDine-mobile/tree/main/src/img/IU C9 P3 G3.pdf">
<img src="https://img.shields.io/badge/PDF%20-DIGITAL FLYER%20%E2%86%92-gray.svg?colorA=5d5d5d&colorB=ff7605&style=for-the-badge"/></a>
&nbsp;
</div>

# 🍽️ QuikDine — Mobile

**Recipe discovery made easy.**

QuikDine helps you decide what to eat using the ingredients you already have.

Scan items in your pantry, discover recipes based on those ingredients, save your favorites, and invite family or friends to vote on what's for dinner!

This repository contains the **React Native mobile application** for QuikDine.

---

## 📑 Table of Contents

- [About QuikDine](#-about-quikdine)
- [How It Works](#-how-it-works)
- [Key Features](#-key-features)
- [Project Architecture](#️-project-architecture)
- [Mobile App](#-mobile-app)
- [Technologies Used](#️-technologies-used)
- [Installation](#-installation)
- [Server Configuration](#️-server-configuration)
- [Project Repositories](#-project-repositories)
- [Team](#-team)
- [Developer Notes](#-developer-notes)
- [Credits](#-credits)

---

## 📖 About QuikDine

Choosing what to cook can be difficult — especially when you don't know what meals you can make with the ingredients already sitting in your kitchen.

**QuikDine** makes that decision easier.

The mobile application allows users to add ingredients from their pantry using their camera or text input and receive recipe suggestions based on the ingredients available.

Found several good options?

Invite family or friends and let everyone vote on what to make for dinner.

---

## 🔄 How It Works

```text
SCAN OR ENTER
PANTRY ITEMS
      │
      ▼
IDENTIFY INGREDIENTS
      │
      ▼
BUILD YOUR PANTRY
      │
      ▼
FIND RECIPES
      │
      ▼
RECIPE SUGGESTIONS
      │
      ├──────────────► SAVE FAVORITES
      │
      ▼
SHARE & VOTE
      │
      ▼
WHAT'S FOR DINNER?
```

QuikDine brings pantry management, recipe discovery, saved recipes, and group meal selection together in one mobile experience.

---

## ✨ Key Features

### 📸 Item QuikShot

Add ingredients to your pantry using your phone's camera or by entering them manually.

This makes building your digital pantry faster and easier.

### 🔎 Recipe Finder

Discover recipes based on the ingredients currently available in your pantry.

QuikDine communicates with the server, which connects to the **Spoonacular API** to retrieve recipe information.

### 🗳️ Recipe Selector

Can't decide between several recipes?

Create a vote and let family or friends help choose the next meal.

Additional participants can be added to the voting process.

### ❤️ Recipe Storage

Create an account and save favorite recipes so they can be accessed again later.

### 📱 Cross-Platform

QuikDine is built with **React Native and Expo**, allowing the mobile application to support both:

- Android
- iOS

---

## 🏗️ Project Architecture

QuikDine is divided into three connected applications:

```text
                         QUIKDINE
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
     MOBILE APP            SERVER           WEBSITE
    React Native         Node.js /           React
       + Expo             Express
           │                 │                 │
           │                 ▼                 │
           │          SPOONACULAR API          │
           │                                   │
           ├──────────► FIREBASE ◄─────────────┤
           │
           ▼
    GOOGLE VISION API
```

### 📱 Mobile

Provides the primary user experience for:

- pantry management
- ingredient input
- recipe discovery
- saved recipes
- navigation
- meal selection

### ⚙️ Server

Handles backend functionality and communication with external services such as the Spoonacular API.

### 🌐 Website

Allows additional participants to take part in recipe voting.

---

## 📱 Mobile App

This repository contains the **mobile component** of QuikDine.

The application is built with **React Native** and uses **Expo** for development and cross-platform deployment.

The mobile app is responsible for the main user experience, including:

- navigating between application screens
- adding pantry ingredients
- camera-based ingredient input
- displaying recipe information
- managing application state
- storing and retrieving user information
- communicating with the QuikDine server
- managing saved recipes
- starting the meal-selection process

---

## 🛠️ Technologies Used

### Mobile

- React Native
- React
- JavaScript
- Expo
- Expo Go

### APIs & Services

- Spoonacular API
- Google Vision API
- SendGrid

### Backend & Data

- Node.js
- Express.js
- Firebase

### Web

- HTML
- CSS
- JavaScript
- React

### Development & Collaboration

- Git
- GitHub
- Figma
- Trello
- Basecamp
- Discord
- Zoom

---

## 🚀 Installation

QuikDine consists of multiple repositories that work together.

### Requirements

Make sure you have installed:

- Node.js
- npm
- Git
- Expo CLI
- Expo Go on your mobile device

### 1. Clone the mobile application

```bash
git clone https://github.com/jaredhud/QuikDine-mobile.git
cd QuikDine-mobile
```

### 2. Clone the server

```bash
git clone https://github.com/jaredhud/Quikdine-server.git
```

### 3. Clone the voting website

```bash
git clone https://github.com/Kshitija118/QuikDineWebPage.git
```

### 4. Install dependencies

Run the following inside each project repository:

```bash
npm install
```

### 5. Configure the server address

Before starting the mobile application, configure the IP address used to communicate with the QuikDine server.

See the **Server Configuration** section below.

### 6. Start the applications

Run the appropriate start command inside each repository:

```bash
npm run start
```

For mobile development, use **Expo Go** to launch and test the application on a compatible mobile device.

---

## ⚙️ Server Configuration

The mobile application needs the local IP address of the computer running the QuikDine server.

Inside:

```text
src/context/
```

create a file named:

```text
IPAddress.js
```

Add:

```javascript
import { useState } from "react";

export function setIP() {
  // Enter the IP address of the computer running the server.
  const [serverIP, setServerIP] = useState("Your IP address here");

  return { serverIP, setServerIP };
}
```

### Finding Your Local IP Address

On Windows, open Command Prompt and run:

```bash
ipconfig
```

Find the appropriate local IPv4 address and add it to `IPAddress.js`.

Example:

```javascript
const [serverIP, setServerIP] = useState("192.168.1.100");
```

> The mobile device and development computer may need to be connected to the same local network for local server communication.

---

## 📦 Project Repositories

QuikDine is divided into three repositories.

### 📱 Mobile Application

```text
QuikDine-mobile
```

Contains the React Native application and the primary QuikDine user interface.

### ⚙️ Server

```text
Quikdine-server
```

Handles server functionality and communication with external APIs.

### 🌐 Voting Website

```text
QuikDineWebPage
```

Allows participants to vote on recipe choices.

---

## 👥 Team

QuikDine is developed by the **Eggroll Team**:

- **Kshitija Shirsathe**
- **Romell Bermundo**
- **Jared Huddleston**
- **Chris Desmarais** — Scrum Master

The team collaborates across mobile development, backend development, UI/UX, API integration, testing, and project coordination.

---

## 📝 Developer Notes

### React Context

Context is used to transfer application data between different parts of the application.

```text
Screen A
   │
   ▼
 Context
   │
   ├──► Screen B
   │
   └──► Screen C
```

This allows shared information to be accessed across different screens without manually passing data through every component.

### Firebase

Firebase is used for application data storage.

### SendGrid

SendGrid provides email functionality used by QuikDine.

### Navigation

Navigation is handled using both:

- screen navigation
- tab navigation

Folders such as:

```text
_RecipeNav
```

handle parts of the tab-navigation functionality.

### Modals

Modals are used to display pop-ups and contextual information such as help notes.

### Layout

Percentage-based sizing can be used when dividing sections of a page to help create layouts that adapt to different mobile screen sizes.

For example:

```text
Header       10%
Navigation   10%
Content      70%
Footer       10%
```

---

## 🎯 Project Goal

Our goal with QuikDine is simple:

> **Make deciding what's for dinner easier.**

Instead of searching for recipes first and then buying ingredients, QuikDine starts with what you already have.

```text
WHAT DO I HAVE?
       ↓
WHAT CAN I MAKE?
       ↓
WHAT DOES EVERYONE WANT?
       ↓
LET'S EAT!
```

By combining pantry management, camera input, recipe discovery, saved recipes, and group voting, QuikDine provides a practical solution to an everyday problem.

The project also brings together **mobile development, backend services, APIs, cloud data storage, computer vision, and collaborative software development** into one integrated application.

---

## 🙏 Credits

QuikDine uses several open-source technologies and third-party services, including:

- React
- React Native
- Node.js
- Express
- Firebase
- Expo
- Spoonacular
- Google Vision API
- SendGrid

Base logo vector created by **Freepik** from **Flaticon**.
