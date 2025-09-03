import {Button} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";


const ShareButton = () => {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
        if (navigator.share) {
            navigator.share({
                title: "Check out this video!",
                url: window.location.href,
            });
        }
    }
    return (
        <Button
        onClick={handleShare}
        variant="outlined"
        startIcon={<ShareIcon />}
        sx={{
            borderRadius: "20px",
            color: "white",
            textTransform: "none",
            bgcolor: "#383838",
            borderColor: "#555",
            "&:hover": { borderColor: "white", bgcolor: "#333" },
        }}
        >Share</Button>
    )
}

export default ShareButton;