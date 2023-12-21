import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.scss']
})
export class LatestProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(dest: string): void {
    this.router.navigate([`/projects/${dest}`])
    window.scrollTo(0, 0)
  }

}
