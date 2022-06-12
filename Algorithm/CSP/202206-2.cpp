#include <bits/stdc++.h>

using namespace std;

int cangbaotu[5001][5001];
int lvhuatuzhi[114514][2];

int caseNumber, length, cangbaotuSize;

bool checkPointExist(int x, int y, bool dz)
{
    for (int i = 0; i < caseNumber; i++)
    {
        if (lvhuatuzhi[i][0] == x && lvhuatuzhi[i][1] == y)
        {
            if (dz)
            {
                return false;
            }
            return true;
        }
    }
    if (dz)
    {
        return true;
    }
    return false;
}

int kankanzhegecangbaotu(int x, int y)
{
    for (int i = 0; i <= cangbaotuSize; i++)
    {
        for (int j = 0; j <= cangbaotuSize; j++)
        {
            if (cangbaotu[i][j] == 1)
            {
                if (!checkPointExist(i + x, j + y, false))
                {
                    return false;
                }
            }
            if (cangbaotu[i][j] == 0)
            {
                if (!checkPointExist(i + x, j + y, true))
                {
                    return false;
                }
            }
        }
    }
    return true;
}

int main()
{
    cin >> caseNumber >> length >> cangbaotuSize;
    for (int i = 0; i < caseNumber; i++)
    {
        int x, y;
        cin >> x >> y;
        lvhuatuzhi[i][0] = x;
        lvhuatuzhi[i][1] = y;
    }
    for (int i = 0; i <= cangbaotuSize; i++)
    {
        for (int j = 0; j <= cangbaotuSize; j++)
        {
            int t;
            cin >> t;
            cangbaotu[cangbaotuSize - i][j] = t;
        }
    }
    int sum = 0;
    for (int i = 0; i < caseNumber; i++)
    {
        bool go = true;
        int x = lvhuatuzhi[i][0], y = lvhuatuzhi[i][1];
        if (x + cangbaotuSize > length || y + cangbaotuSize > length)
        {
            go = false;
        }
        if (go && kankanzhegecangbaotu(x, y))
        {
            sum++;
        }
    }
    cout << sum;
}