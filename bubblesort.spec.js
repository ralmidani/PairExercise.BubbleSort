describe('Bubble Sort', function(){
  let numArray;
  


  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    numArray = [7, 99, 3, 5, 1, 6, 2, 4, 8];
    anObj = [{age: 1}, {age:30}, {age:4}]
  });

  // it('Number of times swap is called to be 3', function() {
  //   bubbleSort(numArray);
  //   expect(window.swap.calls.count()).toEqual(3)
  
  // });
  it('properly sorts objects', function() {
    let sorted = bubbleSort(anObj, function comparator (a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    });
    expect(sorted).toEqual([{age:1}, {age:4}, {age:30}])
  });

  it('properly sorts an array of numbers', function() {
    const sortedArray = bubbleSort(numArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 99]);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });




});

