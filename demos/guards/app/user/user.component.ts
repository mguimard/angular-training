import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  route = inject(ActivatedRoute)
  user: any;

  constructor() {
    console.log("UserComponent::new")
  }

  ngOnInit(): void {
    console.log("UserComponent::new")

    this.route.data.subscribe(data => {
      console.log("New data incoming from resolver")
      this.user = data['user']
    })
  }

}
