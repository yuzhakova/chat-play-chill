// this file contains the logic to make the game work
import * as Chess from 'chess.js' //chess library
import { BehaviorSubject } from 'rxjs' //reactive extensions for JS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code

// Edge cases - tested and handled below - FEN notations
// let promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
// let staleMate = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78'
// let checkMate = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3'
// let insufficientMaterial = 'k7/8/n7/8/8/8/8/7K b - - 0 1'
//replace "(staleMate) for other variables from above to set to certain positions"
// const chess = new Chess(staleMate)

const chess = new Chess()

export const gameSubject = new BehaviorSubject({
  board: chess.board()
})

export function initGame(savedGame) {
  // const savedGame = localStorage.getItem('savedGame') //to get the game from the local storage
  if(savedGame) {
    chess.load(savedGame)
  }
  updateGame()

}

export function resetGame() {
  chess.reset()
  updateGame()
}

export function handleMove(from, to) {
  const promotions = chess.moves({verbose: true}).filter(m => m.promotion)
  if(promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const pendingPromotion = {from, to, color: promotions[0].color}
    updateGame(pendingPromotion)
  }
  const {pendingPromotion} = gameSubject.getValue()
  if(!pendingPromotion) {
    move(from, to)
  }
}
export function move(from, to, promotion) {
  let tempMove = { from, to }
  if (promotion) {
    tempMove.promotion = promotion
  }

  const legalMove = chess.move(tempMove)
    if (legalMove) {
      updateGame()
    }
}

function updateGame(pendingPromotion) {
  const isGameOver = chess.game_over()
  
  const newGame = {
    board: chess.board(),
    pendingPromotion,
    isGameOver,
    turn: chess.turn(),
    result: isGameOver ? getGameResult() : null
  }
  localStorage.setItem('savedGame', chess.fen()) //persist the game in the local storage and chess.fen method to have the board position as a string

  gameSubject.next(newGame)
}
function getGameResult() {
  if (chess.in_checkmate()) {
    const winner = chess.turn() === "w" ? 'BLACK' : 'WHITE'
    return `CHECKMATE - WINNER - ${winner}`
  } else if(chess.in_draw()) {
      let reason = '50 - MOVES - RULE'
      if(chess.in_stalemate()) {
        reason = 'STALEMATE'
      } else if(chess.in_threefold_repetition()) {
        reason = 'REPETITION'
      } else if(chess.insufficient_material()) {
          reason = "INSUFFICIENT MATERIAL"
      }
      return `DRAW - ${reason}`
  } else {
    return 'UNKNOWND REASON'
  }
}