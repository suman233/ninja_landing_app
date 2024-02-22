import { fetchLandingPageDetails } from "@/api/functions/landing.api";
import assest from "@/json/assest";
import FileIcon from "@/ui/Icons/FileIcon";
import GunIcon from "@/ui/Icons/GunIcon";
import LinkIcon from "@/ui/Icons/LinkIcon";
import VerifiedIcon from "@/ui/Icons/VerifiedIcon";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useQuery } from "react-query";

export const UseAppWrapper = styled(Box)`
  padding: 100px 0 50px;
  position: relative;
  @media (max-width: 899px) {
    padding: 55px 0 50px;
  }

  .black_polygon {
    position: absolute;
    left: -320px;
    top: -280px;
    z-index: 5;
    @media (max-width: 1199px) {
      width: 500px;
    }
    @media (max-width: 899px) {
      width: 300px;
    }

    &.rgt {
      left: auto;
      top: auto;
      right: -320px;
      bottom: -280px;
    }
  }
  .app_title {
    max-width: 636px;
    text-align: center;
    margin: 0 auto 85px;
    position: relative;
    z-index: 6;
    h2 {
      font-size: 45px;
      font-weight: 700;
      margin-bottom: 30px;
      @media (max-width: 599px) {
        font-size: 35px;
      }
    }
  }
  .app_content {
    position: relative;
    z-index: 6;
    @media (max-width: 899px) {
      flex-direction: column;
    }

    .small_block {
      width: 26%;
      @media (max-width: 899px) {
        width: 100%;
        margin-bottom: 80px;
      }
      li {
        display: block;
        h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        &:not(:last-child) {
          margin-bottom: 80px;
          @media (max-width: 899px) {
            margin-bottom: 40px;
          }
        }
        .poly_gon {
          margin-bottom: 25px;
        }
      }
    }
    .middle_block {
      width: 48%;
      padding: 0 25px;
      @media (max-width: 899px) {
        width: 100%;
        order: 1;
      }
      .fea_rgt {
        position: relative;
        padding: 0 15px;
        figure {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .ploy_img {
          width: 100%;
          opacity: 0.5;
        }
      }
    }
  }
`;

interface useAppProps extends BoxProps {}

const UseApp = ({ ...props }: useAppProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["landingpage"],
    queryFn: fetchLandingPageDetails,
  });

  return (
    <UseAppWrapper {...props}>
      <img src={assest?.black_polygon} alt="" className="black_polygon " />
      <img src={assest?.black_polygon} alt="" className="black_polygon rgt" />
      <Container fixed>
        <Box className="app_title">
          <Typography variant="h2">
            <Typography variant="caption" className="red_span">
              {data?.how_to_use_hdr.slice(0,10)}{" "}
            </Typography>
            {data?.how_to_use_hdr.slice(11)}
          </Typography>
          <Typography>
            {data?.how_to_use_sub_hdr}
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" className="app_content">
          <List disablePadding className="small_block">
            <ListItem disablePadding>
              <Typography variant="caption" className="poly_gon">
                <GunIcon />
              </Typography>
              <Typography variant="h4">{data?.how_to_use_content_hdr_1}</Typography>
              <Typography>
                {data?.how_to_use_content_text_1}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="caption" className="poly_gon">
                <LinkIcon />
              </Typography>
              <Typography variant="h4">{data?.how_to_use_content_hdr_2}</Typography>
              <Typography>
                {data?.how_to_use_content_text_2}
              </Typography>
            </ListItem>
          </List>
          <Box className="middle_block">
            <Box className="fea_rgt">
              <Image
                src={assest.useAppBack}
                alt=""
                width={550}
                height={550}
                className="ploy_img"
              />
              <figure>
                <Image
                  src={assest.use_app_image}
                  alt=""
                  width={270}
                  height={545}
                />
              </figure>
            </Box>
          </Box>
          <List disablePadding className="small_block">
            <ListItem disablePadding>
              <Typography variant="caption" className="poly_gon">
                <FileIcon />
              </Typography>
              <Typography variant="h4">{data?.how_to_use_content_hdr_3}</Typography>
              <Typography>
                {data?.how_to_use_content_text_3}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="caption" className="poly_gon">
                <VerifiedIcon />
              </Typography>
              <Typography variant="h4">{data?.how_to_use_content_hdr_4}</Typography>
              <Typography>
                {data?.how_to_use_content_text_4}
              </Typography>
            </ListItem>
          </List>
        </Stack>
      </Container>
    </UseAppWrapper>
  );
};

export default UseApp;
