import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: any;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile() {
    this.authService.profile().subscribe({
      next: (result) => {
        this.user = result;
      },
      error: (error) => {
        this.toastr.error(error);
      }
    });
  }
}
