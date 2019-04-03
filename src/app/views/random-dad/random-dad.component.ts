import { Component, OnInit } from '@angular/core';
import {CurlyService} from '../../models/curly.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-dad',
  templateUrl: './random-dad.component.html',
  styleUrls: ['./random-dad.component.scss']
})
export class RandomDadComponent implements OnInit {
  randomJoke: string;


  constructor(private jokeGetter: CurlyService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.randomJoke = params.get('joke');
    });
  }


  ngOnInit() {
    this.jokeGetter.getRandomJoke().subscribe(
      (result) => {
        this.randomJoke = result.message;
      }
    );
  }

}
