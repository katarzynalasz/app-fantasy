import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/base.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageUploaderService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);
    return this.http.post(this.apiUrl, formData).pipe(catchError(this.handleError));
  }
}
