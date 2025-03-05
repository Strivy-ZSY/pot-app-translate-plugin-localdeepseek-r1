async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    
    let { model } = config;
    
    // 设置默认请求路径
    const requestPath = "http://localhost:11434/v1/chat/completions";
    
    const headers = {
        'Content-Type': 'application/json'
    }
    
    const body = {
        model: model,  // 使用用户选择的模型
        messages: [
            {
                "role": "user",
                "content": `請用${to}翻譯以下詞句: \`${text}\``
            }
        ],
        temperature: 0.0,
        top_p: 0.1,
        top_k: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 250
    }
    
    let res = await fetch(requestPath, {
        method: 'POST',
        url: requestPath,
        headers: headers,
        body: {
            type: "Json",
            payload: body
        }
    });
    
    if (res.ok) {
        let result = res.data;
        let translatedText = result.choices[0].message.content.trim().replace(/^"|"$/g, '');
        translatedText = translatedText.split('</think>').pop().trim(); // 去掉 </think> 之前的内容
        return translatedText;
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}
