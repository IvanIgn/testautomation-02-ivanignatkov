/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as newClientPage from "../pages/new-client-page"

describe("Testsuite",() => {
    beforeEach(() => {
        cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01","GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview") 
    });

   // it("Login and Logout", () => {
    //   indexPage.logoutUser("Login")
   // });

    
    it.only("Create, verify, edit and delete a client", () => {         //"Create, verify and edit a client"
       indexPage.viewClients("Clients")
       clientsPage.viewNewClient("New Client")
       newClientPage.createNewClient("USER1", "user1@mail.com","0123456789","Clients")
       clientsPage.verifyLastClient("USER1", "user1@mail.com","0123456789","Clients")
       clientsPage.editLastClient("USER2", "user2@mail.com","9876543210","Clients")
       clientsPage.deleteLastClient()
       cy.wait(500)
    

      // indexPage.logoutUser("Login")

     });
     
     
     /*
     it.only("Create a new client", () => {
        indexPage.viewClients("Clients")
        clientsPage.viewNewClient("New Client")
        newClientPage.createNewClient("USER1", "user1@mail.com","0123456789","Clients")
        clientsPage.verifyLastClient("USER1", "user1@mail.com","0123456789","Clients")
       // cy.wait(500)
     
 
       // indexPage.logoutUser("Login")
 
      });
      

      it.only("Edit last client", () => {
       // indexPage.viewClients("Clients")
       // clientsPage.viewNewClient("New Client")
        clientsPage.editLastClient("USER2", "user2@mail.com","9876543210","Clients")
        clientsPage.verifyLastClient("USER2", "user2@mail.com","9876543210","Clients")
       // cy.wait(500)
     
 
       // indexPage.logoutUser("Login")
 
      });
      
      
      it.only("Delete last client", () => {
        indexPage.viewClients("Clients")
        //clientsPage.viewNewClient("New Client")
        clientsPage.deleteLastClient()
        cy.wait(500)
     
 
       // indexPage.logoutUser("Login")
 
      });
      */
      

     
      //  after(() => {
        //        indexPage.logoutUser("Login")         
      //  });
    after(() => {
        indexPage.logoutUser("Login")         
                });
          

}); 