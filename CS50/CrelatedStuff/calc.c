#include <cs50.h>
#include <stdio.h>
//floating points imprecision
int main(void)
{
    //prompt user for x
    int x = get_int("X: ");

    //prompt user for y
    int y = get_int("Y: ");

    //divide x by y
    float z = (float)x / (float) y;

    printf("%.20f\n", z);
}
// truncation is what happens when you divide and int by an int and return a floating point c throws away everything beyond the first number
// we can do type conversion by adding the type we want the value to turn into right before it.