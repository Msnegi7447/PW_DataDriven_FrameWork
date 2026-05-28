import{test as basetest} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

 type MyFixtures={
    loginpage:LoginPage;
}

export const test = basetest.extend<MyFixtures>({
    loginpage:async({page},use)=>{
        const loginpage = new LoginPage(page);
        await use(loginpage);
    }
});

export{expect} from '@playwright/test';



