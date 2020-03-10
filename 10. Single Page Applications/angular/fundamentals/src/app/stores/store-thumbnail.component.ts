import { Component, Input } from '@angular/core'
import { IStore } from './shared/index'

@Component({
  selector: 'store-thumbnail',
  template: `
    <div [routerLink]="['/stores', store.id]" class="well hoverwell thumbnail">
      <h2>{{store?.name | uppercase}}</h2>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="store?.openedTime">
        Opened Time: {{store?.openedTime}}
        <span *ngSwitchCase="8">(Early)</span>
        <span *ngSwitchCase="10">(Late)</span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="store?.closedTime">
      Closed Time: {{store?.closedTime}}
      <span *ngSwitchCase="19">(Early)</span>
      <span *ngSwitchCase="20">(Late)</span>
      <span *ngSwitchDefault>(Normal)</span>
    </div>
      <div *ngIf="store?.location">
        <span>Location: {{store?.location?.street}}</span>
        <span class="pad-left">{{store?.location?.city}}, {{store?.location?.zipCode}}</span>
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class StoreThumbnailComponent {
  @Input() store:IStore

  getStartTimeStyle():any {
    let dateTime = new Date();
    if (this.store && (dateTime.getHours() < this.store.openedTime || dateTime.getHours() > this.store.closedTime))
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}