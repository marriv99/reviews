# **REVIEWS**

Durante le mie avventure nello sviluppo web e mobile, mi sono imbattuto nello stack MEAN, che sta per MongoDB, Express.js, Angular e Node.js. Tutte queste tecnologie lavorano insieme per permettere di creare un'applicazione con un frontend e un backend. L'applicazione è un semplice gestore di recensioni.

Per avviare il frontend dell'applicazione basta eseguire il comando:

```
ionic serve
```
<img width="365" alt="Progetto senza titolo3" src="https://user-images.githubusercontent.com/64645879/218723909-30a58165-462a-46db-892a-532efd2ba3ac.png">

L'applicazione inizialmente presentava il database MongoDb installato sulla macchina, ora con l'aiuto del file docker-compose vengono evocati due contenitori contemporaneamente, il contenitore del server express e il contenitore del database MongoDB. Prima di poter eseguire i contenitori va eseguita la build dei file docker con il comando seguente:

```
docker build -t node-docker .
docker-compose build
```

Una volta eseguita la build dei file, per eseguire i contenitori si usa il comando:

```
docker-compose up
```

Nel progetto, come tool di analisi statica, è stato inserito ESLint. Si tratta di un linter estendibile per JS, che segue lo standard ECMAScript. Inoltre, è stato aggiunto Prettier come formattatore di codice. Entrambi vengono eseguiti sulla pipeline del progetto dopo ogni commit.
