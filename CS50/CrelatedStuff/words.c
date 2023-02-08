#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

int count_letters(string text, int length);
int count_spaces(string text, int length);
int count_sentences(string text, int length);

int main(void)
{

    //prompt the user for text
    string s = get_string("Text: ");
    int n = strlen(s);

    //counts the number of letters
    int letters_num = count_letters(s, n);

    //counts the number of words
    int words_num = count_spaces(s, n);

    //count number of sentences
    int sentences_num = count_sentences(s, n);


    //the math that calculates out the index
    float L = (float) letters_num / (float) words_num * 100.0;
    float S = (float) sentences_num / (float) words_num * 100.0;
    float pre_round_index = 0.0588 * L - 0.296 * S - 15.8;
    int index = round(pre_round_index);

    //printing out the index in all it's forms
    if (index < 16 && index > 1)
    {
        printf("Grade %i\n", index);
    }
    if (index > 16)
    {
        printf("Grade 16+\n");
    }
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
}


// this abstraction counts sentences
int count_sentences(string text, int length)
{
    int i = 0;
    // this int holds the number of sentences
    int tmp = 0;

    while (i < length)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            tmp++;
        }
        i++;
    }
    return tmp;
}

// this abstraction does the counting for words, but it's secretly counting the spaces.
int count_spaces(string text, int length)
{
    int i = 0;
    // we start at one here because I am assuming the user has wrote somethin.
    // oh and this int holds the number of words not spaces
    int tmp = 1;
    while (i < length)
    {
        if (isspace(text[i]) > 0)
        {
            tmp++;
        }
        i++;
    }
    return tmp;
}

// this abstraction does the counting of letters
int count_letters(string text, int length)
{
    int i = 0;
    //this int holds the number of letters
    int tmp = 0;
    while (i < length)
    {
        if (isalpha(text[i]) > 0)
        {
            tmp++;
        }
        i++;
    }
    return tmp;
}