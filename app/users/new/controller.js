import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveUser: function(){
      var newUser = this.store.createRecord('users', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        age: this.get('age'),
      });
      newUser.save();
      this.setProperties({
        firstName: '',
        lastName: '',
        age: ''
      });
    }
  }

});
