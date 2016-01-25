function Contact (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addressData = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

console.log(inputtedLastName);
console.log(newContact);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
