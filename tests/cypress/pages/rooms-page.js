/// <reference types="cypress" />

//Elements
const CREATE_ROOM_BTN = "h2 > .btn"
const ROOM_LIST = ".room"
const DROP_DOWN_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
const EDIT_BTN = ".menu > :nth-child(1)"
const HEADER = "h2 > div"
const EDIT_CATEGORY_FIELD = ":nth-child(1) > select"
const EDIT_NUMBER_FIELD = ":nth-child(4) > input"
const EDIT_FLOOR_FIELD = ":nth-child(5) > input"
const EDIT_AVAILABLE_CHECK_BOX = ".checkbox"
const EDIT_PRICE_FIELD = ":nth-child(7) > input"
const EDIT_FEATURES_FIELD = ":nth-child(8) > input"
const SAVE_BTN = ".blue"

//Functions

function viewNewRoom(content) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

function verifyLastRoom(category, number, floor, price, feature) {
    cy.get(ROOM_LIST).last()
    .should("contain", category)
    .and("contain", number)
    .and("contain", floor)
    .and("contain", price)
    .and("contain", feature)
   

}

function editLastRoom(name, mail, number, content1/*, content2*/) {
  //  cy.get(CLIENT_LIST).last()
   // .should("contain", name)
  //  .and("contain", mail)
   // .and("contain", number)

    cy.get(DROP_DOWN_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.get(EDIT_NAME_FIELD).clear()
    cy.get(EDIT_EMAIL_FIELD).clear()
    cy.get(EDIT_PHONE_FIELD).clear()

    cy.get(EDIT_NAME_FIELD).type(name)
    cy.get(EDIT_EMAIL_FIELD).type(mail)
    cy.get(EDIT_PHONE_FIELD).type(number)
    cy.get(SAVE_BTN).click()
    cy.get(HEADER).should("contain", content1) //Client: 2
   // cy.contains(content2)

}

function deleteLastRoom() {
    // cy.get(CLIENT_LIST).last()
     cy.get(DROP_DOWN_BTN).last().click()
     cy.get(DELETE_BTN).click()
 
 }

//Exports
exports.default = {
   viewNewRoom,
   verifyLastRoom
   // deleteLastClient,
   // editLastClient
}