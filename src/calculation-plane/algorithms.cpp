#include <iostream>
#include <vector>
#include <math.h>
#include <iterator>
#include <functional>
#include <algorithm>
#include <cstdlib>

#include "gdf.cpp"

using namespace std;

int main(double G_vsum, double m, double p_ksum, double P_v, double T_g)
{
    //исходные данные:

    int N_p=0, M_p=0, T_n=288, R_n=101325, K_g=1;

    double pi=3.14, R=287.3, k_v=1.4, n_st=0.86, n_v=0.9;

//1 - Расход воздуха через газогенератор:

    double G_v1 = G_vsum / (1 + m);

//2 - Степень повышения давления в компрессоре газогенератора:

    double P_k = p_ksum / (P_v * K_g);

//3 - Работа затрачиваемая на привод вентилятора:

    double l_v = k_v / (k_v - 1) * R * T_n * (pow(P_v, (k_v - 1) / k_v) - 1) * 1 / n_v;

//4 - Температура торможения на входе в компрессор газогенератора:

    double T_kvh = T_n + l_v / 1004;

//5 - Давление на входе в компрессор:

    double sigma_na = 1;
    double sigma_vh = 1;
    double sigma_perex = 0.985;
    double P_kvh = P_v * R_n * sigma_vh * sigma_na / sigma_perex;

//6 - Работа, затрачиваемая на привод компрессора газогенератора:

    double n_stk = 0.88;
    double n_k = 0.86;
    double L_k = k_v / (k_v - 1) * R * T_kvh * (pow(P_k, (k_v - 1) / k_v) - 1) * 1 / n_k;

//7 - Потребная внутренняя удельная работа турбины газогенератора: 
//Потребная внутренняя удельная работа турбины газогенератора определяется из баланса мощностей турбины и компрессора:

    double k_t = 0.98;
    double L_t = L_k / k_t;

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

    double T_ohl = T_kvh + L_k / 1005;

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

    double sigma_k = 0.96;
    double P_g = P_kvh * P_k * sigma_k;

    double q_lambda2T = qlambda(lambda_2T, k_v);

    double P_t = P_g / P_gt;

    double F_2T = (G_t * sqrt(T_t)) / (S_g * P_t * q_lambda2T * sin(alfa_2 * M_PI / 180));

//19 - Высота рабочей лопатки на выходе последней ступени турбины:

    double h = sqrt(F_2T / (M_PI * h_1));

//21 - Средний диаметр турбины на выходе:

    double D_TSR = h * h_1;

//22 - Наружный диаметр последней ступени турбины

    double D_TNAR = sqrt(pow(D_TSR, 2) + (2 / M_PI) * F_2T);

//23 - Внутренний диаметр последней ступени турбины:

    double D_TVT = D_TNAR - 2 * h;

//24 - Относительный диаметр втулки последней ступени турбины:

    double d_t = D_TVT / D_TNAR;

//25 - Площадь кольцевого сечения канала на входе в первую ступень турбины

    double F_g = (G_t * sqrt(T_g)) / (S_g * P_g * q_lambda2T);

//26 - Принимаем форму проточной части турбины D_СР   = const

    double D_GSR = D_TSR;
    double D_GNAR = sqrt(pow(D_GSR, 2) + (2 / M_PI) * F_g);
    double D_GVT = std::sqrt(std::pow(D_GNAR, 2) - (4 / M_PI) * F_g);

//27 - Частота вращения ротора газогенератора

    double n_gg = 60 * (U_tsr / (M_PI * D_TSR));

//28 - Приведенная скорость на выходе из компрессора:

    double lambda_k = 0.35;

//29 - Температура, давление воздуха и критическая скорость на выходе из компрессора газогенератора

    double T_k = T_kvh + L_k / (k_v / (k_v - 1) * R);

    double P_k = P_kvh * P_k;

    double a_kkr = 18.23 * sqrt(T_k);

//30 - Скорость на выходе из компрессора

    double C_k = lambda_k * a_kkr;

//31 - Площадь кольцевого сечения канала на выходе из компрессора

    double S_v = 0.0404;
    double K_G = 0.93;
    double qlambda_k = qlambda(lambda_k, k_g);

//K_G – коэффициент, учитывающий неравномерность поля скоростей по высоте проточной части и 
//наличие пограничного слоя у наружной и внутренней стенок корпуса
    
    double F_k = (G_v1 * std::sqrt(T_k)) / (S_v * P_k * qlambda_k * K_G);

//32 - Отношение кольцевых площадей входа и выхода компрессора газогенератора

// n - показатель политропы сжатия в компрессоре

    double n = 1.492;

    double F = pow(P_k, (n + 1) / (2 * n)) * qlambda_k / q_lambda2T;

//33 - Площадь кольцевого сечения канала на входе в компрессор:

    double F_kvh = F * F_K;

//Относительный диаметр втулки последней ступени компрессора:

//d_k - для высоконапорного компрессора в диапазоне 0,88 - 0,89


double d_k - 0.92;

//35 - Средний диаметр на выходе из компрессора:

    double D_srvyh = std::sqrt((1 + std::pow(d_k, 2)) / 2 * (4 * F_K) / (3.14 * (1 - std::pow(d_k, 2))));

//36 - Выбор формы проточной части компрессора

//37 - Относительный диаметр втулки для первой ступени компрессора газогенератора:

//- при D_вт = const

    double d_vt1 = d_k / (sqrt(1 + (F - 1)*(1 - pow(d_k, 2))));

//- при D_к = const

    double d_vt1 = std::sqrt(1 - F * (1 - std::pow(d_k, 2)));

//- при D_ср = const

    double d_VT1 = 1 - 2 / (1 + (1 + d_k)/(1 - d_k) * (1) / (F));

//38 - Диаметры на входе в компрессор газогенератора

    double D_KVH = std::sqrt(F_kvh * 4) / (pi * (1 - std::pow(d_VT1, 2)));

    double D_VTVH = d_vt1 * D_KVH;

    double D_SRVH = D_KVH * sqrt((1 + pow(d_vt1, 2)) / 2);

//39 - Высота лопатки последней ступени компрессора при D_вт = const

    double D_VT = D_VTVH;
    double h_k = 1 / 2 * ((1 / d_k) - 1) * D_VT;
    h_k = (1 - d_k) / 2 * std::sqrt(2 * D_SRVH / (1 + pow(d_k, 2)));
    h_k = (1 - d_k) / 2 * D_KVH;

//40 - Окружная скорость на внешнем диаметре первой ступени компрессора газогенератора:

    double u_k = (pi * D_KVH * n_gg) / (60);

//41 - Средний диаметр компрессора газогенератора равный полу сумме средних 
//диаметров его проточной части на входе и выходе

    double D_KVDSR = (D_SRVH + D_srvyh) / 2;

//42 - Средний диаметр турбины газогенератора равный полу сумме 
//средних диаметров ее проточной части на входе и выходе

    double D_TVD_SR = (D_GSR + D_TSR) / 2;

//43 - Число ступеней компрессора газогенератора:

    double z_TVD = 1;
    double K_gg = 0.45;
    double z_kvd = pow(D_TVD_SR / D_KVDSR, 2) * (z_TVD) / pow(K_gg, 2);

//Глава II. Детальный расчет компрессора одновального газогенератора ТРДД

//1 - Коэффициенты затраченной работы отдельных ступеней выбираем с учетом 
//имеющихся статистических рекомендаций:

    std::vector<double> L_st = {0.24, 0.25, 0.25, 0.3, 0.32, 0.29, 0.28, 0.27};

    double D_KVYH = std::sqrt(4 * F_K) / (M_PI * (1 - std::pow(d_k, 2)));

    std::vector<double> D_k = {0.398, 0.398, 0.398, 0.398, 0.398, 0.398, 0.398, 0.398};

}


