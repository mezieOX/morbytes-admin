import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { profileTab } from "@/data";
import { ViewAllPublishedNews } from "@/components/common/ViewAllPublishedNews";

const ViewAllPublishedNewsPage = () => {
  return (
    <RootLayout title={"View All Movie"}>
      <MainLayout>
        <div>
          <ViewAllPublishedNews data={profileTab} />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllPublishedNewsPage;
