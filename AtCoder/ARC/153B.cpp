#include <bits/stdc++.h>

using namespace std;

using ll = long long;

int main()
{
    int h, w;

    cin >> h >> w;

    vector<string> A(h);
    for (int i = 0; i < h; ++i)
        cin >> A[i];

    int pr = 0, pc = 0;

    int q;

    cin >> q;

    for (int i = 0, a, b; i < q; ++i)
    {
        cin >> a >> b;
        if (i & 1)
        {
            pr = (pr + h - a) % h;
            pc = (pc + w - b) % w;
        }
        else
        {
            pr = (pr + a) % h;
            pc = (pc + b) % w;
        } // cout<<pr<<' '<<pc<<'\n';
    }

    if (q & 1) // qが奇数
    {
        for (int i = 1; i <= h; ++i)
        {
            int r = (pr + h - i) % h;
            for (int j = 1; j <= w; ++j)
            {
                int c = (pc + w - j) % w;
                cout << A[r][c];
            }
            cout << '\n';
        }
    }
    else
    {
        for (int i = 0; i < h; ++i)
        {
            int r = (pr + i) % h;
            for (int j = 0; j < w; ++j)
            {
                int c = (pc + j) % w;
                cout << A[r][c];
            }
            cout << '\n';
        }
    }

    return 0;
}