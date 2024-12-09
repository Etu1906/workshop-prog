# workshop-prog

**workshop-prog** est un projet conçu pour aider les débutants à s'initier à la programmation en utilisant Python. Ce dépôt propose des exercices pratiques et des quiz interactifs pour explorer les concepts fondamentaux de la programmation.

## Structure du dépôt

Le dépôt est organisé comme suit :

- **`index.html`**  
  À la racine, ce fichier est le point d'entrée principal. En ouvrant ce fichier dans un navigateur, vous accéderez à une interface avec plusieurs boutons qui redirigent vers les quiz.

- **Dossiers thématiques**  
  Chaque dossier contient des exercices pratiques et des quiz sur des concepts spécifiques :
  - **`print`** : Découverte de la fonction `print` et apprentissage de l'affichage de messages à l'écran.
  - **`variable`** : Introduction aux variables, types de données et manipulation de valeurs.
  - **`condition`** : Compréhension des structures conditionnelles (`if`, `else`, etc.).
  - **`boucle`** : Exploration des boucles (`for`, `while`) pour automatiser des tâches répétitives.

## Comment utiliser le projet ?

1. **Téléchargez ou clonez le dépôt :**

   ```bash
   git clone https://github.com/Etu1906/workshop-prog.git
   ```

2. **Ouvrez le fichier `index.html` dans un navigateur web :**

   - Vous verrez une page interactive avec des boutons pour accéder aux différents quiz.

3. **Explorez les exercices et quiz :**
   - Naviguez dans les dossiers thématiques (`print`, `variable`, etc.) pour pratiquer les concepts et tester vos connaissances.

## Prérequis

- **Un navigateur web** : Pour ouvrir et utiliser l'interface HTML (`index.html`).
- **Python** : Assurez-vous d'avoir Python (version 3) installé sur votre machine pour exécuter les scripts des exercices pratiques. Vous pouvez vérifier la version installée avec :
  ```bash
  python --version
  ```
- **Installation de MyPy** :  
  MyPy est un outil optionnel mais recommandé pour analyser et vérifier les types de données dans votre code Python. Il vous aide à repérer les erreurs potentielles avant même d'exécuter le code. Installez-le en utilisant la commande suivante :
  ```bash
  pip install mypy
  ```
- **Extension MyPy pour VSCode** :  
  Si vous utilisez VSCode, installez l'extension [Mypy](https://marketplace.visualstudio.com/items?itemName=matangover.mypy) pour bénéficier d'une analyse de type en temps réel directement dans votre éditeur.

### Pourquoi utiliser MyPy ?

L'intégration de MyPy dans vos exercices vous permet de :

- Vérifier que vos variables, fonctions, et retours de fonctions respectent les types attendus.
- Repérer les incohérences dans votre code avant l'exécution.
- Améliorer la lisibilité et la robustesse de vos scripts Python.

### Exemple d'utilisation de MyPy

Ajoutez des annotations de type dans votre code, comme dans cet exemple :

```python
def addition(a: int, b: int) -> int:
    return a + b
```

Puis exécutez MyPy pour vérifier les types :

```bash
mypy chemin/vers/votre/script.py
```

### Résolution des erreurs de type

Si MyPy détecte une erreur, il vous indiquera la ligne concernée et le problème. Voici un exemple de sortie :

```bash
script.py:3: error: Argument 1 to "addition" has incompatible type "str"; expected "int"
```

Corrigez l'erreur en vous assurant que les types d'arguments ou de retours sont conformes aux annotations.

## Objectif du projet

Ce projet a été conçu pour :

- Fournir une plateforme simple et interactive pour apprendre les bases de la programmation.
- Encourager les débutants à pratiquer activement à travers des exercices et des quiz.
- Démystifier des concepts fondamentaux comme les variables, les conditions, et les boucles.
