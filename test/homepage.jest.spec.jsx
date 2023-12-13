import React from 'react'
import { render, screen } from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import App from '../client/src/App'

jest.mock('axios')

describe('Homepage', () => {
  it('fetches data', async () => {
    const data = [
        { id: 1, name: 'Ross', number: '123-123-1234' },
        { id: 2, name: 'Jimbo', number: '234-234-2345' },
      ];

      axiosMock.get.mockResolvedValueOnce({ data: data });

      await act(async () => {
        render(<App />);
      });

    await screen.findByText('Ross');
    await screen.findByText('Jimbo');

    expect(screen.getByText('Ross')).toBeInTheDocument();
    expect(screen.getByText('Jimbo')).toBeInTheDocument();

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  
  })
})
