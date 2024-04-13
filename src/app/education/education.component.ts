import { Component , OnInit} from '@angular/core';
import { Education } from '../models/model';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
  educationList: Education[] = [
    {
      institude:'National University of Battambang',
      course: 'IT',
      duration:'2021-2026',
      score:'90%'
    },
    // {
    //   institude:'National University of Battambang',
    //   course: 'IT',
    //   duration:'2021-2026',
    //   score:'90%'
    // },
    // {
    //   institude:'National University of Battambang',
    //   course: 'IT',
    //   duration:'2021-2026',
    //   score:'90%'
    // },
    // {
    //   institude:'National University of Battambang',
    //   course: 'IT',
    //   duration:'2021-2026',
    //   score:'90%'
    // },
    // {
    //   institude:'National University of Battambang',
    //   course: 'IT',
    //   duration:'2021-2026',
    //   score:'90%'
    // },
  ];
  constructor(){};
  ngOnInit(): void {
    
  }
}
