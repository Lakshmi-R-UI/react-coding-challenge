describe('App Loads', () => {
  it('Visits the todo app', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[id="add-task"]').type('Shopping')
    cy.get('button[id="add-task-btn"]').click();

    cy.get('input[id="add-task"]').type('Learning')
    cy.get('button[id="add-task-btn"]').click();

    cy.get('input[id="add-task"]').type('Working')
    cy.get('button[id="add-task-btn"]').click();

    cy.get('input[id="add-sub-task-Shopping"]').type('Grocery')
    cy.get('button[id="add-sub-task-btn-Shopping"]').click();

    cy.get('input[id="add-sub-task-Learning"]').type('React')
    cy.get('button[id="add-sub-task-btn-Learning"]').click();

    cy.get('input[id="add-sub-task-Learning"]').type('HTML')
    cy.get('button[id="add-sub-task-btn-Learning"]').click();

    cy.get('input[id="Learning"]').click();

    cy.get('input[id="search-bar"]').type('Working')
  })
})