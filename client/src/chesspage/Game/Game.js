// this file contains the logic to make the game work
import * as Chess from 'chess.js' //chess library
import { BehaviorSubject } from 'rxjs' //reactive extensions for JS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code

const chess = new Chess() //create a new instance of chess

export const gameSubject = new BehaviorSubject({
  board: chess.board()
})

chess.board() //this method gives an array representation of the board
