/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Contact from '../Contact'
import { cleanup, render, fireEvent, screen, getByText } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

/**
 * really good article on RTL 
 *  https://medium.com/@jero786/react-testing-library-pro-tips-eba7181eb6fb 
 * 
 * firing events
 * https://testing-library.com/docs/dom-testing-library/api-events
 * 
 * https://www.robinwieruch.de/react-testing-library
 */

describe('Contact Component is Rendered', () => {
  render(<Contact />)

  test('renders Contact component', () => {
    expect(screen.getByText(/send/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(4);
    expect(screen.getAllByText(/send/i)).toHaveLength(1);
  })

  test('handles click to submit button', () => {
    const {  getByText } = render(<Contact />)
    const button = getByText(/send/i)
    fireEvent.click(button)
    expect(screen.getByText(/sending/)).toBeInTheDocument();
  })
})




