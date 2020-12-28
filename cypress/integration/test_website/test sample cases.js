describe("test suite", function(){

    it ('visit website', function(){
    
    cy.visit('http://www.webdriveruniversity.com/')
    
    })
    
    it ('mutiple tab handle & drop down', function(){

        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')


        })

        it ('checkbox', function(){

            cy.get("input[value='option-1']").check().should('be.checked')
            cy.get("input[value='option-3']").uncheck().should('not.be.checked')
            cy.get("input[value='option-2']").check().should('be.checked')
    
            })
   
            it ('redio button', function(){

                cy.get('[value="blue"]').click();
                })
       
    })

