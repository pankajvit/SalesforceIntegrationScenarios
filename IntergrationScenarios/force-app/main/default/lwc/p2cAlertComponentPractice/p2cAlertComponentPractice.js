import { LightningElement, api } from 'lwc';

export default class P2cAlertComponentPractice extends LightningElement {
    @api cardHeading;
    @api message;
    @api num;
    @api val;
}