#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N, K;
    cin >> N >> K;
    int A[N];

    for (int i = 0; i < N; i++)
    {
        cin >> A[i];
    }

    bool ans = false;

    for (int tmp = 0; tmp < (1 << N); tmp++)
    {
        bitset<20> s(tmp);

        int sum = 0;
        for (int i = 0; i < N; i++)
        {
            if (s.test(i))
            {
                sum += A[i];
            }
        }
        if (sum == K)
        {
            ans = true;
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