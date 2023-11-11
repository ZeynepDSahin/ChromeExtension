# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
# from openai import OpenAI
from openai import OpenAI

client = OpenAI(api_key='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')

# client = OpenAI(api_key='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')



app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/generate-description', methods=['POST'])
def generate_description():
    data = request.get_json()
    product_name = data['productName']
    short_description = data['shortDescription']

    response = client.chat.completions.create(model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"{product_name}. {short_description}."}
    ])

    return jsonify({'description': response.choices[0].message.content})
                    # response['choices'][0]['message']['content']})
# response['choices'][0]['message']['content']

if __name__ == '__main__':
    app.run(port=5000)