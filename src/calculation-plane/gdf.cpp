#include <iostream>
#include <vector>
#include <cmath>

double Mlambda(double nashe_lambda, double k) {
    double M_lambda = pow(((2/(k+1))*pow(nashe_lambda,2)/(1-((k-1)/(k+1))*pow(nashe_lambda,2))), 0.5);
    return round(M_lambda, 4);
}

double qlambda(double nashe_lambda, double k) {
    double q_lambda = nashe_lambda * pow(((k+1)/2), (1/(k-1))) * pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)), (1/(k-1)));
    return q_lambda;
}

double taulambda(double nashe_lambda, double k) {
    double tau_lambda = 1 - ((k-1)/(k+1)) * pow(nashe_lambda, 2);
    return tau_lambda;
}

double pilambda(double nashe_lambda, double k) {
    double pi_lambda = pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)), (k/(k-1)));
    return pi_lambda;
}

double epslambda(double nashe_lambda, int k) {
    double eps_lambda = pow((1 - ((k - 1) / (k + 1)) * pow(nashe_lambda, 2)), (1 / (k - 1)));
    return eps_lambda;
}

double ylambda(double nashe_lambda, int k) {
    double y_lambda = pow(((k + 1) / 2), (1 / (k - 1))) * (nashe_lambda / (1 - ((k - 1) / (k + 1)) * pow(nashe_lambda, 2));
    return y_lambda;
}

// does not work
double flambda(double nashe_lambda, int k) {
    double f_lambda = (1 + pow(nashe_lambda, 2)) * pow((1 - ((k - 1) / (k + 1)) * pow(nashe_lambda, 2)), (1 / (k - 1));
    return f_lambda;
}

double rlambda(double nashe_lambda, int k) {
    double r_lambda = (1 - ((k - 1) / (k + 1)) * pow(nashe_lambda, 2)) / (1 + pow(nashe_lambda, 2));
    return r_lambda;
}

double zlambda(double nashe_lambda, int k) {
    double z_lambda = nashe_lambda + 1 / nashe_lambda;
    return z_lambda;
}

std::vector<double> lam_qlambda(double q_lambda, int k) {
    double a = 0;
    double b = 1;
    double c = 2.5;
    double d = 0.0000001;
    double epsln = 0.00001;
    double pogreshnost = 1;
    double nashe_lambda = a + d;
    
    if (q_lambda == 0) {
        q_lambda = d;
    }
    
    while (pogreshnost > epsln) {
        double F = ((k + 1) / (k - 1)) * pow(nashe_lambda, (k - 1)) - pow(nashe_lambda, (k + 1)) - 2 * pow(q_lambda, (k - 1)) / (k - 1);
        double F_1 = (k + 1) * (pow(nashe_lambda, (k - 2)) - pow(nashe_lambda, k));
        double F_2 = (k + 1) * (k - 2) * pow(nashe_lambda, (k - 3)) - k * (k + 1) * pow(nashe_lambda, k - 1);
        double obraz_x = nashe_lambda;
        nashe_lambda = nashe_lambda - F / F_1;
        pogreshnost = abs(obraz_x - nashe_lambda);
    }
    
    std::vector<double> rez;
    rez.push_back(round(abs(nashe_lambda), 2));
    
    nashe_lambda = b + d;
    pogreshnost = 1;
    
    while (pogreshnost > epsln) {
        double F = ((k + 1) / (k - 1)) * pow(nashe_lambda, (k - 1)) - pow(nashe_lambda, (k + 1)) - 2 * pow(q_lambda, (k - 1)) / (k - 1);
        double F_1 = (k + 1) * (pow(nashe_lambda, (k - 2)) - pow(nashe_lambda, k));
        double F_2 = (k + 1) * (k - 2) * pow(nashe_lambda, (k - 3)) - k * (k + 1) * pow(nashe_lambda, k - 1);
        double obraz_x = nashe_lambda;
        nashe_lambda = nashe_lambda - F / F_1;
        pogreshnost = abs(obraz_x - nashe_lambda);
    }
    
    rez.push_back(round(abs(nashe_lambda), 2));
    
    return rez;
}

double lam_taulambda(double tau_lambda, int k) {
    double nashe_lambda = pow(((1 - tau_lambda) * ((k + 1) / (k - 1))), 0.5);
    return nashe_lambda;
}

double lam_pilambda(double pi_lambda, int k) {
    double nashe_lambda = pow(((1 - pow(pi_lambda, ((k - 1) / k))) * ((k + 1) / (k - 1)), 0.5);
    return nashe_lambda;
}

double lam_epslambda(double eps_lambda, int k) {
    double nashe_lambda = pow(((1 - pow(pi_lambda, ((k - 1) / 1))) * ((k + 1) / (k - 1)), 0.5);
    return nashe_lambda;
}

std::vector<double> lam_ylambda(double y_lambda, double k) {
    std::vector<double> nashe_lambda;
    nashe_lambda.push_back(round((((0 - 1) * pow(((k + 1) / 2), (1 / (k - 1))) / (((k - 1) / (k + 1)) * y_lambda) + pow((pow(pow(((k + 1) / 2), (1 / (k - 1))) / (((k - 1) / (k + 1)) * y_lambda), 2) + 4 / ((k - 1) / (k + 1))), 0.5)) / 2), 2));
    //nashe_lambda.push_back(round((((0 - 1) * pow(((k + 1) / 2), (1 / (k - 1))) / (((k - 1) / (k + 1)) * y_lambda) - pow((pow(pow(((k + 1) / 2), (1 / (k - 1))) / (((k - 1) / (k + 1)) * y_lambda), 2) + 4 / ((k - 1) / (k + 1))), 0.5)) / 2), 2));
    return nashe_lambda;
}

