/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as newClientPage from "../pages/new-client-page"

import * as roomsPage from "../pages/rooms-page"
import * as newRoomPage from "../pages/new-room-page"

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();


describe("Testsuite",() => {
    beforeEach(() => {
        cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01","GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview") 
    });

   // it("Login and Logout", () => {
    //   indexPage.logoutUser("Login")
   // });


it.only("Create a new client", () => {
  indexPage.viewClients("Clients")
 // cy.percySnapshot("FIRST SNAP");
  clientsPage.viewNewClient("New Client")
  newClientPage.createNewClient(randomName, randomMail, randomPhone, "Clients")
  clientsPage.verifyLastClient(randomName, randomMail, randomPhone)
  cy.wait(500)
});
     
/*
     it.only("Create a new client", () => {
        indexPage.viewClients("Clients")
       // cy.percySnapshot("FIRST SNAP");
        clientsPage.viewNewClient("New Client")
        newClientPage.createNewClient("USER1", "user1@mail.com","0123456789","Clients")
        clientsPage.verifyLastClient("USER1", "user1@mail.com","0123456789","Clients")
        cy.wait(500)
      });
      
     


      it.only("Edit last client", () => {
       // indexPage.viewClients("Clients")
       // clientsPage.viewNewClient("New Client")
       indexPage.viewClients("Clients")
        clientsPage.editLastClient("USER2", "user2@mail.com","9876543210","Clients")
        clientsPage.verifyLastClient("USER2", "user2@mail.com","9876543210","Clients")
        cy.wait(500)
    
      });
      
      
      it.only("Delete last client", () => {
        indexPage.viewClients("Clients")
        //clientsPage.viewNewClient("New Client")
        clientsPage.deleteLastClient()
        cy.wait(500)
     
      });
*/

/////

/*

      it.only("Create a new room", () => {
        indexPage.viewRooms("Rooms")
        roomsPage.viewNewRoom("New Room")
        newRoomPage.createNewRoom("double","2","3","2000","balcony","Rooms")
        roomsPage.verifyLastRoom("double","2","3","2000","balcony","Rooms")
        cy.wait(500)
 
      });
      
*/
      

     
      //  after(() => {
        //        indexPage.logoutUser("Login")         
      //  });
    //afterEach(() => {
    //    indexPage.logoutUser("Login")         
     //          });
          

}); 