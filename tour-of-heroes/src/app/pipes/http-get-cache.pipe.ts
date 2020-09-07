import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'httpGetCache',
  pure: false,
})
export class HttpGetCachePipe implements PipeTransform {
  private cachedData: any = null;

  private cachedUrl = '';

  constructor(private httpClient: HttpClient) {}

  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.httpClient.get(url).subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }
}
