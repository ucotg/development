#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    int a[n + 1], b[n + 1], dp[n + 1];
    vector<int> answer;

    for (int i = 2; i <= n; i++)
    {
        cin >> a[i];
    }
    for (int i = 3; i <= n; i++)
    {
        cin >> b[i];
    }

    dp[1] = 0;
    dp[2] = a[2];

    for (int i = 3; i <= n; i++)
    {
        dp[i] = min(dp[i - 1] + a[i], dp[i - 2] + b[i]);
    }

    int place = n;
    while (true)
    {
        answer.push_back(place);
        if (place == 1)
        {
            break;
        }
        if (dp[place - 1] + a[place] == dp[place])
        {
            place -= 1;
        }
        else
        {
            place -= 2;
        }
    }

    reverse(answer.begin(), answer.end());

    cout << answer.size() << endl;

    for (int i = 0; i < answer.size(); i++)
    {
        if (i >= 1)
        {
            cout << " ";
        }
        cout << answer[i];
    }
    return 0;
}