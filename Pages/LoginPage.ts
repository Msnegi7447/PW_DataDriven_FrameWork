import { Page,expect } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async LaunchWeb(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }
    async AddUserDetails(username:string,password:string){
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#submit').click();
    }
    async verifyValidLogin(){
        await expect(this.page.locator('.post-title')).toHaveText('Logged In Successfully');
    }
    async verifyInvalidLogin(){
        await expect(this.page.locator('.show')).toContainText('Your username is invalid!');
    }

}