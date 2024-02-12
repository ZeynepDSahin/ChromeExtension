# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
# testing git repo

# from openai import OpenAI
from openai import OpenAI

client = OpenAI(api_key='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')



app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
# CORS(app)


@app.route('/api/generate-description', methods=['POST'])
def generate_description():
    data = request.get_json()
    product_name = data['productName']
    product_image_url = data['imageUrl']
    print("Received data:", data)
    # short_description = data['shortDescription']
    # occasion = data['occasion']  # Get the occasion from the user's input

    # response = client.chat.completions.create(model="gpt-4",
    # messages=[
    #     {"role": "system", "content": "You are a helpful assistant."},
    #     {"role": "user", "content": f"{product_name}. {short_description}. {occasion}."}  # Added occasion to the message
    # ])

    response = client.chat.completions.create(
    # model="gpt-4-1106-preview",
    model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": f"Write a product description for the product using the product name and the product in the image. The product name: {product_name}."},
                # {"type": "text", "text": "Write a product description for the product in the image."},
                
                {
                    "type": "image_url",
                    "image_url": {
                        "url": product_image_url,
                    },
                },
            ],
        }
    ],
    max_tokens=500,
    )

    return jsonify({'description': response.choices[0].message.content})

if __name__ == '__main__':
    app.run(port=5000)