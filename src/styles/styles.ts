import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #E6DDC4; /* ECO_BONE_LIGHT */
        color: #123524;       /* ECO_GREEN_DARK as default text */
        overflow-x: hidden;
    }

    a:hover {
        color: #1E7045;       /* ECO_GREEN */
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: #D3C6A4;  /* ECO_BONE */
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: #E6DDC4;  /* lighten on focus */
            box-shadow: #123524 0px 0px 0px 1px; /* ECO_GREEN_DARK */
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #123524;       /* ECO_GREEN_DARK */
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #123524;       /* ECO_GREEN_DARK */
        font-size: 21px;
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #1E7045;       /* ECO_GREEN */

        :hover {
            color: #123524;   /* ECO_GREEN_DARK */
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
