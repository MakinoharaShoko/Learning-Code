#include <bits/stdc++.h>

using namespace std;
int main()
{
    int n, m, l;
    cin >> n >> m >> l;
    int res[256] = {};
    for (int i = 0; i < n * m; i++)
    {
        int in;
        cin >> in;
        res[in]++;
    }
    for (int i = 0; i < l; i++)
    {
        cout << res[i] << ' ';
    }
}