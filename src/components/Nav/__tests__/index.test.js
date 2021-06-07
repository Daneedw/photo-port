import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
      });


      it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
      })

      
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText('camera')).toHaveTextContent('📸');

    // Assert  
    })
  }) 

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
      // Assert
    });
  })