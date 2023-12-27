import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Note from '../src/components/Note'

const x = {
  key: 1234,
  name: 'Ross Comer',
  number: '19205551234',
  searchItem: 'Ross Comer',
  persons: [],
  id: 1234
}

test('returns a delete button on a successful search', () => {
  render(<Note key={x.id} 
    name={x.name} 
    number={x.number}
    searchItem={x.searchItem}
    persons={x.persons}
    id={x.id} />)

  const element = screen.getByText('delete')
  expect(element).toBeDefined()
})
