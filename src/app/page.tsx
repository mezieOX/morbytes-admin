import RootLayout from "./layout";
import MainLayout from "@/components/layouts";

export default function Home() {
  return (
    <RootLayout title={"Home"}>
      <MainLayout>Hello</MainLayout>
    </RootLayout>
  );
}
