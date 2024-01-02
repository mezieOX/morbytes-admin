import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { uploadedMusic } from "@/data";
import { ViewAllMusic } from "@/components/common/ViewAllMusic";

const ViewAllMusicPage = () => {
  return (
    <RootLayout title={"View All Movie"}>
      <MainLayout>
        <div>
          <ViewAllMusic data={uploadedMusic} />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllMusicPage;
