import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { appConfig } from 'appConfig';

@Component({
  selector   : 'app-player',
  templateUrl: './player.component.html',
  styleUrls  : [ './player.component.scss' ]
})
export class PlayerComponent implements OnInit {
  public embedUrl: string;
  public videoLoader: boolean;

  constructor(public sanitizer: DomSanitizer) {

  }

  public ngOnInit() {
    const id = window.location.href
                     .replace(/^.*\//g, '')
                     .replace(/^.*\..*/g, '');

    if (!id.length) {
      return;
    }

    this.videoLoader = true;
    this.embedUrl = appConfig.getYoutubeEmbdedUrl(id);
  }

  /* On video ready hide loader */
  public loadVideo(): void {
    this.videoLoader = false;
  }

}
