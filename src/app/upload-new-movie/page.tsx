import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { profileTab } from "@/data";
import ListCard from "@/components/global/ListCard/ListCard";

const ViewAllMovie = () => {
  return (
    <RootLayout title={"Upload New Movie"}>
      <MainLayout>
        <div>
          <ListCard
            data={profileTab}
            loginAs={true}
            title=""
            uploadNewMovie={true}
            search={true}
          />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllMovie;
