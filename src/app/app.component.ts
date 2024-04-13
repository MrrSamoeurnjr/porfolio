import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio';
  @HostBinding('class.pc') pcMode = false;
  constructor(private breakpointObserver: BreakpointObserver)
  {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait , Breakpoints.WebLandscape])
    .subscribe(
      {
        next: (result: any) => {
          for(let breakpoint of Object.keys(result.breakpoint))
            {
              if(result.breakpoint[breakpoint])
                {
                  if(breakpoint === Breakpoints.HandsetPortrait)
                      this.pcMode = false;
                  if(breakpoint === Breakpoints.WebLandscape) {
                    this.pcMode = true;
                  }
                }
            }
        }
      }
    )
  }
  
}
