import * as React from 'react';

import { Article } from './Article';
import { ArticleFullView } from './ArticleFullView';
import {
    ContentWrapper,
    ContentMenu,
    MenuItem
} from '../styledComponents/StyledComponents';


const temp_img = require('../images/10.jpg');

interface PropsType {
    homePage: boolean,
    onArticleClick: () => void
}

export class Content extends React.Component<PropsType, {}> {
    render() {
        const menuItems = [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7',
            'item 8',
            'item 9'
        ];

        return (
            <ContentWrapper>
                {this.props.homePage ?
                    <React.Fragment>
                        <ContentMenu>
                            {menuItems.map((item: string) => {
                                return (
                                    <MenuItem key={`${item}`}>{item}</MenuItem>
                                )
                            })}
                        </ContentMenu>
                        <Article onClick={this.props.onArticleClick} />
                    </React.Fragment> :
                    <ArticleFullView />

                }
            </ContentWrapper>
        );
    }
}