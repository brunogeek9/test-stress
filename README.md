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
#### Resultados obtidos inserindo antes da criação do índice 
1. tempo medido para a inserção de cada bloco de 100000

* inserindo 1: 117950.107ms
* inserindo 0: 123765.878ms
* inserindo 2: 128934.844ms
* inserindo 3: 134005.125ms
* inserindo 8: 139337.065ms
* inserindo 4: 144661.670ms
* inserindo 9: 146528.690ms
* inserindo 7: 147862.216ms
* inserindo 5: 149195.843ms
* inserindo 6: 150499.152ms
* total: 
2. tempo medido para a busca de aproximadamente 10% dos dados, pegando os valores entre 1 e 10 para o campo val1 foi
**2883.253ms**

3. tempo medido para a mesma busca, porem considerando apenas o atributo val1 e desconsiderando os outros foi **2320.601ms**
#### Resultados pós criação do indice
1. tempo medido para a inserção de cada bloco de 100000