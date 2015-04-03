import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('number'),
  dob: DS.attr('date')
});
