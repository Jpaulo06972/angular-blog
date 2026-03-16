import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCard } from './components/big-card/big-card';
import { MenuBar } from './components/menu-bar/menu-bar';
import { MenuTitle } from './components/menu-title/menu-title';
import { SmallCard } from './components/small-card/small-card';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home ], //BigCard, MenuBar, MenuTitle, SmallCard, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-blog');
}
