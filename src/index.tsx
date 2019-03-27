import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';

const currentHour = new Date().getHours();

const colorMode = currentHour > 6 && 18 > currentHour ? 'bright' : 'dark';
// const colorMode = 'dark';

// hacky fix for blinking white background on dark mode
document.getElementsByTagName('body')[0].style.backgroundColor = Theme[colorMode].bgColor;

ReactDOM.render(
  (
    <ThemeProvider theme={Theme[colorMode]}>
      <App theme={Theme[colorMode]} />
    </ThemeProvider>
  ),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
