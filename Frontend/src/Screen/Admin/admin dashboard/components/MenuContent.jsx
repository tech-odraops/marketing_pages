import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

const mainListItems = [
  { id: 'waitlist', text: 'Waitlist', icon: <FormatListBulletedRoundedIcon /> },
];

export default function MenuContent({ selectedTab = 'home', onTabSelect }) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={selectedTab === item.id}
              onClick={() => onTabSelect && onTabSelect(item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
