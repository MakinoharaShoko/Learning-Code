#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n, len;
    cin>>n>>len;
    int isN[100000] = {0};
    isN[0] = 1;
    int res = 0;
    for (int i = 0; i < len; i++)
    {
        int left, r;
        cin >> left >> r;
        if (isN[r] != 1)
        {
            res++;
        }
        isN[left] = 1;
    }
    cout<<res;
}