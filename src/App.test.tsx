import { render, screen } from '@testing-library/react'

test('renders div with Text inside', () => {
  render(<div>Text</div>)
  const linkElement = screen.getByText('Text')
  expect(linkElement).toBeInTheDocument()
})
