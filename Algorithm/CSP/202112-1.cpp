#include <iostream>

using namespace std;

int main()
{
    int inNum, allNum;
    cin >> inNum >> allNum;
    int sum = 0;
    int prev = 0;
    int curr = 0;
    for (int i = 0; i < inNum; i++)
    {
        int thisNum;
        cin >> thisNum;
        sum += (thisNum - prev) * curr;
        prev = thisNum;
        curr++;
    }
    sum += (allNum - prev) * curr;
    cout<<sum;
}