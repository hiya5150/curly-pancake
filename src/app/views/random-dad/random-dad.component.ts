import { Component, OnInit } from '@angular/core';
import {CurlyService} from '../../models/curly.service';


@Component({
  selector: 'app-random-dad',
  templateUrl: './random-dad.component.html',
  styleUrls: ['./random-dad.component.scss']
})
export class RandomDadComponent implements OnInit {
  randomJoke: string;


  constructor(private jokeGetter: CurlyService) {
    this.updateJoke();
  }


  ngOnInit() {

}
    updateJoke(): void {
    this.jokeGetter.getRandomJoke().subscribe(res => {
    this.randomJoke = res.randomJoke;
    console.log(res);
    });
    }
}

