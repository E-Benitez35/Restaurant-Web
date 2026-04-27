"use strict"

/* This script will contain menu items and it will also populate menu hmtl table

    Author: E35
    Date:  5/13/2025              
     
    Filename: calculate.js */

/*This variable is an array that holds all the info for menu items*/
var Item = [

    {
    "Image" : "Images/Enchilada.jpg",
    "IteName" : "Enchiladas",
    "Price" : "10.99"
    },

    {
    "Image" : "Images/Ribs.jpg",
    "IteName" : "Ribs",
    "Price" : "8.99"
    },    
    
    {
    "Image" : "Images/Steak.jpg",
    "IteName" : "Steak",
    "Price" : "11.99"
    },

    {
    "Image" : "Images/Pasta.jpg",
    "IteName" : "Pasta",
    "Price" : "10.99"
    },

    {
    "Image" : "Images/Spaghetti.jpg",
    "IteName" : "Spaghetti",
    "Price" : "9.99"
    },

    {
    "Image" : "Images/Torta.jpg",
    "IteName" : "Torta",
    "Price" : "6.99"
    }
            
];

/*Variable will hold data for menu table in menu html*/
const PopulateTable = document.getElementById("menu");

/*Loop will insert data from array to menu*/
Item.forEach( Item =>
{
    /*Creates tr to write in menu hmtl table*/
    var row = document.createElement("div");

    /*Writes following data into table from array*/
    row.innerHTML = `<img src= "${Item.Image}" alt = "photo of ${Item.IteName}">
    <h2> ${Item.IteName}</h2>
    <p> $${Item.Price}</p>`;
    
    /*Will append data to variable that holds html table*/
    PopulateTable.appendChild(row);

}
)

