import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// "Make this service available throughout the entire app (as a singleton), without needing to explicitly register it anywhere."
@Injectable({
  providedIn: 'root', //this is singleton across app
})

// this Singleton across app means will create a single instance of DataService for the entire app and inject it wherever it's 
// required (via constructor dependency injection).

export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL for backend API

  constructor(private http: HttpClient) {}

  // GET request: Fetch all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST request: Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  // PUT/PATCH request: Update a user by id
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user); // Or use PATCH
  }

  // DELETE request: Delete a user by id
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
