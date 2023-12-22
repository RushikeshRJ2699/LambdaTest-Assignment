const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
describe('DragAndDropSliders', () => {
  it('Updates the value and UI when changing a range input', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground")
        cy.xpath("//a[normalize-space()='Drag & Drop Sliders']").click()
        cy.wait(2000)
        cy.get(".sp__range-success [type='range']").then(($range) => {
        const range = $range[0];
        nativeInputValueSetter.call(range, 95);
        range.dispatchEvent(new Event('change', { value: 95, bubbles: true }));
        cy.get("#rangeSuccess").should("have.value",95)
    });
  });
});