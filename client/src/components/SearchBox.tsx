
import React, { Component, Fragment } from 'react';
import { Input, Image, Menu, Icon, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import { filterActionCreators } from '../store/search/actions'
import { ItemsFilter } from '../store/search/types'

interface SearchBoxProps {
    searchKey: string;
    setItemsFilter(filter?: ItemsFilter): void;
    applyItemsFilter(filter?: ItemsFilter): void;
}

class SearchBox extends Component<SearchBoxProps> {

    onChange = (e) => {
        this.props.setItemsFilter({
            name: e.target.value
        });
    }

    onSearch = (e) => {
        this.props.applyItemsFilter({
            name: this.props.searchKey
        });
    }

    clearSearch = () => {
        this.props.setItemsFilter({
            name: ''
        });
        this.props.applyItemsFilter();
    }

    render() {
        const getIcon = () => {
            return this.props.searchKey
                ? <Icon name='delete' link onClick={this.clearSearch} />
                : null;
        };

        return (
            <Fragment>
                <Input
                    type='text'
                    value={this.props.searchKey}
                    onChange={this.onChange}
                    icon={getIcon()}
                    placeholder='Search...' />
                <Button circular icon style={{ marginLeft: '7px' }}>
                    <Icon name='search' color='teal' onClick={this.onSearch} />
                </Button>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        searchKey: state.itemsFilter.name
    }
}

export default connect(
    mapStateToProps,
    filterActionCreators
)(SearchBox)