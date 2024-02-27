import { fetchLandingPageDetails } from "@/api/functions/landing.api";
import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
import { Data } from "@/interface/landing.interface";
import Wrapper from "@/layout/wrapper/Wrapper";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";

export default function Home() {
  const {isLoading, data, error}=useQuery({
    queryKey: ['landingpage'],
    queryFn: fetchLandingPageDetails,
  })
  

  return (
    <Wrapper>
      <BannerSec heroHeading={data?.banner_text_3} labelValue={data?.banner_text_1}
      playStoreUrl={data?.play_store_url as string} iphoneAppUrl={data?.app_store_url as string}
      >
        <Typography>
          {data?.banner_text_2}
        </Typography>
      </BannerSec>
      <BannerAfterSec data={{...data as Data}}/>
      <UseApp />
      <FeatureSec featureData={{...data as Data}}/>
      <Outdoor contactData={{...data as Data}}/>
    </Wrapper>
  );
}
