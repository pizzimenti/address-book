function Contact (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addressData = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
