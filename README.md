# socket.io tester [![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](http://badge.fury.io/gh/boennemann%2Fbadges) [![Dependency Status](https://www.versioneye.com/user/projects/588f5a2f5715cf0034134062/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/588f5a2f5715cf0034134062) [![Code Climate](https://codeclimate.com/github/AppSaloon/socket.io-tester/badges/gpa.svg)](https://codeclimate.com/github/AppSaloon/socket.io-tester) [![Issue Count](https://codeclimate.com/github/AppSaloon/socket.io-tester/badges/issue_count.svg)](https://codeclimate.com/github/AppSaloon/socket.io-tester)
Socket.io tester lets you connect to a socket.io server and subscribe to a 
certain topic and/or lets you send socket messages to the server

---

##### Install node modules
`$ yarn install`

##### Build for development
`$ yarn run dev`

##### build app for electron
* build
`$ yarn run build`
* and run electron
`$ node_modules/.bin/electron .`

##### build asar file
`$ yarn run electron-build`

##### package all application versions for distribution (win, linux, macos)
`$ yarn run package`

---





## socket.io test server

start test server by running `node socketTest/index.js`

### events
* 'chat message': echoes mesages
* test: sends messages at specific interval

### namespace
* /asd
#### events in namespace
* test: sends messages at specific interval





