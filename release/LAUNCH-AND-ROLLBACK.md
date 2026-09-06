# Mojo Manor launch and rollback

Prepared by **Codex Astra 6**, 2026-09-06. Jake authorized the redesigned homepage and preservation of the previous homepage at `/old/`.

## Previous version preserved

- Previous production Git commit: `115c6579647b8f9d3f7dadff3d5d5027d93bebe9`.
- Intended remote backup tag: `pre-redesign-2026-09-06` at that commit. Verify that tag exists on the remote before launching.
- Complete local Git archive: `C:\Users\jcphi\OneDrive\Server and IP Optimization\ChatGPT\Website Upgrade\mojo-manor-prelaunch-115c657.zip`.
- `/old/index.html` contains the original homepage markup with root asset resolution, archive-specific section links and noindex. Original `styles.css`, `scripts.js` and medallion implementation remain available. Old navigation to shared subpages leads to their current versions; `/old/` is a homepage archive, while the Git backup preserves the whole original site.
- Archive analytics loading was removed to avoid mixing owner comparison visits with the new homepage. `/old/` is omitted from the sitemap and marked noindex. The public homepage remains canonical.

## Release method

Preserve the detailed review and launch branches. Squash the approved launch onto a production branch based on the current remote main so the entire release is one reversible commit. Push without force only after local validation passes and the backup tag is published. Record the final production commit and observed deployment result in the Brain handoff, rather than treating a successful Git push as a verified deployment.

Hosting is **Cloudflare Pages, project `mojo-manor`**. Prior project notes record main-branch automatic deployment. The repository's `wrangler.toml` configures the separate chat Worker and must not be deployed as the static website. On this Windows machine, Wrangler currently has no Cloudflare login; if Git does not deploy, use the established authenticated Pages owner/session to publish the committed site.

## Reverting after launch

1. Fetch the remote and inspect any changes made after launch. Do not discard another model's work.
2. For a full return to the previous site, run `git revert <single-production-release-commit>` in a clean branch and inspect the resulting diff. If later changes create conflicts, resolve them deliberately. Push the reviewed revert through the same production route. The production commit will be recorded in Brain.
3. For homepage-only rollback while retaining the redesigned subpages, restore `index.html` from `pre-redesign-2026-09-06` into a new change, inspect it, commit and publish. Its original shared CSS/JS assets are preserved. Do not overwrite unrelated files or force-push main.
4. Verify the live homepage, booking entry, original assets and key subpages after rollback. Cloudflare also supports restoring an earlier successful production deployment in its dashboard; record and reconcile that choice with Git to avoid a later automatic deployment undoing it.

## Validation scope

See `release/validation.json` and screenshots in this directory for responsive, image, schema and interaction checks. Local server responses intentionally carry noindex and do not emulate Cloudflare `_headers` or `_redirects`; deployment verification must check those separately.

The booking dialog preserves the existing Lodgify rental/configuration and includes a direct-checkout fallback. Automated checks reached a provider Cloudflare security challenge on the existing live site as well as the preview; no reservation/payment was submitted. Do not characterize a blocked automated API request as proof that real visitors cannot book.

Internal review/release/content/build-script paths have deployment exclusions and redirects. They are not linked in guest navigation. The local comparison at `http://127.0.0.1:4173/review/` remains available for owner review.
