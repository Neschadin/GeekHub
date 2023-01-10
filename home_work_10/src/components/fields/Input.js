import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({
  label,
  onChange,
  errorMessage,
  ...props
}) {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, height: 50, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...props}
        error={!!errorMessage}
        label={errorMessage ? errorMessage : label}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        variant="outlined"
      />
    </Box>
  );
}
