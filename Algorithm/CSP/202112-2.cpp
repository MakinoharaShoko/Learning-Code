#include <iostream>
#include <cmath>
#include <vector>

using namespace std;

int main()
{
    vector<int> rArray;
    vector<int> mArray;
    int inNum, allNum;
    cin >> inNum >> allNum;
    int sum = 0;
    int sum2 = 0;
    int prev = 0;
    int curr = 0;
    int curr_r = 0;
    int r = floor((double)allNum / (inNum + 1));
    int addCount = 0;
    for (int i = 0; i < allNum; i++)
    {
        if (addCount == r)
        {
            curr_r++;
            addCount = 0;
        }
        rArray.push_back(curr_r);
        addCount++;
    }
    for (int i = 0; i < inNum; i++)
    {
        int thisNum;
        cin >> thisNum;
        for (int j = prev; j < thisNum; j++)
        {
            mArray.push_back(curr);
        }
        prev = thisNum;
        curr++;
    }
    for (int j = prev; j < allNum; j++)
    {
        mArray.push_back(curr);
    }
    for (int i = 0; i < allNum; i++)
    {
        sum += abs(rArray[i] - mArray[i]);
    }
    cout << sum;
}