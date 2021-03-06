import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public currentuser = '';
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authSvc.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.currentuser = auth.email;
      } else {
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.authSvc.logoutUser()
      .then(auth => {
        this.router.navigate(['/login']);
      });
  }

}
