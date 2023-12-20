import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Typography,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import styles from './index.module.scss';
import { grey } from '@mui/material/colors';

const CompanyPositionStep = () => {
  const [editingBoardTeam, setEditingBoardTeam] = useState(false);
  const [editingShareholders, setEditingShareholders] = useState(false);
  const [rows, setRows] = useState<
    Array<{ name: string; email: string; percentage: number }>
  >([]);

  useEffect(() => {
    const newRows = [
      createData('Emilia Koslochski', 'Koslochski@gmail.com', 80),
      createData('Emilia Koslochski', 'Koslochski@gmail.com', 95),
      createData('Emilia Koslochski', 'Koslochski@gmail.com', 70),
    ];

    setRows(newRows);
  }, []);

  const BoardTeamCard = useCallback(() => {
    return (
      <Box className={styles['card-boardteam']}>
        <Box className={styles['header']}>
          <Box className={styles['left']}>
            <PeopleOutlineOutlinedIcon />
            <Typography variant="caption">Board team</Typography>
          </Box>

          <Box className={styles['right']}>
            {editingBoardTeam ? (
              <>
                <IconButton
                  onClick={() => setEditingBoardTeam(false)}
                  sx={{ padding: 0 }}
                >
                  <SaveOutlinedIcon
                    fontSize="small"
                    sx={{ color: grey[400] }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => setEditingBoardTeam(false)}
                  sx={{ padding: 0 }}
                >
                  <ClearOutlinedIcon
                    fontSize="small"
                    sx={{ color: grey[400] }}
                  />
                </IconButton>
              </>
            ) : (
              <IconButton
                onClick={() => setEditingBoardTeam(true)}
                sx={{ padding: 0 }}
              >
                <EditOutlinedIcon fontSize="small" sx={{ color: grey[400] }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* <Box className={styles['content']}>
          <Box className={styles['text-input']}>
            <InputLabel
              sx={{ fontSize: '0.75rem', color: 'white' }}
              htmlFor="benefit-owner"
            >
              Universal beneficial owner
            </InputLabel>
            <TextField
              sx={{ width: '45vw' }}
              variant="standard"
              id="benefit-owner"
              placeholder="Enter u.b.o name"
            />
          </Box>
          <Box className={styles['text-input']}>
            <InputLabel
              sx={{ fontSize: '0.75rem', color: 'white' }}
              htmlFor="director"
            >
              Director
            </InputLabel>
            <TextField
              sx={{ width: '45vw' }}
              variant="standard"
              id="director"
              placeholder="Enter director name"
            />
          </Box>
          <Box className={styles['text-input']}>
            <InputLabel
              sx={{ fontSize: '0.75rem', color: 'white' }}
              htmlFor="secretary"
            >
              Secretary
            </InputLabel>
            <TextField
              sx={{ width: '45vw' }}
              variant="standard"
              id="secretary"
              placeholder="Enter secretary name"
            />
          </Box>
        </Box> */}

        <Box className={styles['content']}>
          <Box className={styles['text-input']}>
            <TextField
              sx={{ flexGrow: 1 }}
              size="small"
              label="  Universal beneficial owner"
              variant="outlined"
              id="benefit-owner"
              placeholder="Enter u.b.o name"
            />
          </Box>
          <Box className={styles['text-input']}>
            <TextField
              sx={{ flexGrow: 1 }}
              size="small"
              label="Director"
              variant="outlined"
              id="director"
              placeholder="Enter director name"
            />
          </Box>
          <Box className={styles['text-input']}>
            <TextField
              sx={{ flexGrow: 1 }}
              size="small"
              label="Secretary"
              variant="outlined"
              id="secretary"
              placeholder="Enter secretary name"
            />
          </Box>
        </Box>
      </Box>
    );
  }, [editingBoardTeam]);

  const ShareholderCard = useCallback(() => {
    return (
      <Box className={styles['card-shareholder']}>
        <Box className={styles['header']}>
          <Box className={styles['left']}>
            <Groups2OutlinedIcon />
            <Typography variant="caption">Shareholders</Typography>
          </Box>

          <Box className={styles['right']}>
            {editingShareholders ? (
              <>
                <IconButton onClick={() => addRow()} sx={{ padding: 0 }}>
                  <ControlPointOutlinedIcon fontSize="small" color="primary" />
                </IconButton>
                <IconButton
                  onClick={() => setEditingShareholders(false)}
                  sx={{ padding: 0 }}
                >
                  <SaveOutlinedIcon
                    fontSize="small"
                    sx={{ color: grey[400] }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => setEditingShareholders(false)}
                  sx={{ padding: 0 }}
                >
                  <ClearOutlinedIcon
                    fontSize="small"
                    sx={{ color: grey[400] }}
                  />
                </IconButton>
              </>
            ) : (
              <IconButton
                onClick={() => setEditingShareholders(true)}
                sx={{ padding: 0 }}
              >
                <EditOutlinedIcon fontSize="small" sx={{ color: grey[400] }} />
              </IconButton>
            )}
          </Box>
        </Box>

        <Box className={styles['content']}>
          <TableContainer sx={{ color: 'white' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: grey[400], flex: 1 }} align="left">
                    Name
                  </TableCell>
                  <TableCell sx={{ color: grey[400], flex: 1 }} align="left">
                    %
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      contentEditable={editingShareholders}
                      sx={{
                        color: 'white',
                        fontSize: '0.75rem',
                      }}
                      align="left"
                    >
                      <Box>
                        <Typography>{row.name}</Typography>
                        <Typography
                          fontStyle="italic"
                          fontSize="0.65rem"
                          color={grey[400]}
                        >
                          {row.email}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      contentEditable={editingShareholders}
                      sx={{ color: 'white' }}
                      align="left"
                    >
                      {row.percentage} %
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  }, [editingShareholders, rows]);

  const Preview = useCallback(() => {
    return <></>;
  }, []);

  const CompanyPositionForm = useCallback(() => {
    return (
      <Box className={styles['company-position']}>
        <Box className={styles['header']}>
          <Typography variant="h6" color="white">
            Please add people for the other positions in your business.
          </Typography>
          <Typography variant="caption" color="white">
            A Cypriot limited company has 4 roles normally.
          </Typography>
        </Box>

        {/* Form  */}
        <Box className={styles['content']}>
          <BoardTeamCard />
          <ShareholderCard />
          <Preview />

          <Footer />
        </Box>
      </Box>
    );
  }, [editingBoardTeam, editingShareholders, rows]);

  const Footer = useCallback(() => {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <Button
          fullWidth
          sx={{ color: 'white' }}
          variant="contained"
          color="secondary"
        >
          Continue
        </Button>
        <Button color="primary">
          <Typography variant="caption" color="secondary">
            Go back previous step
          </Typography>
        </Button>
      </Box>
    );
  }, []);

  // ? Functions
  const createData = (name: string, email: string, percentage: number) => {
    return { name, email, percentage };
  };

  const addRow = () => {
    const newRows = [
      ...rows,
      { name: 'Holder name', email: 'Holder email', percentage: 0 },
    ];
    setRows(structuredClone(newRows));
  };

  return <CompanyPositionForm />;
};

export default CompanyPositionStep;
