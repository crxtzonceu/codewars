const insertDashes = arr => arr.split('').join('-').split('- -').join(' ')
// only used split and join huhu

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
    
    it('insert dashes in between chars', () => {
        // arrange
        const value = "i miss her";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("i m-i-s-s h-e-r");
    });
});