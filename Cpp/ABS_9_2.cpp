#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N, Y;
    cin >> N >> Y;
    int ans[3] = {-1, -1, -1};

    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; i + j <= N; j++)
        {
            int k = N - i - j;
            if (i * 10000 + j * 5000 + k * 1000 == Y)
            {
                ans[0] = i;
                ans[1] = j;
                ans[2] = k;
                break;
            }
        }
    }

    cout << ans[0] << " " << ans[1] << " " << ans[2] << endl;

    return 0;
}