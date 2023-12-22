describe("Scenario2",()=>{
    it("Viewport",()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.viewport(414,846)
        cy.wait(1000)
        cy.get(':nth-child(20) > .text-black').click()
        cy.get('#name').type("Rushikesh")
        cy.get('#inputEmail4').type("rushikeshjethure@gmail.com")
        cy.get('#inputPassword4').type("Rushikesh@123")
        cy.get('#company').type("Tech mahindra")
        cy.get('#websitename').type("https://www.linkedin.com/in/rushikesh-jethure-3a95b8264/")
        cy.get('select[name="country"]').select("India")
        cy.wait(1000)
        cy.get('#inputCity').type("Pune")
        cy.get('#inputAddress1').type("Jai complex")
        cy.get('#inputAddress2').type("wagholi")
        cy.get('#inputState').type("Maharashtra")
        cy.get('#inputZip').type("412207")
        cy.injectAxe()
        cy.get('.bg-lambda-900').click()
        cy.get(".success-msg.hidden").should("have.text","Thanks for contacting us, we will get back to you shortly.")
    })
})