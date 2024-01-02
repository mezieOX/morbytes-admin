import { profileTab, publishedNews, uploadedMusic } from "@/data";
import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import ListCard from "@/components/global/ListCard/ListCard";

const UploadPage = () => {
  return (
    <RootLayout title={"Upload"}>
      <MainLayout>
        <div>
          <ListCard
            data={profileTab}
            firstBtnLink="view-all-movies"
            secondBtnLink="upload-new-movie"
            thirdBtnLink="upload-new-series"
            cardItemsScreen={true}
            loginAs={true}
          />
          <ListCard
            data={uploadedMusic}
            title={"Uploaded Music"}
            className={"!-mt-1.5"}
            cardItemsScreen={true}
            btnTitle={"Upload New Album"}
            firstBtnLink="view-all-music"
            secondBtnLink="upload-new-music"
            thirdBtnLink="upload-new-album"
          />
          <ListCard
            data={publishedNews}
            title={"Published  News"}
            className={"!-mt-1.5"}
            btnTitle={"Published  News"}
            secondBtn={false}
            cardItemsScreen={true}
            btnClassName={"!gap-10"}
            firstBtnLink="published-news"
            thirdBtnLink="view-all-published-news"
          />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default UploadPage;
