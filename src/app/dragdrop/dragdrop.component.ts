import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  response = null;

  constructor(private http: HttpClient) {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  // goToChallenge() {
  //   const path = 'https://http-hunt.thoughtworks-labs.net/';
  //   let header = new HttpHeaders();
  //   header = header.set('userId', '<M7atb-vE3>');

  //   this.http.get(path + 'challenge', {
  //     headers: header
  //   }).subscribe(response => {
  //     this.response = response;
  //   });
  // }
}
