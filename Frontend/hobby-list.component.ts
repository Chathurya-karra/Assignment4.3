import { Component, OnInit } from '@angular/core';
import { Hobby } from '../../models/hobby.model';
import { HobbyService } from '../../services/hobby.service';
@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})
export class HobbyListComponent implements OnInit {
  hobbies: Hobby[] | undefined;

  constructor(private hobbyService: HobbyService) { }

  ngOnInit(): void {
    this.loadHobbies();
  }

  loadHobbies(): void {
    this.hobbyService.getHobbies().subscribe(
      (hobbies: Hobby[]) => {
        this.hobbies = hobbies;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
