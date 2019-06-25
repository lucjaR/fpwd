import styled from '@emotion/styled';

export const MainApp = styled('div')`
    display: flex;

    /* width: 320px; */
    box-sizing: border-box;
    flex-direction: column;
    background-color: #fff;
    min-width: 320px;
    max-width: 100vw;
`;

export const LayoutMain = styled('div')`
    width: 100%;
    height: 100vh;
    background: gray;
    /* margin: auto; */
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
`;

export const ContentMenu = styled('ul')`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    overflow: scroll;
    height: 40px;
`;

export const MenuItem = styled('li')`
    width: 60px;
    flex-shrink: 0;

    &::before {
        content: '#';
        padding-right: 2px;
`;

export const PageTitle = styled('h3')`
    margin: 0 20px;
`;

export const Right = styled('span')`
    margin-left: auto;
`;

export const ArticleWrapper = styled('article')`
    /* display: flex; */
    cursor: pointer;
    background-color: #fff;
    height: 100%;
    margin-top: 30px;
`;

export const Image = styled('img')`
    display: flex;
    padding-bottom: 0;
    width: 100vw;
    width: 100%;
    height: auto;
    /* margin-left: -20px: */
    margin-left: 0;

    object-fit: cover;

    @media (min-width: 748px) {
        width: 720px;
        /* height: 480; */
    }
`;
interface ImagePropsType {
    clicked?: boolean,
    articlePage?: boolean
}
export const ImageFV = styled('img')<ImagePropsType>`
    display: flex;
    padding-bottom: 0;
    width: 100vw;
    width: ${props => props.articlePage ? '100vw' : '100%'};
    height: auto;
    /* margin-left: -20px: */
    margin-left: ${props => props.articlePage ? '-20px' : 0};
    /* margin-top: ${props => props.clicked ? '80px' : 0}; */

    object-fit: cover;
    /* transform: ${props => props.clicked ? 'translate3d(-20px, 85px, 0)' : 'translate3d(0, 0, 0)'} ${props => props.clicked ? 'scale(1)' : 'scale(1.1)'}; */
    transform: ${props => props.clicked ? 'scale(1)' : 'scale(1.1)'};
    position: relative;
    top: ${props => props.clicked ? '100px' : 0};
    transition: all .3s ease 0s;

    @media (min-width: 748px) {
        width: 720px;
        /* height: 480; */
    }
`;

export const ArticleContent = styled('div')`
    color: rgba(0,0,0, 0.5);
`;

export const ArticleTitle = styled('h3')`
`;


