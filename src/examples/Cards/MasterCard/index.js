/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images
import pattern from "assets/images/illustrations/pattern-tree.svg";
import masterCardLogo from "assets/images/logos/mastercard.png";

function MasterCard({ color, number, holder, expires }) {
  const numbers = [...`${number}`];
  return (
    <Card
      sx={({ palette: { gradients }, functions: { linearGradient }, boxShadows: { xl } }) => ({
        background: gradients[color]
          ? linearGradient(gradients[color].main, gradients[color].state)
          : linearGradient(gradients.dark.main, gradients.dark.state),
        boxShadow: xl,
        position: "relative",
      })}
    >
      <MDBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.2}
        sx={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}
      />
      <MDBox position="relative" zIndex={2} p={2}>
        <MDBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon fontSize="default">wifi</Icon>
        </MDBox>
        <MDTypography variant="h5" color="white" fontWeight="medium" sx={{ mt: 3, mb: 5, pb: 1 }}>
          {numbers}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
