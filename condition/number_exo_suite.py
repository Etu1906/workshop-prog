#suite de l'execrice sur les nombres
#cette fois-ci, on va faire en sorte de pouvoir choisir quel est l'operation que l'on veux realiser
# +, -

#bonus : , *, /, %, ** , verifier si les 2 chiffres ou l'operateur entré ne sont pas vide

premier_input = input("entrez le nombre 1 : ")
deuxieme_input = input("entrez le nombre 2 : ")
operation_input = input("entrez l'operateur (+,-,*,/,%,**) : ")

condition : bool = len(premier_input) != 0 and len(deuxieme_input) != 0 and len(operation_input) != 0

if( condition ):
  premier_nombre : int = int(premier_input)
  deuxieme_nombre : int = int(deuxieme_input)

  resultat : float = 0
  if( operation_input == "+" ):
    resultat = premier_nombre + deuxieme_nombre
  elif( operation_input == "-" ):
    resultat = premier_nombre - deuxieme_nombre
  elif( operation_input == "*" ):
    resultat = premier_nombre * deuxieme_nombre
  elif( operation_input == "/" ):
    resultat = premier_nombre / deuxieme_nombre
  elif( operation_input == "%" ):
    resultat = premier_nombre % deuxieme_nombre
  elif( operation_input == "**" ):
    resultat = premier_nombre ** deuxieme_nombre

  print( "le resultat est ",resultat )
else:
  print( "les 2 nombres et l'opérateur ne doivent pas etre vide" )