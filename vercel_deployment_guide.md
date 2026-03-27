# Vercel Deployment Guide for Subscribely

Your project is now configured as a monorepo for Vercel. Follow these steps to complete the deployment.

## 1. Prerequisites
- A **GitHub** account with your code pushed to a repository.
- A **Vercel** account connected to your GitHub.
- An **External Database** (Vercel Postgres, Supabase, Neon, etc.) since SQLite won't work in production.

## 2. Setting Up Vercel
1.  In your Vercel Dashboard, click **'Add New'** > **'Project'**.
2.  Import your **Subscribely** repository.
3.  **Root Directory**: Leave as `./` (the default).
4.  **Framework Preset**: Select **'Other'** or let Vercel auto-detect.

## 3. Environment Variables
In the **'Environment Variables'** section of the Vercel project settings, add the following:

| Key | Value | Notes |
| :--- | :--- | :--- |
| `DJANGO_SECRET_KEY` | *Your Secret Key* | Generate a new long random string for production. |
| `DJANGO_DEBUG` | `False` | Ensure this is set to False in production. |
| `DJANGO_ALLOWED_HOSTS` | `.vercel.app,yourdomain.com` | Your Vercel URL and custom domain. |
| `DATABASE_URL` | *Your Database URL* | The connection string for your external PostgreSQL database. |
| `VITE_API_BASE_URL` | `https://your-project.vercel.app/api/` | Your Vercel backend URL. |

## 4. Database Setup
Since SQLite is stateless on Vercel, you'll need to update your `DATABASES` setting in `settings.py` to use `dj-database-url` or a similar tool to load your `DATABASE_URL` in production.

```python
import dj_database_url
DATABASES = {
    'default': dj_database_url.config(default='sqlite:///db.sqlite3')
}
```

## 5. Deployment
- Push your changes to GitHub. Vercel will automatically detect the `vercel.json` and start building both the frontend and backend.
- Check the **'Deployments'** tab on Vercel to monitor progress.

> [!IMPORTANT]
> - Ensure your `frontend` build command is set to `npm run build` and the output directory is `dist`.
> - The `backend` will be handled by the `@vercel/python` runtime.
