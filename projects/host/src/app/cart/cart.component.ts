import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../store/actions/counter.action';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart',
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {
    count$: Observable<number>;
    constructor(private store: Store<{count: number}>) {
        this.count$ = store.select('count');
    }

    increment() {
        this.store.dispatch(increment());
    }
    
    decrement() {
        this.store.dispatch(decrement());
    }
}
