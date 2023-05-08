import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  public isLoading = false;
  public src?: string;
  public data$: any;
  constructor(private service:SpotifyService) { }

  ngOnInit(): void {
  }
  search(value: any): any {
    this.isLoading = true;

    this.data$ = this.service.searchTrack({q: value})
      .pipe(
        map(({tracks}) => tracks.items),
        finalize(() => this.isLoading = false)
      )
  }

}
