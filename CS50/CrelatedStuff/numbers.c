#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int number[] = {4, 6, 8, 2, 7, 5, 0};

    for (int i = 0; i < 7; i++)
    {
        if (number[i] == -1)
        {
            printf("found at index %i\n", i);
            return 0;
        }
    }

    printf("not found\n");
    return 1;
}