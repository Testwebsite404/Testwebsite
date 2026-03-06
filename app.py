from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/seite1')
def seite1():
    return render_template('seite1.html')

@app.route('/seite2')
def seite2():
    return render_template('seite2.html')

@app.route('/seite3')
def seite3():
    return render_template('seite3.html')

@app.route('/seite4')
def seite4():
    return render_template('seite4.html')

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
