import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

enum VideoType {
  youtube = 'youtube',
  video = 'video',
  unknown = 'unknown'
}

enum SupportedVideoTypes {
  mp4 = 'mp4',
  youtube = 'youtube',
  youtubeShortened = 'youtu'
}

@Component({
  selector: 'mmb-web-app-embed',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.scss']
})
export class EmbedComponent implements OnInit {
  _value: string;
  type: VideoType;

  @Input()
  set value(val: string) {
    this._value = val;
    // also check embed type
    if (this._value.includes(SupportedVideoTypes.mp4)) {
      this.type = VideoType.video;
    } else if (this._value.includes(SupportedVideoTypes.youtube) || this._value.includes(SupportedVideoTypes.youtubeShortened)) {
      this.type = VideoType.youtube;
    } else {
      this.type = VideoType.unknown;
    }
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getSafeUrl(videoURL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
