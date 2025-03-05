import { CherOuPasCherPipe } from './cher-ou-pas-cher.pipe';
import { Pizza } from './pizza';

describe('CherOuPasCherPipe', () => {
  it('create an instance', () => {
    const pipe = new CherOuPasCherPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work as expected', () => {
    const pipe = new CherOuPasCherPipe();

    const input:Pizza = {
      name: 'Reine', prix: 12
    }
    const result = pipe.transform(input)
    
    expect(result).toContain('pas cher')
  });
  
  it('should work as expected with more arguments', () => {
    const pipe = new CherOuPasCherPipe();

    const input:Pizza = {
      name: 'Reine', prix: 12
    }
    const result = pipe.transform(input, 5)
    
    expect(result).not.toContain('pas cher')
  });

});
