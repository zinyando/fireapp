import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: '',
  lastName: '',
  age: '',
  dob: '',

  actions: {
    saveUser: function(){
      var newUser = this.store.createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        age: this.get('age'),
        dob: this.get('dob')
      });
      newUser.save();
    }
  }

});
