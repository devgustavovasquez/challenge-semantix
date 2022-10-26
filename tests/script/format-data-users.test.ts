import { formatDataUsers } from "../../script/format-data-users";

describe("Format Data Users Script", () => {
  const date = new Date().toISOString();

  const mockUsers = [
    {
      id: "any_id",
      createdAt: date,
      fullName: "any_name any_lastName",
      email: "any_email",
      addresses: [
        {
          addressId: "any_id",
          address: "any_street, 1",
          country: "any_country",
          countryCode: "any_contryCode",
          city: "any_city",
          state: "any_state",
          zipcode: "00000-0000",
        },
        {
          addressId: "any_id",
          address: "any_street, 2",
          country: "any_country",
          countryCode: "any_contryCode",
          city: "any_city",
          state: "any_state",
          zipcode: "00000-0000",
        },
      ],
      contacts: [
        {
          contactId: "any_id",
          name: "any_name",
          phoneNumber: "000.000.0000",
          email: "any_email",
        },
      ],
    },
  ];

  it("should format the response correctly", () => {
    const mockResponse = formatDataUsers(mockUsers);

    expect(mockResponse).toEqual([
      {
        fullName: "any_name any_lastName",
        address: "any_street",
        addressNumber: 1,
        email: "any_email",
        phoneNumber: "000.000.0000",
      },
    ]);
  });

  it("should return default values if there are no addresses or contacts", () => {
    mockUsers[0].addresses = [];
    mockUsers[0].contacts = [];
    const mockResponse = formatDataUsers(mockUsers);

    expect(mockResponse).toEqual([
      {
        fullName: "any_name any_lastName",
        address: "",
        addressNumber: 0,
        email: "any_email",
        phoneNumber: "",
      },
    ]);
  });
});
