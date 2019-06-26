import styled from '@emotion/styled';

export const MainApp = styled('div')`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    background-color: #fff;
    min-width: 320px;
    max-width: 100vw;
    align-items: center;
`;

export const LayoutMain = styled('div')`
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;

    @media (min-width: 1140px) {
        width: 1140px;
    }
`;

export const MenuWrapper = styled('div')`
    display: flex;
    align-items: center;
`;

export const ContentWrapper = styled('div')`
    height: 100%;

    @media (min-width: 748px) {
        overflow: hidden;
    }
`;

export const ContentMenu = styled('ul')`
    list-style: none;
    margin: 30px 0;
    padding: 0;
    display: flex;
    overflow: scroll;
    height: 40px;
`;

export const MenuItem = styled('li')`
    width: 60px;
    flex-shrink: 0;
    margin-right: 14px;

    &::before {
        content: '#';
        padding-right: 2px;
`;

export const PageTitle = styled('h3')`
    margin: 0 20px;
`;

export const Left = styled('span')`
    display: flex;
    cursor: pointer;
`;

export const Right = styled('span')`
    margin-left: auto;
    display: flex;
`;

export const ArticleWrapper = styled('article')`
    cursor: pointer;
    background-color: #fff;
    height: 100%;
    margin-top: 30px;

    @media (min-width: 748px) {
        overflow: auto;
    }
`;

export const Image = styled('img')`
    display: flex;
    padding-bottom: 0;
    width: 100%;
    height: auto;
    margin: auto;

    object-fit: cover;
    cursor:  pointer;

    @media (min-width: 748px) {
        width: 720px;
    }
`;
interface ImagePropsType {
    clicked: boolean
}
export const ImageFV = styled('img')<ImagePropsType>`
    display: flex;
    padding-bottom: 0;
    width: 100vw;
    height: auto;
    margin-left: ${props => props.clicked ? '-20px' : 0};

    object-fit: cover;
    cursor:  pointer;
    transform: ${props => props.clicked ? 'scale(1)' : 'scale(1.1)'};
    position: relative;
    top: ${props => props.clicked ? '100px' : 0};
    transition: all .3s ease 0s;

    @media (min-width: 748px) {
        width: ${props => props.clicked ? '90%' : '720px'};
        margin: auto;
    }
`;

interface ArticleContentPropsType {
    clicked: boolean
}
export const ArticleContent = styled('div')<ArticleContentPropsType>`
    color: ${props => props.clicked ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.8)'};
    margin: 10%;
    text-align: left;
`;


