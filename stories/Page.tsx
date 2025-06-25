import React from 'react';
import type { FC } from 'react';
import { Header } from './Header';
import { Button } from './Button';

export interface PageProps {
  user?: {
    name: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Page: FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <article>
      <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
      <section>
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <strong>
            <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
              <strong>component-driven</strong>
            </a>
          </strong>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="viewport-icon">
            <title id="viewport-icon">Viewport Icon</title>
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.4.5l-1.2 3.8c-.1.3-.3.4-.5.4H1.5c-.3 0-.5-.2-.4-.5l1.2-3.8c.1-.3.3-.4.5-.4zM7.5 2.2h4.8c.3 0 .5.2.4.5L11.1 6c-.1.3-.3.4-.5.4H7.5c-.3 0-.5-.2-.4-.5l1.2-3.8c.1-.3.3-.4.5-.4z"
                fill="#00D4AA"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
