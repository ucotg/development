#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N, Y;
    cin >> N >> Y;
    int ans[3];
    bool yes = false;

    for (int i = 0; i <= N; i++)
    {
        if (i * 10000 == Y)
        {
            ans[0] = i;
            ans[1] = 0;
            ans[2] = 0;
            yes = true;
            break;
        }
        for (int j = 0; j <= N; j++)
        {
            if (i + j > N)
            {
                break;
            }
            if (i * 10000 + j * 5000 == Y && i + j == N)
            {
                ans[0] = i;
                ans[1] = j;
                ans[2] = 0;
                yes = true;
                break;
            }
            for (int k = 0; k <= N; k++)
            {
                if (i + j + k > N)
                {
                    break;
                }
                if (i * 10000 + j * 5000 + k * 1000 == Y && i + j + k == N)
                {
                    ans[0] = i;
                    ans[1] = j;
                    ans[2] = k;
                    yes = true;
                    break;
                }
            }
        }
    }

    if (yes)
    {
        cout << ans[0] << " " << ans[1] << " " << ans[2] << endl;
    }
    else
    {
        cout << -1 << " " << -1 << " " << -1 << endl;
    }

    return 0;
}