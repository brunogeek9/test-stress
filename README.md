# test-stress

## Project setup
```
npm install
```

### Running in insert lote mode
```
npm start_lot
```

### Running in unique data insert mode
```
npm start_unique
```
### Sobre os resultados obtidos
#### Resultados obtidos bloco antes da criação do índice 
1. tempo medido para a inserção de cada bloco de 100000

* bloco 1: 117950.107ms
* bloco 0: 123765.878ms
* bloco 2: 128934.844ms
* bloco 3: 134005.125ms
* bloco 8: 139337.065ms
* bloco 4: 144661.670ms
* bloco 9: 146528.690ms
* bloco 7: 147862.216ms
* bloco 5: 149195.843ms
* bloco 6: 150499.152ms
* total: 
2. tempo medido para a busca de aproximadamente 10% dos dados, pegando os valores entre 1 e 10 para o campo val1 foi
**2883.253ms**

3. tempo medido para a mesma busca, porem considerando apenas o atributo val1 e desconsiderando os outros foi **2320.601ms**
#### Resultados pós criação do indice
1. tempo medido para a busca de aproximadamente 10% dos dados, pegando os valores entre 1 e 10 para o campo val1 foi **2503.043ms**

2. tempo medido para a mesma busca, porem considerando apenas o atributo val1 e desconsiderando os outros foi **1927.784ms**
3. tempo medido para a inserção de cada bloco de 100000
* bloco 1: 112028.773ms
* bloco 3: 118661.652ms
* bloco 0: 124851.325ms
* bloco 2: 130838.323ms
* bloco 7: 136722.725ms
* bloco 4: 142943.421ms
* bloco 8: 144966.334ms
* bloco 9: 146312.035ms
* bloco 5: 147725.709ms
* bloco 6: 149098.300ms
