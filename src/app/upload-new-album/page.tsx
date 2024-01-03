import MainLayout from "@/components/layouts";
import RootLayout from "../layout";
import { profileTab } from "@/data";
import ListCard from "@/components/global/ListCard/ListCard";

const ViewAllMovies = () => {
  return (
    <RootLayout title={"Upload New Album"}>
      <MainLayout>
        <div>
          <ListCard
            data={profileTab}
            uploadNewAlbum={true}
            loginAs={true}
            title=""
            search={true}
          />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllMovies;
