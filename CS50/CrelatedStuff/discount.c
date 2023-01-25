#include <cs50.h>
#include <stdio.h>

float discount(int percent_off, float price);

int main(void)
{
    float regular = get_float("regular price: ");
    int percent_off = get_int("percent off: ");
    float sale = discount(percent_off, regular);
    printf("The sale price: %.2f\n", sale);

}

float discount(int percent_off, float price)
{
    return price  * (100 - percent_off) / 100;
}
