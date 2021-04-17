import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


export default function BasicPagination() {
  return (
    <div className="pagination">
      <Pagination count={5} color="primary" />
    </div>
  );
}
