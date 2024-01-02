import { registeredAdmin } from "@/data";
import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import Management from "@/components/common/Management/Management";

const ManagementPage = () => {
  return (
    <RootLayout title={"Management"}>
      <MainLayout>
        <div>
          <Management data={registeredAdmin} />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ManagementPage;
