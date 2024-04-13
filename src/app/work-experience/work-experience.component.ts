import { Component , OnInit} from '@angular/core';
import { WorkExperience } from '../models/model';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit{
  workExpList: WorkExperience[] =
  [
    {
      role: 'Front-end Developer',
      company: 'NUBB',
      duration: 'Sep 2025-Mar 2026',
      description:[
        'Internship experience where the individual collaborated with classmates to build various projects, including static and dynamic websites.',
        'Primarily emphasized front-end skills such as HTML, CSS, JavaScript, Bootstrap, TypeScript, Node.js, Vue.js, and Angular frameworks. Additionally, there was some exposure to backend technologies like Spring Boot.'
      ]
    },
    {
      role: 'Front-end Developer',
      company: 'Freelancer',
      duration: 'Sep 2024-Mar 2025',
      description:[
        'Worked Individual to develop web application',
        'Focus was on enhancing front-end skills, particularly in HTML, CSS, JavaScript, Bootstrap, TypeScript, Node.js, Vue.js, and Angular frameworks. Additionally, there was some exposure to backend technologies like Spring Boot.'
      ]
    },
    // {
    //   role: 'Front-end Developer',
    //   company: 'Master IT',
    //   duration: 'Sep 2025-Mar 2026',
    //   description:[
    //     'Worked with multiple teams to develop web application',
    //     'Focus on Front-end skill such as (htm , css , js , boostrap , typescript , node.js and angular framework) and some know in Backend like(Spring boot)'
    //   ]
    // },
    // {
    //   role: 'Front-end Developer',
    //   company: 'Master IT',
    //   duration: 'Sep 2025-Mar 2026',
    //   description:[
    //     'Worked with multiple teams to develop web application',
    //     'Focus on Front-end skill such as (htm , css , js , boostrap , typescript , node.js and angular framework) and some know in Backend like(Spring boot)'
    //   ]
    // },
    // {
    //   role: 'Front-end Developer',
    //   company: 'Master IT',
    //   duration: 'Sep 2025-Mar 2026',
    //   description:[
    //     'Worked with multiple teams to develop web application',
    //     'Focus on Front-end skill such as (htm , css , js , boostrap , typescript , node.js and angular framework) and some know in Backend like(Spring boot)'
    //   ]
    // },
  ]
constructor(){} 
ngOnInit(): void {
  
}
}
