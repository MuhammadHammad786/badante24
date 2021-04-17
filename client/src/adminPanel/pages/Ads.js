import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import AdList from '../components/Ads/AdsList';
import DashboardLayout from '../components/DashboardLayout';


const Ads = () => (
  <>
    <Helmet>
      <title>Ads | Badenti</title>
    </Helmet>
    <DashboardLayout/>
    <div className="adminContent">
      <div className="adminContentChild">
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Box sx={{ pt: 0 }}>
              <AdList />
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  </>
);

export default Ads;
