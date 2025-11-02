# 📱 ScrolUp - Mobile App Design

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/douniaelabbassi-dounia/scrolUp_design)

Une application mobile moderne pour découvrir les meilleures publicités du monde entier. Conçue avec React, TypeScript et Vite.

> 🎨 **Design Figma original** : [Mobile App Design for ScrolUp](https://www.figma.com/design/zkKgoVXYzYKBl5lfX23H46/Mobile-App-Design-for-ScrolUp)

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- npm, yarn ou pnpm

### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/douniaelabbassi-dounia/scrolUp_design.git
cd scrolUp_design

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Crée le build de production
npm run preview  # Prévisualise le build de production
npm start        # Alias pour preview
```

---

## 🌐 Déploiement sur Vercel

### Méthode 1 : Déploiement automatique (Recommandé)

1. **Connectez-vous à Vercel** : [https://vercel.com](https://vercel.com)
2. **Importez le projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez "Import Git Repository"
   - Collez l'URL : `https://github.com/douniaelabbassi-dounia/scrolUp_design`
3. **Configuration automatique** :
   - Vercel détectera automatiquement qu'il s'agit d'un projet Vite
   - Les paramètres par défaut sont déjà configurés dans `vercel.json`
4. **Déployez** :
   - Cliquez sur "Deploy"
   - Votre application sera en ligne en quelques minutes ! 🎉

### Méthode 2 : Déploiement via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration Vercel

Le fichier `vercel.json` est déjà configuré avec :
- ✅ Build command : `npm run build`
- ✅ Output directory : `dist`
- ✅ Framework : Vite
- ✅ Rewrites pour SPA (Single Page Application)
- ✅ Cache optimisé pour les assets

### Variables d'environnement (optionnel)

Si vous avez besoin de variables d'environnement :

1. Copiez `.env.example` vers `.env.local`
2. Remplissez vos valeurs
3. Dans Vercel Dashboard :
   - Allez dans "Settings" → "Environment Variables"
   - Ajoutez vos variables (préfixées par `VITE_`)

---

## 🛠️ Stack technique

- **Framework** : React 18
- **Build Tool** : Vite 6
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **UI Components** : Radix UI
- **Icons** : Lucide React
- **Charts** : Recharts
- **Themes** : next-themes

---

## 📁 Structure du projet

```
scrolUp_design/
├── src/
│   ├── components/      # Composants React
│   │   ├── screens/     # Écrans de l'app
│   │   ├── ui/          # Composants UI réutilisables
│   │   └── ...
│   ├── contexts/        # Contextes React (Theme, etc.)
│   ├── assets/          # Images et ressources
│   ├── styles/          # Styles globaux
│   ├── App.tsx          # Composant principal
│   └── main.tsx         # Point d'entrée
├── public/              # Fichiers statiques
├── vercel.json          # Configuration Vercel
├── vite.config.ts       # Configuration Vite
└── package.json         # Dépendances
```

---

## 🎨 Fonctionnalités

- ✨ Interface mobile-first (390x844px)
- 🌓 Mode sombre/clair
- 📱 Navigation fluide entre écrans
- 🎯 Feed de publicités (style TikTok)
- 👤 Profil utilisateur
- 💬 Messagerie
- 🔔 Notifications
- ⚙️ Paramètres

---

## 📝 Licence

Ce projet est privé et appartient à ScrolUp.

---

## 🤝 Contribution

Pour contribuer au projet :

1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📧 Contact

Pour toute question : [GitHub Issues](https://github.com/douniaelabbassi-dounia/scrolUp_design/issues)

---

**Fait avec ❤️ pour ScrolUp**
