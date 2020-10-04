## POC PARA AUTOMATIZAÇÃO DE DEPLOY AWS EC2

- Instalar aws-cli
```shell
  $ sudo apt install awscli
```

- Instalar docker-machine
```shell
  $ base=https://github.com/docker/machine/releases/download/v0.16.0 && curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine && sudo mv /tmp/docker-machine /usr/local/bin/docker-machine && chmod +x /usr/local/bin/docker-machine
```

- Configurar ambiente para usar aws-cli
```shell
  $ aws configure 
```
  *** Necessário informar AWS Access KEY, AWS Secret Key e a região que a instancia irá usar como padrão**

- Criar uma instancia EC2 via terminal
```shell
  $ docker-machine create --driver amazonec2 <nome da instancia a ser criada>
```

- Apontar docker-machine para servidor criado
```shell
  $ eval $(docker-machine env <nome da instancia criada>) 
```

- Subir o conteiner
```shell
  $ docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --remove-orphans --force-recreate
```
