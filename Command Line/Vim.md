## VIM Related Commands

- Insert Mode - `i`
- Normal Mode - `Esc`
- Command Mode - `:`
- Save and Exit - `:wq`  

**Note**

- `:x` - Exit. Writes the buffer to disk if it has been modified, otherwise quits Vim without writing the buffer.
- `:wq` - Write and quit. Writes the buffer to disk and then quits Vim.

```
So, which command should you use? It depends on your needs. If you want to make sure that the file is always up-to-date, even if you haven't made any changes, then you should use :wq. If you only want to write the file if it has been modified, then you should use :x.
```

**Here are some examples of how to use :wq and :x:**

- If you have made some changes to a file and you want to save them and quit Vim, you would use :wq.
- If you have not made any changes to a file and you want to quit Vim, you would use :x.
- If you want to write the buffer to disk and then keep working in Vim, you would use :w.

### Course For In Depth Learning

- https://www.openvim.com/