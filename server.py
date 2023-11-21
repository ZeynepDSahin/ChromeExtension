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
    # short_description = data['shortDescription']
    # occasion = data['occasion']  # Get the occasion from the user's input

    # response = client.chat.completions.create(model="gpt-4",
    # messages=[
    #     {"role": "system", "content": "You are a helpful assistant."},
    #     {"role": "user", "content": f"{product_name}. {short_description}. {occasion}."}  # Added occasion to the message
    # ])

    response = client.chat.completions.create(
    model="gpt-4-1106-preview",
    # model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": f"Write a product description for the product in the image. The product name: {product_name}."},
                # {"type": "text", "text": "Write a product description for the product in the image."},
                
                # {
                #     "type": "image_url",
                #     "image_url": {
                #         "url": "https://m.media-amazon.com/images/I/21vAoa2HwOL.jpg",
                #     },
                # },
            ],
        }
    ],
    max_tokens=500,
    )

    return jsonify({'description': response.choices[0].message.content})

if __name__ == '__main__':
    app.run(port=5000)