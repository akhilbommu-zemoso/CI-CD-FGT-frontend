// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')
declare namespace Cypress {
    interface  Chainable<Subject> {
     upload_file(fileName: string,fileType: String, fileInput: String):  void
     image_to_base64(fileName: string,fileType: String, fileInput: String):  Chainable<String>
     check_uploaded_file(fileName: string,fileType: String, fileInput: String):  void
    }

  }
  // declare namespace Cypress2 {

  //   interface  Chainable<Subject> {
  //     check_uploaded_file(fileName: string,fileType: String, fileInput: String):  void
  //    }
  // }

  // declare namespace Cypress3 {

  //   interface  Chainable<Subject> {
  //     image_to_base64(fileName: string,fileType: String, fileInput: String):  String
  //    }
  // }