from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy data to simulate server processing
processed_data = []

# Routes
@app.route("/test")
def test():
    return {"test": ["test1","test2","test3"]}

@app.route("/submit", methods=["POST"]) 
def formSubmit():
    global processed_data
    form_data = request.get_json()
    print("Received form data:", form_data)

    # Process the form data 
    # input form data -> process (run through ML model) -> processed data (output of ML model)
    # Right now there is no processing, just returning the data
    processed_data = form_data

    return jsonify(processed_data), 201

@app.route("/processed_data")
def getProcessedData():
    return jsonify(processed_data)

if __name__ == "__main__":
    app.run(port=8000, debug=True)