import { Component , OnInit} from '@angular/core';
import { Skill } from '../models/model';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements OnInit{
  skills: Skill[] = [
    {
      name:'Angular, Angular Meterial',
      level: 'Expert',
      rating: 90,
    },
    // {
    //   name:'ASP.NET, EF Core',
    //   level: 'Intermediate',
    //   rating: 80,
    // },
    {
      name:'HTML,CSS,JS,Boostrap,TypeScript,Node.JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name:'Java',
      level: 'Expert',
      rating: 85,
    },
    {
      name:'Sprint boot',
      level: 'Intermediate',
      rating: 88,
    },
  ]
  constructor(){}
  ngOnInit(): void {
    
  }
}
