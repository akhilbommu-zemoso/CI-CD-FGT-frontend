// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { render } from "react-dom"

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('upload_file', (fileName, fileType, selector) => {
    cy.get(selector).then(subject => {
      cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, { type: fileType })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el.files = dataTransfer.files
          cy.wrap(subject).trigger('change', { force: true })
        })
    })
  })



  Cypress.Commands.add('check_uploaded_file', (fileName, fileType, selector) => {
    cy.get(selector).then(subject => {
      cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
            const reader = new FileReader();
            const testFile = new File([blob], fileName, { type: fileType })
            reader.readAsDataURL(testFile);
            reader.onload = (event) => {
                let fileContent = event.target.result;
                let photoData = fileContent.split(",")[1];
                const user = JSON.parse(localStorage.getItem("user"));
                if(photoData!=user.profilePicture.photoBlob)
                  throw new Error("Image didn't save to database")
            }
        })
    })
  })

  Cypress.Commands.add('image_to_base64', (fileName, fileType, selector) => {
    return new Cypress.Promise((resolve,reject)=>{
      cy.get(selector).then(subject => {
        cy.fixture(fileName, 'base64')
          .then(Cypress.Blob.base64StringToBlob)
          .then(blob => {

            const reader = new FileReader();
            const testFile = new File([blob], fileName, { type: fileType })
            reader.readAsDataURL(testFile);
            reader.onload = (event) => {
                let fileContent = event.target.result;
                let photoData = fileContent.split(",")[1];
                const user = JSON.parse(localStorage.getItem("user"));
                console.log("abcdefgh commands",photoData)
                resolve(photoData);
            }
        })
    })
    })

})