import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable, of } from 'rxjs'
import { IStore, IProduct } from './store.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Constants } from '../../constants';

@Injectable()
export class StoreService {
  constructor(private http: HttpClient) {
    
  }

  getStores():Observable<IStore[]> {
    return this.http.get<IStore[]>(Constants.apiRoot + 'stores')
      .pipe(catchError(this.handleError<IStore[]>('getStores', [])))
  }

  getStore(id:string):Observable<IStore> {
    return this.http.get<IStore>(Constants.apiRoot + 'stores/' + id)
      .pipe(catchError(this.handleError<IStore>('getStore')))
  }

  saveStore(store) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IStore>(Constants.apiRoot + 'stores', store, options)
      .pipe(catchError(this.handleError<IStore>('saveStore')))
  }

  addProduct(storeId:string, product: IProduct){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IStore>(Constants.apiRoot + 'stores/' + storeId + '/products/', product, options)
      .pipe(catchError(this.handleError<IStore>('addProduct')))
  }

  searchProducts(searchTerm: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Constants.apiRoot + 'products/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<IProduct[]>('searchProducts')))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
