#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    long long cases[T];
    long long answer1, answer2;

    for (int i = 0; i < T; i++)
    {
        cin >> cases[i];
    }

    // for(int x : cases) {
    //     cout << x << endl;
    // }

    for (int i = 0; i < T; i++)
    {
        for (long long j = 2; j * j * j <= cases[i]; j++)
        {
            if(cases[i] % j != 0) {
                continue;
            }
            if (cases[i] % (j * j) == 0)
            {
                answer1 = j;
                answer2 = cases[i] / (j * j);
                break;
            } else {
                answer2 = j;
                answer1 = (long long) sqrt(cases[i] / j);
            }
        }
        cout << answer1 << " " << answer2 << endl;
    }
    
}