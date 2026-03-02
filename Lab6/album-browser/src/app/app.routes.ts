import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumDetailComponent} from './components/album-detail/album-detail.component';
import {AlbumPhotosComponent} from './components/album-photos/album-photos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Albums',
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent,
    title: 'AlbumDetail',
  },
  {
    path: 'albums/:id/photos',
    component: AlbumPhotosComponent,
    title: 'AlbumPhotos',
  },
];
