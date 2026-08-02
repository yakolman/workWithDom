/** @jest-environment jsdom */
import createGameField from "../createGameField";

test('testing create 16 fields in game field', () => {
    const gameField = document.createElement('div');
    createGameField(gameField);
    const fields = gameField.querySelectorAll ('.field')
    expect(fields.length).toBe(16);
});