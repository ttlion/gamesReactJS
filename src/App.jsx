import React, { useState } from 'react';
import { Contents } from './0-organization/Contents.jsx';
import { Footer } from './0-organization/GameFrame.jsx';
import { TicTacToeBoard } from './1-tic-tac-toe/board/Board.jsx';

export const App = () => {

  const [pageSelected, setPageSelected] = useState(0);

  return (

    <div className="App">

      {pageSelected === 0 && <Contents setPageSelected={setPageSelected} />}

      {pageSelected === 1 &&
        <>
          <TicTacToeBoard />
          <Footer setPageSelected={setPageSelected} />
        </>
      }

    </div>

  );

};

