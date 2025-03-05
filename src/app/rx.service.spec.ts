import { TestBed } from '@angular/core/testing';
import { RxService } from './rx.service';

describe('RxService 1', () => {
  let service: RxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    
    });

    service = TestBed.inject(RxService);
  });

  it('should be created 1', () => {
    expect(service).toBeTruthy();
  });

});

describe('Une suite de test pour mon service RX', () => {
  let service: RxService;

  beforeAll(() => {
    // 1 seule fois dans ce describe avant tous les it()
  })

  afterEach(() => {
    // après chaque it()
  })

  afterAll(() => {
    // 1 seule fois à apres tous les it()
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
       ],
       providers:[
       ]
    });

    service = TestBed.inject(RxService);
  });

  it('should be created 1', () => {
    expect(service).not.toBeUndefined()
  });

  it('should be created 2', () => {
    expect(service).toBeTruthy();
  });

  it('should be created 3', () => {
    expect(service).toBeTruthy();
  });

  it('should be created 4', () => {
    expect(service).toBeTruthy();
  });
});
