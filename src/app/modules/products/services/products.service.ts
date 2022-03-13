import {HttpClient} from '@angular/common/http';
import {Product, getMockProducts} from '@app/modules/products/stores/models';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_PATH= '';
  constructor(private http: HttpClient) {
  }

  searchProducts(query: any) : Observable<Product[]> {
    return this.http
      .get<{items: Product[]}>(this.API_PATH)
      .pipe(map(result => result.items || []))
  }

  loadSampleProducts(condition: any): Product[] {
    return getMockProducts();
  }
}
