#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    string number;
}
person;

int main(void)
{
    person people[2];
    
    people[0].name = "Haneen";
    people[0].number = "+1-617-495-1000";
    
    people[1].name = "Mohammed";
    people[1].number = "+1-949-468-2750";

    for (int i = 0; i < 2; i++)
    {
        if(strcmp(people[i].names, "Haneen") == 0)
        {
            printf("found %s\n", people[i].number);
            return 0;
        }
    }
    printf("not found\n");
    return 1;

}