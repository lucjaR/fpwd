import * as React from 'react';

import { Menu } from './Menu';
import { Content } from './Content';

import {
    LayoutMain
} from '../styledComponents/StyledComponents';

interface PropsType {}

interface StateType {
    homePage: boolean
}


export class Layout extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            homePage: true
        }
    }

    render() {
        return (
            <LayoutMain>
                <Menu homePage={this.state.homePage}/>
                <Content homePage={this.state.homePage} onArticleClick={this.handleClickArticle}/>
            </LayoutMain>
        )
    }


    handleClickArticle = () => {
        this.setState({
            homePage: false
        })
    }
}