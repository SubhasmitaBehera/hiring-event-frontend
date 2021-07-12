import { LoginProvider } from "./loginProvider.model";
import { UserType } from "./useertype.model";

export class UserInfo{
    email : string;
    userType : UserType;
    loginProvider : LoginProvider;
    isMockUser : boolean;
}