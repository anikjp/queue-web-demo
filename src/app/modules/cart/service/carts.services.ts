import {HttpClient} from '@angular/common/http';
import {Cart} from '@app/modules/cart/stores/models/carts';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsServices {
  private API_PATH= '';
  constructor(private http: HttpClient) {
  }

  searchCarts(query: any) : Observable<Cart[]> {
    return this.http
      .get<{items: Cart[]}>(this.API_PATH)
      .pipe(map(result => result.items || []))
  }

  loadCartsFromLocalDB(condition: any): Cart[] {
    return [] as Cart[];
  }
}
