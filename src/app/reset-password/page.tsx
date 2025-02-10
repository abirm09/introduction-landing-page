import { Button, Input } from "@/components/ui";
import config from "@/config";
import { Error } from "@/features/auth";
import { TSearchParams } from "@/types";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const ResetPassword = async ({
  searchParams,
}: {
  searchParams: Promise<TSearchParams>;
}) => {
  let { token } = await searchParams;
  token = (Array.isArray(token) ? token[0] : token) || "";

  try {
    jwt.verify(token, config.password_reset_token_secret);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (error) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-sm w-full ">
        <form
          action={`/api/reset-password?token=${token}`}
          method="POST"
          className="space-y-5"
        >
          <Input
            id="password"
            placeholder="Enter new password"
            type="password"
            name="password"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            defaultValue={"Md@@2247"}
          />
          <Input
            id="CPassword"
            placeholder="Confirm password"
            type="password"
            name="CPassword"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            defaultValue={"Md@@2247s"}
          />
          <Button className="w-full">Change password</Button>
        </form>
      </div>
      <Error />
    </div>
  );
};

export default ResetPassword;
