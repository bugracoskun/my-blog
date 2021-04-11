import React, { Component } from 'react';
import { Menu, Image, Button, Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from 'next/link';

class Homepage extends Component {
    state = {activeItem: this.props.activeItem};
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };


    render() {
        const { activeItem } = this.state
        
        return (
            <Menu>
                
                <Link style={{ background: "#fff"}} className="item" href="/">
                    <Menu.Item name="mainpage" active={activeItem === 'mainpage'}>
                        <span>Anasayfa</span>
                    </Menu.Item>
                </Link>
            
                <Link className="item" href="/myprojects">
                    <Menu.Item name="projects" active={activeItem === 'projects'}>
                        <span>Projelerim</span>
                    </Menu.Item>
                </Link>

            </Menu>
        )
    }
}

export default Homepage;
