import styled from 'styled-components';

interface ButtonProps {
    colour?: string;
    rounded?: string;
    bkGroundColour?: string;
    height?: string;
    width?: string;
    border?: string;
    fontWeight?: string;
    position?: string;
    topPosition?: string;
    bottomPosition?: string;
    zIndex?: string;
    margin?: string;
}

export const StyledButton = styled.button<ButtonProps>`
    color: ${(props) => (props.colour ? props.colour : 'white')};
    background-color: ${(props) =>
        props.bkGroundColour ? props.bkGroundColour : 'black'};
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.rounded ? props.rounded : '10px')};
    height: ${(props) => (props.height ? props.height : '20px')};
    width: ${(props) => (props.width ? props.width : '60px')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};
    position: ${(props) => (props.position ? props.position : '')};
    top: ${(props) => (props.topPosition ? props.topPosition : '')};
    bottom: ${(props) => (props.bottomPosition ? props.bottomPosition : '')};
    z-index: ${(props) => (props.zIndex ? props.zIndex : '')};
    margin: ${(props) => (props.margin ? props.margin : '')};
    :hover {
        opacity: 0.5;
    }
`;
