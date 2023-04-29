import { Component, ContentChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CreateUser } from 'src/app/models/CreateUser.model';
import { AuthGuard } from '../guard/auth.guard';
import { UserStatus } from '../models/UserStatus.model';
import { CreateUserService } from '../service/createUser.service';
import { RoleService } from '../service/roles.services';
// import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserModel : CreateUser = new CreateUser();
  hide1: boolean = false;
  hide2: boolean = true;
  confirmPassword : string = "";
  show:boolean = false;

  // @ContentChild(IonInput) input: IonInput;

  constructor(private createUserService : CreateUserService , private router : Router, private authGuard: AuthGuard) { }
  dropdownList :any = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  // dropdownSettings:any;

  ngOnInit(): void {
    this.authGuard
    .getUserDetails().subscribe((data) => {
      console.log("data ", data);
      // data.roles = "User";
      console.log("data.roles ", data.roles);
      sessionStorage.setItem('role', data.roles);

    },
      (error) => console.log(error));

    this.dropdownList = [  "ADMIN", "USER", "VISITOR", "HR", "INTERVIEWER", "CANDIDATE"];

    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  
  onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
    console.log(this.selectedItems);

  }
  onItemUnSelect(item:any){
    let i = this.selectedItems.indexOf(item)
    this.selectedItems.splice(i);
    console.log(this.selectedItems);

  }
  onSelectAll(items: any) {
    console.log(items);
  }
  createUser(){
    console.log(this.createUserModel);

    this.createUserService.createUser(this.createUserModel).subscribe((data : any  ) => {
      console.log(data);

      sessionStorage.removeItem('token');
      // this.router.navigate(["/login"])
    },error  =>
      console.error(error.error.message+" "+error.error.details)
    );
  }
  hideDiv(){
    this.hide1 = true;
    this.hide2 = false;
}
fieldTextType: boolean;

toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

}
