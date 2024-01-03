import RootLayout from "@/app/layout";
import { Login } from "@/components/common/Login";

const LoginScreen = () => {
  return (
    <RootLayout title={"Login"} className={"!bg-gray-light min-h-screen"}>
      <Login />
    </RootLayout>
  );
};

export default LoginScreen;
