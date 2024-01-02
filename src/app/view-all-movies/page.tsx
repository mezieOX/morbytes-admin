import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { profileTab } from "@/data";
import { ViewAllMovie } from "@/components/common/ViewAllMovie";

const ViewAllMovies = () => {
  return (
    <RootLayout title={"View All Movie"}>
      <MainLayout>
        <div>
          <ViewAllMovie data={profileTab} />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllMovies;
