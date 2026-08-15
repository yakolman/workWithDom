/** @jest-environment jsdom */
import createGameField from "../js/createGameField";

test('testing create 16 fields in game field', () => {
    const gameField = document.createElement('div');
    createGameField(gameField);
    const fields = gameField.querySelectorAll ('.field')
    expect(fields.length).toBe(16);
});

test('empty stub test', () => {
    expect(1).toBe(1);
});