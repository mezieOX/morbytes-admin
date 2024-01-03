import RootLayout from "./layout";
import MainLayout from "@/components/layouts";

export default function Home() {
  return (
    <RootLayout title={"Home"} className={"!bg-dark"}>
      <MainLayout>Hello</MainLayout>
    </RootLayout>
  );
}
