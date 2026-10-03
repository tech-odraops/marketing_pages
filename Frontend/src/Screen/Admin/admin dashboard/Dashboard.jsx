import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import WaitlistManagement from './components/WaitlistManagement';

export default function Dashboard(props) {
  const [selectedTab, setSelectedTab] = useState('waitlist');

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      <AppNavbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
          minHeight: '100vh',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: { xs: 1.5, sm: 2, md: 3 },
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header selectedTab={selectedTab} />
          <WaitlistManagement />
        </Stack>
      </Box>
    </Box>
  );
}
