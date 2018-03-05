describe('Bubble Sort', function(){
  let numArray;
  


  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    numArray = [7, 99, 3, 5, 1, 6, 2, 4, 8];
  });

  // it('Number of times swap is called to be 3', function() {
  //   bubbleSort(numArray);
  //   expect(window.swap.calls.count()).toEqual(3)
  
  // });

  it('properly sorts an array of numbers', function() {
    const sortedArray = bubbleSort(numArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 99]);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });




});

