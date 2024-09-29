import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function InputText({ field, value, onChange }) {
    return (
        <TextField value={value} onChange={onChange}
            id="input-with-icon-textfield"
            label={`${field}`}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
            }}
            variant="standard"
        />
    );
}