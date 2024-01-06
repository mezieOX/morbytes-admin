import RootLayout from "../layout";
import MainLayout from "@/components/layouts";

const Dashboard = () => {
  return (
    <RootLayout title={"Management"}>
      <MainLayout>
        <div>Dashboard</div>
      </MainLayout>
    </RootLayout>
  );
};

export default Dashboard;
