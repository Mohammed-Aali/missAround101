#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string names[] = {"ali", "mohammed", "yousef", "haneen", "stacy", "rena", "away"};

    for(int i = 0; i < 7; i++)
    {
        if (strcmp(names[i], "hanee") == 0)
        {
            printf("found\n");
            return 0;
        }
    }
    printf("not found\n");
    return 1;
}