import React, { Component } from 'react';
import { Menu, Icon, Image, Button, Dropdown,Segment } from "semantic-ui-react";
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
                <Segment inverted>
                    <Menu inverted secondary>
                        
                        <Link className="item" href="/">
                            <Menu.Item name="mainpage" active={activeItem === 'mainpage'}>
                                <Icon name='home' size='large' style={{color: "#ffffff"}}/>
                            </Menu.Item>
                        </Link>

                        <Link className="item" href="/whoami">
                            <Menu.Item name="aboutme" active={activeItem === 'aboutme'}>
                                <span>Hakkımda</span>
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

                        <Menu.Menu position='right'>
                            <Dropdown item text='Language'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Türkçe</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Link className="item" href="https://www.linkedin.com/in/ihsan-bu%C4%9Fra-co%C5%9Fkun-959088138/" passHref>
                                <a target="_blank">
                                    <Menu.Item name="linkedin">
                                        <Icon name='linkedin alternate' size='large' style={{color: "#ffffff"}}/>
                                    </Menu.Item>
                                </a>
                                
                            </Link>

                            <Link className="item" href="https://github.com/bugracoskun" passHref> 
                                <a target="_blank">
                                    <Menu.Item name="gitub">
                                        <Icon name='github' size='large' style={{color: "#ffffff"}}/>
                                    </Menu.Item>
                                </a>
                            </Link>

                        </Menu.Menu>

                    </Menu>
                </Segment>
                
                <style jsx>{``}</style>
            </div>
            

            
        )
    }
}

export default Homepage;
