from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/funcion', methods=['GET'])
def funcion():
    # Aquí puedes agregar la lógica que quieras
    return jsonify({"mensaje": "Valor desde Python"})

if __name__ == '__main__':
    app.run(debug=True)
