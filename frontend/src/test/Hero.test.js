import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test('renders the hero image with correct alt text', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });

    test('renders the heading with correct text', () => {
        render(<Hero />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Invest in everything');
    });

    test('renders the paragraph with correct text', () => {
        render(<Hero />);
        const paragraph = screen.getByText(/Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more./i);
        expect(paragraph).toBeInTheDocument();
    });

    test('renders the signup button with correct text and style', () => {
        render(<Hero />);
        const button = screen.getByRole('button', { name: /Sign up for free/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('background-color: #387ED1');
    });

    test('button has correct width and font size', () => {
        render(<Hero />);
        const button = screen.getByRole('button', { name: /Sign up for free/i });
        expect(button).toHaveStyle('width: 20%');
        expect(button).toHaveClass('fs-5');
    });
});