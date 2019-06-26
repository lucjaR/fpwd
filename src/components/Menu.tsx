import * as React from 'react';

import { BurgerIcon } from '../components/icons/BurgerIcon';
import { ArrowIcon } from '../components/icons/ArrowIcon';

import {
    MenuWrapper,
    PageTitle,
    Left,
    Right
} from '../styledComponents/StyledComponents';

interface PropsType {
    homePage: boolean,
    onClick: () => void
}

export class Menu extends React.Component<PropsType, {}> {

    render() {
        const { homePage } = this.props;

        const title = <PageTitle>App Title</PageTitle>;
        const burger = <BurgerIcon/>;
        const arrow = <ArrowIcon/>;
        return (
            <MenuWrapper>
                <Left onClick={!homePage ? this.props.onClick : undefined}>
                    {homePage ? burger : arrow}
                </Left>
                {title}
                <Right>
                    {homePage ? 'search' : 'share'}
                </Right>
            </MenuWrapper>
        )
    }
}