import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((data) => {
      this.album = data;
    });
  }

  save(): void {
    this.albumService.updateAlbum(this.album).subscribe((updated) => {
      this.album = updated;
      alert('Changes saved successfully');
    });
  }

  goBack(): void {
    this.location.back();
  }
}
