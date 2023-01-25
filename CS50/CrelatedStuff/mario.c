#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // run this one time, and prevent the user from entering numbers that dont make sense like negative numbers.
    // to get a positive value for the number of blocks we want to create
    int n;
    do
    {
        n = get_int("size: ");
    }
    while (n < 1);


    //for each row
    for(int i = 0; i < n; i++)
    {

       //for each column
       for (int j = 0; j < n; j++)
       {
           //print a brick
           printf("#");
       }
    //move to next
    printf("\n");
    }

}
