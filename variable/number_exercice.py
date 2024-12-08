# créer un programme qui permet d'additioner 2 nombres  en tapant d'abord
# le premier nombre puis le deuxieme et cela affichera l'addition des 2 nombre

#Bonus : -, *, /, %, **, nombre avec virgules

premier_input = input("entrez le nombre 1 : ")
deuxieme_input = input("entrez le nombre 2 : ")

premier_nombre : int = int(premier_input)
deuxieme_nombre : int = int(deuxieme_input)

resultat : int = premier_nombre + deuxieme_nombre

print( "le resultat est ",resultat )