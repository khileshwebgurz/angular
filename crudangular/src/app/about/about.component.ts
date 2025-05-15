import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from './about-section/about-section.component';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common'; // 👈 Import this
import { FormsModule } from '@angular/forms'; // 👈 Also for ngModel


// this is my  about component which import some modules bcz it is a standalone component which doesn't depends of angular modules. So that why for each thing
// we manually import from angualr like CommonModule, FormsModule. And we also importing component which is about-section
// defining a component using @Component decorator
@Component({
  selector: 'app-about',
  imports: [AboutSectionComponent, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  

  // THis UserService is from service folder .DI injects services into components via constructors.
  constructor(private userService: UserService, private titleService: Title) {
    this.titleService.setTitle('About Page');
  }

  // all these are state variables in typescript 
  users: any[] = [];
  newUser = { name: '', email: '', age: '' };
  isEditing = false;
  editingUserId: string | null = null;
  

  ngOnInit() {
    // when page mount we just fetching the data like useffect do on component mount
    this.loadUsers();
  }

  // Load users from the backend, as it is being called in ngOnInit()
  loadUsers() {
    // in constructor we did userService:UserService , that's how we are getting promise .
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error loading users:', error);
      },
    });
  }

  // Create a new user
  createUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (newUser) => {
        this.users.push(newUser);
        this.newUser = { name: '', email: '', age: '' };
      },
      error: (error) => {
        console.error('Error creating user:', error);
      },
    });
  }

  // when just update button is clicked 
  editUser(user: any) {
    this.newUser = { ...user }; //Pre-fill form with selected user's data
    this.isEditing = true;
    this.editingUserId = user.id; //set editingUserId to the user's id that needs to be edited.
  }

  updateUser() {
    if (!this.editingUserId) return;

    this.userService.updateUser(this.editingUserId, this.newUser).subscribe({
      // this updatedUser is like a response we get from the backend when success.
      next: (updatedUser) => {
        // you just want the UI (the list displayed on the page) to reflect that update without reloading the page.
        const index = this.users.findIndex((u) => u.id === this.editingUserId);
        // if there is some user then update its data with updatedUser
        if (index > -1) {
          this.users[index] = updatedUser;
        }
        // if done all clear the fields and make other false and null.
        this.newUser = { name: '', email: '', age: '' };
        this.isEditing = false;
        this.editingUserId = null;
      },
      error: (err) => console.error('Error updating user:', err),
    });
  }

  // Delete a user
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((user) => user.id !== id); // Remove the user from the list
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }
}
