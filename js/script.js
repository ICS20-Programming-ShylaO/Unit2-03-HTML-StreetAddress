// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street number and name and displays it back to user

	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)
  // get street name from text field
  let streetName = document.getElementById("street-name").value
  // display name and age back to user
  document.getElementById('user-info').innerHTML = "You live on " + streetNumber + " " +
 streetName + "."
}
