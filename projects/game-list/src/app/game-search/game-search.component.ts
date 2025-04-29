import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-game-search',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './game-search.component.html',
    styleUrl: './game-search.component.scss'
})
export class GameSearchComponent {
    gameForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.gameForm = this.fb.group({
            gameQuery: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.gameForm.valid) {
            console.log('Form Data:', this.gameForm.value);
        } else {
            console.log('Form is invalid.');
        }
    }

}
