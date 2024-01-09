import { Login } from "@/components/common/Login";
import RootLayout from "./layout";
import MainLayout from "@/components/layouts";

export default function Home() {
  return (
    <RootLayout title={"Login"}>
      <MainLayout
        className="!hidden"
        containerClass="!block w-full px-0 h-full mx-auto !bg-gray-light text-white"
        wrapperClassName={"!bg-gray-light"}
      >
        <div className="">
          <Login />
        </div>
      </MainLayout>
    </RootLayout>
  );
}
