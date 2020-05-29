import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './src/App';
import { withObservableAttrs } from './src/utils/withObservableAttrs';
import { ROOT_ID } from './src/config/Config';

const root = document.getElementById(ROOT_ID)!;

const AppWithObservableAttrs = withObservableAttrs(root, App);

ReactDOM.render(<AppWithObservableAttrs />, root);
