import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import DashboardComponent from "@/components/common/Dashboard/Dashboard";

const HomePage = () => {
  return (
    <RootLayout title={"Dashboard"} className="!bg-dark">
      <MainLayout>
        <DashboardComponent />
      </MainLayout>
    </RootLayout>
  );
};

export default HomePage;
