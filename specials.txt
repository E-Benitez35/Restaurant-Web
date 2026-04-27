"use strict";

/*  Author: E35
     Date:  5/13/2025              
     
     Filename: specials.js*/

/*Array holds specials items*/
var Item = [

    {
    "Image" : "Images/Tacos.jpg",
    "IteName" : "3 Tacos",
    "Price" : "5.99"
    },

    {
    "Image" : "Images/Loaded Fries.jpg",
    "IteName" : "Loaded Fries",
    "Price" : "4.99"
    },

    {
    "Image" : "Images/mozzarella sticks.jpg",
    "IteName" : "Mozzarella Sticks",
    "Price" : "3.99"
    },

    {
    "Image" : "Images/Fried Chicken.jpg",
    "IteName" : "Fried Chicken",
    "Price" : "6.99"
    },

    {
    "Image" : "Images/Cajun.jpg",
    "IteName" : "Cajun Bowl",
    "Price" : "6.99"
    }
];

/*Variable will hold data for menu table in specials html*/
const PopulateTable = document.querySelector("table#specialsTable tbody");

/*Loop will insert data from array to specials*/
Item.forEach( Item =>
{
    /*Creates tr to write in menu hmtl table*/
    var row = document.createElement("tr");

    /*Writes following data into table from array*/
    row.innerHTML = `<th><img src= "${Item.Image}" alt = "photo of ${Item.IteName}"></th>
    <th> ${Item.IteName}</th>
    <th> $${Item.Price}</th>`;
    
    /*Will append data to variable that holds html table*/
    PopulateTable.appendChild(row);

}
)