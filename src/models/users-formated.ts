import { iAddress } from "./addresses";
import { iContact } from "./contacts";
import { iUser } from "./users";

export class UserFormated {
  id: string; // field id from user
  createdAt: string; // field createdAt from user
  fullName: string; // fields firstName + lastName from user
  email: string; // field email from user
  addresses: {
    addressId: string; // field id from addresses list
    address: string; // fields street + number from addresses list
    country: string; // field country from addresses list
    countryCode: string; // field countryCode from addresses list
    city: string; // field city from addresses list
    state: string; // field state from addresses list
    zipcode: string; // field zipcode from addresses list
  }[];
  contacts: {
    contactId: string; // field id from contacts list
    name: string; // field name from contacts list
    phoneNumber: string; // field phoneNumber from contacts list
    email: string; // field email from contacts list
  }[];

  constructor(user: iUser, addresses: iAddress[], contacts: iContact[]) {
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.fullName = `${user.firstName} ${user.lastName}`;
    this.email = user.email;
    this.addresses = addresses.map((address) => {
      return {
        addressId: address.id,
        address: `${address.street}, ${address.number}`,
        country: address.country,
        countryCode: address.countryCode,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
      };
    });
    this.contacts = contacts.map((contact) => {
      return {
        contactId: contact.id,
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
    });
  }
}
