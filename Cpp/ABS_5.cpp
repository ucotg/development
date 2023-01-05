#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b, c, x;
    int count = 0;
    cin >> a >> b >> c >> x;

    for (int i = 0; i <= c; i++)
    {
        for (int j = 0; j <= b; j++)
        {
            for (int k = 0; k <= a; k++)
            {
                if (i * 50 + j * 100 + k * 500 == x)
                {
                    count++;
                }
            }
        }
    }
    cout << count << endl;
    return 0;
}
