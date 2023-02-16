#include <bits/stdc++.h>
using namespace std;
using ll = long long;

bool isPrime(int x)
{
    for (int i = 2; i * i <= x; i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }

    return true;
}

int main()
{
    int q;
    cin >> q;
    for (int i = 1; i <= q; i++)
    {
        int x;
        cin >> x;

        bool prime = isPrime(x);
        if (prime)
        {
            cout << "Yes";
        }
        else
        {
            cout << "No";
        }
        cout << endl;
    }

    return 0;
}