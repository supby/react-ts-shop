import React from 'react'
import loading from '../images/giphy.gif'

interface LoadingProps {
    isLoading: boolean;
    children: any;
}

export default (props: LoadingProps) => (<React.Fragment>
    {props.isLoading && (<img src={loading} alt='Loading...' />)}
    {!props.isLoading && (props.children)}
</React.Fragment>)