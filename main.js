async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    
    let { apiKey, model = "deepseek-r1:8b" } = config;
    
    // 设置默认请求路径
    const requestPath = "http://localhost:11434/v1/chat/completions";
    
    const headers = {
        'Content-Type': 'application/json'
    }
    
    const body = {
        model: model,  // 使用用户选择的模型
        messages: [
            {
                "role": "system",
                "content": "You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it! Output only the translation and nothing else.Also, please remove unnecessary punctuation marks.Do not reveal your thought process and redundant symbols."
            },
            {
                "role": "user",
                "content": `Translate into ${to}:\n${text}`
            }
        ],
        temperature: 1.3,
        top_p: 0.99,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 2000
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
