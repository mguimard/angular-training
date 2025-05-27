import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  hasUnsavedChanges = true;
  error: string = '';
  route = inject(ActivatedRoute);
  users: any[] = [];

  showError() {
    this.error = 'You cannot leave this page, please save your work before'
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Component has the data', data['users'])
      this.users = data['users']
    })
  }

}
