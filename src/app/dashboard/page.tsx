import MainLayout from "@/components/layouts";
import RootLayout from "../layout";

const HomePage = () => {
  return (
    <RootLayout title={"Dashboard"} className="!bg-dark">
      <MainLayout>Dashboard</MainLayout>
    </RootLayout>
  );
};

export default HomePage;
