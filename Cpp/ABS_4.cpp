#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int a[N];
    int count = 0;

    for (int i = 0; i < N; i++)
    {
        cin >> a[i];
    }

    while (true)
    {
        bool exist_odd = false;
        for (int i = 0; i < N; i++)
        {
            if (a[i] % 2 != 0)
            {
                exist_odd = true;
            }
        }

        if (exist_odd)
        {
            break;
        }

        for (int i = 0; i < N; i++)
        {
            a[i] /= 2;
        }
        count++;
    }

    cout << count << endl;
    return 0;
}