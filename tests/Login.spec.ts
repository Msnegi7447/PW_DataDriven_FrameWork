import {test,expect} from '../Fixtures/baseFix';
import LoginData from '../Test-data/LoginData.json'

test.describe('Login Validations',()=>{

    test('valid login',async ({loginpage})=>{
        await loginpage.LaunchWeb();
        await loginpage.AddUserDetails(LoginData.validuser.username,LoginData.validuser.password);
        await loginpage.verifyValidLogin();

    });

    test('Invalid login',async ({loginpage})=>{

        await loginpage.LaunchWeb();
        await loginpage.AddUserDetails(LoginData.invaliduser.username,LoginData.invaliduser.password);
        await loginpage.verifyInvalidLogin();

    });

});