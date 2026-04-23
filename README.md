# OpenMIA Developer Docs

[![Deploy MkDocs](https://github.com/<your-username>/dev.openmia.ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/<your-username>/dev.openmia.ai/actions/workflows/deploy.yml)

📖 **Live site**: [https://dev.openmia.ai](https://dev.openmia.ai)

---

## Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Start live-reload dev server
mkdocs serve

# Build static site (output → ./site)
mkdocs build
```

## Deployment

Deployment is fully automated via GitHub Actions:

1. Push to `main` branch
2. Action builds the site with `mkdocs build --strict`
3. Result is deployed to the `gh-pages` branch
4. GitHub Pages serves it at `dev.openmia.ai`

## Project Structure

```
.
├── docs/
│   ├── index.md          # Home page
│   ├── architecture.md   # System architecture
│   ├── api.md            # API reference
│   ├── demo.md           # Interactive demos
│   ├── css/custom.css    # Custom styles
│   ├── js/custom.js      # Custom scripts
│   └── assets/           # Static assets (images, videos)
├── mkdocs.yml            # MkDocs configuration
├── requirements.txt      # Python dependencies
├── CNAME                 # Custom domain for GitHub Pages
└── .github/workflows/
    └── deploy.yml        # CI/CD pipeline
```

## Custom Domain Setup

1. **DNS**: Add a `CNAME` record pointing `dev` → `<your-username>.github.io`
2. **GitHub**: Settings → Pages → Custom domain: `dev.openmia.ai` → Enforce HTTPS ✅
3. The `CNAME` file in this repo ensures the domain persists across deployments.
