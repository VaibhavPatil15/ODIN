import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');
Given('searchresult of amazon devices',()=>{
cy.visit("https://www.amazon.in/");
cy.xpath("(//form[@id='nav-search-bar-form']//div[1])[1]").then((gen)=>{
cy.log(gen.length);
for(let i=1;i<=gen.length;i++){
if(gen[i]!=null){
    cy.log("vvvvvvvclicked");
    gen[i].click;
    cy.log("clicked");
}
}
})
cy.xpath('((//div[@class="nav-fill"])[1])//preceding::select//option').then((len)=>{
    cy.log(len.length)
    for(let i=1;i<=len.length;i++)
{
    cy.xpath('((//div[@class="nav-fill"])[1])//preceding::select//option'+"["+i+"]").invoke('text').then( (txt)=>{
        if(txt.includes("Baby")){
            cy.xpath('((//div[@class="nav-fill"])[1])//preceding::select//option'+"["+i+"]").click()
        }
        
    })
    // cy.xpath(len[1]).invoke('text').then((txt)=>{
    //     cy.log(txt)
    // })
}
        
})

})