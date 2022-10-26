interface rawUser {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  addresses: {
    addressId: string;
    address: string;
    country: string;
    countryCode: string;
    city: string;
    state: string;
    zipcode: string;
  }[];
  contacts: {
    contactId: string;
    name: string;
    phoneNumber: string;
    email: string;
  }[];
}

interface formatUser {
  fullName: string;
  email: string;
  address: string;
  addressNumber: number;
  phoneNumber: string;
}

export type formatUsersResponse = Array<formatUser>;

export const formatDataUsers = (users: rawUser[]): formatUsersResponse => {
  const response = users.map((user) => {
    const address =
      user.addresses[0]?.address.substring(
        0,
        user.addresses[0].address.indexOf(",")
      ) || "";

    const addressNumber =
      parseInt(
        user.addresses[0]?.address.substring(
          user.addresses[0].address.indexOf(",") + 1
        )
      ) || 0;

    return {
      fullName: user.fullName,
      address,
      addressNumber,
      email: user.email,
      phoneNumber: user.contacts[0]?.phoneNumber || "0-000-000-0000",
    };
  });

  return response;
};
