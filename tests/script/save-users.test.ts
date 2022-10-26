import { User } from "../../script/database/user-schema";
import { saveUsers } from "../../script/database/save-users";
import mongoose from "mongoose";

describe("Save Users Script", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/users");
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  const mockUsers = [
    {
      fullName: "any_name any_lastName",
      address: "any_street",
      addressNumber: 1,
      email: "any_email",
      phoneNumber: "000.000.0000",
    },
    {
      fullName: "any_name any_lastName",
      address: "any_street",
      addressNumber: 2,
      email: "any_email",
      phoneNumber: "000.000.0000",
    },
  ];

  it("should save users in db", async () => {
    await saveUsers(mockUsers);

    const data = await User.findOne({ addressNumber: 1 });

    expect(data?.fullName).toEqual("any_name any_lastName");
  });
});
