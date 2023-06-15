import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hobby } from '../../models/hobby.model';
import { HobbyService } from '../../services/hobby.service';

@Component({
  selector: 'app-hobby-details',
  templateUrl: './hobby-details.component.html',
  styleUrls: ['./hobby-details.component.css']
})
export class HobbyDetailsComponent implements OnInit {
  hobby: Hobby | undefined;

  constructor(
    private route: ActivatedRoute,
    private hobbyService: HobbyService
  ) { }

  ngOnInit(): void {
    this.getHobbyDetails();
  }

  getHobbyDetails(): void {
    const hobbyId = this.route.snapshot.paramMap.get('id');
    if (hobbyId) {
      this.hobbyService.getHobbyById(hobbyId).subscribe(
        (hobby: Hobby) => {
          this.hobby = hobby;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
