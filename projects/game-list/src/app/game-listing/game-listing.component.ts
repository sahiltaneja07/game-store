import { Component } from '@angular/core';

@Component({
    selector: 'app-game-listing',
    imports: [],
    templateUrl: './game-listing.component.html',
    styleUrl: './game-listing.component.scss'
})
export class GameListingComponent {
    increment(): void {
        const event = new CustomEvent('increment', {
            detail: 'Listing'
        });
        dispatchEvent(event);
    }
}
