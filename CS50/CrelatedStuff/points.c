#include <cs50.h>
#include <stdio.h>

int main(void)
{
    const int MINE = 2;
    int points = get_int("how many points did you lose? ");

    if (points < MINE)
    {
        printf("wow, you got more points than me\n");
    }
    else if (points > MINE)
    {
        printf("you lost more points than me\n");
    }
    else
    {
        printf("you got the same points as me\n");
    }
}
