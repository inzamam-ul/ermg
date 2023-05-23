import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';

const AutoCompleteComp = ({ array, label, setFunction, req, defaultValue }) => {
  return (
    <>
      {defaultValue ? (
        <Autocomplete
          style={{
            width: '100%',
            marginTop: '30px',
            marginBottom: '10px',
          }}
          searchtext="example"
          id="tags-filled"
          options={array.map(option => option)}
          getOptionLabel={option => option}
          defaultValue={array.find(v => v === defaultValue)}
          fullWidth
          freeSolo
          renderInput={params => (
            <>
              {req ? (
                <TextField
                  onBlur={e => setFunction(e.target.value)}
                  label={label}
                  req
                  required
                  variant="standard"
                  id="standard-select-currency"
                  name="team"
                  {...params}
                />
              ) : (
                <TextField
                  onBlur={e => setFunction(e.target.value)}
                  label={label}
                  req
                  variant="standard"
                  id="standard-select-currency"
                  name="team"
                  {...params}
                />
              )}
            </>
          )}
        />
      ) : (
        <Autocomplete
          style={{
            width: '100%',
            marginTop: '30px',
            marginBottom: '10px',
          }}
          searchtext="example"
          id="tags-filled"
          options={array.map(option => option)}
          fullWidth
          freeSolo
          renderInput={params => (
            <>
              {req ? (
                <TextField
                  onBlur={e => setFunction(e.target.value)}
                  label={label}
                  req
                  required
                  variant="standard"
                  id="standard-select-currency"
                  name="team"
                  {...params}
                />
              ) : (
                <TextField
                  onBlur={e => setFunction(e.target.value)}
                  label={label}
                  req
                  variant="standard"
                  id="standard-select-currency"
                  name="team"
                  {...params}
                />
              )}
            </>
          )}
        />
      )}
    </>
  );
};

export default AutoCompleteComp;
