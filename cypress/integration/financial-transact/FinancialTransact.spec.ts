import { RobotEyes, RobotHands, Dependencies } from '../../robots/financial-transact/FinancialTransact';

context('Financial Transact', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()
const user_data = require("../../fixtures/user_data.json");
const token_data=require("../../fixtures/token.json")
const localUser = {
    "id":2,
    "name":"Rahul",
    "email":"Rahulshenoy@gmail.com",
    "auth0Id":"google-oauth2|111765275133468059110",
    "phone":"+91-9912027122",
    "country":"India",
    "createdAt":"1589626102282",
    "createdBy":"Rahul",
    "modifiedAt":"1589626102282",
    "modifiedBy":"Rahul",
    "profilePicture":{
        "id":2,"photoBlob":null,
        "photoContentLength":0,
        "photoContentType":null
    },
    "deleted":false
}
    beforeEach(()=>{
        robotHands.waitFor1();
        localStorage.setItem("user",JSON.stringify(localUser));
        localStorage.setItem("accessToken",token_data.accessToken);
    })

    describe('visits home page', ()=>{

        it("navigate to Financial transact profile page", () => {
            dependencies.visitFinancialTransactHomePage();
        });
        it("see the url for dashboard/home", () => {
            robotEyes.seesDashboardHomeInUrl()
        })
        it("sees avatar in home page", () => {
            robotEyes.seesAvatarInHomePage();
        })

    });

    describe('visits profile page from landing page', ()=>{

        it("click avatar", () => {
            robotHands.clickAvatar();
        })
        it("sees profile list popup",()=>{
            robotEyes.seesFirstChildInPopUp();
        })
        it("click popup list avatar", () => {
            robotHands.clickFirstChildOfPopup();
        })

        it("sees url for profile",()=>{
            robotEyes.seesProfileInUrl();
        })
        it("sees for profile form fields",()=>{
            robotEyes.seesBasicProfileFormFields();
        })

    });
    describe('Change form fields in basic profile tab', ()=>{

        it('type invalid user name',()=>{
            robotHands.updateInvalidUserNameField();
        })

        it('sees save button disable',()=>{
            robotHands.scrollDown();
            robotEyes.seesSaveButtonDisabled();
        })

        it("type valid user name field ", () => {
            robotHands.scrollUp();
            robotHands.updateUserNameField();
        })

        it('sees save button enabled',()=>{
            robotHands.scrollDown();
            robotEyes.seesSaveButtonEnabled();
        })


        it('type invalid phone number',()=>{
            robotHands.scrollUp();
            robotHands.updateInvalidPhoneNumberField();
        })

        it('sees save button disable',()=>{
            robotHands.scrollDown();
            robotEyes.seesSaveButtonDisabled();
        })

        it("type valid phone number field ", () => {
            robotHands.scrollUp();
            robotHands.updatePhoneNumberField();
        })

        it('sees save button enable',()=>{
            robotHands.scrollDown();
            robotEyes.seesSaveButtonEnabled();
        })


        it("change country field ", () => {
            robotHands.scrollUp();
            robotHands.updateCountryField();
        })
        it("change profile picture ", () => {
            robotHands.updateProfilePicture();
            cy.get('.MuiBox-root').click()
            robotHands.scrollDown();
        })

    });

    describe('save changes of basic profile page', ()=>{

        it("sees save button ",()=>{
            robotHands.scrollDown();
            robotEyes.seesSaveButtonEnabled();
        })

        it("click save button", () => {
            robotHands.clickSave();
            localUser.name=user_data.name;
            localUser.country=user_data.country;
            localUser.phone=user_data.phone;
            localUser.profilePicture.photoBlob=user_data.photo_blob;
            localUser.profilePicture.photoContentLength=user_data.photo_content_length;
            localUser.profilePicture.photoContentType=user_data.image_file_type;
        })
        it("sees success message popup",()=>{
            robotEyes.seesSuccessMessage();
        })
        it("close success message popup", () => {
            robotEyes.seesUpdatedFormData();
            robotHands.closeSuccesMessage();

        })
    });
    describe('navigates to general profile page', ()=>{

        it("click to general tab", () => {
            robotHands.scrollUp();
            robotHands.clickGeneralProfileTab();
        });
        it("sees settings form fields",()=>{
            robotEyes.seesSettingsFormFields();
        })
        it("sees notification form fields",()=>{
            robotHands.scrollDown();
            robotEyes.seesNotificationSettingsFormFields()
        })
        it("sees message form fields",()=>{
            robotEyes.seesMessageSettingsFormFields()
        })
    });

    describe('update settings of general profile page', ()=>{

        it("update user setting section", () => {
            robotHands.scrollUp();
            robotHands.changeUserSettings();
        });
        it("update notification setting section", () => {
            robotHands.scrollDown();
            robotHands.changeNotificationSettings();
        });
        it("update message setting section", () => {
            robotHands.changeMessageSettings();
        });

    });

    describe('save changes of general profile tab', ()=>{

        it("click save button", () => {
            robotHands.clickSave();
        })
        it("sees success message popup",()=>{
            robotEyes.seesSuccessMessage();
        })
        it("close success message popup", () => {
            robotHands.closeSuccesMessage();
        })
    });
    describe('visits landing page(home page) from profile page', ()=>{

        it("go to home page by clicking logo", () => {
            robotHands.clickLogo();
        })
        it("sees url for dashboard",()=>{
            robotEyes.seesDashboardHomeInUrl();
        })
        it("sees avatar in home page",()=>{
            robotEyes.seesAvatarInHomePage();
        })
    });

    describe('visits profile page from landing page', ()=>{

        it("click avatar", () => {
            robotHands.clickAvatar();
        })
        it("sees profile list popup",()=>{
            robotEyes.seesFirstChildInPopUp();
        })
        it("click avatar", () => {
            robotHands.clickFirstChildOfPopup();
        })

        it("sees url for profile",()=>{
            robotEyes.seesProfileInUrl();
        })

        it("sees basic profile form fields",()=>{
            console.log("acc===",localUser)
            robotEyes.seesBasicProfileFormFields();
        })

    });


    describe('sees if form fields of basic profile are updated', ()=>{

        it("sees if form fields updated", () => {
            robotEyes.seesUpdatedFormData();
        })
    });

    describe('navigates to general profile page', ()=>{

        it("click to general tab", () => {
            robotHands.scrollUp();
            robotHands.clickGeneralProfileTab();
        });
        it("sees settings form fields",()=>{
            robotEyes.seesSettingsFormFields();
        })
        it("sees notification form fields",()=>{
            robotHands.scrollDown();
            robotEyes.seesNotificationSettingsFormFields()
        })
        it("sees message form fields",()=>{
            robotEyes.seesMessageSettingsFormFields()
        })

    });
    describe('sees settings of general profile page are updated', ()=>{

        it("sees updated user setting section", () => {
            robotHands.scrollUp();
            robotEyes.seesUpdatedUserSettings();
        });
        it("sees updated notification setting section", () => {
            robotHands.scrollDown();
            robotEyes.seesUpdatedNotificationSettings();
        });
        it("sees updated message setting section", () => {
            robotEyes.seesUpdatedMessageSettings();
        });

    });



    // describe('delete account permanently', ()=>{

    //     it("sees if delete heading exists", () => {
    //         robotEyes.seesDeleteMyAccount();
    //     })

    //     it("deletes user", () => {
    //         robotHands.clickDeleteMyAccount();
    //     })

    // });

    // describe('checks login page', ()=>{
    //     it("sees login url",()=>{
    //         robotEyes.seesLoginPage()
    //     })
    // })

    describe('logsout user', ()=>{

        it("sees logout button", () => {
            robotEyes.seesLogoutButton();
        })

        it("clicks logout button",()=>{
            robotHands.clickLogoutButton();
        })
    })

    describe('checks login page', ()=>{
        it("sees login url",()=>{
            robotEyes.seesLoginPage()
        })
    })
 });