describe("Contact", function(){
  it("creates a new contact with the given properties", function(){
    var testContact = new Contact("Dave","Smith");
    expect(testContact.firstName).to.equal("Dave");
    expect(testContact.lastName).to.equal("Smith");
    expect(testContact.addressData).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe("Address", function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Portland", "OR");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("OR");
  });

  it("adds the fullAddress metho to all addresses", function() {
    var testAddress = new Address("123 Main St", "Portland", "OR");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Portland, OR");
  });
});
