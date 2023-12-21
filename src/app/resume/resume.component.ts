import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  iFrameSource: string = ''
  id: string = ''
  safeIframeUrl: SafeResourceUrl = ''
  spinner = true
  constructor(private sanitizer: DomSanitizer) {
  this.loadIFrame()
  }
  onIframeLoad(): void {
    this.spinner = false
  }

  ngOnInit(): void {

  }

  loadIFrame() {
    this.iFrameSource = 'https://docs.google.com/document/d/e/2PACX-1vS7XEBN2B5cbUebYX8Ou6t2wYjXQCk8ko_55rgCZzS6qhMJ67KT5687Ci5DKRulTeL-DI3_bVHyTxwG/pub?embedded=true'
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iFrameSource)
    setTimeout(() => this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iFrameSource), 50)
  }

}
