import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/goninjaLogo2.png'
import headerData from './data'

export class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            navigation: headerData
        }
    }
    
    render() {
        const { navigation } = this.state
        return (
            <header>
                <Link to=''> 
                    <img src={logo} alt="logo" />
                </Link>
            <nav>
                {
                    navigation.map(({id, title, linkUrl}) => (
                        <Link to={linkUrl} key={id}>
                            {title}
                        </Link>
                    ))
                }
                <a href="https://goninja.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog</a>
            </nav>
        </header>
        )
    }
}

export default HeaderComponent

