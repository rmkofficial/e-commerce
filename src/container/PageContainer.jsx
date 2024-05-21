import PropTypes from "prop-types";
import Container from "@mui/material/Container";

const PageContainer = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
