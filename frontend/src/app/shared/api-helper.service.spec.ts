import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ApiHelperService } from './api-helper.service';

describe('ApiHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiHelperService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend, defaultOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ]
    });
  });

  it('should ...', inject([ApiHelperService], (service: ApiHelperService) => {
    expect(service).toBeTruthy();
  }));
});
