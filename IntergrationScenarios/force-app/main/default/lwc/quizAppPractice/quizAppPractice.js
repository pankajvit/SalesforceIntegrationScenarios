import { LightningElement } from 'lwc';

export default class QuizAppPractice extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Newton', value: 'newton' },
            { label: 'Pascal', value: 'pascal' },
            { label: 'Babbge', value: 'babbge' },
            { label: 'Nikola', value: 'nikola' },
        ];
    }
}