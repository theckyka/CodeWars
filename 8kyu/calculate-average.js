/**DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// My solution

function find_average(array) {
    if(array.length == 0) {
        return 0;
    }else {
        const dabl = array.reduce((sum, current) => sum + current, 0);
        return dabl / array.length;
    }
  }