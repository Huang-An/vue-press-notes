lerna 发布失败尝试使用一下命令

git config --global http.sslVerify "false"
git config --global --unset http.proxy

如果发布失败，git 在本地已经打上 tag 时，请回退版本，并删除 tag

——————————————————————————————————————————————————————————————————————————————————————————————————————————————

webpack 常见 loader

1. css-loader
2. style-loader
3. csv-loader
4. xml-loader

webpack 常见 plugin

1. html-webpack-plugin

——————————————————————————————————————————————————————————————————————————————————————————————————————————————

chalk：终端字符样式打印。
semver：语义版本器，解析版本号。
slash：将 Windows 反斜杠路径转换为斜杠路径：foo\\bar ➔ foo/bar
minimist: 终端参数选项解析
commander：node 命令行界面程序
inquirer：常见的交互式命令行用户界面
validate-npm-package-name：校验package名称
