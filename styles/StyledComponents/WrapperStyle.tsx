import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WrapperStyle = styled(Box)`
  .main_body {
    min-height: calc(100vh - 96px);
  }
  span {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }
  .red_span {
    color: ${primaryColors?.primary};
  }
  //   ======================
`;
