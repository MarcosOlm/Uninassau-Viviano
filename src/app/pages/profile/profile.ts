import { Component } from '@angular/core';
import { HearderComponent } from "../../components/hearder-component/hearder-component";
import { NavegationComponent } from "../../components/navegation-component/navegation-component";
import { ProfileComponent } from "../../components/profile-component/profile-component";

@Component({
  selector: 'app-profile',
  imports: [HearderComponent, NavegationComponent, ProfileComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
