#include <iostream>

int main() {
    int array[] = {0, 1, 2, 3};

    std::cout << "�擪�̃A�h���X: " << &array[0] << std::endl;

    int* ptr = array;

    std::cout << "�|�C���^�[: " << ptr << std::endl;
    std::cout << "�l: " << *ptr << std::endl;
}