import { Avatar } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationButton = () => {
  return (
    <Avatar
      style={{
        backgroundColor: "#212121",
        color: "white",
        textTransform: "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NotificationsOutlinedIcon />
    </Avatar>
  );
};

export default NotificationButton;
