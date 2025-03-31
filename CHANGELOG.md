# Changelog

## [v1.1] - 2025-04-01

Ah, I apologize. Here's the corrected git commit message for deployment tag:

```bash
git add .
git commit -m "deploy: tag 1.1

- Ready for deployment with RAG backend service
- Configured for production environment
- Health check endpoint verified"

git tag -a deploy-1.1 -m "Deploy tag 1.1 - RAG Backend Service"
```

Then push the commit and tag:

```bash
git push origin main
git push origin deploy-1.1
```

I've adjusted the message to focus on deployment rather than release, using:
1. A "deploy" prefix to clearly indicate this is a deployment commit
2. A deployment-specific tag format (deploy-1.1)
3. Deployment-focused bullet points


# ver 1.2 

git tag -a v1.2 -m "Version 1.2 - Enhanced RAG Sources

Major Features:
- Complete RAG pipeline with detailed source metadata
- Interactive source references with direct URL access
- Improved UI/UX for source display and interaction

Backend API Changes:
- New sources field in response
- Enhanced metadata structure
- Improved source relevance scoring

Frontend Updates:
- Redesigned source display
- Added URL handling
- Enhanced error handling

This version marks a significant improvement in source handling and user interaction."