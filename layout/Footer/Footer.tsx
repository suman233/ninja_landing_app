/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterWrap = styled(Box)`
  .ftr-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 899px) {
      justify-content: center;
      flex-wrap: wrap;
    }
    @media (max-width: 499px) {
      flex-direction: column;
    }

    li {
      width: auto;
      margin: 0 20px;
      @media (max-width: 499px) {
        margin: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
    }
    a {
      color: ${primaryColors.white};
      &:hover {
        color: ${primaryColors.primary};
      }
    }
  }
  .ftr-btm {
    padding: 40px 0;
    border-top: 1px solid ${primaryColors.secondaryBorder};
    @media (max-width: 499px) {
      padding: 30px 0;
    }
    p {
      @media (max-width: 499px) {
        text-align: center;
      }
      a {
        color: ${primaryColors.white};
        &:hover {
          color: ${primaryColors.primary};
        }
      }
    }
    .MuiStack-root {
      @media (max-width: 899px) {
        flex-direction: column;
      }
    }
  }
  .ftr_top {
    padding: 50px 0;
    @media (max-width: 499px) {
      /* padding: 35px 0; */
      padding: 35px 0;
    }
    @media (max-width: 899px) {
      text-align: center;
    }
  }
`;

const Footer = () => {
  const navItems = [
    {
      name: "Privacy Policy",
      route: "/privacy-policy"
    },
    {
      name: "Terms & Condition",
      route: "/terms-condition"
    }
  ];
  const router = useRouter();
  return (
    <FooterWrap>
      <Box className="ftr_top">
        <Container fixed>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <Link href="/" className="ftr-logo">
                <Image
                  src={assest.footer_logo}
                  alt=""
                  width={165}
                  height={170}
                />
              </Link>
            </Grid>
            <Grid item xs={12} md={9}>
              <List className="ftr-list">
                {navItems.map((item: any, index: number) => (
                  <ListItem disablePadding key={index}>
                    <Link
                      href={item?.route}
                      key={item.name}
                      className={router.pathname === item.route ? "active" : ""}
                    >
                      {item?.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="ftr-btm">
        <Container fixed>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">
              &copy; Copyright 2024 <Link href="/">Outdoor Ninja</Link> - All
              Rights Reserved
            </Typography>
            <Typography variant="body1">
              Website Design by{" "}
              <Link href="https://www.webskitters.com/" target="blank">
                Webskitters
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
