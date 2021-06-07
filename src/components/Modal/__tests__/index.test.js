import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const mockToggleModal = jest.fn();



const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};
afterEach(cleanup)

describe('Modal is rendering', () => {
  
  it('renders', () => {
    render(<Modal {...currentPhoto} closeModal={mockToggleModal}   />);
  });
  
  
  it('matches snapshot', () => {
    const { asFragment } = render(<Modal  />)
    expect(asFragment()).toMatchSnapshot()
  })
  
  describe('Click Event', () => {
    it('calls onClose handler', () => {
      // Arrange: Render Modal
      const { getByText } = render(<Modal
        {...currentPhoto}
        closeModal={mockToggleModal}
      />);
      // Act: Simulate click event
      fireEvent.click(getByText('Close this modal'));
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
      // Assert: Expected matcher
    });
  })  

  // it('renders', () => {
  //   const { getByTestId } = render(<Modal currentCategory={portrait} />)
  //   expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  // })

})