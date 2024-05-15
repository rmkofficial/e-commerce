import PropTypes from "prop-types";
import Container from '@mui/material/Container';

const PageContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
