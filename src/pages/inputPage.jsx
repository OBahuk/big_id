import React from 'react';
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { countriesList } from "../assets/countries";
import { sendNewCountry } from "../redux/actions";

export const InputPage = () => {
    const dispatch = useDispatch();
    const initialValues = {country: countriesList[0].name, users: 0};
    const [formData, setFormData] = React.useState(initialValues);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = formData;
        data.users = parseInt(data.users);

        dispatch(sendNewCountry(data));

        setFormData(initialValues);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        const newData = {};
        newData[name] = value;

        setFormData({...formData, ...newData})
    };


    return (
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <h1>Add users quantity to country</h1>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    {
                        countriesList.map(country => {
                            return (
                                <MenuItem value={country.name} key={country.name}>{country.name}</MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
            <FormControl>
                <TextField
                    name="users"
                    label="Count"
                    type="number"
                    inputProps={{min: 0, max: 1000000000}}
                    value={formData.users}
                    onChange={handleChange}
                />
            </FormControl>
            <Button onClick={submitHandler} variant="contained" color="primary">Submit</Button>
        </form>
    );
};