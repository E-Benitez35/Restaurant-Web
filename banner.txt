"use strict";

/*  Author: E35
     Date:  5/13/2025              
     
     Filename: banner.js*/

/*Array holds images for banner*/
const bannerImages = [

    "images/Cajun.jpg",
    "images/Mex.jpg",
    "images/Pasta.jpg",
    "images/Steak.jpg"
];

/*Index set to 0*/
let currentIndex = 0;

/*Gets images from image folder for index html*/
const Images = document.getElementById("home-image");

/*Will display images one by one for few seconds each*/
setInterval(() => 
{
    currentIndex = (currentIndex + 1) % bannerImages.length;
    Images.src = bannerImages[currentIndex];

}, 3000);