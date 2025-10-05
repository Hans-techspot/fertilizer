@echo off 
REM Auto Git Add, Commit, Push Script 
set COMMIT_MSG="Auto commit - update" 
git add . 
git commit -m %%COMMIT_MSG%% 
git push 
pause
