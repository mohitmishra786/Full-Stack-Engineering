# In Case We Got Stuck

- **Stop the running process** - `pkill <process>`
- **Test your ssh connection** - `ssh -vT git@github.com`
- **Save a readonly file in vim** - `:w !sudo tee %`
- **Save a file in vim** - `:w`
- **View a permissions as numbers** - `stat -c %a <file_name>`