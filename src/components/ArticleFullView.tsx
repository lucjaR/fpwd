import * as React from 'react';

import {
    ArticleWrapper,
    ImageFV,
    /* ArticleTitle,*/
    ArticleContent
} from '../styledComponents/StyledComponents';


const photo = require('../images/10.jpg');

interface PropsType {
}
interface StateType {
    imageClicked: boolean
}

export class ArticleFullView extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            imageClicked: false
        }
    }
    render() {
        return (
            <ArticleWrapper >
                <ImageFV
                    src={photo}
                    onClick={this.handleClickImage}
                    clicked={this.state.imageClicked}
                />
                <ArticleContent>
                    <h3>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>
                </ArticleContent>
            </ArticleWrapper>
        );
    }

    handleClickImage = () => {
        this.setState((state) => {
            return {imageClicked: !state.imageClicked}
        })
    }
}