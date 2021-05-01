import React, { Component } from 'react'
import "semantic-ui-css/semantic.min.css";
import Image from 'next/image'

export default class projects extends Component {
    render() {
        return (
            <div className="ui centered card">
                <div className="image">
                    <Image
                        src={this.props.img}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="content">
                <div className="header">{this.props.title}</div>
                <div className="meta">
                    <a>{this.props.meta}</a>
                </div>
                <div className="description">
                    {this.props.detail}
                    <br></br>
                    <h4>Kullanılan Teknolojiler: </h4>
                    <ul>
                        {
                            this.props.techs.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })
                        }
                    </ul>  
                </div>
                </div>
                <div className="extra content">
                <span className="right floated">
                    {this.props.date}
                </span>
                <span>
                    <i className="mouse pointer icon"></i>
                    <a href={this.props.link} target="_blank">Ayrıntı için Tıkla</a>
                </span>
                </div>
            </div>
        )
    }
}
