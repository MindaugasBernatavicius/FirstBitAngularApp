import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({ providedIn: 'root' })
export class ProductGuard implements CanActivate, Resolve<Product> {
  constructor(private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product {
    throw new Error('Method not implemented.'); // TODO
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      // alert('Incorrect value');
      this.router.navigate(['/products'], { state: { error: `Invalid URL parameter: ${route.url[1].path}` } })
      return false;
    }
    return true;
  }
}
