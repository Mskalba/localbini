var faker = require('faker');

describe('Add Todo', () => {
    it('Open Todo', () => {
        cy.visit('http://localhost:3000/')

        cy.server()
        cy.route({
            method: "GET",
            url: "*todo*"
        }).as('fetchTodos');
        cy.route({
            method: "POST",
            url: "*todo*"
        }).as('postTodo');

        cy.route({
            method: "DELETE",
            url: "*todo*"
        }).as('deleteTodo');

        cy.wait('@fetchTodos');

        const newTodo = faker.name.jobTitle();
        cy.get('[id="title"]')
            .type(newTodo)
            .should("have.value", newTodo);


        cy.contains("Reset").should("be.visible").click();
        cy.get('[id="title"]')
            .should("have.value", "");

        cy.contains("Reset").should("be.disabled");

        cy.contains("Add").should("be.visible").click();
        cy.contains("Required").should("be.visible")

        const nextTodo = faker.name.jobTitle();

        cy.get('[id="title"]')
            .type(nextTodo)
            .should("have.value", nextTodo);
        cy.contains("Add").should("be.visible").click();

        cy.wait('@postTodo');
        cy.wait('@fetchTodos');
        cy.get('ul').contains(nextTodo).should("be.visible").parent().parent().contains("Edit").should("be.visible").click()

        cy.get('[class="close"]').should("be.visible").click();

        cy.get('[class="modal"]').should("not.be.visible");

        cy.get('ul').contains(nextTodo).should("be.visible").parent().parent().contains("Delete").should("be.visible").click()
        cy.get('ul').contains(nextTodo).should("not.be.visible")
        cy.wait('@fetchTodos');

        cy.end();
    })
})
