import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Props {
    options: any[];
    onChange: (event: any) => void;
    selectedValue: string;
}

export default function RadioButtonGroup({ options, onChange, selectedValue }: Props) {
    return (
        <RadioGroup onChange={onChange} value={selectedValue}>
            {options.map((option) => (
                <FormControlLabel value={option} control={<Radio />} label={option} key={option} />
            ))}


        </RadioGroup>
    )
}