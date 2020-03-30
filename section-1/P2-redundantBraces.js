/*
Given a string A denoting an expression. It contains the following operators ’+’, ‘-‘, ‘*’, ‘/’.
Chech whether A has redundant braces or not.
Return 1 if A has redundant braces, else return 0.
Note: A will be always a valid expression.

Input:  A = "((a + b))" => Output: 1

Input: A = "(a + (a + b))" => Output: 0
*/


// Time complexity => O(n)
function hasRedundantBraces(exp) {

    if(exp.length==0) 
        return -1;

    const stack = [];

    for(let i=0; i<exp.length; i++) {

        if((exp[i]=='(') || (exp[i]=='+') || (exp[i]=='-') || (exp[i]=='*') || (exp[i]=='/')) {
            stack.push(exp[i]);
        }
            
        if(exp[i]==')') {
            const top = stack.length-1;
            if(stack[top]!='(') {
                stack.pop();
                stack.pop();
            }
        }        
    }

    if(stack.length==0 || !stack.includes('('))
        return 0;
    else 
        return 1;
    
}

const A = "(a + (a + b))";
console.log(hasRedundantBraces(A));