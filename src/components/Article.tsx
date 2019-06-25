import * as React from 'react';

import {
    ArticleWrapper,
    Image,
    ArticleContent
} from '../styledComponents/StyledComponents';


const photo = require('../images/10.jpg');

interface PropsType {
    onClick: () => void
}

export class Article extends React.Component<PropsType> {
    render() {
        return (
            <ArticleWrapper onClick={this.props.onClick}>
                <Image
                    src={photo}
                />
                <ArticleContent>
                    <h3>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </h3>
                </ArticleContent>
            </ArticleWrapper>
        );
    }
}