#include <cs50.h>
#include <stdio.h>

int main(void)
{
    //prompt the user for n
    int n = get_int("n: ");

    //if the remainder of n divided by 2 is 1 or (n % 2) evaulates to true than the number is an odd number
    if (n % 2)
    {
        printf("odd\n");
    }
    //if the statment above evalutes to 0 or false then run the code below
    else
    {
        printf("even\n");
    }
}