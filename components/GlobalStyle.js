import _JSXStyle from 'styled-jsx/style';

function GlobalStyle() {
    return (
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          font-family: 'Press Start 2P', sans-serif;
        }
        :root {
          font-size: 14px;

          /* Font-sizes */
          --font-big: 1.5rem;
          --font-normal: 1rem;
          --font-medium: 0.8rem;
          --font-small: 0.67rem;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
        button {
          cursor: pointer;
          border: 0;
          background-color: transparent;
          font-size: inherit;
        }
        ul {
          list-style-type: none;
        }
      `}</style>
    );
}

export default GlobalStyle;