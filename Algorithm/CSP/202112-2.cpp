#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int inNum, allNum;
    cin >> inNum >> allNum;
    long long sum = 0;
    int prev = 0;
    int curr = 0;
    int curr_r = 0;
    int r = floor((double)allNum / (inNum + 1));
    int addCount = 0;
    for (int i = 0; i < inNum; i++)
    {
        int thisNum;
        cin >> thisNum;
        for (int j = prev; j < thisNum; j++)
        {
            if (addCount >= r)
            {
                curr_r++;
                addCount = 0;
            }
            sum += abs(curr_r - curr);
            addCount++;
        }
        prev = thisNum;
        curr++;
    }
    for (int j = prev; j < allNum; j++)
    {
        if (addCount >= r)
        {
            curr_r++;
            addCount = 0;
        }
        sum += abs(curr_r - curr);
        addCount++;
    }
    cout << sum;
}