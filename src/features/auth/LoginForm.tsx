import { Button, Input } from "@/components/ui";
import Error from "./Error";
import ResetPassword from "./ResetPassword";

const LoginForm = async () => {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="max-w-sm w-full ">
        <form action={"/api/sign-in"} method="POST" className="space-y-5">
          <Input
            placeholder="Enter email"
            type="email"
            name="email"
            required
            className=""
          />
          <Input
            placeholder="Enter password"
            type="password"
            name="password"
            required
            className=""
          />
          <ResetPassword />
          <Button className="w-full">Sign in</Button>
        </form>
      </div>
      <Error />
    </main>
  );
};

export default LoginForm;
