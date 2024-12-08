#simuler l'envoie d'un mail
# les données à entrées sont le mail du destinataire, l'objet et le contenu du mail
#résultat :
# l'email a été envoyé
# vers :
# objet :
#  contenu...

destinataire : str = input("mail du destinataire : ")
objet_du_mail : str = input("l'objet du mail : ")
contenu : str = input("contenu : ")

mail_envoye = "l'email a été envoyé"
resultat_destinataire : str = "vers :" + destinataire
resultat_objet : str = "objet : "+objet_du_mail
resultat_contenu : str = contenu

print()
print(mail_envoye)
print(resultat_destinataire)
print(resultat_objet)
print(resultat_contenu)