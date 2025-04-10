import { Component } from '@angular/core';
import { GameListingComponent } from "./game-listing/game-listing.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GameListingComponent]
})
export class AppComponent {
  title = 'game-list';
}
