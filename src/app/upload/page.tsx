import RootLayout from "../layout";
import MainLayout from "@/components/layouts";
import { UploadComponent } from "@/components/common/Upload";

const UploadPage = () => {
  return (
    <RootLayout title={"Upload"} className="!bg-dark">
      <MainLayout>
        <UploadComponent />
      </MainLayout>
    </RootLayout>
  );
};

export default UploadPage;
