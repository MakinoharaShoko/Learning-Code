#include <bits/stdc++.h>

int data[200010] = {0};

using namespace std;
int main()
{
    int dataNum, queryNum, delay;
    cin >> dataNum >> queryNum >> delay;
    for (int i = 0; i < dataNum; i++)
    {
        int start, time;
        cin >> start >> time;
        int trueS = start - delay;
        int trueE = start - delay - time + 1;
        if(trueE<0){
            trueE = 0;
        }
        if(trueS<0){
            trueS = 0;
        }
        for (int j = trueS; j >= trueE; j--)
        {
            if(j<0){
                break;
            }
            data[j]++;
        }
    }
    for (int i = 0; i < queryNum; i++)
    {
        int in;
        cin >> in;
        cout << data[in] << endl;
    }
}