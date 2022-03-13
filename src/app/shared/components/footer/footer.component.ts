import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromCarts from '@app/modules/cart/stores/reducers';
import {selectTotalCarts} from '@app/modules/cart/stores/selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  totalCart: Observable<number>;
  constructor(private store: Store<fromCarts.State>) {
    this.totalCart = this.store.pipe(select(selectTotalCarts));
  }

  ngOnInit(): void {
  }

}
