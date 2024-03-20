def Mlambda(nashe_lambda,k):
	M_lambda=pow(((2/(k+1))*pow(nashe_lambda,2)/(1-((k-1)/(k+1))*pow(nashe_lambda,2))),0.5)
	return round(M_lambda,4)
def qlambda(nashe_lambda,k):
	q_lambda=nashe_lambda*pow(((k+1)/2),(1/(k-1)))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
	return q_lambda
def taulambda(nashe_lambda,k):
	tau_lambda=1-((k-1)/(k+1))*pow(nashe_lambda,2)
	return tau_lambda
def pilambda(nashe_lambda,k):
	pi_lambda=pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(k/(k-1)))
	return pi_lambda
def epslambda(nashe_lambda,k):
	eps_lambda=pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
	return eps_lambda
def ylambda(nashe_lambda,k):
	y_lambda=pow(((k+1)/2),(1/(k-1)))*(nashe_lambda/(1-((k-1)/(k+1))*pow(nashe_lambda,2)))
	return y_lambda
	# does not work
def flambda(nashe_lambda,k):
	f_lambda=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
	return f_lambda
def rlambda(nashe_lambda,k):
	r_lambda=(1-((k-1)/(k+1))*pow(nashe_lambda,2))/(1+pow(nashe_lambda,2))
	return r_lambda
def zlambda(nashe_lambda,k):
	z_lambda=nashe_lambda+1/nashe_lambda
	return z_lambda
######################################################
def lam_qlambda(q_lambda,k):
	a=0
	b=1
	c=2.5
	d=0.0000001
	epsln=0.00001
	pogreshnost=1
	nashe_lambda=a+d
	if q_lambda==0:
		q_lambda==d
	while pogreshnost>epsln:
		F=((k+1)/(k-1))*pow(nashe_lambda,(k-1))-pow(nashe_lambda,(k+1))-2*pow(q_lambda,(k-1))/(k-1)
		F_1=(k+1)*(pow(nashe_lambda,(k-2))-pow(nashe_lambda,k))
		F_2=(k+1)*(k-2)*pow(nashe_lambda,(k-3))-k*(k+1)*pow(nashe_lambda,k-1)
		obraz_x=nashe_lambda
		nashe_lambda=nashe_lambda-F/F_1
		pogreshnost=abs(obraz_x-nashe_lambda)
	rez=[]
	rez.append(round(abs(nashe_lambda),2))
	nashe_lambda=b+d
	pogreshnost=1
	while pogreshnost>epsln:
		F=((k+1)/(k-1))*pow(nashe_lambda,(k-1))-pow(nashe_lambda,(k+1))-2*pow(q_lambda,(k-1))/(k-1)
		F_1=(k+1)*(pow(nashe_lambda,(k-2))-pow(nashe_lambda,k))
		F_2=(k+1)*(k-2)*pow(nashe_lambda,(k-3))-k*(k+1)*pow(nashe_lambda,k-1)
		obraz_x=nashe_lambda
		nashe_lambda=nashe_lambda-F/F_1
		pogreshnost=abs(obraz_x-nashe_lambda)
	rez.append(round(abs(nashe_lambda),2))
	return rez
def lam_taulambda(tau_lambda,k):
	nashe_lambda=pow(((1-tau_lambda)*((k+1)/(k-1))),0.5)
	return nashe_lambda
def lam_pilambda(pi_lambda,k):
	nashe_lambda=pow(((1-pow(pi_lambda,((k-1)/k)))*((k+1)/(k-1))),0.5)
	return nashe_lambda
def lam_epslambda(eps_lambda,k):
	nashe_lambda=pow(((1-pow(pi_lambda,((k-1)/1)))*((k+1)/(k-1))),0.5)
	return nashe_lambda
def lam_ylambda(y_lambda,k):
	nashe_lambda=[]
	nashe_lambda.append(round((((0-1)*pow(((k+1)/2),(1/(k-1)))/(((k-1)/(k+1))*y_lambda)+pow((pow(pow(((k+1)/2),(1/(k-1)))/(((k-1)/(k+1))*y_lambda),2)+4/((k-1)/(k+1))),0.5))/2),2))
	#nashe_lambda.append(round((((0-1)*pow(((k+1)/2),(1/(k-1)))/(((k-1)/(k+1))*y_lambda)-pow((pow(pow(((k+1)/2),(1/(k-1)))/(((k-1)/(k+1))*y_lambda),2)+4/((k-1)/(k+1))),0.5))/2),2))
	return nashe_lambda
def lam_flambda(f_lambda,k):

	a=0
	c=1
	d=0.000001
	epsln=0.00001
	pogreshnost=1

	FF=[]
	rez=[]
	if f_lambda==1:
		rez.append(0)

	nashe_lambda=1
	F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
	if f_lambda>F:
		raznitza=abs(f_lambda-F)
		rez.append('значение фукции больше максимального на')
		rez.append(raznitza)
		rez.append('при заданном значении k')
	F_2=1
	nashe_lambda=0.00001
	while abs(F_2)>0.00001:
		F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
		nashe_lambda=nashe_lambda+0.00001
	b=nashe_lambda
	F=5
	nashe_lambda=1.40001
	while abs(F)>1.00001:
		F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
		nashe_lambda=nashe_lambda+0.00001
	e=nashe_lambda

	p=0
	m=0
	n=0

	nashe_lambda=a+d
	F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
	F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
	F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
	FF.append(F)

	nashe_lambda=b-d
	F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
	F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
	F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
	FF.append(F)


	if FF[0]*FF[1]<0:
		p=p+1
		pogreshnost=1
		nashe_lambda=b-d
		while pogreshnost>epsln:
			F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
			F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
			F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
			obraz_x=nashe_lambda
			nashe_lambda=nashe_lambda-F/F_1
			pogreshnost=abs(obraz_x-nashe_lambda)
		rez.append(round(abs(nashe_lambda),2))
		pogreshnost=1
		nashe_lambda=e-d
		while pogreshnost>epsln:
			F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
			F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
			F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
			obraz_x=nashe_lambda
			nashe_lambda=nashe_lambda-F/F_1
			pogreshnost=abs(obraz_x-nashe_lambda)
		rez.append(round(abs(nashe_lambda),2))
	else:
		FF.clear()
		nashe_lambda=b+d
		F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
		F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
		F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
		FF.append(F)
		nashe_lambda=c-d
		F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
		F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
		F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
		FF.append(F)
		if FF[0]*FF[1]<0:
			m=m+1
			pogreshnost=1
			nashe_lambda=b+d
			while pogreshnost>epsln:
				F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
				F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
				F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
				obraz_x=nashe_lambda
				nashe_lambda=nashe_lambda-F/F_1
				pogreshnost=abs(obraz_x-nashe_lambda)
			rez.append(round(abs(nashe_lambda),2))
			pogreshnost=1
			nashe_lambda=e-d
			while pogreshnost>epsln:
				F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
				F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
				F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
				obraz_x=nashe_lambda
				nashe_lambda=nashe_lambda-F/F_1
				pogreshnost=abs(obraz_x-nashe_lambda)
			rez.append(round(abs(nashe_lambda),2))
		else:
			n=n+1
			nashe_lambda=e-d
			pogreshnost=1
			while pogreshnost>epsln:
				F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-f_lambda
				F_1=2*nashe_lambda*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-(1+pow(nashe_lambda,2))*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda
				F_2=2*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))-2*nashe_lambda*(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1))*nashe_lambda*2-(1+pow(nashe_lambda,2))*((1/(k-1))*((1/(k-1))-1)*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-2))*2*((k-1)/(k+1))*nashe_lambda*2*((k-1)/(k+1))*nashe_lambda+(1/(k-1))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),((1/(k-1))-1))*2*((k-1)/(k+1)))
				obraz_x=nashe_lambda
				nashe_lambda=nashe_lambda-F/F_1
				pogreshnost=abs(obraz_x-nashe_lambda)
			rez.append(round(abs(nashe_lambda),2))
	nashe_lambda=1
	F=(1+pow(nashe_lambda,2))*pow((1-((k-1)/(k+1))*pow(nashe_lambda,2)),(1/(k-1)))
	if f_lambda>F:
		rez.clear()
		raznitza=abs(f_lambda-F)
		rez.append('значение функции больше максимального на')
		rez.append(raznitza)
		rez.append('при заданном значении k')
	if len(rez)>1:
		if rez[0]==rez[1]:
			rez.pop()
	return rez#,p,m,n
def lam_rlambda(r_lambda,k):
	nashe_lambda=pow(((1-r_lambda)/(r_lambda+((k-1)/(k+1)))),0.5)
	return round(nashe_lambda,2)
def lam_zlambda(z_lambda,k):
	nashe_lambda=[]
	nashe_lambda.append(round((z_lambda+pow(pow(z_lambda,2)-4,0.5))/2,2))
	nashe_lambda.append(round((z_lambda-pow(pow(z_lambda,2)-4,0.5))/2,2))
	return nashe_lambda
def lam_Mlambda(M_lambda,k):
	nashe_lambda=pow((((k+1)/2)*pow(M_lambda,2)/(1+((k-1)/2)*pow(M_lambda,2))),0.5)
	return round(nashe_lambda,2)
if __name__=="__main__":
    print('hello')
# функция  у от лямбда недоделана, надо разобраться
# с интервалами знакопостоянства производных
#а именно принять внутри функции те значения в которых
#производные равны нулю(точки перегиба)
#и разбивая с помощью условий по концам на интервалы
#брать значения лямбд из соответсвующего интервала
#должно получиться порядка четырех интервалов
# от 0 до 0.481418, от 0.481418 до 1, от 1 до 1.5033
# и от последнего до конца, но необходимо учесть что
#эти цифры зависят от к и необходимо продумать эту зависимость
