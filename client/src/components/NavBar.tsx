import React, { useState } from 'react';
import { Input, Image, Menu } from 'semantic-ui-react'
import logo from '../logo.svg';

interface NavBarProps {
    onSearch(key: string): void;
}

export default (props: NavBarProps) => {
    const [searchKey, setSearchKey] = useState('');
    return (
        <Menu fixed='top' secondary >
            <Menu.Item>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input
                        icon='search'
                        type='text'
                        placeholder='Search...'
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        onKeyDown={(e) => { if (e.keyCode == 13) props.onSearch(searchKey) }} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}