import React, { Component } from 'react';
import { Menu, Icon, Image, Button, Dropdown } from "semantic-ui-react";
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
            <div>
                <Menu inverted color="blue">
                    
                    <Link className="item" href="/">
                        <Menu.Item name="mainpage" active={activeItem === 'mainpage'}>
                            <Icon name='home' size='large' style={{color: "#ffffff"}}/>
                        </Menu.Item>
                    </Link>

                    <Link className="item" href="/jobs">
                        <Menu.Item name="jobs" active={activeItem === 'jobs'}>
                            <span>İş Tecrübelerim</span>
                        </Menu.Item>
                    </Link>
                
                    <Link className="item" className="option" href="/myprojects">
                        <Menu.Item name="projects" className="option" active={activeItem === 'projects'}>
                            <span>Projelerim</span>
                        </Menu.Item>
                    </Link>

                    <Link className="item" href="/contact">
                        <Menu.Item name="contact" active={activeItem === 'contact'}>
                            <span>İletişim</span>
                        </Menu.Item>
                    </Link>

                </Menu>
                
                <style jsx>{``}</style>
            </div>
            

            
        )
    }
}

export default Homepage;
