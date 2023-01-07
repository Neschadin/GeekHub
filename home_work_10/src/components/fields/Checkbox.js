import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function Terms({ label, onChange, errorMessage }) {
  return (
    <FormControl
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <FormControlLabel
        onChange={(e) => onChange(e.target.checked)}
        value="start"
        control={<Checkbox />}
        label={label}
        labelPlacement="start"
        aria-label={label}
        variant="filled"
      />
      <FormHelperText error={!!errorMessage}>
        {errorMessage ? errorMessage : "Terms"}
      </FormHelperText>
    </FormControl>
  );
}
