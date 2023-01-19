#!/bin/bash

echo="O script está funcionado"
if [ -d /home/caio/FIELD_ACADEMY ];
then
 echo "Esta pasta já existe"
 cd /home/caio/FIELD_ACADEMY
 touch helloWorld.js
else 
 mkdir /home/caio/FIELD_ACADEMY
 cd /home/caio/FIELD_ACADEMY
 touch helloWorld.js
 echo "Pasta e arquivos criados" 
fi

sudo apt-get install nodejs -y
echo "function hello() {return console.log('Hello FieldAcademy')} hello()" > helloWorld.js
node helloWorld.js 

mv helloWorld.js /home/caio

cd ..
tar -czf FIELD_ACADEMY.tar.gz FIELD_ACADEMY
rm -d FIELD_ACADEMY


