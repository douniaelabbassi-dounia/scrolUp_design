# 🔧 Configuration Git pour ScrolUp

## 📋 Commandes Git pour Pousser sur GitHub

Si vous n'avez pas encore initialisé Git ou connecté le dépôt :

### 1. Initialiser Git (si nécessaire)

```bash
git init
```

### 2. Ajouter le remote GitHub

```bash
git remote add origin https://github.com/douniaelabbassi-dounia/scrolUp_design.git
```

### 3. Vérifier le remote

```bash
git remote -v
```

### 4. Ajouter tous les fichiers

```bash
git add .
```

### 5. Créer le premier commit

```bash
git commit -m "🚀 Préparation pour déploiement Vercel

- Ajout de vercel.json avec configuration optimale
- Ajout de .gitignore complet
- Optimisation de package.json avec scripts build/preview/start
- Mise à jour de vite.config.ts (outDir: dist)
- Ajout de .env.example pour les variables d'environnement
- Mise à jour complète du README.md avec instructions de déploiement
- Suppression des fichiers dupliqués dans /src
- Ajout de tsconfig.json et tsconfig.node.json à la racine
- Ajout de DEPLOYMENT.md avec guide détaillé
- Build testé et fonctionnel ✅"
```

### 6. Pousser sur GitHub

```bash
# Si c'est la première fois
git branch -M main
git push -u origin main

# Pour les prochaines fois
git push
```

## 🔄 Workflow Git Quotidien

### Ajouter des modifications

```bash
git add .
git commit -m "Description de vos changements"
git push
```

### Vérifier le statut

```bash
git status
```

### Voir l'historique

```bash
git log --oneline
```

## 🌿 Branches

### Créer une nouvelle branche

```bash
git checkout -b feature/nom-de-la-feature
```

### Pousser une branche

```bash
git push -u origin feature/nom-de-la-feature
```

### Revenir à main

```bash
git checkout main
```

## 🔐 Authentification GitHub

Si vous avez des problèmes d'authentification :

### Option 1 : HTTPS avec Personal Access Token

1. Allez sur GitHub → Settings → Developer settings → Personal access tokens
2. Générez un nouveau token avec les permissions `repo`
3. Utilisez le token comme mot de passe lors du push

### Option 2 : SSH

```bash
# Générer une clé SSH
ssh-keygen -t ed25519 -C "votre-email@example.com"

# Ajouter la clé à l'agent SSH
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copier la clé publique
cat ~/.ssh/id_ed25519.pub

# Ajouter la clé sur GitHub → Settings → SSH and GPG keys
```

Puis changez le remote :

```bash
git remote set-url origin git@github.com:douniaelabbassi-dounia/scrolUp_design.git
```

## ✅ Checklist avant de pousser

- [ ] `npm run build` fonctionne sans erreur
- [ ] Pas de fichiers sensibles (.env, secrets, etc.)
- [ ] .gitignore est à jour
- [ ] Message de commit descriptif
- [ ] Code testé localement

## 🚨 En cas de problème

### Annuler le dernier commit (avant push)

```bash
git reset --soft HEAD~1
```

### Annuler les modifications non commitées

```bash
git checkout -- .
```

### Forcer le push (ATTENTION : dangereux)

```bash
git push --force
```

## 📚 Ressources

- [Documentation Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Une fois poussé sur GitHub, Vercel détectera automatiquement les changements et redéploiera l'application ! 🎉**

