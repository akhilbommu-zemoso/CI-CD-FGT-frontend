import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';

const user_data = require("../../fixtures/user_data.json");
const setting_data = require("../../fixtures/setting_data.json");
const token_data=require("../../fixtures/token.json")
export class Dependencies extends BaseDependencies {

    visitFinancialTransactHomePage(){
        this.accessUrl('http://localhost:3000/dashboard/home');
    }
}

export class RobotEyes extends BaseEyes{

    seesProfileInUrl(){
        this.seesPathNameInUrl("/profile")
    }

    seesDashboardHomeInUrl(){
        this.seesPathNameInUrl("/dashboard/home")
    }

    seesLoginPage(){
        this.seesPathNameInUrl("/")
    }

    seesBasicProfileFormFields(){
        this.seesIdVisible("name")
        this.seesIdVisible("phone")
        this.seesIdVisible("country")
        cy.get('input[type=file]').should('exist')
    }

    seesUpdatedFormData(){
        cy.get('#name')
        .should('have',user_data.name);
        cy.get('#phone')
        .should('have',user_data.phone);
        cy.get('#country')
        .should('have',user_data.country);

    }
    seesSaveButton(){
        cy.get('#button').should('exist');
    }
    seesSuccessMessage(){
        cy.get('.MuiSnackbar-root > .MuiPaper-root')
        .should('have','Changes Saved');
    }

    seesAvatarInHomePage(){
        //cy.get('.MuiIconButton-label > .MuiAvatar-root')
        cy.get('.MuiIconButton-edgeEnd')
        .should('exist')

    }
    seesSettingsFormFields() {
        this.seesDomVisibleWithCustomMatcher('name','setting_settingType1');
        this.seesDomVisibleWithCustomMatcher('name','setting_settingType2');
        this.seesDomVisibleWithCustomMatcher('name','setting_settingType3');
        cy.get('[name="setting_settingType5"]')
        .should('exist');
        cy.get('[name="setting_settingType5"]')
        .should('exist');
        cy.get('[name="setting_settingType6"]')
        .should('exist');
    }

    seesNotificationSettingsFormFields() {
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType1');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType2');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType3');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType4');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType5');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType6');
        this.seesDomVisibleWithCustomMatcher('name','notification_notificationType7');
    }
    seesMessageSettingsFormFields() {
        this.seesDomVisibleWithCustomMatcher('name','message_textMessages');
        this.seesDomVisibleWithCustomMatcher('name','message_emailMessages');
    }

    seesUpdatedUserSettings(){
        cy.get('[name="setting_settingType1"]')
        .should('not.be.checked')

        cy.get('[name="setting_settingType2"]')
        .should('be.checked')

        cy.get('[name="setting_settingType3"]')
        .should('be.checked')

        cy.get('[name="setting_settingType4"]')
        .should('have.value',setting_data.setting.settingType4)

        cy.get('[name="setting_settingType5"]')
        .should('have.value',setting_data.setting.settingType5)

        cy.get('[name="setting_settingType6"]')
        .should('have.value',setting_data.setting.settingType6)
    }

    seesUpdatedNotificationSettings(){

        cy.get('[name="notification_notificationType1"]')
        .should('be.checked')

        cy.get('[name="notification_notificationType2"]')
        .should('not.be.checked')

        cy.get('[name="notification_notificationType3"]')
        .should('be.checked')

        cy.get('[name="notification_notificationType4"]')
        .should('not.be.checked')

        cy.get('[name="notification_notificationType5"]')
        .should('not.be.checked')

        cy.get('[name="notification_notificationType6"]')
        .should('be.checked')

        cy.get('[name="notification_notificationType7"]')
        .should('not.be.checked')

    }

    seesUpdatedMessageSettings(){
        cy.get('[name="message_emailMessages"]')
        .should('not.be.checked')

        cy.get('[name="message_textMessages"]')
        .should('be.checked')

    }
    //Firt child of profile list popup
    seesFirstChildInPopUp(){
        //cy.get('.makeStyles-linksclass-285 > .MuiButtonBase-root')
        //cy.get('.MuiListItemIcon-root > .MuiAvatar-root')
        cy.get('.makeStyles-linksclass-337 > .MuiButtonBase-root > .MuiListItemIcon-root > :nth-child(1)')
        .should('exist')
    }

    seesDeleteMyAccount(){
        cy.get('.makeStyles-linksclass-431')
        .should('exist')
    }
    seesLogoutButton(){
        cy.get(':nth-child(4) > .makeStyles-linksclass-337 > .makeStyles-margin-338 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .should('exist');
    }

    seesSaveButtonDisabled(){
        cy.get('#button')
        .should('be.disabled')
    }
    seesSaveButtonEnabled(){
        cy.get('#button')
        .should('not.be.disabled')
    }
}
export class RobotHands extends BaseHands{

    waitFor1(){
        this.wait(300);
    }

    clickGeneralProfile(){
        this.clickOnDomElement("#simple-tab-1 > .MuiTab-wrapper");

    }

    updateUserNameField(){
        cy.get('#name')
        .clear({force:true})
        .type(user_data.name,{force:true})
        .blur();

    }
    updateInvalidUserNameField(){
        cy.get('#name')
        .clear({force:true})
        .type(user_data.error_data.name,{force:true})
        .blur();

    }
    updatePhoneNumberField(){
        cy.get('#phone')
        .clear({force:true})
        .type(user_data.phone,{force:true})
        .blur();

    }
    updateInvalidPhoneNumberField(){
        cy.get('#phone')
        .clear({force:true})
        .type(user_data.error_data.phone,{force:true})
        .blur();

    }
    updateCountryField(){
        cy.get('#country')
        .clear({force:true})
        .type(user_data.country,{force:true});

        cy.get('#country-option-0')
        .click({force:true});

        cy.get('#country').focus().blur();

    }
    updateProfilePicture(){
        const fileName = user_data.image_file_name;
        const fileType = user_data.image_file_type;
        const fileInput = 'input[type=file]';
        cy.upload_file(fileName, fileType, fileInput);

    }
    clickGeneralProfileTab() {
        this.clickOnDomElement("#simple-tab-1 > .MuiTab-wrapper");
        //cy.get('#simple-tab-1 > .MuiTab-wrapper').click();
    }
    clickBasicProfileTab() {

        //this.clickOnDomElement("#simple-tab-0");
        cy.get('#simple-tab-0 > .MuiTab-wrapper').click();
    }
    changeUserSettings() {
        //setting checkbox1
        cy.get('[name="setting_settingType1"]')
        .uncheck({force:true});

        //setting checkbox2
        cy.get('[name="setting_settingType2"]')
        .check({force:true});


        //setting checkbox3
        cy.get('[name="setting_settingType3"]')
        .check({force:true});


        //setting drop down 1
        cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > :nth-child(1) > .MuiInputBase-root > #demo-simple-select-outlined')
        .click();


        cy.get(`[data-value=${setting_data.setting.settingType4}]`)
        .click();


        //setting drop down 2
        cy.get(':nth-child(5) > :nth-child(2) > .MuiFormControl-root > :nth-child(1) > .MuiInputBase-root > #demo-simple-select-outlined')
        .click();

        cy.get(`[data-value=${setting_data.setting.settingType5}]`)
        .click();


        //setting drop down 3
        cy.get(':nth-child(6) > :nth-child(2) > .MuiFormControl-root > :nth-child(1) > .MuiInputBase-root > #demo-simple-select-outlined')
        .click();


        cy.get(`[data-value="${setting_data.setting.settingType6}"]`)
        .click();



    }

    changeNotificationSettings() {
        cy.get('[name="notification_notificationType1"]')
        .check({force:true});


        cy.get('[name="notification_notificationType2"]')
        .uncheck({force:true});


        cy.get('[name="notification_notificationType3"]')
        .check({force:true});


        cy.get('[name="notification_notificationType4"]')
        .uncheck({force:true});


        cy.get('[name="notification_notificationType5"]')
        .uncheck({force:true});


        cy.get('[name="notification_notificationType6"]')
        .check({force:true});


        cy.get('[name="notification_notificationType7"]')
        .uncheck({force:true});

    }

    changeMessageSettings(){
        cy.get('[name="message_emailMessages"]')
        .uncheck({force:true});


        cy.get('[name="message_textMessages"]')
        .check({force:true});

    }
    clickSave(){
        cy.get('#button').click({force:true});
        this.wait(1000)
    }
    closeSuccesMessage(){

        cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root')
        .click()

        cy.get('.MuiSnackbar-root > .MuiPaper-root')
        .should('not.have','Changes Saved');
    }
    clickLogo(){
        //cy.get('.makeStyles-space-16 > :nth-child(1) > :nth-child(1) > .MuiList-root').should('exist')
        //cy.get('.makeStyles-title-66')
        cy.get('#brand')
        .click();

    }

    clickAvatar() {
        //cy.get('.MuiIconButton-label > .MuiAvatar-root')
        cy.get('.MuiIconButton-edgeEnd')
        .click();

    }
    clickFirstChildOfPopup() {
        //cy.get('.makeStyles-root-333 > :nth-child(1) > .MuiList-root')
        //cy.get('.makeStyles-linksclass-285 > .MuiButtonBase-root')
        //cy.get('.MuiListItemIcon-root > .MuiAvatar-root')
        cy.get('.makeStyles-linksclass-337 > .MuiButtonBase-root > .MuiListItemIcon-root > :nth-child(1)')
        .click();
    }

    clickDeleteMyAccount(){
        cy.get('.makeStyles-linksclass-431')
        .click();

    }

    clickLogoutButton(){
        cy.get(':nth-child(4) > .makeStyles-linksclass-337 > .makeStyles-margin-338 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
        .click();

    }

    scrollUp(){
        cy.scrollTo('top')
        this.wait(300)
    }
    scrollDown(){
        cy.scrollTo('bottom')
        this.wait(300)
    }
}