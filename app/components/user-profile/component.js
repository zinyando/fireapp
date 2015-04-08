import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Lennex J Zinyando',
  email: 'zinyando@gmail.com',
  isUser: false,
  actions: {
    showUser: function(){
      this.set('isUser', true);
    },
    hideUser: function(){
      this.set('isUser', false);
    }
  }
});
