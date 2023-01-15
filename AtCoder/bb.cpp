#include <bits/stdc++.h>
using namespace std;

int main()
{
    int h, w, q;
    cin >> h >> w;
    char strings[h + 1][w + 1];
    char ans[h + 1][w + 1];
    for (int i = 1; i <= h; i++)
    {
        for (int j = 1; j <= w; j++)
        {
            cin >> strings[i][j];
        }
    }

    cin >> q;

    for (int x = 1; x <= q; x++)
    {
        int a, b;
        cin >> a >> b;

        for (int j = 1; j <= 2; j++)
        {
            int limh, limw;
            limh = a;
            if (j > b)
            {
                limw = w + b;
            }
            else
            {
                limw = b;
            }
            ans[limh][limw + 1 - j] = strings[1][j];
        }

        for (int i = 1; i <= h; i++)
        {
            for (int j = 1; j <= w; j++)
            {
                strings[i][j] = ans[i][j];
            }
        }
    }

    for (int i = 1; i <= h; i++)
    {
        for (int j = 1; j <= w; j++)
        {
            cout << ans[i][j];
        }
        cout << endl;
    }
}