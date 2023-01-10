#include <bits/stdc++.h>
using namespace std;

int main()
{
    int h, w, n;
    cin >> h >> w >> n;

    int snow[1509][1509];
    int algo[1509][1509];

    for (int i = 0; i < n; i++)
    {
        int a, b, c, d;
        cin >> a >> b >> c >> d;
        a--, b--, c--, d--;
        algo[a][b] += 1, algo[c + 1][d + 1] += 1;
        algo[a][d + 1] -= 1;
        algo[c + 1][b] -= 1;
    }

    for (int i = 0; i < h; i++)
    {
        snow[i][0] = algo[i][0];
        for (int j = 1; j < w; j++)
        {
            snow[i][j] = snow[i][j - 1] + algo[i][j];
        }
    }

    for (int j = 0; j < w; j++)
    {
        for (int i = 1; i < h; i++)
        {
            snow[i][j] += snow[i - 1][j];
        }
    }

    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < w; j++)
        {
            if (j >= 1)
            {
                cout << " ";
            }
            cout << snow[i][j];
        }
        cout << endl;
    }
}