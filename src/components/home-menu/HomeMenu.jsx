import { Stack, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const HomeMenu = () => {
  return (
    <Stack
      direction="column"
      spacing={3}
      alignItems="center"
      sx={{
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <Stack alignItems="center" spacing={0.5}>
        <HomeRoundedIcon sx={{ fontSize: 30, cursor: "pointer" }} />
        <Typography sx={{ fontSize: "12px" }}>Home</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <PlayCircleOutlineTwoToneIcon sx={{ fontSize: 30, cursor: "pointer" }} />
        <Typography sx={{ fontSize: "12px" }}>Shorts</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <SubscriptionsOutlinedIcon sx={{ fontSize: 30, cursor: "pointer" }} />
        <Typography sx={{ fontSize: "12px" }}>Subscriptions</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <AccountCircleOutlinedIcon sx={{ fontSize: 30, cursor: "pointer" }} />
        <Typography sx={{ fontSize: "12px" }}>You</Typography>
      </Stack>
    </Stack>
  );
};

export default HomeMenu;
