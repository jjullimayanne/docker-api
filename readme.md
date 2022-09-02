## Estudo de Docker da Julli:

### O que é um Container?

Um container é um ambiente isolado utilizado para empacotar aplicações. Containers têm o objetivo de segregar e facilitar a portabilidade de aplicações em diferentes ambientes. A ideia é que cada container assuma apenas uma responsabilidade. Nos containers, você divide a responsabilidade isolando os processos de cada aplicação, garantindo assim que nenhum processo possa influenciar no funcionamento dos demais processos.

### O que é Docker?

Docker agrupa partes de softwares de um sistema de arquivo completo e que abrange todos os recursos necessários para a sua execução. Por isso, é uma plataforma de containers.

![Captura de Tela 2022-09-02 às 15 49 12](https://user-images.githubusercontent.com/79465402/188218645-13e2cf56-97ea-4b20-8c7c-407eff3aab8d.png)

### Porque um Container é mais leve?
![Captura de Tela 2022-09-02 às 15 51 22](https://user-images.githubusercontent.com/79465402/188218918-18f44d5d-263e-49b9-a191-36bc5f0dadd2.png)

#### Os containers funcionam como processos dentro do SO, desse modo sao mais leves, o consumo de recursos é menor, nao sendo uma virtualização completa. 


### Como garantem o isolamento?

#### Namespaces!

### UTS: Isolamento do kernel, age como se fosse outro host 
![Captura de Tela 2022-09-02 às 15 56 46](https://user-images.githubusercontent.com/79465402/188219651-035bef5c-1931-4ac9-a1fb-e20845839045.png)


### Outros 
![Captura de Tela 2022-09-02 às 15 55 03](https://user-images.githubusercontent.com/79465402/188219542-fdc15860-0ccb-440f-92c6-1a7e12ae035b.png)

### Como se dividem os recursos do sistema? 

#### Cgroups:
Garante que seja possível definir os consumos para cada container. 

![Captura de Tela 2022-09-02 às 15 57 21](https://user-images.githubusercontent.com/79465402/188219760-245fd71d-066d-4d29-b700-0f6f246d3f7f.png)



