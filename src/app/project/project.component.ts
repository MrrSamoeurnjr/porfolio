import { Component, OnInit } from '@angular/core';
import { Project } from '../models/model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit
{
  projects:Project[] = [
    {
      title: 'Responsive Website',
      technologies:'Angular',
      description:[
        'Our website, built with Angular, is responsive across all devices. Angular is versatility ensures an optimal viewing experience, adapting seamlessly to different screen sizes. Enjoy consistent functionality and visually appealing layouts, whether you are on a desktop, tablet, or smartphone'
      ],
      link: 'https://edu-github-io-kohl.vercel.app/'
    },
    {
      title: 'E-commerce Website',
      technologies:'Angular',
      description:[
        'Our e-commerce site, built with Angular, offers a seamless shopping experience. Enjoy easy navigation, fast loading times, and secure transactions as you explore our wide range of products. Elevate your online shopping journey with our Angular-powered platform.'
      ],
      link: 'https://e-commercewebsite-samoeurnart.vercel.app/cart'
    },
    {
      title: 'Netflix Website',
      technologies:'Angular',
      description:[
        'Discover endless entertainment on Netflix. Our website, fueled by a REST API, brings a vast selection of movies, TV shows, and documentaries to your screen. Enjoy personalized recommendations and seamless streaming as you explore our library. Join millions of subscribers worldwide and immerse yourself in the ultimate entertainment experience.'
      ],
      link: 'https://samoeurnart-netflexmovie.vercel.app/'
    },
  ]
  constructor(){} 
  ngOnInit(): void {
  
  }

}
