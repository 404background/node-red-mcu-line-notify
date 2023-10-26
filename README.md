# node-red-mcu-line-notify
## OverView
Node-RED MCU pluginに追加できる、LINE Notifyのノードです。

## How to install
1. Node-RED MCUの環境を構築します。  
2. リポジトリをクローンします。  
```
$ cd ファイルのパス
$ git clone https://github.com/404background/node-red-mcu-line-notify
```
3. npmでパッケージをインストールし、node_types.jsonを編集します。  
```
$ cd .node-red
$ sudo npm install ファイルのパス
$ cd .node-red/node_modules/@ralphwetzel/node-red-mcu-plugin/node-red-mcu
$ sudo nano node_types.json
```
"lower-case"を参考に、  
```
"mcu_linenotify": "manifest.jsonのパス",  
```
を追加します。  
4. Node-REDを再起動します。  
```
$ sudo systemctl restart nodered.service
```

## Test Case
http requestノードにはCA証明書を設定してください。  
![20231025_10h54m10s_grim](https://github.com/404background/node-red-mcu-line-notify/assets/112294959/df00b401-e273-413b-a9c4-ff485a00df57)  
LINE Notifyのアクセストークンを発行し、ノードに設定してください。  
https://notify-bot.line.me/ja/  
![20231025_23h07m22s_grim](https://github.com/404background/node-red-mcu-line-notify/assets/112294959/ed218e86-c289-48e5-8b1f-0a0efd4514a5)

## LINK
Node-RED-MCU：
https://github.com/phoddie/node-red-mcu  
Moddable SDK：
https://github.com/Moddable-OpenSource/moddable  
Node-RED「はじめてのノード開発」：
https://nodered.jp/docs/creating-nodes/first-node  
LINE Notify API Document：
https://notify-bot.line.me/doc/ja/  
