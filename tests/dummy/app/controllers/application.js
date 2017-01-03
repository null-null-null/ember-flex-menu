import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  choices: [
    'Collard Greens',
    'Mustard Greens',
    'Kale',
    'Garlic',
    'Onions',
    'Butternut Squash', {
      text: 'Japanese Yams',
      value: 'yams'
    }, {
      text: 'Other',
      inputable: true
    }, {
      text: 'Multi1',
      multi: true
    }, {
      text: 'Multi2',
      multi: true,
      alwaysSelected: true
    }, {
      text: 'MultiOther',
      inputable: true,
      multi: true
    }, {
      text: 'Slider',
      slider: {
        start: 20,
        range: {
          min: 1,
          max: 100
        },
        onUpdate(value) { console.log(value); }
      }
    }, {
      text: 'Multi Submit',
      multiSubmit: true
    }
  ],

  actions: {
    logChoice(choice) {
      console.log(choice);
    }
  }
});
