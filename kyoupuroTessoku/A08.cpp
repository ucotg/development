#include <bits/stdc++.h>
using namespace std;

int main()
{
    int h, w, q;
    cin >> h >> w;
    int x[1509][1509];
    int sum[1509][1509];

    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < w; j++)
        {
            cin >> x[i][j];
        }
    }

    for (int i = 0; i < h; i++)
    {
        sum[i][0] = x[i][0];
        for (int j = 1; j < w; j++)
        {
            sum[i][j] = sum[i][j - 1] + x[i][j];
        }
    }

    cin >> q;

    for (int i = 0; i < q; i++)
    {
        int a, b, c, d;
        cin >> a >> b >> c >> d;
        a--, b--, c--, d--;
        int ans = 0;
        for (int j = a; j <= c; j++)
        {
            ans += sum[j][d] - sum[j][b - 1];
        }
        cout << ans << endl;
    }
}