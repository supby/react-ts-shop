import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import ItemBox from './ItemBox'
import { Item } from '../store/items/types';
import Loading from './Loading'

interface ItemsListProps {
    items: Item[];
}

export default (props: ItemsListProps) => (
    <Container text style={{ marginTop: '7em' }}>
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