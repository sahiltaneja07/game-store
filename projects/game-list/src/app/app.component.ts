import { Component } from '@angular/core';
import { GameListingComponent } from "./game-listing/game-listing.component";
import { GameSearchComponent } from './game-search/game-search.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [GameListingComponent, GameSearchComponent]
})
export class AppComponent {
    title = 'game-list';
}
