import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact', () => {
    it('should render', () => {
        render(<Contact></Contact>)
    });
  
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);

        expect(asFragment()).toMatchSnapshot();
      })


    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);

        expect(asFragment()).toMatchSnapshot();
      })

      
        it('inserts text ', () => {
          // Arrange
          const { getByTestId } = render(<Contact 
            />);
          expect(getByTestId('contactMe')).toHaveTextContent('Contact me');
 
          // Assert
        });


});