class Solution:
    def maximumSwap(self, num: int) -> int:
        # Convert the number to a list of characters (digits)
        num_list = list(str(num))
        
        # Store the last occurrence of each digit (0-9)
        last_occurrence = {int(digit): idx for idx, digit in enumerate(num_list)}
        
        # Traverse the number (num_list)
        for i, digit in enumerate(num_list):
            # Convert the current digit to an integer
            current_digit = int(digit)
            
            # Try to find a larger digit to swap with
            for d in range(9, current_digit, -1):  # Check for digits larger than current_digit
                if last_occurrence.get(d, -1) > i:  # If there's a larger digit after the current one
                    # Swap the current digit with the larger one
                    num_list[i], num_list[last_occurrence[d]] = num_list[last_occurrence[d]], num_list[i]
                    # Return the new number after the swap
                    return int("".join(num_list))
        
        # If no swap was made, return the original number
        return num
