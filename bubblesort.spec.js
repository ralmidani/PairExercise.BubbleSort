describe('Bubble Sort', function(){

  const numArray = [3, 2, 1,]


  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();


  });

  it('Number of times swap is called to be 3', function() {
    bubbleSort(numArray)
    expect(window.swap.calls.count()).toEqual(3)
  
  });

  it('Properly sorts an array of numbers', function() {
    const sortedArray = bubbleSort(numArray)
    expect(sortedArray).toEqual([1,2,3])

  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });




});

