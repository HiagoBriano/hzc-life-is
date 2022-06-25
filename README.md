## Comando para executar o docker

docker image build -t hzc-life-is:v1 .

docker run -dit -p 3010:80 --name hzc-life-is hzc-life-is:v1