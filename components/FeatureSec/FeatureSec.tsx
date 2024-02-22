/* eslint-disable react/no-unescaped-entities */
import { fetchLandingPageDetails } from "@/api/functions/landing.api";
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import FeatureIcon1 from "@/ui/Icons/FeatureIcon1";
import FeatureIcon2 from "@/ui/Icons/FeatureIcon2";
import FeatureIcon3 from "@/ui/Icons/FeatureIcon3";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useQuery } from "react-query";

export const FeatureSecWrap = styled(Box)`
  position: relative;
  z-index: 6;
  padding: 100px 0;
  @media (max-width: 899px) {
    padding: 55px 0;
  }

  .fea_lft {
    h2 {
      margin-bottom: 10px;
      span {
        color: ${primaryColors.primary};
        display: inline-block;
        font-weight: 700;
      }
    }
    .fea_txt {
      padding-left: 25px;
      @media (max-width: 599px) {
        padding-left: 10px;
      }
    }
    ul {
      margin-top: 65px;
      @media (max-width: 599px) {
        margin-top: 35px;
      }

      li {
        margin-bottom: 50px;
        @media (max-width: 599px) {
          margin-bottom: 30px;
        }

        &:last-child {
          margin-bottom: 0;
        }
        h3 {
          margin-bottom: 6px;
        }
      }
    }
  }
  .fea_rgt {
    position: relative;
    figure {
      position: absolute;
      top: 0;
      right: 0;
    }
    .ploy_img {
      width: 85%;
      margin-top: 100px;
      margin-left: 60px;
      @media (max-width: 599px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
`;

export default function FeatureSec() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["landingpage"],
    queryFn: fetchLandingPageDetails,
  });

  return (
    <FeatureSecWrap>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box className="fea_lft">
              <Typography variant="h2">
                <span>{data?.features_hdr.slice(0,13)} </span> <strong> {data?.features_hdr.slice(14,22)}</strong> {data?.features_hdr.slice(23)}
                
              </Typography>
              <Typography variant="body1">
                {data?.features_sub_hdr}
              </Typography>
              <List disablePadding>
                <ListItem disablePadding>
                  <span className="poly_gon">
                    <FeatureIcon1 />
                  </span>
                  <Box className="fea_txt">
                    <Typography variant="h3">{data?.features_content_hdr_1}</Typography>
                    <Typography variant="body1">
                      {data?.features_content_text_1}
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <span className="poly_gon">
                    <FeatureIcon2 />
                  </span>
                  <Box className="fea_txt">
                    <Typography variant="h3">{data?.features_content_hdr_2}</Typography>
                    <Typography variant="body1">
                      {data?.features_content_text_2}
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <span className="poly_gon">
                    <FeatureIcon3 />
                  </span>
                  <Box className="fea_txt">
                    <Typography variant="h3">{data?.features_content_hdr_3}</Typography>
                    <Typography variant="body1">
                      {data?.features_content_text_3}
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="fea_rgt">
              <Image
                src={assest.polyBack2}
                alt=""
                width={642}
                height={642}
                className="ploy_img"
              />
              <figure>
                <Image
                  src={assest.mobileImage}
                  alt=""
                  width={630}
                  height={732}
                />
              </figure>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FeatureSecWrap>
  );
}
