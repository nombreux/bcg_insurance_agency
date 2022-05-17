import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { useState } from 'react'
import { getSearchResults } from '../api'
import { PolicyData } from './datamodels'


const SearchBar = styled.div({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      width: '70vw',
      gap: '10px',
      padding: '15px'
})

const Button = styled.button({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '12.5vw',
      background: '#F7F7F7',
      border: '1px solid #DDDDDD',
      borderRadius: '5px',
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#666666',
      ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transitionDuration: '0.2s'


      },
      ':active': {
            transform: 'scale(0.98)',
            transitionDuration: '0.2s'
      }
})

const Search = ({ setData }: {
      setData: (val: PolicyData[] | 'null' | null) => void
}) => {

      const [searchBy, setSearchBy] = useState('');
      const [searchItem, setSearchItem] = useState('')

      const handleChange = (event: SelectChangeEvent) => {
            setSearchBy(event.target.value as string);
      };

      return (
            <SearchBar>
                  <div className={css({
                        width: '10vw'
                  })}>
                        <FormControl fullWidth>
                              <InputLabel id="search_by">Search By</InputLabel>
                              <Select
                                    // fullWidth
                                    labelId="search_by"
                                    label="Search By"
                                    value={searchBy}
                                    onChange={handleChange}
                              >
                                    <MenuItem value={'policy_id'}>Policy Id</MenuItem>
                                    <MenuItem value={'customer_id'}>Customer Id</MenuItem>
                              </Select>
                        </FormControl>
                  </div>
                  <TextField fullWidth
                        placeholder='Search'
                        value={searchItem}
                        onChange={(e) => { setSearchItem(e.target.value) }}

                  />
                  <div>
                        <Button
                              onClick={() => {
                                    getSearchResults(searchBy, searchItem)
                                          .then(res => setData(res))
                                          .catch(reason => setData(null))
                              }}
                        >
                              Search
                        </Button>
                  </div>
            </SearchBar>
      )
}

export default Search