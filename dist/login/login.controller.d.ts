import { Login } from './loinModel';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    addUser(data: Login): Promise<{
        id: string;
    }>;
    getAllUser(data: Login): Promise<void | {
        status: any;
        message: string;
    }>;
    private newMethod;
}
