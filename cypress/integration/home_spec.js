/// <reference types="cypress" />

describe("Test HomePage", () => {
  it("Show list product success!", () => {
    // expect(true).to.equal(true);
    cy.visit("http://127.0.0.1:3000");
    cy.get(".swiper-slide-active > .w-full").should("have.attr", "src");
    cy.get(".bg-cover").contains("Shop Nows");
  });
  it("Show list product fail!", () => {
    // expect(true).to.equal(true);
    cy.visit("http://127.0.0.1:3000");
  });
});
