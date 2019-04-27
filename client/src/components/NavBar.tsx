import React, { useState } from 'react';
import { Input, Image, Menu, Icon, Label, Button } from 'semantic-ui-react'
import logo from '../logo.svg';

interface NavBarProps {
    onSearch(key: string): void;
    //clearSearch(): void;
}

export default (props: NavBarProps) => {
    const [searchKey, setSearchKey] = useState('');

    const clearSearch = () => {
        setSearchKey('');
        props.onSearch('');
    }

    const getIcon = () => {
        return searchKey
            ? <Icon name='delete' link onClick={clearSearch} />
            : null;
    }
    return (
        <Menu fixed='top' secondary >
            <Menu.Item>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input
                        type='text'
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        icon={getIcon()}
                        placeholder='Search...' />
                    <Button circular icon style={{ marginLeft: '7px' }}>
                        <Icon name='search' color='teal' onClick={(e) => props.onSearch(searchKey)} />
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}