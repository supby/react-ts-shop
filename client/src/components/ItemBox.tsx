import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

type Props = {
    title: string;
    description: string;
};

export default class ItemBox extends Component<Props> {
    render() {
        return (
            <Card>
                <Image src='' />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Created in 2015</span>
                    </Card.Meta>
                    <Card.Description>{this.props.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Icon name='user' />$$$
                </Card.Content>
            </Card>
        );
    }
}