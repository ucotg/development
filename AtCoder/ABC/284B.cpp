#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    int a[T][1000];
    int N[T];

    for(int i = 0; i < T; i++) {
        cin >> N[i];
        for(int j = 0; j < N[i]; j++) {
            cin >> a[i][j];
        }
    }
    for (int i = 0; i < T; i++)
    {
        int count = 0;
        for (int j = 0; j < N[i]; j++)
        {
            if(a[i][j] % 2) {
                count++;
            }
        }
        cout << count << endl;
    }
}