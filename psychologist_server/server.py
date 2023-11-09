from flask import Flask

app = Flask(__name__)

# Routes
@app.route("/test")
def test():
    return {"test": ["test1","test2","test3"]}

if __name__ == "__main__":
    app.run(port=8000, debug=True)