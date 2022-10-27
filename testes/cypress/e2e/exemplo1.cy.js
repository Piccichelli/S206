/// <reference types ="cypress"/>

describe('Criando cenario de teste para o site globalsqa', () => {

  it.skip('Caso de teste: Registrando um usuario no site com sucesso', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Pedro')
    cy.get('#Text1').type('Piccichelli Carvalho')
    cy.get('#username').type('Piccichelli')
    cy.get('#password').type('123123')
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text', 'Registration successful')

  })

  it.skip('Caso de teste: Registrando um usuario com falha (faltando senha)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Pedro')
    cy.get('#Text1').type('Piccichelli Carvalho')
    cy.get('#username').type('Piccichelli')
    cy.get('#password').type('123123')
    cy.get('#password').clear()

    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')

  })


  it('Caso de teste: Realizando login com sucesso', () => {

    let info = criarUsuario()

    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")

  })

})

function criarUsuario() {

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()

  let user = horas + minutos + segundos + 'Id'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}