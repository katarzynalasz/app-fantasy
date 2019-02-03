import { SkillsService } from './../skills/skills.service';
import { HeroesService } from './heroes.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from './hero';

@Component({
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
