import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsPassword from '../components/settings/SettingsPassword';
import DashboardLayout from '../components/DashboardLayout';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Badenti</title>
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
          <Container maxWidth="lg">
            <Box sx={{ pt: 0 }}>
              <SettingsPassword />
            </Box>
          </Container>
        </Box>

      </div>
    </div>
  </>
);

export default SettingsView;
