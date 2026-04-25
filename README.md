My Social Profile App - Homework 10

CIST2381: Mobile Application Development    
Assignment: State and Data in React Native

App Overview

This is an interactive Social Profile app built with React Native and Expo.  
It shows proper state management, component communication, controlled inputs, and derived data.

Users can:
- View and edit their profile
- Like/unlike with live counter
- Follow/unfollow with follower count
- Toggle interests
- See live statistics

How to Run the App

1. Clone the repo
2. Install dependencies
3. Start the app
4. Press A to open in the Android emulator

All main state is in App.js:
- User
- isLiked + likeCount
- isFollowing + followerCount
- interest

EditableProfileSection has its own local state for editing. 
Derived Data: The number of selected interests is calculated and not stored. 

Data Flow

- App.js holds all the state
- Child components receive data through props
- Child compendets send updates back using callback functions.

Features

-Edit name and bio
- like/follow buttons with counters
- tap to toggle interests
- live stats
- personal profile picture

Tricky Parts 

managing edit mode with temporary values 


