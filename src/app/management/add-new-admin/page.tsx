import RootLayout from "@/app/layout";
import MainLayout from "@/components/layouts";
import { AddNewAdmin } from "@/components/common/Management/AddNewAdmin";

const AddNewAdminPage = () => {
  return (
    <RootLayout title={"Add New Admin"}>
      <MainLayout>
        <div>
          <AddNewAdmin />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default AddNewAdminPage;
