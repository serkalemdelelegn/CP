class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        # Stack to hold characters as we parse
        stack = []
        
        # Traverse through each character in the expression
        for char in expression:
            if char == ')':  # End of a sub-expression
                # Process the expression until we find the matching '('
                expr = []
                while stack and stack[-1] != '(':
                    expr.append(stack.pop())  # Gather the sub-expression
                stack.pop()  # Remove the '('
                
                # The operator precedes the '('
                operator = stack.pop()
                
                # Evaluate based on the operator
                if operator == '&':
                    result = all(e == 't' for e in expr)
                elif operator == '|':
                    result = any(e == 't' for e in expr)
                elif operator == '!':
                    # The sub-expression for '!' has only one element
                    result = expr[0] == 'f'
                
                # Push the result back to the stack as 't' or 'f'
                stack.append('t' if result else 'f')
            
            elif char != ',':
                # Push anything that's not a ',' to the stack (including 't', 'f', '!', '&', '|', '(')
                stack.append(char)
        
        # The final result is the last element in the stack
        return stack[-1] == 't'
