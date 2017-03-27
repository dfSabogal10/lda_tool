import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
