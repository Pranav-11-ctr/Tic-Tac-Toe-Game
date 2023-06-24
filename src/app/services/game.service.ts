import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];
  public winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

  public gameOver = false;
  public chance = 0;//game start initially with 0
  public draw = false;
  public winner = 3;//means no winner initially
  constructor() { }
  //on button click change Game state
  changeGameState(position: number) {
    //check game over
    if (this.gameOver) {
      alert("Game is already over");
      return;
    }

    //check for position occupied
    if (this.gameState[position] != 3) {
      alert("Position is already occupied");
      return;
    }

    //if position is blank means at that place 3

    //On that position in gamState array either O or 1 whom click ttheir's value filled
    this.gameState[position] = this.chance

    //check for winner
    if (this.checkWinner()) {
      this.gameOver = true;
      this.winner = this.chance;
      return;
    }

    //check for draw
    if (this.checkDraw()) {
      this.gameOver = true;
      this.draw = true;
      return;
    }


    //if no winner and no draw then give chance to other
    this.chance = this.chance == 1 ? 0 : 1;

  }

  //Method for check winner
  checkWinner() {
    for (let i = 0; i < this.winningPosition.length; i++) {
      let winningSubArray = this.winningPosition[i];

      if (this.gameState[winningSubArray[0]] == this.gameState[winningSubArray[1]] &&
        this.gameState[winningSubArray[1]] == this.gameState[winningSubArray[2]] &&
        this.gameState[winningSubArray[0]] != 3) {
        return true;
      }
      
    }
    return false;
  }

  //check for draw
  checkDraw() {
    for (let i = 0; i < this.gameState.length; i++) {
      if (this.gameState[i] == 3) {
        return false;
      }

    }
    return true;
  }

  //restart the game
  restartGame() {
    this.gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];

    this.gameOver = false;
    this.chance = 0;//game start initially with 0
    this.draw = false;
    this.winner = 3;//means no winner initially
  }
}
