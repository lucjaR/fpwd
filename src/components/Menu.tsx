import * as React from 'react';

import {
    MenuWrapper,
    PageTitle,
    Right
} from '../styledComponents/StyledComponents';

interface PropsType {
    homePage: boolean
}

export class Menu extends React.Component<PropsType, {}> {

    render() {
        const { homePage } = this.props;

        const title = <PageTitle>App Title</PageTitle>;
        return (
            <MenuWrapper>
                <span>{homePage ? 'hamburger' : 'arrow'}</span>
                {title}
                <Right>{homePage ? 'search' : 'share'}</Right>
            </MenuWrapper>
        )
    }
}