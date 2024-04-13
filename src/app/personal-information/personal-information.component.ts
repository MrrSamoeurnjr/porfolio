import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit{
myData: string[][]= [
  ['Name','Samoeurn Art'],
  ['DOB','08/08/2003'],
  ['Work Exp','1 years'],
  ['Education','NUBB (2026)'],
  ['Interests','Cricket'],
];
aboutMe: string[] = [
  'I am a dedicated front-end web developer specializing in Angular, a framework I leverage to create dynamic and responsive web applications. Proficient in HTML, CSS, and JavaScript, I excel in crafting visually engaging interfaces that prioritize user experience. My expertise extends to collaborating with backend teams to ensure seamless integration while maintaining a focus on modern design principles. I am committed to staying updated with the latest front-end technologies, aiming to deliver cutting-edge solutions that elevate user interfaces and experiences.'
]
constructor(){}
ngOnInit(): void {
  
}
}
