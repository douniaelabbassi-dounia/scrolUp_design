# 🚀 Guide de Déploiement Vercel - ScrolUp

## ✅ Checklist Pré-Déploiement

Avant de déployer, assurez-vous que :

- [x] Le fichier `vercel.json` est présent à la racine
- [x] Le fichier `.gitignore` est configuré
- [x] Le `package.json` contient les scripts `build` et `start`
- [x] Le build local fonctionne (`npm run build`)
- [x] Les dépendances sont à jour

## 🌐 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. **Connectez-vous à Vercel**
   - Allez sur [https://vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importez le projet**
   - Cliquez sur "Add New Project"
   - Sélectionnez le repository : `douniaelabbassi-dounia/scrolUp_design`
   - Cliquez sur "Import"

3. **Configuration (automatique)**
   - **Framework Preset** : Vite (détecté automatiquement)
   - **Build Command** : `npm run build` (déjà configuré)
   - **Output Directory** : `dist` (déjà configuré)
   - **Install Command** : `npm install` (déjà configuré)

4. **Déployez**
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes
   - Votre app est en ligne ! 🎉

### Option 2 : Via Vercel CLI

```bash
# 1. Installer Vercel CLI globalement
npm install -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Déployer en mode preview
vercel

# 4. Déployer en production
vercel --prod
```

## 🔧 Configuration Avancée

### Variables d'Environnement

Si vous avez besoin d'ajouter des variables d'environnement :

1. Dans le dashboard Vercel, allez dans **Settings** → **Environment Variables**
2. Ajoutez vos variables (préfixées par `VITE_`)
3. Exemple :
   ```
   VITE_API_URL=https://api.scrolup.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
   ```

### Domaine Personnalisé

1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

## 🔄 Déploiement Automatique

Vercel déploie automatiquement :
- **Production** : À chaque push sur la branche `main`
- **Preview** : À chaque pull request

## 📊 Monitoring

Après le déploiement, vous pouvez :
- Voir les logs en temps réel
- Analyser les performances
- Consulter les analytics
- Gérer les versions

## 🐛 Dépannage

### Erreur de build

```bash
# Testez le build localement
npm run build

# Vérifiez les logs Vercel
vercel logs
```

### Problème de routing (404)

Le fichier `vercel.json` contient déjà la configuration pour gérer le routing SPA :

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Cache des assets

Les assets sont automatiquement cachés pendant 1 an grâce à la configuration dans `vercel.json`.

## 📱 Tester le Déploiement

Après le déploiement :

1. Ouvrez l'URL fournie par Vercel
2. Testez la navigation entre les écrans
3. Vérifiez le mode sombre/clair
4. Testez sur mobile et desktop

## 🎯 URLs Importantes

- **Dashboard Vercel** : https://vercel.com/dashboard
- **Documentation** : https://vercel.com/docs
- **Support** : https://vercel.com/support

---

**Prêt à déployer ? Cliquez sur le bouton ci-dessous !**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/douniaelabbassi-dounia/scrolUp_design)

