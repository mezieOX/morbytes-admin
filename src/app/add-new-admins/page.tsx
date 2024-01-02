import { profileTab, publishedNews, uploadedMusic } from "@/data";
import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import ListCard from "@/components/global/ListCard/ListCard";

const AddNewAdminPage = () => {
  return (
    <RootLayout title={"Upload"}>
      <MainLayout>
        <div>
          <ListCard data={profileTab} loginAs={true} />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default AddNewAdminPage;
