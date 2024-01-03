import RootLayout from "@/app/layout";
import { Login } from "@/components/common/Login";

const LoginScreen = () => {
  return (
    <RootLayout title={"Login"} className="!bg-gray-light">
      <div
        className={
          "bg-gray-light relative z-[1] overflow-x-hidden scrollbar-hide"
        }
      >
        <Login />
      </div>
    </RootLayout>
  );
};

export default LoginScreen;
