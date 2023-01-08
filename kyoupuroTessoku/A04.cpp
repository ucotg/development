#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N;
    cin >> N;

    for (int i = 9; i >= 0; i--)
    {
        int wari = (1 << i);
        cout << N / wari;
        N = N % wari;
    }

    cout << endl;
    return 0;
}