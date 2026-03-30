import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './album-create.component.html'
})
export class AlbumCreateComponent {
  newAlbum = { userId: 1, title: '' };

  constructor(public router: Router, private albumService: AlbumService) {}

  create(): void {
    if (this.newAlbum.title.trim()) {
      this.albumService.createAlbum(this.newAlbum).subscribe(() => {
        this.router.navigate(['/albums']);
      });
    }
  }
}
