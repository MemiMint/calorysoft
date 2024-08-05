import {FC, useState } from "react";
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Sheet from '@mui/joy/Sheet';
import IconButton from "@mui/joy/IconButton";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

type TData = {
  firstname: string;
  lastname: string;
  phonenumber: string;
}

type DisplayedRows = {
  from: number;
  to: number;
  count: number;
}


const labelDisplayedRows = ({ from, to, count }: DisplayedRows): string => {
  return `${from}-${to} of ${count !== 1 ? count : `more than ${to}`}`;
}

export const UserTable: FC<{ rows: TData[] }> = (props) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(0);

  const getLabelDisplayedRowsTo = () => {
    if (props.rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? props.rows.length
      : Math.min(props.rows.length, (page + 1) * rowsPerPage);
  };

  const onHandleChangePage = (newPage: number) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
    if (newValue === null) return;

    setRowsPerPage(parseInt(newValue!.toString(), 10));
    setPage(0);
  };

  return (
    <div>
      <Sheet sx={{ mt: 1, height: 300, overflow: 'auto' }}>
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          stripe="odd"
          hoverRow
        >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row) => (
              <tr key={row.firstname}>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.phonenumber}</td>
                <td>
                  <Typography level="title-sm" color="primary" >Ver informacion</Typography>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'flex-end',
                  }}
                >
                  <FormControl orientation="horizontal" size="sm">
                    <FormLabel>Rows per page:</FormLabel>
                    <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                      <Option value={5}>5</Option>
                      <Option value={10}>10</Option>
                      <Option value={25}>25</Option>
                    </Select>
                  </FormControl>
                  <Typography textAlign="center" sx={{ minWidth: 80 }}>
                    {labelDisplayedRows({
                      from: props.rows.length === 0 ? 0 : page * rowsPerPage + 1,
                      to: getLabelDisplayedRowsTo(),
                      count: props.rows.length === -1 ? -1 : props.rows.length,
                    })}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={page === 0}
                      onClick={() => onHandleChangePage(page - 1)}
                      sx={{ bgcolor: 'background.surface' }}
                    >
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton
                      size="sm"
                      color="neutral"
                      variant="outlined"
                      disabled={
                        props.rows.length !== -1
                          ? page >= Math.ceil(props.rows.length / rowsPerPage) - 1
                          : false
                      }
                      onClick={() => onHandleChangePage(page + 1)}
                      sx={{ bgcolor: 'background.surface' }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </Box>
                </Box>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Sheet>
    </div>
  );
}
