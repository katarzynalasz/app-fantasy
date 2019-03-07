import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  readonly apiUrl: string = environment.ApiUrl;

  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.log(error);

    let errorMessage = '';
    if (error.message) {
      errorMessage = error.message;
    }
    switch (error.status) {
      case 406:
      case 409:
      case 500:
        errorMessage = 'Internal Server Error.';
        break;
      case 404:
        break;
      case 401:
        errorMessage = 'Unauthorized!';
        break;
      case 0:
        break;
      default:
        break;
    }
    return throwError(errorMessage);
  }
}
