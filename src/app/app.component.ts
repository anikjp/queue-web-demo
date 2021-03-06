import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {select, Store} from '@ngrx/store';
import * as fromCarts from '@app/modules/cart/stores/reducers';
import {Observable} from 'rxjs';
import {selectCartsCollections, selectTotalCarts} from '@app/modules/cart/stores/selectors';
import {QueueService} from '@app/shared/queue-service/queue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  layoutSettings = {
    collapsed: false,
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private queueService: QueueService,
    ) {
    this.queueService.initialization();
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(
    (result) => {
      this.layoutSettings.collapsed = result.matches;
    }
  );
  }
}
