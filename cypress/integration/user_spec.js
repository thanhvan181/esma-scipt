/// <reference types="cypress" />

describe("Test User", () => {
  it("Test user login succsecc!", () => {
    // expect(true).to.equal(true);
    cy.server();
    cy.route("**/login", "fixtures:user.json").as("userApi");
    cy.route("**/users", "fixtures:user_list.json").as("userListApi");
    cy.visit("http://127.0.0.1:3000/");
    cy.get("#account-user").click();
    cy.get("#email").type("vanntph17034@fpt.edu.vn");
    cy.get("#password").type("999999999{enter}");
    cy.get("#formSignin > button").click();
    cy.wait("@userApi");
    cy.wait("@userListApi");
  });
  it("Test user login fail!", () => {
    // expect(true).to.equal(true);
  });
});
