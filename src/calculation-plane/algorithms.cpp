#include <iostream>
#include <vector>
#include <math.h>
#include <iterator>
#include <functional>
#include <algorithm>
#include <cstdlib>

using namespace std;

int main(double G_vsum, double m, double p_ksum, double P_v, double T_g)
{
    //исходные данные:

    int N_p=0, M_p=0, T_n=288, R_n=101325, K_g=1;

    double pi=3.14, R=287.3, k_v=1.4, n_st=0.86, n_v=0.9;

//1 - Расход воздуха через газогенератор:

    double G_v1 = G_vsum / (1 + m);

//2 - Степень повышения давления в компрессоре газогенератора:

    double p_k = p_ksum / (P_v * K_g);

//3 - Работа затрачиваемая на привод вентилятора:

    double l_v = k_v / (k_v - 1) * R * T_n * (pow(P_v, (k_v - 1) / k_v) - 1) * 1 / n_v;

//4 - Температура торможения на входе в компрессор газогенератора:

    double T_kvh = T_n + l_v / 1004;

//5 - Давление на входе в компрессор:

    double sigma_na = 1;
    double sigma_vh = 1;
    double sigma_perex = 0.985;
    double p_kvh = P_v * R_n * sigma_vh * sigma_na / sigma_perex;

//6 - Работа, затрачиваемая на привод компрессора газогенератора:

    double n_stk = 0.88;
    double n_k = 0.86;
    double L_к = k_v / (k_v - 1) * R * T_kvh * (pow(p_k, (k_v - 1) / k_v) - 1) * 1 / n_k;

//7 - Потребная внутренняя удельная работа турбины газогенератора: 
//Потребная внутренняя удельная работа турбины газогенератора определяется из баланса мощностей турбины и компрессора:

    double k_t = 0.98;
    double L_t = L_к / k_t;

//8 - Условная адиабатическая скорость:

    double y = 0.5;
    int z = 1;
    double n_t = 0.86;
    double c_ad = sqrt(2 * L_t / n_t);

    double U_tsr = y * c_ad * std::sqrt(1 / z);

//9 - Температура газа за турбиной:

    double k_g = 1.33;
    double R_g = 289.3;
    double T_t = T_g - (L_t) / (k_g / (k_g - 1) * R_g);

//10 - Температура в корневом сечении неохлаждаемых рабочих лопаток второй ступени:

    double T_l = 0.95 * (T_t + (pow(U_tsr, z)) / ((2 * k_g / (k_g - 1) * R_g)));

    double teta = 0.35;
    double T_w = T_l / 0.95;

    double T_ohl = T_kvh + L_к / 1005;

    double T_lohl = T_w - teta * (T_w - T_ohl);

//11 - Задание запаса прочности рабочих лопаток второй ступени турбины:

    int K_sigma = 2;

//12 - Определение предела длительной прочности материала лопаток: 

    int tau_ch = 500;

    int sigma_dl = 300;

//13 - Допустимое напряжение растяжения в корневом сечении рабочих лопаток последней ступени турбины:

    double sigma_p = sigma_dl / K_sigma;

//15 - Для каждой ступени турбины определяем относительную высоту рабочих лопаток: 

    int ro_m = 8100;
    double F = 0.7;
    double h_1 = (2 * pow(U_tsr, 2) * ro_m * F) / sigma_p * pow(10, -6);

//16 - Приведенную скорость и угол на выходе из второй ступени турбины выбираем:

    double lambda_2T = 0.5;
    int alfa_2 = 90;

//17 - Отношение полных давлений в турбине:

    double P_gt = 1 / pow((1 - (L_t / (k_g / (k_g - 1) * R_g * n_t * T_g))), (k_g / (k_g - 1)));

//18 - Площадь кольцевого сечения канала на выходе из турбины:

    int nu = 1;
    int G_t = G_v1 * nu;

    double k_v = 1.5;
    double b = (k_v + 1) / (k_v - 1);
    double c = 2 / (k_v + 1);
    double a = pow(c, b);
    double S_g = sqrt(k_v * a * (1 / R_g));

    
}

