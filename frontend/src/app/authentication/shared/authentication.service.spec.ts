import { LocalStorageService } from 'angular-2-local-storage';
import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService
      ],
      imports: [HttpModule],
    });
  });
});
