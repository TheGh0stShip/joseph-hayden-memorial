# Joseph S. Hayden Memorial

A dependency-free static memorial site for `twmdpb.com`.

## Test locally

From this folder, run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`. Stop the server with `Ctrl+C`.

## Deploy to Azure App Service

### Windows App Service (recommended for these files)

1. In the Azure portal, open the App Service currently connected to `twmdpb.com`.
2. Back up the current site if it contains anything that must be preserved.
3. Zip the **contents** of this folder so `index.html` is at the root of the zip.
4. Open **Advanced Tools** → **Go** → **Debug console** → **CMD** → `site/wwwroot`.
5. Remove or replace the old site files, then drag the zip into `site/wwwroot` and extract it there. Alternatively, deploy the zip using Deployment Center, Azure CLI, or your existing CI/CD workflow.
6. Restart the App Service and open `https://twmdpb.com` in a private browser window.

The included `web.config` configures WebP support and basic security headers for IIS.

### Azure CLI zip deployment

After creating the zip, sign in and run:

```powershell
az login
az webapp deploy --resource-group YOUR_RESOURCE_GROUP --name YOUR_APP_SERVICE_NAME --src-path .\joseph-hayden-memorial.zip --type zip
```

Replace the two uppercase placeholders with the values shown on the App Service Overview page.

### Linux App Service note

Linux App Service needs a web server process to serve static files. If the existing app already uses Node, Python, PHP, or .NET, place these files in that app's public/static web root. Otherwise, a Windows App Service or Azure Static Web Apps is the simplest home for this dependency-free package.

## Files

- `index.html` — memorial content and metadata
- `styles.css` — responsive design and candle animation
- `script.js` — subtle randomized candle timing
- `assets/joseph-hayden.webp` — portrait
- `web.config` — Windows Azure App Service/IIS configuration
