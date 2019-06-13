import React, { useState } from 'react';
import { Input, Image, Menu, Icon, Label, Button } from 'semantic-ui-react'
import logo from '../logo.svg';
import SearchBox from '../../components/SearchBox/SearchBox'

export default () => {
    return (
        <Menu fixed='top' secondary >
            <Menu.Item>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <SearchBox />  
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}