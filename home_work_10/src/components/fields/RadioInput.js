import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioInput({
  id,
  options,
  label,
  onChange,
  required,
  value,
  name
}) {
  return (
    <FormControl
      sx={{ m: 1, height: 50, width: "25ch" }}
      onChange={(e) => onChange(e.target.value)}
    >
      <FormLabel required={required} id={id}>
        {label}
      </FormLabel>
      <RadioGroup row aria-labelledby={label} value={value}>
        {options.map((item) => (
          <FormControlLabel
            name={name}
            value={item.value}
            control={<Radio />}
            label={item.label}
            key={item.value + id}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
