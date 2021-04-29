import React, { Component,useEffect  } from 'react';
import Link from 'next/link';
import { Menu, Icon, Image, Button, Dropdown,Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Homepage extends Component {
    //state = {activeItem: this.props.activeItem};
    //handleItemClick = (e, { name }) => {
    //    this.setState({ activeItem: name });
    //};

    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ menu: false });
    };
    
    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "" ;
        const { activeItem } = this.state
        
        return (
            
            <div className="navbar navbar-default navbar-static-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" onClick={ this.toggleMenu }>
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                        </button>
                        <Link className="item" href="/">
                            <a href="" className="navbar-brand">IBC</a>
                        </Link>
                        
                    </div>
                    
                    {this.state.menu ? (
                        <div className={"collapse navbar-collapse " + show}>
                        <div className="nav navbar-nav navbar-right">
                            <Link className="item" href="/">
                                <li className="active"><a href="">Anasayfa</a></li>
                            </Link>
                            <Link className="item" href="/whoami">
                                <li><a href="">Hakkımda</a></li>
                            </Link>
                            <Link className="item" href="/jobs">
                                <li><a href="">İş Tecrübelerim</a></li>
                            </Link>
                            <Link className="item" href="/myprojects">
                                <li><a href="">Projelerim</a></li>
                            </Link>
                            <Link className="item" href="/contact">
                                <li><a href="">İletişim</a></li>
                            </Link>

                            <Link className="item" href="/contact">
                                <li><a href=""><Icon name='github' size='large' style={{color: "#000000"}}></Icon>GitHub</a></li>
                            </Link>
                            <Link className="item" href="/contact">
                                <li><a href=""><Icon name='linkedin alternate' size='large' style={{color: "#000000"}}></Icon>LinkedIn</a></li>
                            </Link>
                        </div>
                    </div>
                    ) : (null)}
                    

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                                <Link className="item" href="/">
                                    <li className="active"><a href="">Anasayfa</a></li>
                                </Link>
                                <Link className="item" href="/whoami">
                                    <li><a href="">Hakkımda</a></li>
                                </Link>
                                <Link className="item" href="/jobs">
                                    <li><a href="">İş Tecrübelerim</a></li>
                                </Link>
                                <Link className="item" href="/myprojects">
                                    <li><a href="">Projelerim</a></li>
                                </Link>
                                <Link className="item" href="/contact">
                                    <li><a href="">İletişim</a></li>
                                </Link>

                                <Link className="item" href="/contact">
                                    <li><a href=""><Icon name='github' size='large' style={{color: "#000000"}}></Icon></a></li>
                                </Link>

                                <Link className="item" href="/contact">
                                    <li><a href=""><Icon name='linkedin alternate' size='large' style={{color: "#000000"}}></Icon></a></li>
                                </Link>
                        </ul>
                    </div>
                    

                </div>

                <style jsx>{`

                `}</style>
            </div>
            
            /*
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
            */

            
        )
    }
}

export default Homepage;
