import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordInput({
  value,
  name,
  onChange,
  errorMessage,
  required,
  id,
  label,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel
          aria-label={label}
          required={required}
          htmlFor={id}
          error={!!errorMessage}
        >
          {(label = errorMessage ? errorMessage : label)}
        </InputLabel>
        <OutlinedInput
          onChange={(e) => onChange(e.target.value)}
          name={name}
          error={!!errorMessage}
          label={errorMessage ? errorMessage : label}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
