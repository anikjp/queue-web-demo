import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectTotalCarts} from '@app/modules/cart/stores/selectors';
import * as fromCarts from '@app/modules/cart/stores/reducers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() layoutSettings: { collapsed: boolean };
  totalCart: Observable<number>;

  constructor(private store: Store<fromCarts.State>) {
    this.totalCart = this.store.pipe(select(selectTotalCarts));
  }

  ngOnInit(): void {
  }

}
