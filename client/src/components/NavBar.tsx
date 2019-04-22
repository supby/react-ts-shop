import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'

const NavBar = () => {
    return(
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='../logo.svg' style={{ marginRight: '1.5em' }} />
                    Project Name
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
            </Container>
        </Menu>
    )
}
export default NavBar;