import { UserRole } from "./userRole.model";
import { UserStatus } from "./userStatus.model";

export class CreateUser{
  'uuid': string = "abcdwd";
  'username':string;
  'password':string;
  'roles':UserRole ;
   'status': UserStatus= UserStatus.DRAFT;
  //  'resetPasswordToken':string;
}
