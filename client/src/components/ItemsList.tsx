import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react'
import ItemBox from './ItemBox'
import { Item } from '../store/items/types'
import { actionCreators } from '../store/items/actions'
import { ApplicationState } from '../store'

interface ItemsListProps {
    items: Item[];
    isLoading: boolean;
    requestItems: any;
}

class ItemsList extends Component<ItemsListProps> {
    componentDidMount() {
        this.props.requestItems();
    }

    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Items</Header>
                { this.props.items.map(item => (
                    <Grid container columns={3}>
                        <ItemBox 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} />
                    </Grid>))}
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    items: state.itemList ? state.itemList.items : [],
    isLoading: state.itemList ? state.itemList.isLoading : false
  });
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(ItemsList);