import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

interface LoadingProps {
    isLoading: boolean;
    children: any;
}

export default (props: LoadingProps) => (<React.Fragment>
    {props.isLoading && (
        <Dimmer active inverted>
            <Loader size='large' />
        </Dimmer>)}
    {!props.isLoading && (props.children)}
</React.Fragment>)