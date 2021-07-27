import styled from "styled-components";
import Theme from "../Styles/Theme";

export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || ``};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
`;

export const FileInput = styled.input`
 display: none;
`;

export const FileLabel = styled.label`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 cursor: pointer;
`;

export const ImageWrapper = styled.img`
 width: auto;
 height: auto;
`;

export const CommonBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 border: ${(props) => props.border};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fontSize};
 border-radius: 5px;
 transition: 0.3s;
 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color || `#fff`};
 &:hover {
  background-color: #fff;
  color: ${(props) => props.hoverColor || Theme.subThemeColor};
  box-shadow: 10px 10px 10px ${(props) => props.hoverBoxShadow || Theme.mainThemeColor};
 }
`;

export const CommonTextInput = styled.input`
 outline: none;
 border: none;
 background: none;
 border: ${(props) => props.border};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};
 font-size: ${(props) => props.fontSize};
`;

export const CommonTitle = styled.h1`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || ``};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize || `30px`};
 font-weight: ${(props) => props.fontWeight || `600`};
 border-bottom: 3px solid ${Theme.mainThemeColor};
`;

export const CheckEmailBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 font-size: 16px;
 color: ${Theme.greyColor};
 border-bottom: 2px solid ${Theme.greyColor};
 margin-top: 10px;
`;

export const SpanText = styled.span`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
`;
export const PText = styled.p`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
`;
