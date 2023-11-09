from flask import Flask, request

app = Flask(__name__)

# Routes
@app.route("/test")
def test():
    return {"test": ["test1","test2","test3"]}

@app.route("/submit", methods=["POST"]) 
def formSubmit():
    form_data = request.get_json()
    print(form_data)
    return 'Done', 201



if __name__ == "__main__":
    app.run(port=8000, debug=True)