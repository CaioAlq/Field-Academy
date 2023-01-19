#!/bin/bash

dir=/home/caio/Documentos/Terminal-Linux/FIELD_ACADEMY

if [ -d $dir ]; then
	read -p "Esta pasta já existe! Deseja criar um arquivo helloWorld.js? [y/n] " anwser

	if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
		touch $dir/helloWorld.js
		echo "Arquivo criado!"

		if [ -f $dir/helloWorld.js ]; then
		read -p "Deseja escrever algo dentro do arquivo helloWorld.js? [y/n] " anwser

			if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
				read -p ":" content
				echo "$content" > helloWorld.js
				echo "Conteudo inserido dentro do arquivo helloWorld.js"
			else 
				echo "O arquivo helloWorld.js esta sem conteudo"
			fi
		fi

	else
		echo "Arquivo não foi criado! Saindo..."
	fi
else
	read -p "Esta pasta não existe, deseja cria-la? [y/n] " anwser

	if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
		mkdir $dir
		echo "Pasta criada!"

		read -p "Deseja criar um arquivo helloWorld.js? [y/n] " anwser

		if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
			touch $dir/helloWorld.js
			echo "Arquivo criado!"

			if [ -f $dir/helloWorld.js ]; then
			read -p "Deseja escrever algo dentro do arquivo helloWorld.js? [y/n] " anwser

				if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
					read -p ":" content
					echo "$content" > helloWorld.js
					echo "Conteudo inserido dentro do arquivo helloWorld.js"
				else 
					echo "O arquivo helloWorld.js esta sem conteudo"
				fi
			fi

		else
			echo "Arquivo não foi criado!"
		fi
	else
		echo "Pasta não criada!"
	fi
fi

echo "Verificando se o node está instalado em sua maquina"

if [ command --version node &>/dev/null ] ; then
    read -p "Node não está instalado, deseja instalar [y/n]? " anwser

	if [[ "$anwser" == "y" || "$anwser" == "Y" ]]; then
		sudo apt-get install nodejs -y
		echo "Node Instalado!"
	else 
		echo "Node não instalado!"
	fi	
else
	echo "Node já esta instalado!"
fi

if [ -f $dir/helloWorld.js ]; then

	node $dir/helloWorld.js
	echo "Movendo o arquivo helloWorld.js para a pasta acima"
	mv $dir/helloWorld.js /home/caio/Documentos/Terminal-Linux

	echo "Copactando a pasta FIELD_ACADEMY"
	tar -czf $dir.tar.gz $dir

	echo "Removendo a pasta FIELD_ACADEMY"
	rm -d $dir
fi


