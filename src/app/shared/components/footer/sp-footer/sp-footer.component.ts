import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromCarts from '@app/modules/cart/stores/reducers';
import {selectTotalCarts} from '@app/modules/cart/stores/selectors';

@Component({
  selector: 'app-sp-footer',
  templateUrl: './sp-footer.component.html',
  styleUrls: ['./sp-footer.component.scss']
})
export class SpFooterComponent implements OnInit {

  totalCart: Observable<number>;
  constructor(private store: Store<fromCarts.State>) {
    this.totalCart = this.store.pipe(select(selectTotalCarts));
  }
  ngOnInit(): void {
  }

}
