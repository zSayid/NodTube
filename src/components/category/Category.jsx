import { Stack } from "@mui/material";
import { category } from "../../constantants/category";
import { colors } from "../../constantants/colors";

const Category = ({ handleCategory, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowX: "scroll",
        padding: "10px",
        display: "flex",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
            borderRadius: "2px",
            backgroundColor: selectedCategory === item.name && colors.secondary,
            color: selectedCategory === item.name && "#fff"
          }}
          onClick={() => handleCategory(item.name)}
        >
          <span style={{ marginRight: "5px" }}>{item.icon}</span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
