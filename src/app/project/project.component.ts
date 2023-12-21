import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  iFrameSource: string = ''
  id: string = ''
  safeIframeUrl: SafeResourceUrl = ''
  spinner = true
  idSub: Subscription = new Subscription()
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  this.loadIFrame()
  }
  onIframeLoad(): void {
    this.spinner = false
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.idSub.unsubscribe()
  }
  loadIFrame() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      if (this.id === 'melispot') {
        this.iFrameSource = 'https://docs.google.com/document/d/e/2PACX-1vRyEBp-LUoFOIH-a36Fogv5E2bRnsH4CNaH4JULd9qCIJOJr1sWQ6ZSxttTNZuJRod__-k5i3pWdh9i/pub?embedded=true'
      }

      if (this.id === 'wunderphish') {
        this.iFrameSource = 'https://docs.google.com/document/d/e/2PACX-1vT40wOqEbCxbD7dB07so-QqUJ-5pasBxsviFxP1GV_rOfwPcD-r3ev1x76Q2pRIoF1y0nkU6PmZzPt1/pub?embedded=true'
      }

      if (this.id === 'microlearning') {
        this.iFrameSource = 'https://docs.google.com/document/d/e/2PACX-1vR2yySCmQ5QeRR2imlhftxmldCHB6BmCmTskp4sAbS6dfDU8MtaRHAfHvU2AM8svYHxu6U1y-ejroup/pub?embedded=true'
      }
      this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iFrameSource)
      setTimeout(() => this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iFrameSource), 50)
    })
  }
}
