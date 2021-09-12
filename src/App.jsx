import React, { useState } from 'react';
import { Contents } from './0-organization/Contents.jsx';
import { Footer } from './0-organization/GameFrame.jsx';
import { pageIds } from './0-organization/Consts.jsx';
import { TicTacToeBoard } from './1-tic-tac-toe/board/Board.jsx';
import { MineSweeperBoard } from "./2-minesweeper/board/Board.jsx";

export const App = () => {

  const [pageSelected, setPageSelected] = useState(pageIds.contentsPage);

  return (

    <div className="App">

      {pageSelected === pageIds.contentsPage &&
        <Contents setPageSelected={setPageSelected} />
      }

      {pageSelected === pageIds.ticTacToe &&
        <>
          <TicTacToeBoard />
          <Footer setPageSelected={setPageSelected} />
        </>
      }

      {pageSelected === pageIds.minesweeeper &&
        <>
          <MineSweeperBoard />
          <Footer setPageSelected={setPageSelected} />
        </>
      }

    </div>

  );

};

