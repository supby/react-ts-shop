
import React, { Fragment, PureComponent } from 'react';
import { Input, Image, Menu, Icon, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { filterActionCreators } from '../../store/search/actions'
import { ItemsFilter } from '../../store/search/types'
import { match, RouteComponentProps } from 'react-router';

interface SearchBoxProps {
    searchKey: string;
    setItemsFilter(filter?: ItemsFilter): void;
    applyItemsFilter(page: number): void;
}

class SearchBox extends PureComponent<SearchBoxProps> {
    onChange = (e) => {
        this.props.setItemsFilter({
            name: e.target.value
        });
    }

    onSearch = (e) => {
        this.props.applyItemsFilter(1);
    }

    clearSearch = () => {
        this.props.setItemsFilter({
            name: ''
        });
        this.props.applyItemsFilter(1);
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