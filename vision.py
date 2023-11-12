from openai import OpenAI

# client = OpenAI()

client = OpenAI(api_key='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')

response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Write a product description for the product in the image."},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://m.media-amazon.com/images/I/21vAoa2HwOL.jpg",
                    },
                },
            ],
        }
    ],
    max_tokens=300,
)

print(response.choices[0])