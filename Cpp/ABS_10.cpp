#include <bits/stdc++.h>
using namespace std;

int main()
{
    string S;
    cin >> S;

    reverse(S.begin(), S.end());
    bool ans = true;

    string parts[4] = {"maerd", "remaerd", "esare", "resare"};

    for (int i = 0; i < S.size();)
    {
        bool ans2 = false;
        for (int j = 0; j < 4; j++)
        {
            string d = parts[j];
            if (S.substr(i, d.size()) == d)
            {
                ans2 = true;
                i += d.size();
            }
        }
        if (!ans2)
        {
            ans = false;
            break;
        }
    }

    if (ans)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }
}