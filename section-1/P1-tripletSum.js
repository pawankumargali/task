/* 
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers.

Assume that there will only be one solution

Example:
given array S = {-1 2 1 -4},
and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

function Triplet Sum has O(n^2) time complexity and 
*/

// Time Complexity => O(n^2)
function TripletSum(arr, target) {

    if(arr.length<3 || !target)  {
        console.log('Error:Target value not specified');
        return undefined;
    }

    arr.sort((a,b) => a-b);
    let min = Number.MAX_SAFE_INTEGER;
    let closestSum;

    for(let i=0; i<arr.length-2; i++) {
        let j=i+1; 
        let k=arr.length-1;
        while(j<k) {
            const currentSum = arr[i]+arr[j]+arr[k];
            const diff = Math.abs(target-currentSum);
            if(diff<min) {
                min=diff;
                closestSum=currentSum;
            }
            if(currentSum<target)
                j++;
            else 
                k--;
        }

    }
    
    return closestSum;
}

const A = [-1,2,1,-4]
console.log(TripletSum(A,1));
