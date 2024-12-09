#les nombres pairs entre 2 nombres
#bonus : vérifier si min est bien inferieur à max si non alors, afficher erreur
min_str : str = input( "entrez un nombre min : " )
max_str : str = input( "entrez un nombre max : " )

min_number : int = int( min_str )
max_number : int = int( max_str )

if min_number <= max_number:
  print( "les nombres pairs entre ",min_number, " et ", max_number )
  counter = min_number
  while counter <= max_number:
    if counter % 2 == 0:
      print( counter )
    counter += 1

else:
  print( " Erreur : ",min_number," supérieur à ",max_number)
