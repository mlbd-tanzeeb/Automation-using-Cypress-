describe ("Learning fixture", () =>{
    before ( function (){
        cy.fixture ('example').then (function (fileData){
            globalThis.mydata = fileData;
        })
    })
    it ("Negative testing of contact us page",()=>{
        cy.visit ("http://www.webdriveruniversity.com/")
    cy.get ('#contact-us').invoke ('removeAttr','target').click({force:true})
     cy.get ('[name="first_name"]').type (mydata.first_name);
   cy.get ('[name="last_name"]').type (mydata.last_name);
  //cy.get ('[name="email"]').type (mydata.email);
     cy.get ('textarea.feedback-input').type ("This is test blog")
       cy.get ('[type="submit"]').click();
       cy.get('body').should ('have.text','\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
       //cy.get('body').containts ('\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n');
    //cy.ContactForm_Submission(mydata.first_name,"","",
     //  "This is test blog",'body', 'Error: all fields are required!');
    });
    
    })
    