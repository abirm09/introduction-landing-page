import config from "@/config";
import { connectDB } from "@/lib";
import { User } from "@/models";
import bcrypt from "bcryptjs";

const SeedAdmin = async () => {
  try {
    await connectDB();
    const isAlreadyExist = await User.find().limit(1);
    if (isAlreadyExist.length) return;
    const data = {
      name: "Admin",
      email: config.admin_email,
      password: await bcrypt.hash(config.admin_password, config.bcrypt_salt),
    };

    await User.create(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to seed user", error);
  }
};

export default SeedAdmin;
