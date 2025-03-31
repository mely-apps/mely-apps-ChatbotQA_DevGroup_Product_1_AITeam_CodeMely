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


+++ Update Avatar dep cho ca team AI Production

---
deploy backend: sau 3h hôm tuần trước. 
deploy sau gần 3h rưỡi 
22h30 31/3 - 2h 01/04
deploy backend: sau 3h hôm tuần trước. 
deploy sau gần 3h rưỡi 
---
22h30 31/3 - 2h 01/04
Tổng 8h cho deploy version 1.2

git tag -a v1.2 -m "Version 1.2 - Enhanced RAG Sources & Team UI

Timeline:
- Backend deploy: 22:30 31/03 - 02:00 01/04 (3.5h)
- Frontend deploy: Total 8h for version 1.2

Major Features:
1. Backend Enhancements:
- Complete RAG pipeline with detailed source metadata
- Enhanced metadata structure for sources
- Improved source relevance scoring
- New sources field in API response
- Health check and error handling improvements

2. Frontend Updates:
- Redesigned source display and interaction
- Added direct URL access for sources
- Enhanced error handling
- Added Team Members section with:
  + Professional avatars for AI Production team
  + Integrated social links (LinkedIn, GitHub, Facebook)
  + Responsive and interactive UI components
  + Dark/Light mode support

3. UI/UX Improvements:
- Interactive source references
- Better visual hierarchy
- Enhanced mobile responsiveness
- Improved accessibility

Technical Details:
- Backend: RAG optimization
- Frontend: New TeamMembers component
- API: Enhanced response structure
- Styling: TailwindCSS improvements

This version marks significant improvements in both source handling and team presentation."

# Push tag
git push origin v1.2