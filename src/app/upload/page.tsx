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
            firstBtnLink="view-all-movie"
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
            btnTitle1={"Upload New Music"}
            firstBtnLink="view-all-music"
            secondBtnLink="upload-new-music"
            thirdBtnLink="upload-new-album"
          />
          <ListCard
            data={publishedNews}
            title={"Published  News"}
            className={"!-mt-1.5"}
            btnTitle={"Upload New"}
            secondBtn={false}
            cardItemsScreen={true}
            btnClassName={"!gap-10"}
            firstBtnLink="view-all-published-news"
            thirdBtnLink="published-news"
          />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default UploadPage;
