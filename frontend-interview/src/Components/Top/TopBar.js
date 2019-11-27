/** Created by Filip Drgoň on 27/11/2019. */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import throttle from "lodash.throttle"

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 40px;
    margin: 20px 40px;
    background-color: white;
    height: 100px;
    width: calc(100% - 160px);
    position:absolute;
    top: 0;
`

const TopInput = styled.input`
  border: 1px solid black;
  height: 30px;
  width: 200px;
  font-size: 35px;
  border-radius: 5px;
  padding: 10px;
`

const TopSeparator = styled.div`
padding: 0 10px;
font-size: 40px;
font-weight: bold;
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
const InputDropdown = styled.div`
  position:absolute;
  top: 95px;
`

const DropdownOption = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 200px;
  font-size: 25px;
  border-radius: 5px;
  padding: 10px;
`

const throttledFetch = throttle((query) =>
    ([{name: "Karlovo namesti"},{name: "Karlovo namesti"},{name: "Karlovo namesti"},{name: "Karlovo namesti"}]), 1000)

const TopBar = (props) => {
    const [from, setFrom] = useState("")
    const [options, setOptions] = useState([])
    return (
        <TopWrapper>
            <InputWrapper>
                <TopInput onChange={async (e) => {
                setFrom(e.target.value);
                const response = await throttledFetch()
                setOptions(response)
            }} value={from}/>
                {!!options.length &&
                <InputDropdown>
                    {options.filter(opt => opt.name.toLowerCase().includes(from.toLowerCase()))
                        .map(opt =>
                            <DropdownOption onClick={() => setFrom(opt.name)}>{opt.name}</DropdownOption>)}
                </InputDropdown>
                }
            </InputWrapper>
            <TopSeparator>-></TopSeparator>
            <TopInput/>
        </TopWrapper>
    );
};

TopBar.propTypes = {};
TopBar.defaultProps = {};

export default TopBar;
