import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

let markedFields = [];

export default function Checkboxes({
  id,
  label,
  required,
  onChange,
  options,
  errorMessage,
}) {
  const handleChange = (elem) => {
    elem.checked
      ? (markedFields = [...markedFields, elem.value])
      : (markedFields = markedFields.filter((el) => el !== elem.value));

    onChange(markedFields);
  };

  return (
    <Box>
      <FormControl
        onChange={(e) => handleChange(e.target)}
        required={required}
        sx={{ m: 3 }}
        component="fieldset"
        error={!!errorMessage}
        variant="standard"
      >
        <FormLabel component="legend">
          {errorMessage ? errorMessage : label}
        </FormLabel>
        <FormGroup>
          {options.map((item) => (
            <FormControlLabel
              sx={{ height: 32 }}
              control={<Checkbox />}
              value={item.value}
              key={item.value + id}
              label={item.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
