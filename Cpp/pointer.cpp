#include <iostream>

using namespace std;

void nochange(int i) {
    // 仮引数を変更するが、呼び出した変数自体は変更されない
    i = 42;
}

void set42(int* pi) {
    // 仮引数で渡されたアドレスが指し示す変数に42を代入する
    *pi = 42;
}

int main() {
    int i = 0;
    nochange(i);
    cout << i << endl;

    set42(&i);
    cout << i << endl;
} 