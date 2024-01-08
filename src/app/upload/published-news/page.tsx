import MainLayout from "@/components/layouts";
import { publishedNews } from "@/data";
import ListCard from "@/components/global/ListCard/ListCard";
import RootLayout from "@/app/layout";

const ViewAllMusic = () => {
  return (
    <RootLayout title={"Published News"}>
      <MainLayout>
        <div>
          <ListCard
            data={publishedNews}
            loginAs={true}
            title=""
            search={true}
            publishAHappeningNews={true}
          />
        </div>
      </MainLayout>
    </RootLayout>
  );
};

export default ViewAllMusic;
