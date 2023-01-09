import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Terms({ label, onChange, errorMessage }) {
  return (
    <Box sx={{ m: 1, width: "25ch" }}>
      <div style={{ display: "flex" }}>
        <Typography
          aria-label={label}
          variant="caption"
          display="block"
          gutterBottom
        >
          {label}
        </Typography>
        <Checkbox onChange={(e) => onChange(e.target.checked)} />
      </div>
      <FormHelperText error={!!errorMessage}>
        {errorMessage ? errorMessage : " "}
      </FormHelperText>
    </Box>
  );
}
