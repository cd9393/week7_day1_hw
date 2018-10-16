const FormView = require('./viewers/form_view.js')
const PrimeNumber = require('./models/prime_number_logic.js')
const ResultView = require('./viewers/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const newFormView = new FormView();
  newFormView.bindEvents();

  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();


});
