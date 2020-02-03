'use strict';

console.log('app.js is running');

//JSX - JavaScript XML

var appRoot = document.getElementById('app');
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
ReactDOM.render(template, appRoot);
