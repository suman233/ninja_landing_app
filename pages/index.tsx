import { fetchLandingPageDetails } from "@/api/functions/landing.api";
import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
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
      <BannerSec labelValue={data?.banner_text_1}>
        <Typography>
          {data?.banner_text_2}
        </Typography>
      </BannerSec>
      <BannerAfterSec />
      <UseApp />
      <FeatureSec />
      {/* featureProps={data?.features_content_hdr_1} */}
      <Outdoor />
    </Wrapper>
  );
}
