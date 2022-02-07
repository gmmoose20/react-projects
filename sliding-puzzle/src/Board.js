/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Tile from './Tile';
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from './constants';
import { canSwap, shuffle, swap, isSolved } from './helpers';

const Board = ({ imgUrl }) => {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  // const [isSolved, setIsSolved] = useState(false);
  const [isStarted, setIsStared] = useState(false);
  //console.log('is started:', isStarted);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  // Attach to tiles to play the game
  const handleTileClick = (index) => {
    swapTiles(index);
  };

  // Attach to shuffle button
  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStared(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE
  };

  const hasWon = isSolved(tiles);

  return (
    <>
      <ul style={style} className='board'>
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Puzzle solved 🧠 🎉</div>}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start game</button>
      ) : (
        <button onClick={() => handleShuffleClick()}>Restart game</button>
      )}
    </>
  );
};

export default Board;
