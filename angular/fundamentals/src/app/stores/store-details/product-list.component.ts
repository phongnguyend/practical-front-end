import { Component, Input, OnChanges } from '@angular/core'
import { IProduct } from '../shared/index'
import { VoterService } from './voter.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnChanges {
  @Input() products: IProduct[];
  @Input() filterBy: number;
  @Input() sortBy: string;
  @Input() storeId: string;
  visibleProducts: IProduct[] = [];

  constructor(private auth: AuthService, private voterService: VoterService) {

  }

  ngOnChanges(filter) {
    if(this.products) {
      this.filterProducts(this.filterBy);
      this.sortBy === 'name' ? this.visibleProducts.sort(sortByNameAsc) : this.visibleProducts.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: IProduct) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.storeId, session, this.auth.getCurrentUser().id);
    } else {
      this.voterService.addVoter(this.storeId, session, this.auth.getCurrentUser().id);
    }
    if(this.sortBy === 'votes') {
      this.visibleProducts.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: IProduct) {
    return this.voterService.userHasVoted(session, this.auth.getCurrentUser().id)
  }

  filterProducts(filter:number) {
    if(filter == 0) {
      this.visibleProducts = this.products.slice(0);
    } else {
      this.visibleProducts = this.products.filter(product => {
        return product.quantity >= filter;
      })
    }
  }
}

function sortByNameAsc(s1: IProduct, s2: IProduct) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: IProduct, s2: IProduct) {
  return s2.quantity - s1.quantity;
}