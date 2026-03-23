import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {

    this.albumService.albums$.subscribe((data) => {
      this.albums = data;
      console.log('Albums updated:', data);


      if (data.length > 0) {
        this.isLoading = false;
      }
    });

    this.albumService.getAlbums().subscribe();
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
