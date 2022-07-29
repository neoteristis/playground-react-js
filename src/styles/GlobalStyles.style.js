import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font: 28px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }

  ol, ul {
    padding-left: 30px;
  }

  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }

  .status {
    margin-bottom: 10px;
  }

  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 80px;
    font-weight: bold;
    line-height: 100px;
    height: 100px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 100px;
  }
  
  .winner-square {
    background: forestgreen;
  }

  .square:focus {
    outline: none;
  }

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }

`