import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Image, Menu } from 'semantic-ui-react'
import { ApplicationState } from '../store'

interface NavBarState {
    searchKey: string;
}

export default class NavBar extends Component<{}, NavBarState> {
    constructor(props) {
        super(props);

        this.state = {
            searchKey: ''
        }
    }

    onSearchKeyChange = (e) => {
        this.setState({searchKey: e.target.value});
    }

    render() {
        return (
            <Menu fixed='top' secondary >
                <Menu.Item>
                    <Image size='mini' src='../logo.svg' style={{ marginRight: '1.5em' }} />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input
                            icon='search'
                            type='text'
                            placeholder='Search...'
                            value={this.state.searchKey}
                            onChange={this.onSearchKeyChange} />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}