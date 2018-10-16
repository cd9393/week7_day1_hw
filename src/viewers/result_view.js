const PubSub = require('../helpers/pubsub.js');

const ResultView = function(){



};
ResultView.prototype.bindEvents = function () {
PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
  const NumberEntered = event.detail;
  this.displayResult(NumberEntered);
})
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = ` ${result}`;
};

module.exports = ResultView;
