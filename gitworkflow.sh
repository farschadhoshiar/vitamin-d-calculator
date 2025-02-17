# Immer im dev Branch arbeiten
git checkout dev

# Für neue Features
git checkout -b feature/name-des-features

# Nach Fertigstellung
git checkout dev
git merge feature/name-des-features
git push origin dev

# Für Release
git checkout main
git merge dev
git push origin main