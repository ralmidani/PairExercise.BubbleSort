const arr = [4, 3, 2, 1];

describe('Merge Sort', function(){
  
});

describe('Split function', function() {
  it('splits an array in half', function() {
    expect(split(arr)).toEqual([[4, 3], [2, 1]]);
  });
});

describe('Merge function', function() {
  it('merges two sorted arrays into another sorted array', function() {
    expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
  })
});
