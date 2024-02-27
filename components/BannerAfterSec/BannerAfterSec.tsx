/* eslint-disable react/no-array-index-key */
import { fetchCmsList } from "@/api/functions/cms.api";
import { fetchLandingPageDetails } from "@/api/functions/landing.api";
import { Data } from "@/interface/landing.interface";
import { cardList } from "@/json/mock/cardlist.mock";
import { primaryColors } from "@/themes/_muiPalette";
import ClientIcon from "@/ui/Icons/ClientIcon";
import InfoIcon from "@/ui/Icons/InfoIcon";
import TrustIcon from "@/ui/Icons/TrustIcon";
import styled from "@emotion/styled";
import { CardActionArea } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

export const BannerAfterSecWrapper = styled(Box)`
  padding-top: 150px;
  position: relative;
  z-index: 10;
  @media (max-width: 1499px) {
    padding-top: 100px;
  }
  @media (max-width: 899px) {
    padding-top: 80px;
  }
`;
export const EachCardWrapper = styled(Box)`
  padding: 80px 30px;
  background: ${primaryColors?.color383838};
  box-shadow: 0px 14.19px 43.66px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  @media (max-width: 899px) {
    padding: 30px 30px;
    margin-top: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .poly_gon {
    margin-bottom: 50px;
    margin-top: -115px;
    @media (max-width: 899px) {
      margin-bottom: 0px;
      margin-top: -60px;
    }
  }
`;

interface cardProps extends BoxProps {
  title: string | undefined;
  description: string | undefined;
  icon: React.ReactNode;
}

export const EachCard: React.FC<cardProps & BoxProps> = ({
  title,
  description,
  icon,
  ...props
}) => {
  return (
    <EachCardWrapper {...props}>
      <Typography variant="caption" className="poly_gon">
        {icon}
      </Typography>
      {/*  <Typography variant="h3" component={Link} 
        href={`${slug}`==='how-to-use' ? `/howtouse/${slug}`: `/${slug}`}>{title}</Typography>  */}
      <Typography variant="h3">{title}</Typography> 
       <Typography>{description}</Typography>
    </EachCardWrapper>
  );
};

interface props extends BoxProps {
  data: Data
}

const BannerAfterSec: React.FC<props> = ({ data }) => {
  // const { isLoading, data, error } = useQuery({
  //   queryKey: ["landingpage"],
  //   queryFn: fetchLandingPageDetails,
  // });

  const cardList = [
    {
      icon: <InfoIcon />,
      title: data?.box_1_header,
      description: data?.box_1_text,
    },
    {
      icon: <ClientIcon />,
      title: data?.box_2_header,
      description: data?.box_2_text,
    },
    {
      icon: <TrustIcon />,
      title: data?.box_3_header,
      description: data?.box_3_text,
    },
  ];

  // const { isLoading, data, error } = useQuery({
  //   queryKey: ["cmslists"],
  //   queryFn: fetchCmsList,
  // });

  return (
    <BannerAfterSecWrapper {...data}>
      <Container fixed>
        <Grid
          container
          columnSpacing={{ md: 4, xs: 0 }}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          {/* {Array.isArray(data)
            ? data?.map((data, index) => ( */}
          {
            cardList.map((data) => (
              <Grid item md={4} xs={12} >
               <EachCard {...data}/>
              </Grid>
            ))
            // : null}
          }
        </Grid>
      </Container>
    </BannerAfterSecWrapper>
  );
};

export default BannerAfterSec;
