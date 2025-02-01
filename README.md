# Pot-App 本地deepseek-r1 翻译插件

仅支持本地ollama deepseek-r1系列模型，去除了模型思考过程

### 模型安装（根据自己的电脑配置安装相应版本，支持官方1.5b~671b）
Ollama模型网址：[deepseek-r1](https://ollama.com/library/deepseek-r1)
以1.5b为示例，确保您已安装Ollama后，在终端输入以下命令
```
ollama run deepseek-r1:1.5b
```

### 使用
安装插件后选取相应大小的模型，即可食用🥰

![image](https://github.com/user-attachments/assets/3f483984-871a-4d8b-adfd-c488da5b30c5)

### 补充

模型温度设置为1.3，同时去除思考过程的方式是删除`</think>`标签之前的字段
![code](https://github.com/user-attachments/assets/93052657-54e7-4ac4-abaf-17b26b7459b7)
![code](https://github.com/user-attachments/assets/54fbb065-de9c-40f6-9131-c3ec66170071)

### 支持
如有问题或建议，欢迎在GitHub提交issue反馈
