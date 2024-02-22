import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 165px;
    display: inline-block;
    transition: all 0.4s;
    @media (max-width: 899px) {
      width: 85px;
    }
  }
`;
