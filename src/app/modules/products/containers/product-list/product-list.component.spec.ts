import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ProductListComponent} from '@app/modules/products/containers';
import {ProductListPreviewComponent} from '@app/modules/products/components/product-list-preview.component';

describe('ComponentsComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductListPreviewComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
