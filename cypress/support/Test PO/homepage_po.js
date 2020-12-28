import PageElementDemo from './pageElement'
class Homepage_po {
    visitHomepage []{
        cy.visit ("http://www.webdriveruniversity.com/")
    }

    selectContactUSLink(){
        PageElementDemo.getcontactusxpath().invoke('removeAttr','target').click ({force:true})


    }
}
export default Homepage_po;