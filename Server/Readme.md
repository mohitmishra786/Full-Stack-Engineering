## What is Server?

- Anything can be a server literally anything my phone, my computer.
- Reasoning behind previous statement is simple as Server is simply that which responds to requests, or we can say listens to input.
- Servers needs to be available 100% of time.

## Why can't we just run the simpleServer.js? // Why can't we just build an application based off my localhost running a server?

- **Availability** - It's not going to run forever. OS will need an update or i need to close my laptop. So, maybe our laptop aren't the best server.

- **Usability** - It is good for me to work as a single developer but what about YOU, How will you work on this? How will you run this server?

- **Scaling** - How will we scale this? Buying more laptops is not a good solution. Until you are too much rich

## Upgrading and Restarting

- **SSH Into  your server**
- **Update Software**
    - `apt update`
    - `apt upgrade`
- **Restart your Server**
    - `shutdown now -r`

- **root** - highest permission level. Allow unrestricted access to OS.
- **sudo** - super user do. Allows to run commands programs as root.


**Note** - First thing that we do after creating any software is that we create a new user. That new user should not be `root` but should have the access of `root`. We call this root access super user. `sudo` will allow to run any command as root but by default they will never ever be able to run as `root`.

## Creating and Updating Users

- **Create a new user** - `adduser <your_username>`
- **Add user to `sudo` group** - `usermod -aG sudo <your_username>`
- **Switch User** - `su <your_username>`
- **Check sudo access** - `sudo cat /var/log/auth.log`

## Enable Login as New User

- **Create authorized_key file** - `~/.ssh/authorized_keys`
- **Paste your public key**
- **Exit**
- **Login with new user** - `ssh <your_username>@<your_IP>`

## For taking the Public Key

- **Exit from New User and then Exit Root**
- **Then do `cd ~`for going back to home directory** 
- **Then do `cd ~./ssh` and there will be your public key with `name.pub`**
- **Just use `cat name.pub` and copy it and get back to New User and paste it inside authorized_keys file**

***oO Jump back to Root*** - `sudo -i`

