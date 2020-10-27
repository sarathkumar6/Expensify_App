const add = (x, y) => x + y;
test('should add two numbers', () => {
    expect(add(5,7)).toEqual(12);
});