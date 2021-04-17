import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';
import customers from '../__mocks__/customers';
import DashboardLayout from '../components/DashboardLayout';


const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Badenti</title>
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
            <CustomerListToolbar />
            <Box sx={{ pt: 3 }}>
              <CustomerListResults customers={customers} />
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  </>
);

export default CustomerList;
