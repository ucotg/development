#include <bits/stdc++.h>
using namespace std;

int main()
{
    int i;
    int count = 0;

    cin >> i;
    string i_str = to_string(i);
    for (char x : i_str)
    {
        if (x == '1')
        {
            count++;
        }
    }
    cout << count << endl;
}