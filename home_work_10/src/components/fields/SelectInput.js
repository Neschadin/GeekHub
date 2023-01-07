import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({
  id,
  options,
  label,
  value,
  onChange,
  required,
  errorMessage,
}) {
  return (
    <Box sx={{ m: 1, width: "25ch" }}>
      <FormControl fullWidth error={!!errorMessage}>
        <InputLabel required={required} id={id}>
          {errorMessage ? errorMessage : label}
        </InputLabel>
        <Select
          labelId={id}
          id={id}
          value={value}
          label={label}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((item) => (
            <MenuItem key={item.value + id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
