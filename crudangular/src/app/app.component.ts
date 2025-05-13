import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


// if want to create a button to route to different page we need to use RouterModule
// here RouterOutlet is also needed as it will display the content of the current route selected

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  title = 'crudangular';
  
}
