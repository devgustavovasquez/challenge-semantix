import { formatDataUsersUseCase } from "../../src/usecases/format-data-users-usecase";

describe("Format Data Users Use Case", () => {
  const date = new Date().toISOString();
  const mockUsers = [
    {
      createdAt: date,
      firstName: "any_name",
      avatar: "any_avatar",
      email: "any_email",
      lastName: "any_lastName",
      id: "any_id",
    },
  ];

  const mockAddresses = [
    [
      {
        street: "any_street",
        city: "any_city",
        state: "any_state",
        zipcode: "00000-0000",
        country: "any_country",
        number: 1,
        countryCode: "any_contryCode",
        id: "any_id",
        userId: "any_id",
      },
      {
        street: "any_street",
        city: "any_city",
        state: "any_state",
        zipcode: "00000-0000",
        country: "any_country",
        number: 2,
        countryCode: "any_contryCode",
        id: "any_id",
        userId: "any_id",
      },
    ],
  ];

  const mockContacts = [
    [
      {
        name: "any_name",
        phoneNumber: "000.000.0000",
        email: "any_email",
        id: "any_id",
        userId: "any_id",
      },
    ],
  ];

  it("should format the response correctly", () => {
    const mockResponse = formatDataUsersUseCase(
      mockUsers,
      mockAddresses,
      mockContacts
    );

    expect(mockResponse).toEqual([
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
    ]);
  });

  it("should return empty array if there are no addresses or contacts", () => {
    const mockResponse = formatDataUsersUseCase(mockUsers, [[]], [[]]);

    expect(mockResponse).toEqual([
      {
        id: "any_id",
        createdAt: date,
        fullName: "any_name any_lastName",
        email: "any_email",
        addresses: [],
        contacts: [],
      },
    ]);
  });
});
