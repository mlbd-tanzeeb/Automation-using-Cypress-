describe("test suite", function(){

it ('visit dk website', function(){

cy.visit('/')

})
it ('Click login button', function(){

    cy.get('.navbar-right > .btn').click();

    
    })
it ('visit login page', function(){

    cy.visit('/login')
    
    })

it('sign in', function(){
   
   // cy.get(':nth-child(2) > label').type('both@both.com') 
    cy.get('input[name=email]').type('3@dk.com')   
cy.get('input[name=password]').type('123456789')
cy.get('[type=submit]').click();

})

it ('Click Project create icon to view project list page', function(){


    //cy.get('[href="/dashboard/availabilities"]').click();
    cy.get('[href="/dashboard/availabilities"]').click();
    //cy.wait(2000)
    

    cy.get('.btn').click();
    //cy.wait(2000)
    //cy.get('input[id=title]').type('3@dk.com')   
    //cy.get('form > :nth-child(1)').type('both@both.com')  
    cy.get('form > :nth-child(1) > label').type('both@both.com')  
    cy.get('.checkbox-group-title').click();
    cy.get('.checkbox-group > :nth-child(1) > label').click();
    cy.get(':nth-child(3) > .col-md-12')
    cy.get('.col-md-5 > .form-label-group > .form-control').select('北海道')
    
    //cy.get(':nth-child(4) > .col-md-12').click()
    //cy.get(':nth-child(2) > .form-label-group > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click("2020/12/31");
     //First it Clicks on the calendar's field.
     cy.get(':nth-child(3) > .col-md-12').click();
//cy.get('#date').click();
//Then Clicks on current date. 
cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click();
    })

})