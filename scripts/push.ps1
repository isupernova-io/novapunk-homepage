# Pushes the current branch to origin after a few checks, then confirms the remote matches.
# Usage (PowerShell, from anywhere):  C:\dev\homepage\scripts\push.ps1
# (copy of C:\dev\nutriscan\scripts\push.ps1; it pushes the repository it sits in)
#        add -DryRun to see what would be pushed without pushing.
# Never force pushes. Uses the git credentials already set up on this PC.
param([switch]$DryRun)

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -eq "HEAD") { Write-Host "Not on a branch (detached HEAD). Nothing pushed." -ForegroundColor Red; exit 1 }

git fetch --quiet origin
if ($LASTEXITCODE -ne 0) { Write-Host "Could not reach origin. Nothing pushed." -ForegroundColor Red; exit 1 }

$dirty = git status --porcelain
if ($dirty) {
    Write-Host "Uncommitted changes (they are NOT pushed):" -ForegroundColor Yellow
    $dirty | ForEach-Object { Write-Host "  $_" }
}

$upstream = "origin/$branch"
git rev-parse --verify --quiet $upstream > $null
$hasUpstream = $LASTEXITCODE -eq 0

if ($hasUpstream) {
    $behind = [int](git rev-list --count "HEAD..$upstream")
    if ($behind -gt 0) {
        Write-Host "origin has $behind commit(s) you do not have. Run git pull first. Nothing pushed." -ForegroundColor Red
        exit 1
    }
    $ahead = @(git log --oneline "$upstream..HEAD")
} else {
    $ahead = @(git log --oneline -5 HEAD)
    Write-Host "Branch $branch is new on origin." -ForegroundColor Yellow
}

if ($ahead.Count -eq 0) { Write-Host "$branch is already up to date with origin. Nothing to push." -ForegroundColor Green; exit 0 }

Write-Host "Commits to push on ${branch}:" -ForegroundColor Cyan
$ahead | ForEach-Object { Write-Host "  $_" }

if ($DryRun) { Write-Host "Dry run: nothing pushed." -ForegroundColor Yellow; exit 0 }

if ($hasUpstream) { git push origin $branch } else { git push -u origin $branch }
if ($LASTEXITCODE -ne 0) { Write-Host "Push failed." -ForegroundColor Red; exit 1 }

git fetch --quiet origin
if ((git rev-parse HEAD) -eq (git rev-parse $upstream)) {
    Write-Host "Done: origin/$branch now matches your local $branch ($(git rev-parse --short HEAD))." -ForegroundColor Green
} else {
    Write-Host "Pushed, but origin/$branch does not match HEAD. Check with git status." -ForegroundColor Yellow
}
