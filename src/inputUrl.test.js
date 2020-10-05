import React from 'react';
import { render } from '@testing-library/react';
import InputUrl from './inputUrl.js';


test('renderiza o input da url', () => {
    const { getByText } = render(<InputUrl />);
    const inputElement = getByText('Url');
    expect(inputElement).toBeInTheDocument();
  });


  test('renderiza o botão para envio', () => {
    const { getByText } = render(<InputUrl />);
    const buttonElement= getByText(/Get!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  