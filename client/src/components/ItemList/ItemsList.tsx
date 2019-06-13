import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ItemBox from '../ItemBox/ItemBox';
import { Item } from '../../store/items/types';
import './ItemList.css';

interface ItemsListProps {
    items: Item[];
}

export default (props: ItemsListProps) => (
    <Container text className="itmlst-container">
        <Grid container columns={3}>
            {
                props.items.map(item => (
                    <Grid.Column key={item.id}>
                        <ItemBox {...item} />
                    </Grid.Column>))
            }
        </Grid>
    </Container>
);