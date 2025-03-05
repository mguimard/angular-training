import { PizzasService } from './pizzas.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationModule } from '@angular/core';

describe('PizzasService', () => {
  let service: PizzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting()
      ],
    });

    const httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PizzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
