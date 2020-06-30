import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './budget';

@Component({
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.3,
      imageUrl: 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/budget']);
  }
}
