import RootLayout from "./layout";
import { Login } from "@/components/common/Login";

export default function Home() {
  return (
    <RootLayout title={"Home"} className={"!bg-dark"}>
      <Login />
    </RootLayout>
  );
}
